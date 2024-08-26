import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

function App() {
    return (
        <div>
            <h1 className="title">연락처</h1>
            <Container>
                <Row>
                    <Col>
                        <ContactForm />
                    </Col>
                    <Col>
                    <ContactList/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
