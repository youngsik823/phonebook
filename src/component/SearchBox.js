import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const searchName = (e) => {
        e.preventDefault();
        dispatch({ type: "SEARCH_NAME", payload: { search } });
    };
    
    return (
        <Form className="search-form" onSubmit={searchName}>
            <Row>
                <Col lg={10}>
                    <Form.Control
                        type="text"
                        placeholder="이름을 입력해주세요"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Col>
                <Col lg={2}>
                    <Button type="submit">찾기</Button>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchBox;
