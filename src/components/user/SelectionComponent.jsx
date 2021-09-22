import React from "react";
import './SelectionComponent.css'
import ApiService from "../../service/ApiService";
import { Link, withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const year = [
    {
      label: "2019",
      value: "2019",
    },
    {
      label: "2020",
      value: "2020",
    },
    {
      label: "2021",
      value: "2021",
    },
    {
      label: "2022",
      value: "2022",
    },
  ];
 
  const course = [
    {
      label: "DAC",
      value: "DAC",
    },
    {
      label: "DBDA",
      value: "DBDA",
    },
    {
      label: "DESD",
      value: "DESD",
    },
    {
      label: "DITISS",
      value: "DITISS",
    },
    {
        label: "DAI",
        value: "DAI",
      },
      {
        label: "DVLSI",
        value: "DVLSI",
      },
      {
        label: "DMC",
        value: "DMC",
      },
       {
        label: "DASSD",
        value: "DASSD",
      },
      {
        label: "DGI",
        value: "DGI",
      },
      {
        label: "DRAT",
        value: "DRAT",
      },
  ];



  const batch = [
    {
      label: "jan",
      value: "jan",
    },
    {
      label: "july",
      value: "july",
    },
  ];

class SelectionComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          year: "",
          batch: "",
          course: "",
        };
        this.saveLink = this.saveLink.bind(this);
    }

    

    saveLink = (e) => {
      e.preventDefault();
      let link = {year: this.state.year,batch:this.state.batch, course:this .state.course};
      ApiService.addLink(link)
          .then(resp => {
            
              console.log(resp);//actual response data sent by back end
              this.setState({message : 'Link sent successfully.'});
              
          }).catch( err=>{
            //  console.error(err);
            
              console.error("in err ",err.response);
              
              //err.response.data => DTO on the server side : ErrorResponse
                           
              
          })
          
  }

  onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

        addUser() {
          window.localStorage.removeItem("userId");
          this.props.history.push('/register-user');
      }

    render() {
        return (
          <div >
            <form onSubmit={}>
              <div className='body-batch-details'>
              <fieldset className='batch-details'>
          <legend>Batch Details!</legend>
            <div className="select-container">
              <span>Year</span>
              <select value={this.state.year} onChange={this.handleChange}>
                {year.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div className="select-container">
            <span>Batch</span>
              <select value={this.state.batch} onChange={this.handleChange}>
                {batch.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div className="select-container">
            <span>Course</span>
              <select value={this.state.course} onChange={this.handleChange}>
                {course.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <button type='submit' className="btn btn-success" onClick={this.saveLink}  onClick={() => this.addUser()}>Register!</button>
            </fieldset>
            </div>
            
              
            
            
            
            </form>
          </div>
        );
      }
}

export default SelectionComponent;