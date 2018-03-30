var React = require('react');
var ReactDOM = require('react-dom');
import {
  BrowserRouter,
  Link,
  Route,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';

import {
  UserInterface
} from './Components/Common.jsx';

class App extends React.Component {

  getPackage(name) {
    return require('../app_modules/' + name + '/ent.json')
  }

	render() {
    const pkg = this.getPackage("docs");
		return (
      <BrowserRouter>
        <div className="container">
          <ul className="menu">
            <li key="Dashboard"><Link to="/">Dashboard</Link></li>
            {
              pkg.ents.map( el =>
                <li key={el.name}><Link to={ "/" +  el.name }>{el.name}</Link></li>
              )
            }
            <li key="Error"><Link to="/nothing">Error</Link></li>
          </ul>
          <Switch>
            <Route exact path="/"  render={props=>{
              return (<UserInterface type="Dashboard" />)
            }} />
            {
              pkg.ents.map( el =>
                <Route path={"/" + el.name + "/Detail"} render={ props => {
                  return (<UserInterface type="Detail" ent={el} />)
                }} />
              )
            }
            {
              pkg.ents.map( el =>
                <Route path={"/" + el.name} render={ props => {
                  return (<UserInterface type="Listing" ent={el} />)
                }} />
              )
            }
            <Route render={props=>{
              return (<UserInterface type="Error" />)
            }} />
          </Switch>
        </div>
      </BrowserRouter>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
