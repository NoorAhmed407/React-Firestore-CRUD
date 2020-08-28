import React, {Component} from 'react';
import firebase from './../Firebase';


class Login extends Component {
   

    state = {
        email: "",
        password: ""
    };

    login = (e) =>{
        e.preventDefault();
        console.log("Hello")
        let {email,password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(u=>{
            console.log("UserLogged in");
            this.props.history.push('/home');
        })
        .catch(err=>{
            console.log("error occured " + err.toString())
        });            
    }

    signUp = (e) =>{
        e.preventDefault()
        console.log("Hello")
        let {email,password} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(u=>{
            console.log("User Signed Up");
            alert(`Signed Up with email ${email} Successfull`)
            this.props.history.push('/home');
        })
        .catch(err=>{
            console.log("error occured " + err.toString())
        });     
    }

handleChange = (event) =>{
    this.setState({[event.target.name]: event.target.value});
    // console.log(this.state);
}


render(){
    return(
        <div className="container">
            <h3 className="my-5">Login here</h3>
            <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" 
                    className="form-control"
                    name="email"
                    onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                    name="password"
                    className="form-control"
                    onChange={this.handleChange}
                    />
                </div>
                <button type="submit" 
                className="btn btn-primary m-3"
                onClick={this.login}
                >Login</button>

                <button type="submit" 
                className="btn btn-success"
                onClick={this.signUp}
                >Sign Up</button>
            </form> 
        </div>
    );
}
}

export default Login;