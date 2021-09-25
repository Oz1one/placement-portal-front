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

  const round = [
    {
      label: "CODING",
      value: "CODING",
    },
    {
      label: "GD",
      value: "GD",
    },
    {
      label: "TECHNICAL",
      value: "TECHNICAL",
    },
    {
      label: "HR",
      value: "HR",
    }
  ];

  const isSelected = [
    {
      label: "YES",
      value: "YES",
    },
    {
      label: "NO",
      value: "NO",
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

            <div className="select-container">
              <span>Round</span>
              <select name='round' value={this.state.round} onChange={this.onChange}>
                {round.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div className="select-container">
              <span>Were you selected?</span>
              <select name='isSelected' value={this.state.isSelected} onChange={this.onChange}>
                {isSelected.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            </fieldset>
            </div> 
            <button className="btn btn-success" onClick={this.savePlacememtDetails} >Add details!</button>           
            </form>
          </div>

                

                
          


            
    </div>
        );
    }
}

export default AddPlacementComponent;