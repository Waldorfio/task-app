import React from "react"

class Overview extends React.Component {    
    render() {
        return (
            <ul>
                {this.props.name}
            </ul>
        )
    }
}

export default Overview