import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class RegisterUserComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            firstName: "",
            lastName: "",
            prn: "",
            dob: "",
            email: "",
            mobNo: "",
            address: "",
            gitLink: "",
            linkedIn: "",
            mark10th: "",
            mark12th: "",
            markDiploma: "",
            markGrad: "",
            markPostGrad : "",
            markCCEE : "",
            passingYear10th : "",
            passingYear12th : "",
            passingYearDiploma : "",
            passingYearGrad: "",
            passingYearPostGrad:"",

            year: "",
          batch: "",
          course: "",

          userName:"",
          password:"",
          confirmPassword:"",
          role:"",

          studentId:'',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let course={year:this.state.year, batch:this.state.batch, course:this.state.course}
        let student = {firstName: this.state.firstName,lastName:this.state.lastName, prn:this .state.prn,
            dob:this.state.dob,email:this.state.email, mobNo:this.state.mobNo, address:this.state.address,
            gitLink:this.state.gitLink,linkedIn:this.state.linkedIn,mark10th:this.state.mark10th,
            mark12th:this.state.mark12th,markDiploma:this.state.markDiploma,markGrad:this.state.markGrad,
            markPostGrad:this.state.markPostGrad, markCCEE:this.state.markCCEE,
            passingYear10th:this.state.passingYear10th, passingYear12th:this.state.passingYear12th,
            passingYearDiploma:this.state.passingYearDiploma, passingYearGrad:this.state.passingYearGrad, passingYearPostGrad:this.state.passingYearPostGrad};
        ApiService.addUser(student, course)
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
            <div>
                <h2 className="text-center">Register</h2>
                <form>
                <fieldset>
                    <legend>Basic Details!</legend>
                    <div className="form-group">
                    <label>First Name:</label> First Name:
                    <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Last Name:</label> Last Name:
                    <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Date of Birth:</label> Date of Birth:
                    <input type='date' name="dob" className="form-control" value={this.state.dob} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>PRN:</label> PRN:
                    <input type='number' placeholder='prn' name="prn" className="form-control" value={this.state.prn} onChange={this.onChange}/>
                </div>

                
                </fieldset> 

                <fieldset>
                    <legend>Academic Details!</legend>

                    <div className="form-group">
                    <label>Class 10th marks:</label> Class 10th marks:
                    <input type='number' placeholder='10th marks' name="mark10th" className="form-control" value={this.state.mark10th} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Class 10th passing year:</label> Class 10th passing year:
                    <input type='number' placeholder='year of class 10th' name="passingYear10th" className="form-control" value={this.state.passingYear10th} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Class 12th marks:</label> Class 12th marks:
                    <input type='number' placeholder='12th marks' name="mark12th" className="form-control" value={this.state.mark12th} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Class 12th passing year:</label> Class 12th passing year:
                    <input type='number' placeholder='year of class 12th' name="passingYear12th" className="form-control" value={this.state.passingYear12th} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Diploma marks(if any):</label> Diploma marks(if any):
                    <input type='number' placeholder='diploma marks' name="markDiploma" className="form-control" value={this.state.markDiploma} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Diploma passing year:</label> Diploma passing year:
                    <input type='number' placeholder='year of passing diploma' name="passingYearDiploma" className="form-control" value={this.state.passingYearDiploma} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Graduation marks:</label> Graduation marks:
                    <input type='number' placeholder='graduation marks' name="markGrad" className="form-control" value={this.state.markGrad} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Graduation Year:</label> Graduation Year:
                    <input type='number' placeholder='year of graduation' name="passingYearGrad" className="form-control" value={this.state.passingYearGrad} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Post Graduation marks:</label>
                    <input type='number' placeholder='post graduation marks' name="markPostGrad" className="form-control" value={this.state.markPostGrad} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Post Graduation Year:</label> Post Graduation marks:
                    <input type='number' placeholder='year of post-graduation' name="passingYearPostGrad" className="form-control" value={this.state.passingYearPostGrad} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>CCEE marks:</label> CCEE marks:
                    <input type='number' placeholder='CCEE marks' name="markCCEE" className="form-control" value={this.state.markCCEE} onChange={this.onChange}/>
                </div>

                </fieldset>    

                <fieldset>
                    <legend>Contact Details!</legend>

                    <div className="form-group">
                    <label>Email:</label> Email:
                    <input type='email' placeholder='email address' name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Mobile Number:</label> Mobile Number:
                    <input type='number' placeholder='mobile number' name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Address:</label> Address:
                    <input type='text' placeholder='Address' name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Git profile link:</label> Git profile link:
                    <input type='text' placeholder='git-link' name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>LinkedIn profile Link:</label> LinkedIn profile Link:
                    <input type='text' placeholder='LinkedIn link' name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                </div>
                </fieldset>        

                

                

                

                <button className="btn btn-success" onClick={this.saveUser}>Register!</button>
            </form>
    </div>
        );
    }
}

export default RegisterUserComponent;