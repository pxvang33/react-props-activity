import React, {Component} from 'react';

class EnterNumber extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                math: '',

        } // end this.state
    } // end constructor

    clickUp =() =>{
        console.log(this.state.math);
        this.props.addCount(this.state.math)

    } // end clickUp

    clickDown = () => {
        console.log('down button works');
        this.props.minusCount(this.state.math)
    } // end clickDown

    numberChange = (event) => {
        this.setState({
            math: event.target.value,
        })
    } // end numberChange

    render(){
        return(
            <div>
                <button onClick={this.clickUp}>UP</button>
                <input onChange={this.numberChange} placeholder="Enter a Number"></input>
                <button onClick={this.clickDown}>DOWN</button>
            </div>
        ); // end return
    } // end render
} // end class

export default EnterNumber;