import { Component } from 'react'
import Overview from './components/Overview'
import ReactDOM from 'react-dom/client';
import uniqid from 'uniqid'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: {
        text: '',
        id: uniqid(),
      },
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
    const { value, tasks } = this.state;

    // Appending to array
    this.setState({
      tasks: tasks.concat(value),
      value: {
        text: '',
        id: uniqid(),
      },
    })
    // alert('id: '+id);

    event.preventDefault(); // Prevents the form from submitting and refreshing the page
  }

  render() {
    const { value, tasks } = this.state;
    
    return (
      <div>
        <form id="theForm" onSubmit={this.handleSubmit}>
          <input placeholder='enter here' value={value.text} onChange={this.handleChange}></input>
          <input type="submit" value="SUBMIT"></input>
        </form>
        <Overview name={this.state} />
      </div>
    )
  }
}

export default App;
