import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const dispatch = useDispatch();
    const { contactList } = useSelector((state) => state);

    const addContact = (e) => {
        e.preventDefault();
        if (name.trim() === "") {
            alert("이름을 입력해주세요.");
            return;
        }
        if (phoneNumber.trim() === "") {
            alert("전화번호를 입력해주세요.");
            return;
        }
        const existingContact = contactList.find(
            (item) => item.phoneNumber === phoneNumber
        );
        if (existingContact) {
            alert("전화번호가 존재합니다. \n다시 입력해주세요!");
        } else {
            dispatch({
                type: "ADD_CONTACT",
                payload: { name, phoneNumber },
            });

            setName("");
            setPhoneNumber("");
        }
    };

    return (
        <Form onSubmit={addContact} className="contact-form">
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>이름</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="이름을 입력해주세요"
                    value={name} // Controlled input value
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContact">
                <Form.Label>전화번호</Form.Label>
                <Form.Control
                    type="text" // Using text for phoneNumber for more flexibility
                    placeholder="전화번호를 입력해주세요"
                    value={phoneNumber} // Controlled input value
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                추가
            </Button>
        </Form>
    );
};

export default ContactForm;
