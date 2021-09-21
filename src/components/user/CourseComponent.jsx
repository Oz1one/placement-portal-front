import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import './AddUserComponent.css'

class CourseComponent extends Component{
    
    
    constructor(props){
        super(props);
        this.state ={
            courseName: '',
            batch: '',
            year:'',

            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {courseName: this.state.courseName, batch: this.state.batch, year:this.state.year};
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
                    <h1>Course Details</h1>
                    <div className="form-group">
                        <label>Course Name:</label>
                        <input type="text" placeholder="course name" name="course_name" className="form-control" value={this.state.courseName} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Batch:</label>
                        <select name='batch' value={this.state.batch} onChange={this.onChange}>
                            <option value='jan'>January</option>
                            <option value='july'>July</option>
                           
                        </select>
                        
                    </div>
                    <div className="form-group">
                        <label>Year:</label>
                        <input type="text" placeholder="year" name="year" className="form-control" value={this.state.year} onChange={this.onChange}/>
                    </div>
                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                    
                </form>
        </div>
            );
        }


}

export default CourseComponent;