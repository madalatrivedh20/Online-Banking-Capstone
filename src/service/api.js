import { createTransactionObject } from "./util";

export const getCurrentUser = async (userId) => {
  const response = await (await fetch(`http://localhost:3000/users/${userId}?_embed=transactions`)).json();
  return response;
};

export const getAllUsers = async () => {
  const response = await (await fetch(`http://localhost:3000/users`)).json();
  const allUsers = response.map(({ id, accno, acctype, firstname, lastname }) => ({ id, accno, acctype, firstname, lastname }));
  return allUsers;
};

export const getATIMPIN = async (userId) => {
  const response = await (await fetch(`http://localhost:3000/ATMPINs?userId=${userId}`)).json();
  return response[0];
};

export const newATMPIN = async (pin, accountNumber, userId) => {
  const response = await fetch(`http://localhost:3000/ATMPINs`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ pin, accountNumber, userId }),
    });
  return response;
};

export const changeATMPIN = async (userId, oldPin, newPin) => {
  const currentPin = await (await fetch(`http://localhost:3000/ATMPINs?userId=${userId}`)).json();

  if (oldPin !== currentPin[0].pin) {
    return { type: "error", render: "Incorrect old PIN!" };
  }

  const response = await fetch(`http://localhost:3000/ATMPINs/${currentPin.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...currentPin, pin: newPin }),
    });

  return { type: "success", render: "PIN changed successfully!" };;
};

export const transferFunds = async (data) => {
  const debitTransaction = createTransactionObject(data.fromUserId, data.fromAccNo, data.accountType, "Debit", data.amount);
  const creditTransaction = createTransactionObject(data.beneficiary, data.beneficiaryAccNo, data.beneficiaryAccType, "Credit", data.amount);

  const debitUser = await (await fetch(`http://localhost:3000/users/${data.fromUserId}`)).json();

  if (Number(debitUser.balance) < Number(data.amount)) {
    return { type: "error", render: "Insufficient Balance!" };
  }

  await fetch(`http://localhost:3000/users/${data.fromUserId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...debitUser, balance: (Number(debitUser.balance) - Number(data.amount)).toString() })
    });

  const creditUser = await (await fetch(`http://localhost:3000/users/${data.beneficiary}`)).json();

  await fetch(`http://localhost:3000/users/${data.beneficiary}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...creditUser, balance: (Number(creditUser.balance) + Number(data.amount)).toString() })
    });

  const debitResponse = await fetch(`http://localhost:3000/transactions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(debitTransaction),
    });

  const creditResponse = await fetch(`http://localhost:3000/transactions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(creditTransaction),
    });

  return { type: "success", render: "Funds transferred successfully!" };
};

export const createFD = async (data) => {
  const debitUser = await (await fetch(`http://localhost:3000/users/${data.userId}`)).json();

  if (Number(debitUser.balance) < Number(data.amount)) {
    return { type: "error", render: "Insufficient Balance!" };
  }

  await fetch(`http://localhost:3000/users/${data.userId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...debitUser, balance: (Number(debitUser.balance) - Number(data.amount)).toString() })
    });

  const FDTransaction = createTransactionObject(data.userId, data.accno, data.acctype, "Fixed Deposit", data.amount);

  const debitResponse = await fetch(`http://localhost:3000/transactions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(FDTransaction),
    });


  return { type: "success", render: "FD Created Successfully!" };
};