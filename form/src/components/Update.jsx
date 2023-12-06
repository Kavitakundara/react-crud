import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

function Update() {
    const [userid, setId] = useState(0);
    const [userNm, setname] = useState('');
    const [usermail, setmail] = useState('');
    const [userpass, setpass] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("Id"));
        setname(localStorage.getItem("Name"));
        setmail(localStorage.getItem("Email"));
        setpass(localStorage.getItem("Password"));
    }, []);

    const handelUpdate = (e) => {
        e.preventDefault();
        axios.put(
            `https://654478e95a0b4b04436c67b2.mockapi.io/crud-operation/${userid}`,

            {
                Name: userNm,
                Email: usermail,
                Password: userpass,

            })
            .then(() => {
                navigate("/read")
            });
    };



    return (
        <div>
            <div className="container">
                <h3>Update your data ~~~~</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            value={userNm}
                            onChange={(e) => setname(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={usermail}
                            onChange={(e) => setmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="text"
                            placeholder="Password"
                            value={userpass}
                            onChange={(e) => setpass(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit"
                        onClick={handelUpdate}
                    >
                        Update
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Update;
