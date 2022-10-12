import React from "react"

class Overview extends React.Component {
    render() {
        return (
            <div>
                To do: {this.props.name}
            </div>
        )
    }
}

export default Overview