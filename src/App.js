import { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { // Need to listen to changes every key stroke, and update state
    this.setState({
      value: event.target.value,
    })
  }

  handleSubmit(event) { // Running the function when user hits submit
    alert(''+this.state.value+' Was submitted'); // Will log current states value
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='enter here' value={this.state.value} onChange={this.handleChange}></input>
          <input type="submit" value="SUBMIT"></input>
        </form>
      </div>
    )
  }
}

export default App;
