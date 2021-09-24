import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import './AddUserComponent.css'

class UploadResumeComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            
            resumefile: '',
            
            message: null
        }
        this.uploadResume = this.uploadResume.bind(this);
    }

    uploadResume= (e) =>{
        e.preventDefault();
        ApiService
    }

    render() {
        return (
            <div >
                <div className='text-center'><h1>Upload Resume!!</h1></div>
                <div className='text-center'>

                    <input type='file' />
                    <button className='btn' onClick={() => this.uploadResume()}>Upload</button>
                    </div>
                    
                </div>



            
        );
    }
}

export default UploadResumeComponent;