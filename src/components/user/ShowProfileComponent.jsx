import React from "react";

import './ShowProfileComponent.css'
import img2 from '../../images/avatar-370-456322.png'
import ApiService from '../../service/ApiService'
import './ShowProfileComponent.css'







class ShowProfileComponent extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {

            student: props.location.state.student,
            message: null
        }
        ApiService.fetchPhoto(this.state.student.id).then((resp)=>{
            // set the photo as the property of student
            console.log("found photo id ",resp.data.id);
            this.state.student.photo = resp.data;
          
          }).catch(err =>{
            
            console.log("err in finding photo",err);
            this.state.student.photo =null;
      
          });
    }

    uploadResume() {
        this.props.history.push({
            pathname: '/upload-resume',
           
            state: { student: this.state.student }
            
          })
    }

    addPlacementDetails() {
        this.props.history.push({
            pathname: '/add-placement-details',
           
            state: { student: this.state.student }
            
          })
        
    }

    addQuestions() {
        this.props.history.push({
            pathname: '/add-questions',
           
            state: { student: this.state.student }
            
          })
    
    }

    // downloadResume(){
    //     ApiService.
    // }

    logout(){
        sessionStorage.removeItem('studentid');
        this.state.student=null;
        this.props.history.push('/');
        window.location.reload();
    }
   
    addProject(){
        this.props.history.push({
            pathname: '/add-project',
           
            state: { student: this.state.student }
            
          })
    }
    changePhoto(){
        this.props.history.push({
            pathname: '/change-photo',
           
            state: { student: this.state.student }
            
          })
    }


    editProfile(){
        this.props.history.push({
            pathname: '/edit-profile',
           
            state: { student: this.state.student }
            
          })
    }


    render() {
        let resumelink = 'http://localhost:8080/student/download/resume/'+this.state.student.id;
        let studentId= sessionStorage.getItem('studentid');
        
        return (
            <div className='card11 '>
                <div>
                    <div className='text-center'>
                    <a href={resumelink}  target='_blank' rel='noopener noreferrer' >
                        <button className='btn  btn-space'> Download Resume</button></a>
                        <button className= {studentId?'btn  btn-space':'hidden'}  onClick={() => this.uploadResume()}> Upload Resume</button>
                        <button className= {studentId?'btn  btn-space':'hidden'} onClick={() => this.addPlacementDetails()}>Add Placement Details</button>
                        <button className= {studentId?'btn  btn-space':'hidden'} onClick={() => this.addQuestions()}>Add Questions</button>
                        <button className= {studentId?'btn  btn-space':'hidden'} onClick={() => this.addProject()}>Add Project details</button>
                        <button className={studentId?'btn  btn-space':'hidden'} onClick={() => this.logout()}> Logout</button>
                    </div>
                </div>
                <div className=''>
                <img
            src={
              this.state.student.photo
                ? "data:image/png;base64," + this.state.student.photo.photo
                : img2
            }
            className="img-fluid img111"
            alt="profile"
          /><br/>
                    <button className= {studentId?'btn  btn-space-2':'hidden'} onClick={() => this.changePhoto()}>Change Photo</button>
                </div>


                {/**basic Details */}
                <div className='border11 do-center'>
                    <table>
                        <tr><thead></thead><thead></thead></tr>
                        <tr><td>first Name :</td><td>{this.state.student.firstName}</td></tr>
                        <tr><td>last Name :</td><td>{this.state.student.lastName}</td></tr>
                        <tr><td>prn :</td><td>{this.state.student.prn}</td></tr>
                        <tr><td>date of birth :</td><td>{this.state.student.dob}</td></tr>
                    </table>
                </div>


                {/**Academic Details */}
                <div className='border11 do-center-2 '>
                    <div>

                        <table>
                        <tr><thead></thead><thead></thead></tr>
                            <tr><td>marks of 10th std :</td><td>{this.state.student.mark10th}</td></tr>
                            <tr><td>Passing year 10th :</td><td>{this.state.student.passingYear10th}</td></tr>
                            <tr><td>marks of 12th Std :</td><td>{this.state.student.mark12th}</td></tr>
                            <tr><td>Passing year 12th :</td><td>{this.state.student.passingYear12th}</td></tr>
                            <tr><td>marks of diploma :</td><td>{this.state.student.markDiploma}</td></tr>
                            <tr><td>Passing year of diploma :</td><td>{this.state.student.passingYearDiploma}</td></tr>
                            <tr><td> marks of graduation :</td><td>{this.state.student.markGrad}</td></tr>
                            <tr><td>Passing year graduation :</td><td>{this.state.student.passingYearGrad}</td></tr>
                            <tr><td>marks of post graduation :</td><td> {this.state.student.markPostGrad}</td></tr>
                            <tr><td> Passing year post graduation :</td><td>{this.state.student.passingYearPostGrad}</td></tr>
                            <tr><td>marks of CCEE :</td><td>{this.state.student.markCCEE}</td></tr>
                        </table>

                    </div>
                </div>


                {/**Contact Details */}
                <div className='border11 do-center-3'>
                    <div>
                        <table>
                        <tr><thead></thead><thead></thead></tr>
                        <tr><td>mobile :</td><td> {this.state.student.mobNo}</td></tr>
                        <tr><td>email :</td><td>{this.state.student.email}</td></tr>
                        <tr><td>git profile link :</td><td>{this.state.student.gitLink}</td></tr>
                        <tr><td>linkedIn profile link :</td><td>{this.state.student.linkedIn}</td></tr>
                        </table>
                       
                    </div>

                {/**place Details */}
                </div>
                <div className='text-center'>
                <button className= {studentId?'btn do-center-4':'hidden'} onClick={() => this.editProfile()}>edit profile</button>
                </div>
            </div>

        )
    }

}

export default ShowProfileComponent

