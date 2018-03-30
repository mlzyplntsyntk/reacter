var React = require('react');
var ReactDOM = require('react-dom');

class DynamicComponent extends React.Component {
  getType(name) {
    console.log("create " + this.props.type);
    if (!this.props.store[name]) {
      this.props.store[name] = require('./'+this.props.path+'/'+this.props.type+'.jsx');
    }
    return this.props.store[name];
  }
  render() {
    const Tagname = this.getType(this.props.type);
    return (
      <Tagname {...this.props} />
    )
  }
}

const controls = {};

class Control extends DynamicComponent {
  render() {
    return (
      <DynamicComponent store={controls} path='Controls' {...this.props} />
    )
  }
}

const userInterfaces = {};

class UserInterface extends DynamicComponent {
  render() {
    return (
      <DynamicComponent store={userInterfaces} path='UserInterface' {...this.props} />
    )
  }
}


module.exports = { Control, UserInterface };
