//Utility to create a new Transaction object and return it
export const createTransactionObject = (userId, accountNumber, accountType, transactionType, amount) => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  return { userId, accountNumber, accountType, transactionType, amount, transactionDate: `${dd}/${mm}${yyyy}` };
};

//Utility to generate a random pin
export const genRandomPin = () => {
  const msgSpace = '0123456789';
  let randomPin = "";

  for (let i = 0; i < 4; i++) {
    randomPin += msgSpace[Math.floor(Math.random() * 10)];
  }

  return randomPin;
};