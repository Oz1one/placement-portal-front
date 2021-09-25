import React, { Component, useState } from 'react'
import ApiService from "../../service/ApiService";

const companies = [
    {
      label: "TCS",
      value: "TCS",
    },
    {
      label: "INFOSYS",
      value: "INFOSYS",
    }
  ];

class AddPlacementComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
          cid:"",
          round:"",
          isSelected:"",
          companyName:'',
            message: null
        }
        this.savePlacememtDetails = this.savePlacememtDetails.bind(this);
        
    }

    savePlacememtDetails=(e)=>{
      e.preventDefault();
      let placementDetails={cid:this.state.cid, round:this.state.round, isSelected:this.state.isSelected, companyName:this.state.companyName }
      ApiService.addPlcementdetail(placementDetails).then(resp=>{
        console.log(resp.data);
        this.setState({message : 'Placement Detail added successfully.'});
      }).catch(err=>{
        console.error("in err ",err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);           
      })
      
    }

    

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    

          

    render() {
        return(
            <div>
                <h2 className="text-center">Add Placement Details!</h2>

                <div >
            <form >
              <div className='body-batch-details'>
              <fieldset className='batch-details'>

            <div className="select-container">
              <span>Company</span>
              <select name='companies' value={this.state.companyName} onChange={this.onChange}>
                {companies.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
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
                    <label>Class 10th passing date:</label> Class 10th passing date:
                    <input type='date' placeholder='year of class 10th' name="passingYear10th" className="form-control" value={this.state.passingYear10th} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Class 12th marks:</label> Class 12th marks:
                    <input type='number' placeholder='12th marks' name="mark12th" className="form-control" value={this.state.mark12th} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Class 12th passing date:</label> Class 12th passing date:
                    <input type='date' placeholder='year of class 12th' name="passingYear12th" className="form-control" value={this.state.passingYear12th} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Diploma marks(if any):</label> Diploma marks(if any):
                    <input type='number' placeholder='diploma marks' name="markDiploma" className="form-control" value={this.state.markDiploma} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Diploma passing date:</label> Diploma passing date:
                    <input type='date' placeholder='year of passing diploma' name="passingYearDiploma" className="form-control" value={this.state.passingYearDiploma} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Graduation marks:</label> Graduation marks:
                    <input type='number' placeholder='graduation marks' name="markGrad" className="form-control" value={this.state.markGrad} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Graduation date:</label> Graduation date:
                    <input type='date' placeholder='year of graduation' name="passingYearGrad" className="form-control" value={this.state.passingYearGrad} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Post Graduation marks:</label> Post Graduation Marks:
                    <input type='number' placeholder='post graduation marks' name="markPostGrad" className="form-control" value={this.state.markPostGrad} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Post Graduation date:</label> Post Graduation date:
                    <input type='date' placeholder='year of post-graduation' name="passingYearPostGrad" className="form-control" value={this.state.passingYearPostGrad} onChange={this.onChange}/>
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

                
                </fieldset>

                

                

                <button href='#sec' className="btn btn-success" onClick={this.saveStudent} >Register!</button>
            </form>


            
    </div>
        );
    }
}

export default AddPlacementComponent;