// Write your code here.
import {Component} from 'react'
import './index.css'

class App extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const count = searchInput.length

    return (
      <div className="bgContainer">
        <div className="content">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="searchInput" className="inputLabel">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            name="Calculator"
            id="searchInput"
            className="searchInput"
            placeholder="Enter the phrase"
          />
          <p className="noOfLettersCount">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default App
