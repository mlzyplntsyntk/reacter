var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
import {
  BrowserRouter,
  Link,
  Route,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      ctx: null,
      width: 0,
      height: 0,
      image: null,
      scale: 5,
      posx: -1000,
      posy: -200,
      ev: false,

      begx:0,
      begy:0,
      begposx:0,
      begposy:0
    }
  }

  set(props) {
    this.setState(props);
    this.drawCurrent();
  }

  drawCurrent() {

    setTimeout(()=>{
      if (this.state.ctx == null) return;

      this.state.ctx.canvas.width = this.state.width;
      this.state.ctx.canvas.height = this.state.height;
      this.state.ctx.clearRect(0, 0, this.state.width, this.state.height);
      this.state.ctx.scale(this.state.scale, this.state.scale);

      if (this.state.image != null) {
        this.state.ctx.drawImage(this.state.image, this.state.posx, this.state.posy);
      }

    }, 10);

  }

  componentDidMount() {

    $(window).on("resize", (e) => {
      this.set({
        width: $(window).width(),
        height: $(window).height()
      });
      this.drawCurrent();
    }).trigger("resize");

    $.ajax({
      url: "/assets/world.svg",
      dataType: "text"
    }).done((result) => {
      var img = new Image();
      img.onload = () => {
        this.set({ image:img });
      };
      img.src = "data:image/svg+xml," + encodeURIComponent(result);
    });

    this.set({
      ctx: this.refs.map.getContext('2d')
    });
  }

  mapDown(e) {
    const touch = e.touches[0];
    this.setState({
      ev:true,

      begx:touch.clientX,
      begy:touch.clientY,
      begposx:this.state.posx,
      begposy:this.state.posy
    })
  }

  mapUp(e) {
    this.setState({
      ev:false
    })
  }

  mapMove(e) {
    if (this.state.ev) {
      const touch = e.touches[0];

      var newX = this.state.begposx - ((this.state.begx - (touch.clientX)) / this.state.scale);
      var newY = this.state.begposy - ((this.state.begy - (touch.clientY)) / this.state.scale);

      //var limitX = this.state.ctx.canvas.width-(this.state.image.width);
      //var limitY = this.state.ctx.canvas.height-(this.state.image.height);

      //if (newX < limitX) newX = limitX;
      //if (newY < limitY) newY = limitY;

      //if (newX > 0) newX = 0;
      //if (newY > 0) newY = 0;

      this.set({
        posx: newX,
        posy: newY
      })
    }
  }

  render() {
      return (
        <canvas ref="map"
          onTouchMove={this.mapMove.bind(this)}
          onTouchEnd={this.mapUp.bind(this)}
          onTouchStart={this.mapDown.bind(this)}></canvas>
      );
    }
/*
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
	}*/
}

ReactDOM.render(<App />, document.getElementById('app'));
