import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import { Row, Col, Button } from "react-bootstrap";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
    const [filterList, setFilterList] = useState([]);
    const { search, contactList } = useSelector((state) => state);
    useEffect(() => {
        if (search !== "") {
            const filter = contactList.filter((item) =>
                item.name.includes(search)
            );
            setFilterList(filter);
        } else {
            setFilterList(contactList);
        }
    }, [search, contactList]);
    return (
        <div>
            <SearchBox />
            찾은 인원: {filterList.length}
            {filterList?.map((item, index) => (
                <ContactItem item={item} key={index} />
            ))}
        </div>
    );
};

export default ContactList;
