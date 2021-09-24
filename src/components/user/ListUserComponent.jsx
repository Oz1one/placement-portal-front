import React from "react";
import ApiService from "../../service/ApiService";

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
      label: "JAN",
      value: "JAN",
    },
    {
      label: "JULY",
      value: "JULY",
    },
  ];

class ListUserComponent extends React.Component{


    constructor(props) {
        super(props)
        this.state = {
            students: [],
            message: null,

            year: "2019",
            batch: "JAN",
            courseName: "DAC"
        }
        this.filterDetails = this.filterDetails.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }



    filterDetails(e){
        
    }





    reloadUserList() {
        ApiService.fetchStudent()
            .then((resp) => {
                this.setState({students: resp.data})
                console.log(this.state.students);
            });
            // UserService.getUsers().then(resp => {
            //     this.setState({ users: resp.data });
            //     console.log(this.state.users);
            // })

    }
showProfile(id){
 

 console.log(id);
    ApiService.fetchStudentById(id).then(resp=>{
        console.log(resp);
        console.log(resp.data);
        ApiService.fetchPhotoById(id).then(resp1=>{
            console.log(resp1);
            console.log(resp1.data);
            resp.data.photo=resp1.data;
        }).catch(err=>{
            resp.data.photo= null;
        })
        this.props.history.push({
            pathname: '/profile',
           
            state: { student: resp.data }
            
          })
    }).catch(err=>{
        alert('profile not available');
        console.log(err);
        this.props.history.push('/student')
    })

}

    render() {
        return (
            <div>
                <div className='text-center'>
                
                <fieldset className='batch-details'>
          <legend>Batch Details!</legend>
            <div className="select-container">
              <span>Year</span>
              <select name='year' value={this.state.year} onChange={this.onChange}>
                {year.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div className="select-container">
            <span>Batch</span>
              <select name='batch' value={this.state.batch} onChange={this.onChange}>
                {batch.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div className="select-container">
            <span>Course</span>
              <select name='courseName' value={this.state.courseName} onChange={this.onChange}>
                {course.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            
            </fieldset>


                </div>

                <h2 className="text-center">Student Details</h2>
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>CCEE Marks</th>
                            <th></th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(
                        student =>
                                    <tr key={student.id}>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>
                                            {student.markCCEE}
                                        </td>
                                        <td><button className='btn' name={student.id} id={student.id} onClick={e => this.showProfile(e.target.id)}>View Profile</button></td>
                                        
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListUserComponent