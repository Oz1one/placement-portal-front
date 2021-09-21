import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import './AddUserComponent.css'

class BasicDetailComponent extends Component{
    
    
    constructor(props){
        super(props);
        this.state ={
            firstName: '',
            lastName: '',
            prn:'',
            dob:'',

            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {firstName: this.state.firstName, lastName: this.state.lastName, prn:this.state.prn, dob:this.state.dob};
        ApiService.addUser(user)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            }).catch( err=>{
              //  console.error(err);
                console.error("in err ",err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);             
                this.props.history.push('/users');
            })
            
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });


        render() {
            return(
                <div className='signupScreen'>
                    <form>
                    <h1>Basic Details</h1>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" placeholder="first name" name="first_name" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" placeholder="last name" name="last_name" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Prn:</label>
                        <input type="text" placeholder="prn" name="prn" className="form-control" value={this.state.prn} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Date of birth:</label>
                        <input type="date" placeholder="Date of birth" name="dob" className="form-control" value={this.state.dob} onChange={this.onChange}/>
                    </div>
                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                    
                </form>
        </div>
            );
        }


}

export default BasicDetailComponent;