import React from "react";
import ApiService from "../../service/ApiService";


  class ShowPlacementComponent extends React.Component{

  
    constructor(props) {
        super(props)
        this.state = {
            placement: [],
            message: null,

            year: "ALL",
            batch: "ALL",
            courseName: "ALL",
            filterStr:""
        }
    }

    componentDidMount() {
        this.reloadUserList();
    }


   



    reloadUserList() {
        ApiService.fetchPlacement()
            .then((resp) => {
                this.setState({placement: resp.data},()=>console.log(this.state.placement));
            });
           
    }


showProfile(id) {
  // fetch the student using id 
  ApiService.fetchStudentById(id).then((resp)=>{
    
    console.log("found student with id ",resp.data.id);
    // fetch the image of the student 
    this.props.history.push({
      pathname:"/profile",
      state : {placement : resp.data}
    });
   

  }).catch((err)=>{
    console.log("std not found err ", err);
  });

}


    render() {



      let companyDetails = this.state.placement.map(
        placement =>
                    <tr key={placement.cid}>
                        <td>
                            {placement.CompanyName}
                        </td>
                        <td>{placement.round}</td>
                        <td>
                            {placement.isSelected}
                        </td>
                        
                        
                        <td><button className='btn' name={placement.cid} id={placement.cid} onClick={e => this.showProfile(e.target.id)}>View Profile</button></td>
                        
                    </tr>
            );



            
        
            return (
              <div>
                <h2 className="text-center">Placement Details</h2>
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">CId</th>
                            <th>Company Name</th>
                            <th>Round</th>
                            <th>Selected</th>
                            
                            <th></th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                          companyDetails  
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ShowPlacementComponent