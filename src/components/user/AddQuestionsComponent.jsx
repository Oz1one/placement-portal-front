import React, { Component, useState } from 'react'
import ApiService from "../../service/ApiService";
import './AddUserComponent.css'

const companyName = [
    {
      label: "TCS",
      value: "TCS",
    },
    {
      label: "INFOSYS",
      value: "INFOSYS",
    }
  ];

class AddQuestionsComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            Question: "",
            message: null
        }
        this.saveQuestions = this.saveQuestions.bind(this);
        
    }

    saveQuestions=(e)=>{
      e.preventDefault();
      let que={questions:this.state.question}
      ApiService.addquestion(que).then(resp=>{
        console.log(resp.data);
        this.setState({message : 'Question added successfully.'});
      }).catch(err=>{
        console.error("in err ",err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);           
          })
      }
            


    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

         

    render() {
         return (
        <div className='signupScreen'>
            <form>
       <h1>Add your Questions here</h1>
        

        <div className="form-group">
        <label>Company:</label>
              
              <select name='companyName' className='form-control' value={this.state.companyName} onChange={this.onChange}>
                {companyName.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
            <label>Add Question:</label>
                    
                    <input type="text" placeholder="questions" name="questions" className="form-control" value={this.state.questions} onChange={this.onChange}/>
                </div>
                <button className="btn btn-success"  onClick={this.saveQuestions}> Add </button>
        </form>  
        
    </div> );
    }
}


export default AddQuestionsComponent ;