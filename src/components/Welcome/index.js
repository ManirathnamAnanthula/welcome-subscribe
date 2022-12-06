import {Component} from 'react'
import './index.css'

class App extends Component {
  state = {isLoggedIn: true}

  onClickButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  renderAuthButton = () => {
    const {isLoggedIn} = this.state

    if (isLoggedIn === true) {
      return (
        <button type="button" onClick={this.onClickButton}>
          Subscribe
        </button>
      )
    }
    return (
      <button type="button" onClick={this.onClickButton}>
        Subscribed
      </button>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="main-heading">Welcome</h1>
        <h1 className="heading">Thank you!Happy Learning</h1>
        {this.renderAuthButton()}
      </div>
    )
  }
}
export default App
