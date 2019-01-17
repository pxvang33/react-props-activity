import React, {Component} from 'react';

class CurrentTotal extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentTotal: this.props.count,
        }
    }
    render() {
        return (
            <div>
                <p>Total: {this.props.count}</p>
                <button>Save</button>
            </div>
        ); // end return
    } // end render

} // end class

export default CurrentTotal;