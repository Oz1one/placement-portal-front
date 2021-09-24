import React from "react";
import ApiService from "../../service/ApiService";



class ListUserComponent extends React.Component{


    constructor(props) {
        super(props)
        this.state = {
            students: [],
            message: null
        }
       
    }

    componentDidMount() {
        this.reloadUserList();
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


    render() {
        return (
            <div>
                <h2 className="text-center">Student Details</h2>
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(
                        student =>
                                    <tr key={student.id}>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        
                                        
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