import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (status === "success") clearField(); 
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email && 
        email.indexOf("@") > -1 &&
        onValidated ({
            EMAIL: email
        })
    }

    const clearField = () => {
        setEmail("");
    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <Row>
                    <Col lg={12} md={12} xl={5}>
                        <h3>Service Newsletter<br></br> & Connection to new challenges.</h3>
                        {status === "sending" && <Alert>Sending...</Alert>}
                        {status === "error" && <Alert variant="danger">{message}</Alert>}
                        {status === "success" && <Alert variant="success">{message}</Alert>}             
                    </Col>
                    <Col md={12} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}