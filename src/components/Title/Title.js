import React, { Component } from 'react';
import './Title.css'



class Title extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: 'This is demo title',
            isInput: false
        };
    }

    editHandler (){
        this.setState({
            ...this.state,
            isInput: true
        })
    }

    inputChange(event){
        console.log(event.target.value);
    }


    render() {
        let output = null 
        if (this.state.isInput){
            output = (
                <div>
                    <input 
                    className="form-control" 
                    onChange={ (event) => this.inputChange(event)}
                    type="text" 
                    value={this.state.title}
                     />
                </div>
            )
        } else {
            output = (
                <div className="d-flex Title">
                    <h2 className="display-4">{ this.state.title }</h2>
                    <span onClick={ ()=>this.editHandler() }className="ml-auto edit-icon">
                        <i className="fas fa-pencil-alt"></i>
                    </span>
                </div>
            )
        }
        return (
            <div>
                { output }
            </div>
        )
    }
}

export default Title 