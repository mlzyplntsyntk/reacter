var React = require('react');
var ReactDOM = require('react-dom');
var Text = require('./Text.jsx');

class TextRich extends Text {
  render() {
    return (
      <textarea value={this.props.value} onChange={this.onChange.bind(this)} />
    )
  }
}

module.exports = TextRich;
