import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import './AddUserComponent.css'

class AuthUserComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            userName: '',
            password: '',
            
            message: null
        }
        this.authStudent = this.authStudent.bind(this);
    }

    authStudent = (e) => {
        e.preventDefault();
        let user = {userName: this.state.userName, password: this.state.password};
        ApiService.addUser(user)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/student');
            }).catch( err=>{
              //  console.error(err);
                console.error("in err ",err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);             
                this.props.history.push('/sign-in');
            })
            
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
    
        sendToRegister(){
            window.localStorage.removeItem("userId");
            this.props.history.push('/register-user');
        }

    render() {
        return(
            <div className='signupScreen'>
                <form>
                <h1>Sign in!</h1>
                <div className="form-group">
                    <label>User Name:</label>
                    <input type="text" placeholder="userName" name="userName" className="form-control" value={this.state.userName} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                </div>
                
                <button className="btn btn-success" onClick={this.authStudent}>Sign In</button>
                <h4><span className="signupScreen_gray">Not a member? </span>
                <span className="signupScreen_link" onClick={() => this.sendToRegister()}>Register Now.</span>
                </h4>
            </form>
    </div>
        );
    }
}

export default AuthUserComponent;