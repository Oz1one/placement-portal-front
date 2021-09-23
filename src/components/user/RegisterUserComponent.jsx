import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
const year = [
    {
      label: "2019",
      value: "2019",
    },
    {
      label: "2020",
      value: "2020",
    },
    {
      label: "2021",
      value: "2021",
    },
    {
      label: "2022",
      value: "2022",
    },
  ];
 
  const course = [
    {
      label: "DAC",
      value: "DAC",
    },
    {
      label: "DBDA",
      value: "DBDA",
    },
    {
      label: "DESD",
      value: "DESD",
    },
    {
      label: "DITISS",
      value: "DITISS",
    },
    {
        label: "DAI",
        value: "DAI",
      },
      {
        label: "DVLSI",
        value: "DVLSI",
      },
      {
        label: "DMC",
        value: "DMC",
      },
       {
        label: "DASSD",
        value: "DASSD",
      },
      {
        label: "DGI",
        value: "DGI",
      },
      {
        label: "DRAT",
        value: "DRAT",
      },
  ];



  const batch = [
    {
      label: "jan",
      value: "jan",
    },
    {
      label: "july",
      value: "july",
    },
  ];

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
        this.saveStudent = this.saveStudent.bind(this);
    }

    saveStudent = (e) => {
        e.preventDefault();
        this.handleScroll();
        let course={year:this.state.year, batch:this.state.batch, course:this.state.course}
        let student = {firstName: this.state.firstName,lastName:this.state.lastName, prn:this.state.prn,
            dob:this.state.dob,email:this.state.email, mobNo:this.state.mobNo, address:this.state.address,
            gitLink:this.state.gitLink,linkedIn:this.state.linkedIn,mark10th:this.state.mark10th,
            mark12th:this.state.mark12th,markDiploma:this.state.markDiploma,markGrad:this.state.markGrad,
            markPostGrad:this.state.markPostGrad, markCCEE:this.state.markCCEE,
            passingYear10th:this.state.passingYear10th, passingYear12th:this.state.passingYear12th,
            passingYearDiploma:this.state.passingYearDiploma, passingYearGrad:this.state.passingYearGrad, passingYearPostGrad:this.state.passingYearPostGrad};
        ApiService.addStudent(student, course)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                this.setState({studentId: resp.data});
                this.setState({message : 'User added successfully.'});
            }).catch( err=>{
              //  console.error(err);
                console.error("in err ",err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);             
                
            })
            
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

     handleScroll() {
            window.scroll({
              top: document.body.offsetHeight,
              left: 0, 
              behavior: 'smooth',
            });
          }
        

    render() {
        return(
            <div>
                <h2 className="text-center">Register</h2>

                <div >
            <form >
              <div className='body-batch-details'>
              <fieldset className='batch-details'>
          <legend>Batch Details!</legend>
            <div className="select-container">
              <span>Year</span>
              <select value={this.state.year} onChange={this.onChange}>
                {year.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div className="select-container">
            <span>Batch</span>
              <select value={this.state.batch} onChange={this.onChange}>
                {batch.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div className="select-container">
            <span>Course</span>
              <select value={this.state.course} onChange={this.onChange}>
                {course.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            
            </fieldset>
            </div>            
            </form>
          </div>

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
                    <label>Post Graduation marks:</label> Post Graduation Marks:
                    <input type='number' placeholder='post graduation marks' name="markPostGrad" className="form-control" value={this.state.markPostGrad} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Post Graduation Year:</label> Post Graduation year:
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
                    <input type='email' placeholder='email address' name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Mobile Number:</label> Mobile Number:
                    <input type='number' placeholder='mobile number' name="mobNo" className="form-control" value={this.state.mobNo} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Address:</label> Address:
                    <input type='text' placeholder='Address' name="address" className="form-control" value={this.state.address} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Git profile link:</label> Git profile link:
                    <input type='text' placeholder='git-link' name="gitLink" className="form-control" value={this.state.gitLink} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>LinkedIn profile Link:</label> LinkedIn profile Link:
                    <input type='text' placeholder='LinkedIn link' name="linkedIn" className="form-control" value={this.state.linkedIn} onChange={this.onChange}/>
                </div>
                </fieldset>        

                

                

                

                <button href='#sec' className="btn btn-success" onClick={this.saveStudent} >Register to Continue!</button>
            </form>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<br/>
<br/>
<br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <form id="sec">
                <fieldset>
                    <legend>
                        Credential Details!
                    </legend>

                    <div className="form-group">
                    <label>User Name:</label>User Name:
                    <input type='text' placeholder='User name' name="userName" className="form-control" value={this.state.userName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Password:</label> Password:
                    <input type='password' name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Confirm password:</label> Confirm Password:
                    <input type='password' placeholder='password' name="confirmPassword" className="form-control" value={this.state.confirmPassword} onChange={this.onChange}/>
                </div>

                <button></button>
                </fieldset>
            </form>
    </div>
        );
    }
}

export default RegisterUserComponent;