import React from "react";
import img1 from '../../images/img-1.jpg'
import './ShowProfileComponent.css'



const axios = require('axios').default;

class ShowProfileComponent extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            student: props.location.state.student,
            message: null
        }
    }


    


render(){
    
    return (
        <div className='card '>

            
           {JSON.stringify(this.state.student)}
            
           <img src={"data:image/png;base64,"+this.state.student.photo.photo} className="img-fluid" alt="profile image"/>
            {/**basic Details */}
           
        </div>

    )
}

}

export default ShowProfileComponent

