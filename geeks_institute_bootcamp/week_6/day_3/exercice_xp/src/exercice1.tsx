import React from 'react'
import { ErrorBoundary } from './ErrorBoundary'

type BuggyCounterState = { counter: number }

export class BuggyCounter extends React.Component<Record<string, never>, BuggyCounterState> {
  state: BuggyCounterState = { counter: 0 }

  handleClick = () => {
    this.setState((prev) => ({ counter: prev.counter + 1 }))
  }

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!')
    }

    return (
      <button
        type="button"
        onClick={this.handleClick}
        style={{
          fontSize: 40,
          lineHeight: 1,
          padding: '10px 16px',
          minWidth: 80,
          cursor: 'pointer',
        }}
        aria-label={`Counter value ${this.state.counter}`}
      >
        {this.state.counter}
      </button>
    )
  }
}

export default function Exercice1() {
  return (
    <div style={{ maxWidth: 980, margin: '0 auto', padding: 20, textAlign: 'left' }}>
      <h1 style={{ margin: '0 0 12px' }}>Exercise 1: React Error Boundary Simulation</h1>
      <p style={{ margin: '0 0 16px' }}>
        Click on the numbers to increase the counters.
        <br />
        The counter is programmed to throw error when it reaches 5. This simulates a
        JavaScript error in a component.
      </p>

      <section style={{ padding: '12px 0', borderTop: '1px solid #e5e7eb' }}>
        <h2 style={{ margin: '0 0 8px' }}>Simulation 1</h2>
        <p style={{ margin: '0 0 12px' }}>
          Two counters inside <b>one</b> error boundary. If one crashes, both are replaced.
        </p>
        <ErrorBoundary>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <BuggyCounter />
            <BuggyCounter />
          </div>
        </ErrorBoundary>
      </section>

      <section style={{ padding: '12px 0', borderTop: '1px solid #e5e7eb' }}>
        <h2 style={{ margin: '0 0 8px' }}>Simulation 2</h2>
        <p style={{ margin: '0 0 12px' }}>
          Each counter is inside its <b>own</b> error boundary. If one crashes, the other is
          not affected.
        </p>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
        </div>
      </section>

      <section style={{ padding: '12px 0', borderTop: '1px solid #e5e7eb' }}>
        <h2 style={{ margin: '0 0 8px' }}>Simulation 3</h2>
        <p style={{ margin: '0 0 12px' }}>
          This counter is <b>not</b> inside an error boundary. If it crashes, the whole app
          unmounts (blank page + errors).
        </p>
        <BuggyCounter />
      </section>
    </div>
  )
}

