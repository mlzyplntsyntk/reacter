import React from 'react';

class Flag extends React.Component {
  render() {
    return (
      <g id="{this.props.id}" className={"path-country" + (this.props.visibility === "hidden" ? " _hide" : " _show")} onClick={this.props.onClick}>

      </g>
    )
  )
}
