import React, { Component } from 'react'

class App extends Component {

  static displayName = "Something Name"

  static defaultProps = {
    someImportArray: []
  }

  render() {
      console.log(this.props)
    return (
      <h1>Hello</h1>
    )
  }
}

function myTestWrapper(WrappedComponent) {

  return class extends Component{
    render() {
      console.log(this.props)
      return (
          <div
            style={{backgroundColor: "blue"}}
          >
            <WrappedComponent/>
          </div>
      )
    }
  }
}

App = myTestWrapper(App)


export default App
