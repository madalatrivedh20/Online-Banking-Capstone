import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter color="blue" className="footer">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h1 className="title">VERTEX BANK GROUP</h1>
                        <h3>
                            The bank where the customer comes first
                        </h3>
                    </MDBCol>
                    <MDBCol md="6">
                        <h2 className="title">Important Links</h2>
                        <ul className="footer-ul">
                            <li className="list-unstyled">
                                <a href="/">Home</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/login">Login</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/newcheckbook">New chequebook</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/newfd">New FD</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
};

export default Footer;