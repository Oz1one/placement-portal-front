import React from "react";
import img1 from '../../images/img-1.jpg'
import './ShowProfileComponent.css'
import img2 from '../../images/avatar-370-456322.png'



const axios = require('axios').default;
const data = sessionStorage.getItem('studentid');
class ShowProfileComponent extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            student: props.location.state.student,
            message: null
        }
    }

    uploadResume() {
        this.props.history.push('/upload-resume');
    }

    addPlacementDetails() {
        this.props.history.push('/add-placement-details');
    }

    addQuestions() {
        this.props.history.push('/add-questions');
    }


    render() {

        return (
            <div className='card '>
                <div>
                    <div className='text-center'>
                        <button className='btn  btn-space' onClick={() => this.uploadResume()}> Upload Resume</button>
                        <button className='btn  btn-space' onClick={() => this.addPlacementDetails()}>Add Placement Details</button>
                        <button className='btn  btn-space' onClick={() => this.addQuestions()}>Add Questions</button>
                    </div>
                </div>
                <div >
                    <img src= {"data:image/png;base64," + this.state.student.photo.photo} className="img-fluid img111" alt="profile image" /><br/>
                    <button className='btn btn-space-2'>Change Photo</button>
                </div>


                {/**basic Details */}
                <div className='border11 do-center'>
                    <table>
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
                        <tr><td>mobile :</td><td> {this.state.student.mobNo}</td></tr>
                        <tr><td>email :</td><td>{this.state.student.email}</td></tr>
                        <tr><td>git profile link :</td><td>{this.state.student.gitLink}</td></tr>
                        <tr><td>linkedIn profile link :</td><td>{this.state.student.linkedIn}</td></tr>
                        </table>
                       
                    </div>
                </div>
                <div className='text-center'>
                <button className='btn do-center-4'>edit profile</button>
                </div>
            </div>

        )
    }

}

export default ShowProfileComponent

