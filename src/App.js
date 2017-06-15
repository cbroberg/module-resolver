import React, { Component } from 'react'

import Module1 from 'components/module1/Module1'
import Module2 from 'components/module2/Module2'
import Module3 from 'components/module3/Module3'

class App extends Component {
  render() {
    return (
      <div>
          <Module1 name="Christian" />
          <Module2 name="Andrei" />
          <Module3 name="Mikkel" />
      </div>
    )
  }
}

export default App
