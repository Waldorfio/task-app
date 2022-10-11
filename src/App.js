import { Component } from 'react'
import Overview from './components/Overview'
import ReactDOM from 'react-dom/client';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      tasks: [],
    };

    // Binding external functions to this component
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { // Need to listen to changes every key stroke, and update state
    this.setState({
      value: event.target.value,
    })
  }

  handleSubmit(event) { // Running the function when user hits submit
    const {value, tasks } = this.state;

    // Appending to array
    this.setState({
      tasks: tasks.concat(value),
    })

    alert(''+value+' Was submitted'); // Will log current states value
    alert(''+tasks+' Was submitted'); // Will log current states value

    const element = <Overview name="Jimothy" />;
    return (
      element
    )
    
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
  }

  render() {
    const {value, tasks } = this.state;
    
    return (
      <div>
        <form id="theForm" onSubmit={this.handleSubmit}>
          <input placeholder='enter here' value={value} onChange={this.handleChange}></input>
          <input type="submit" value="SUBMIT"></input>
        </form>
      </div>
    )
  }
}

export default App;
