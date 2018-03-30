var React = require('react');
var ReactDOM = require('react-dom');

class Text extends React.Component {
  onChange(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      <input type="text" value={this.props.value} onChange={this.onChange.bind(this)} />
    )
  }
}

module.exports = Text;
