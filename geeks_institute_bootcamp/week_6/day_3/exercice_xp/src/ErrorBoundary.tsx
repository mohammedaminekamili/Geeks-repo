import React from 'react'

type ErrorBoundaryState = {
  error: Error | null
  errorInfo: React.ErrorInfo | null
}

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { error: null, errorInfo: null }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error(error)
    this.setState({ error, errorInfo })
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ borderTop: '1px solid #ddd', paddingTop: 12 }}>
          <h2 style={{ margin: '12px 0' }}>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' as const }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo?.componentStack ?? ''}
          </details>
        </div>
      )
    }

    return this.props.children
  }
}

