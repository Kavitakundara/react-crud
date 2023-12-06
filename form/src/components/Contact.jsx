import React, { Component } from 'react'

export class Contact extends Component {


    constructor() {
        super();

        this.state = {
            username: '',
            address: '',
            work: ''
        }
    }
    handelname = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handeladdress = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    handelwork = (event) => {
        this.setState({
            work: event.target.value
        })
    }

    handelbtn = (event) => {
        alert(`Name: ${this.state.username} Address:${this.state.address} Work: ${this.state.work} `);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handelbtn}>
                    <label>User name</label>
                    <input type="text" placeholder="Enter name" value={this.state.username} onChange={this.handelname} /><br />

                    <label>User Address</label>
                    <input type="text" placeholder="Enter name" value={this.state.address} onChange={this.handeladdress} /><br />

                    <label>User Work</label>
                    <input type="text" placeholder="Enter name" value={this.state.work} onChange={this.handelwork} /><br />

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Contact