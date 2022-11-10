
//Footer component that appears at the end of the page

import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter position="fixed" color="blue" className="footer">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="12">
                        <h1 className="title">VERTEX BANK GROUP</h1>
                        <h3>
                            The bank where the customer comes first
                        </h3>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBFooter>
    );
};

export default Footer;