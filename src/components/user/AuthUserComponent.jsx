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
        // prevent the default action
        e.preventDefault();
        // send the login request
        let cred= { userName : this.state.userName, password : this.state.password  };
        ApiService.loginUser(cred).then((resp)=>{
            // got the user
            console.log("logged in user id is "+resp.data.id);
            // set session storage
            sessionStorage.setItem("studentid",resp.data.id);

            //fetch photo

            ApiService.fetchPhoto(resp.data.id).then((resp1)=>{

                console.log("found photo id : "+resp1.data.id);
                resp.data.photo=resp1.data;
                
            }).catch((err)=>{

                console.log("err in finding photo is : "+err);
                resp.data.photo=null;

            }).finally(()=>{
                console.log("finnaly push if photo found or not but logged in ");

                this.props.history.push({
                    pathname:"/profile",
                    state : {student : resp.data}
                });
                window.location.reload();

            });

        }).catch((err)=>{
            console.log("cannot log in err: "+err);
            this.props.history.push("/sign-in");
        });

    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
    
        sendToRegister(){
            
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