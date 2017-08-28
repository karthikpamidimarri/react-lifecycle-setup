import React, { Component } from 'react'

class App extends Component {
  static displayName = "SomethingNew"
  static defaultProps = {
    someImportArray : []
  }

  render() {
    return (
      <h1>Hello</h1>
    )
  }
}

/*App.defaultProps ={
  someImportArray : []
}*/
export default App
