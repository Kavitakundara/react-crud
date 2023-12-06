import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import '../index.css';
import axios from 'axios';

function Read() {
    const [data, setData] = useState([]);

    function getdata() {
        axios.get('https://654478e95a0b4b04436c67b2.mockapi.io/crud-operation')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function handelDelete(id) {
        axios.delete(
            `https://654478e95a0b4b04436c67b2.mockapi.io/crud-operation/${id}`
        ).then(() => {
            getdata()
        })
    }

    const setlocalStorage = (id, name, email, password) => {
        localStorage.setItem("Id", id);
        localStorage.setItem("Name", name);
        localStorage.setItem("Email", email);
        localStorage.setItem("Password", password);
    }


    useEffect(() => {
        getdata();
    }, []);

    return (
        <>
            <h3>Read your data from here~~~</h3>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th colSpan='2'>Action</th>
                    </tr>
                </thead>
                {data.map((key) => {
                    return (
                        <>
                            <tbody>
                                <tr key={key.id}>
                                    <td>{key.id}</td>
                                    <td>{key.Name}</td>
                                    <td>{key.Email}</td>
                                    <td>{key.Password}</td>
                                    <td>
                                        <Link to="/update">
                                            <Button variant="success" onClick={() => setlocalStorage(key.id, key.Name, key.Email, key.Password)}>Edit</Button>

                                        </Link>
                                    </td>
                                    <td><Button variant="danger" onClick={() => handelDelete(key.id)}>Delete</Button></td>
                                </tr>
                            </tbody>
                        </>
                    );
                })}
            </Table>
        </>
    );
}

export default Read;
