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
        let student = {};
        ApiService.loginUser(user)
            .then(resp=>{
                this.setState({message : 'User logged in successfully.'});
                console.log("fetched student details after login"+resp);
                console.log("fetch the photo now");
                window.sessionStorage.setItem('studentid', resp.data.id);
                student=resp.data;
                ApiService.fetchPhotoById(resp.data.id).then(resp1=>{
                    student.photo = resp1.data.photo;
                    console.log("photo received");

                });


                this.props.history.push({
                    pathname: '/profile',
                    
                    state: { student: student }
                    
                })
                window.location.reload();
                  console.log(this.props.history);
            }).catch( err=>{
              console.log("from catch error dummy add history :"+this.props.history);
                console.error("in err ",err.response);
                //err.response.data => DTO on the server side : ErrorResponse
                
                /**
                 * dummy data
                
                 this.setState({message : 'User added successfully.'});
                 window.sessionStorage.setItem('studentid', 1);
                 
                 this.props.history.push({
                     pathname: '/profile',
                     
                     state: { student: {
                        "firstName": "Rakesh",
                        "lastName": "Roshan",
                        "prn": 1234567890,
                        "dob": "1998-01-01",
                        "email": "rakesh@gmail.com",
                        "mobNo": 1234567890,
                        "address": "Pune",
                        "gitLink": "www.github.com/rakesh_roshan",
                        "linkedIn": "linkedin.com/rakesh_roshan",
                        "mark10th": 100,
                        "mark12th": 100,
                        "markDiploma": 100,
                        "markGrad": 100,
                        "markPostGrad" : 100,
                        "markCCEE" : 100,
                        "passingYear10th" : "2014-01-01",
                        "passingYear12th" : "2016-01-01",
                        "passingYearDiploma" : "2017-01-01",
                        "passingYearGrad" : "2018-01-01",
                        "passingYearPostGrad" : "2019-01-01"
                    } }
                     
                    })
                    window.location.reload();
                    */
                this.props.history.push('/sign-in');
            })
            
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