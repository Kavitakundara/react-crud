import React from 'react';
import PropTypes from 'prop-types';



// class Cclass extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             text: "Change me by clicking the button !!",
//             username: this.props.username
//         };
//     }


//     changed() {
//         this.setState({
//             text: `Your text is changed!!`
//         })
//     }

//     render() {
//         const table = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 4];
//         return (
//             <div>
//                 <h1>{this.state.text}</h1>
//                 <h3>{this.props.username}</h3>
//                 <button onClick={() => { this.changed() }}>Click here !!</button>
//                 <ul>
//                     {
//                         table.map((table) => <li key={table}> {table}</li>)

//                     }
//                 </ul>
//             </div>
//         );
//     }
// }

class Cclass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // Change code below this line
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress)
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress)
    }
    // Change code above this line
    handleEnter() {
        this.setState((state) => ({
            message: state.message + 'You pressed the enter key! '
        }));
    }
    handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.handleEnter();
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
};

export default Cclass;