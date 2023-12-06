import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Creat() {

    const [nameData, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

    const header = { "Access-Control-Allow-Origin": "*" }

    const handelsubmit = (e) => {
        e.preventDefault();
        axios.post(
            'https://654478e95a0b4b04436c67b2.mockapi.io/crud-operation',

            {
                Name: nameData,
                Email: email,
                Password: pass,
            },

            { headers: header }
        )

            .then(() => {
                navigate('/read');
            })
    };

    return (
        <div>
            <div className="container">
                <h3>Creat your data from here~~</h3>
                <Form onSubmit={handelsubmit} >

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name"
                            onChange={(e) => setName(e.target.value)}
                        />

                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" placeholder="Password"
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>


                </Form>
            </div>
        </div>
    )
};

export default Creat