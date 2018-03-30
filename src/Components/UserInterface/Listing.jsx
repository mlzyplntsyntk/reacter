import React from 'react';
import ReactDOM from 'react-dom';
import {
  Link
} from 'react-router-dom';

class Listing extends React.Component {
  render() {
    console.log(this.props.ent);
    return (
      <div className="content listing">
        {this.props.type}
        <Link to={"/" + this.props.ent.name + "/Detail"}>New Record</Link>
      </div>
    )
  }
}

module.exports = Listing;
