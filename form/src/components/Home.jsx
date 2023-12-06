import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import '../index.css';

function Home(props) {

    const [textchange, setname] = useState("change the text!!");
    const [invalue, setvalue] = useState(0);
    const [devalue, setdevalue] = useState(0);

    const [values, setnames] = useState({ firstname: ' ', lastname: ' ' })


    const valuechanged = () => {
        setname("I am changed!!")
    }

    const increment = () => {
        setvalue(invalue + 1);
    }

    const decrement = () => {
        setdevalue(devalue - 1);
    }

    useEffect(() => {
        console.log("Printing value here !!");
    }, [])

    const table = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

    const tableValue = table.map((number) => { return <li>{number}</li> });

    return <>

        <h1>{textchange}</h1>
        <button onClick={valuechanged}>See the magic</button><br />
        <button onClick={increment}>Increment{invalue}</button><br />
        <button onClick={decrement}>Decrement{devalue}</button>

        <Form.Control type="text" value={values.firstname} onChange={e => { setnames({ firstname: e.target.value }) }} />
        {/* <Form.Control type="text" placeholder="Enter Last Name" /> */}


        <h2>This is my first object prop</h2>
        <ul>
            <li>{props.prop1}</li>
            <li>{props.prop2}</li>
            <li>{props.prop3}</li>
            <li>{tableValue}</li>
        </ul>

    </>
}

export default Home;