import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import './AddUserComponent.css'

class EditProfileComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            
                student: props.location.state.student,
                
            
            photofile: '',
            
            message: null
        }
        this.uploadPhoto = this.uploadPhoto.bind(this);
        this.onChange=this.onChange.bind(this);
        
    }

    onChange(e){
        this.state.photofile=e.target.files[0];
    }


    uploadPhoto= (e) =>{
        e.preventDefault();
        let id = sessionStorage.getItem('studentid');
        const formData = new FormData();
        formData.append("studentPhoto", this.state.photofile, this.state.photofile.name);
        ApiService.uploadPhoto(id,formData).then(resp=>{
            console.log(resp);
            console.log(resp.data);
            
            this.props.history.push({
                pathname: '/profile',
               
                state: { student: this.state.student }
                
              })
        }).catch(err=>{
                console.log(err);
                return 'failed to upload';
        })
            
        
    }

    render() {
        return (
            <div>
            <h2 className="text-center">Edit Profile!</h2>

            

            <form>
            <fieldset>
                <legend className='increase-font-2'>Basic Details!</legend>
                <div className="form-group">
                <span className='increase-font'>First Name:</span>
                <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
            </div>

            <div className="form-group">
            <span className='increase-font'>Last Name:</span>
                <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
            </div>

            <div className="form-group">
                 
            <span className='increase-font'>Date of Birth:</span>
                <input type='date' name="dob" className="form-control" value={this.state.dob} onChange={this.onChange}/>
            </div>

           

            
            </fieldset> 

            <fieldset>
                <legend className='increase-font-2'>Academic Details!</legend>

                <div className="form-group">
                <span className='increase-font'>Class 10th marks:</span>
                <input type='number' placeholder='10th marks' name="mark10th" className="form-control" value={this.state.mark10th} onChange={this.onChange}/>
            </div>

            <div className="form-group">
            <span className='increase-font'>Class 10th passing date:</span>
                <input type='date' placeholder='year of class 10th' name="passingYear10th" className="form-control" value={this.state.passingYear10th} onChange={this.onChange}/>
            </div>

            <div className="form-group">
            <span className='increase-font'>Class 12th marks:</span>
                <input type='number' placeholder='12th marks' name="mark12th" className="form-control" value={this.state.mark12th} onChange={this.onChange}/>
            </div>

            <div className="form-group">
            <span className='increase-font'>Class 12th passing date:</span>
                <input type='date' placeholder='year of class 12th' name="passingYear12th" className="form-control" value={this.state.passingYear12th} onChange={this.onChange}/>
            </div>

            <div className="form-group">
            <span className='increase-font'>Diploma marks(if any):</span>
                <input type='number' placeholder='diploma marks' name="markDiploma" className="form-control" value={this.state.markDiploma} onChange={this.onChange}/>
            </div>

            <div className="form-group">
            <span className='increase-font'>Diploma passing date:</span>
                <input type='date' placeholder='year of passing diploma' name="passingYearDiploma" className="form-control" value={this.state.passingYearDiploma} onChange={this.onChange}/>
            </div>

            <div className="form-group">
            <span className='increase-font'>Graduation marks:</span>
                <input type='number' placeholder='graduation marks' name="markGrad" className="form-control" value={this.state.markGrad} onChange={this.onChange}/>
            </div>

            <div className="form-group">
            <span className='increase-font'>Graduation date:</span>
                <input type='date' placeholder='year of graduation' name="passingYearGrad" className="form-control" value={this.state.passingYearGrad} onChange={this.onChange}/>
            </div>

            <div className="form-group">
            <span className='increase-font'>Post Graduation Marks:</span>
                <input type='number' placeholder='post graduation marks' name="markPostGrad" className="form-control" value={this.state.markPostGrad} onChange={this.onChange}/>
            </div>

            <div className="form-group">
            <span className='increase-font'>Post Graduation date:</span>
                <input type='date' placeholder='year of post-graduation' name="passingYearPostGrad" className="form-control" value={this.state.passingYearPostGrad} onChange={this.onChange}/>
            </div>

            <div className="form-group">
            <span className='increase-font'>CCEE marks:</span>
                <input type='number' placeholder='CCEE marks' name="markCCEE" className="form-control" value={this.state.markCCEE} onChange={this.onChange}/>
            </div>

            </fieldset>    

            <fieldset>
                <legend className='increase-font-2'>Contact Details!</legend>

                <div className="form-group">
                <span className='increase-font'>Email:</span>
                <input type='email' placeholder='email address' name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
            </div>

            <div className="form-group">
            <span className='increase-font'>Mobile Number:</span>
                <input type='number' placeholder='mobile number' name="mobNo" className="form-control" value={this.state.mobNo} onChange={this.onChange}/>
            </div>

            <div className="form-group">
            <span className='increase-font'>Address:</span>
                <input type='text' placeholder='Address' name="address" className="form-control" value={this.state.address} onChange={this.onChange}/>
            </div>

            <div className="form-group">
            <span className='increase-font'>Git profile link:</span>
                <input type='text' placeholder='git-link' name="gitLink" className="form-control" value={this.state.gitLink} onChange={this.onChange}/>
            </div>

            <div className="form-group">
            <span className='increase-font'>LinkedIn profile Link:</span>
                <input type='text' placeholder='LinkedIn link' name="linkedIn" className="form-control" value={this.state.linkedIn} onChange={this.onChange}/>
            </div>
            </fieldset>        

            

            

            <button href='#sec' className="btn btn-success" onClick={this.saveStudent} >Register!</button>
        </form>


        
</div>


            
        );
    }
}

export default EditProfileComponent;