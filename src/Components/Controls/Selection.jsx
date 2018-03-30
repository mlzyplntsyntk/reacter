var React = require('react');
var ReactDOM = require('react-dom');

class Selection extends React.Component {
  onChange(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    )
  }
}

module.exports = Selection;
