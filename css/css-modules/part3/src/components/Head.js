import React from 'react'

export default class Head extends React.Component {
  render() {
    return (
      <head>
      	<link rel="stylesheet" href="styles.css"/>
        <title>{this.props.title}</title>
      </head>
    )
  }
}