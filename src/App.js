import React from 'react';
import './TrangChu.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.openmenu = this.openmenu.bind(this);
  }
  openmenu() {
    document.getElementById('side-menu').style.display = "block";
    document.getElementById('menu-btn').style.display = "none";
    document.getElementById('close-btn').style.display = "block";
  }
  closemenu = () => {
    document.getElementById('side-menu').style.display = "none";
    document.getElementById('menu-btn').style.display = "block";
    document.getElementById('close-btn').style.display = "none";
  }
  render() {
    return (
      <>
        <div className="top-nav-bar">
          <div className="search-box">
            <i className="fas fa-bars" id="menu-btn" onClick={this.openmenu}></i>
            <i className="fas fa-times" id="close-btn" onClick={this.closemenu}></i>
            <img className="logo" alt="logo" src="data:image/jpeg;base64,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"></img>
            <input type="text" className="form-control"></input>
            <span className="input-group-text"><i className="fas fa-search"></i></span>
          </div>
          <div className="menu-bar">
            <ul>
              <li><a href="##"><i className="fas fa-shopping-basket"></i>cart</a></li>
              <li><a href="##">Sign Up</a></li>
              <li><a href="##">Log In</a></li>
            </ul>
          </div>
        </div>
        <section className="header">
          <div className="side-menu" id="side-menu">
            <ul>
              <li>On Sale<i className="fas fa-angle-right"></i>
                <ul>
                  <li>Sub Menu-1</li>
                  <li>Sub Menu-1</li>
                  <li>Sub Menu-1</li>
                  <li>Sub Menu-1</li>
                </ul>
              </li>
              <li>Mobiles<i className="fas fa-angle-right"></i>
                <ul>
                  <li>Sub Menu-2</li>
                  <li>Sub Menu-2</li>
                  <li>Sub Menu-2</li>
                  <li>Sub Menu-2</li>
                </ul>
              </li>
              <li>Computers<i className="fas fa-angle-right"></i>
                <ul>
                  <li>Sub Menu-3</li>
                  <li>Sub Menu-3</li>
                  <li>Sub Menu-3</li>
                  <li>Sub Menu-3</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="slider">
            <div id="slider" className="carousel slide carousel-fade" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/1.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="images/2.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="images/3.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="images/4.png" className="d-block w-100" alt="..." />
                </div>
              </div>
              <ol className="carousel-indicators">
                <li data-target="#slider" data-slide-to="0" className="active"></li>
                <li data-target="#slider" data-slide-to="1"></li>
                <li data-target="#slider" data-slide-to="2"></li>
                <li data-target="#slider" data-slide-to="3"></li>
              </ol>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default App;
