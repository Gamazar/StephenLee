import React from "react";
import PropTypes from 'prop-types'

export class Home extends React.Component 
{
    constructor(props) {
        super(); //Inherits react component
        //this.age = props.age; //Now you dont need to use this.props.age
        this.state = {
            age: props.age,
            status: 0,
            homeLink: "Changed Link"
        } //Sets our state
        setTimeout(() => {
            this.setStatus({
                status: 1
            });
        },3000)
    }
    onMakeOlder() {
       // this.age +=3; //Now referring to home class. Error produces.
        //You must have to tell React there is a State Change
        this.setState({
            age: this.state.age + 3
        }); //Allows you to change the state. Re-renders UI
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }
    // { ... } you can dynamically add. Has to be in 1 line. Even functions
    render() {
        let content = "";
        console.log(this.props);
        if(true) {
            content = <p>Hello!</p>;
        }

        return(
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>User Object = Name: {this.props.user.name}</p>
                <ul>
                    {this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
                </ul>
                {content}  
                <hr/>
                {this.props.children}
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
                <hr/>
                <button onClick={this.props.greet}className="btn btn-primary">Greet</button>
                <hr/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        );
    }
}
//Verify props. Lets React know about the props it is expecting to get.
Home.protoTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired,
    greet:PropTypes.func
};