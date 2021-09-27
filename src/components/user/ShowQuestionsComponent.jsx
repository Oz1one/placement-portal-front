import React, { Component } from 'react'

export default class ShowQuestionsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            questions: props.location.state.questions,
            message: null,
            student:props.location.state.student,
  
            
        }
  
        
    }

    render() {

        let questions = this.state.questions.map(
            question =>
                        <tr key={question.id}>
                            
                            <td>{question.question}</td>
                            
                            
                            
                            
                        </tr>
                );
    



        return (
            <div>
            <h2 className="text-center">Questions</h2>
            
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="hidden">Id</th>
                        <th>Questions</th>
                       
                        
                       
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {
                      questions  
                    }
                </tbody>
            </table>

        </div>
        )
    }
}
