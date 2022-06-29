// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: false,
  }

  onDark = () => {
    this.setState(preState => ({isDarkMode: !preState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const text = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const design = isDarkMode ? 'dark' : 'light'
    return (
      <div className="container">
        <div className={design}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" onClick={this.onDark} type="button">
            {text}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
