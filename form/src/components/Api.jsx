import React, { Component } from 'react';
import axios from 'axios';

export class Api extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mydata: []
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                // Update the state with the API response data
                this.setState({ mydata: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                {this.state.mydata.map(item => (
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.mydata.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ))}
            </div>
        )
    }
}

export default Api;
