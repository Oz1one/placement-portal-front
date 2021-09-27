import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import './AddUserComponent.css'

class UploadResumeComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            
                student: props.location.state.student,
                
            
            resumefile: '',
            
            message: null
        }
        this.uploadResume = this.uploadResume.bind(this);
        this.onChange=this.onChange.bind(this);
        
    }

    onChange(e){
        this.state.resumefile=e.target.files[0];
    }


    uploadResume= (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("studentResume", this.state.resumefile, this.state.resumefile.name);
        ApiService.uploadResume(formData).then(resp=>{
            console.log(resp);
            console.log(resp.data);
            alert('Resume Uploaded!');
            this.props.history.push({
                pathname: '/profile',
                state: { student: this.state.student }
                
            })
      }).catch(err=>{
              console.log(err);
              alert('Error');
              return 'failed to upload';
      })
          
      
  }

    render() {
        return (
            <div className='signupScreen'>
            <form>
                <h1>Upload Resume!!</h1>
                <div className='form-group'>
                    
                    <input type='file' className='form-control custom-width' onChange={this.onChange} />
                    <input type='submit' className='btn btn-success custom-button' value='Upload' onClick={this.uploadResume} />
                    
                    </div>
                    </form>
                </div>


        );
    }
}

export default UploadResumeComponent;