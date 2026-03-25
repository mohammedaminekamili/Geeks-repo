import React from 'react'

type Exercice3State = {
  show: boolean
}

class Child extends React.Component {
  componentWillUnmount() {
    alert('The component named Header is about to be unmounted.')
  }

  render() {
    return <h1>Hello World!</h1>
  }
}

export default class Exercice3 extends React.Component<Record<string, never>, Exercice3State> {
  state: Exercice3State = { show: true }

  deleteHeader = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <div style={{ maxWidth: 900, margin: '0 auto', padding: 20, textAlign: 'left' }}>
        {this.state.show ? <Child /> : null}
        <button type="button" onClick={this.deleteHeader}>
          Delete Header
        </button>
      </div>
    )
  }
}

