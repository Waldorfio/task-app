import React from "react"

class Overview extends React.Component {    
    render() {
        const { value, tasks } = this.props.name;
        return (
            <ul>
                {tasks.map((element) => { 
                    return (
                        <li key={value.id}>
                            value.text
                        </li>                      
                    )
                })}
            </ul>
        )
    }
}

export default Overview