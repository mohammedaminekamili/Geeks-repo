import React from 'react'

type FavoriteColorState = {
  favoriteColor: 'red' | 'yellow' | 'blue'
}

export class FavoriteColor extends React.Component<
  Record<string, never>,
  FavoriteColorState
> {
  state: FavoriteColorState = { favoriteColor: 'red' }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' })
    }, 2000)
  }

  shouldComponentUpdate() {
    return true
  }

  getSnapshotBeforeUpdate(
    _prevProps: Readonly<Record<string, never>>,
    prevState: Readonly<FavoriteColorState>,
  ) {
    // eslint-disable-next-line no-console
    console.log('in getSnapshotBeforeUpdate')

    return prevState.favoriteColor
  }

  componentDidUpdate(
    _prevProps: Readonly<Record<string, never>>,
    _prevState: Readonly<FavoriteColorState>,
    snapshot?: FavoriteColorState['favoriteColor'],
  ) {
    // eslint-disable-next-line no-console
    console.log('after update')
    void snapshot
  }

  handleMakeBlue = () => {
    this.setState({ favoriteColor: 'blue' })
  }

  render() {
    return (
      <div style={{ maxWidth: 900, margin: '0 auto', padding: 20, textAlign: 'left' }}>
        <div
          style={{
            display: 'inline-block',
            padding: '10px 14px',
            border: '1px solid #e5e7eb',
            borderRadius: 8,
            boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 24,
            background: 'white',
          }}
        >
          My Favorite Color is {this.state.favoriteColor}
        </div>

        <div>
          <button type="button" onClick={this.handleMakeBlue} style={{ padding: '8px 12px' }}>
            Change color to blue
          </button>
        </div>
      </div>
    )
  }
}

export default function Exercice2() {
  return <FavoriteColor />
}

