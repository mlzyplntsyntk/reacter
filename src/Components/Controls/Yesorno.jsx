var React = require('react');
var ReactDOM = require('react-dom');

class Yesorno extends React.Component {
  onChange(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      <input type="checkbox" />
    )
  }
}

module.exports = Yesorno;
