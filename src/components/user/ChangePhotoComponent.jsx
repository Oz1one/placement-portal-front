import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import './AddUserComponent.css'

class ChangePhotoComponent extends Component {

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

            <div className='signupScreen'>
            <form>
                <h1>Upload Photo!!</h1>
                <div className='form-group'>
                    
                    <input type='file' className='form-control custom-width' onChange={this.onChange} />
                    <input type='submit' className='btn btn-success custom-button' value='Upload' onClick={this.uploadPhoto} />
                    
                    </div>
                    </form>
                </div>
           


            
        );
    }
}

export default ChangePhotoComponent;