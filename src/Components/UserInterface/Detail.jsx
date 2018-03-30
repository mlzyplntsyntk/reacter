import React from 'react';
import ReactDOM from 'react-dom';
import {
  Link
} from 'react-router-dom';
import {
  Control
} from '../Common.jsx';

class Detail extends React.Component {
  render() {
    return (
      <div className="content detail">
        {this.props.ent.name}
        <br/>
        {
          this.props.ent.fields.map((fld)=>{
            return (
              <div className="form-group" key={fld.name}>
                <label className="control-label">{fld.name}</label>
                <Control type={fld.type} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

module.exports = Detail;
