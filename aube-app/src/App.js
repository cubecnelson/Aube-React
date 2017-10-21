import React, { Component } from 'react';
import logo from './logo.png';
import sample1 from './sample/P6090667.JPG';
import sample2 from './sample/P6100712.JPG';
import sample3 from './sample/P6100750.JPG';
import './App.css';
import { slide as Menu } from 'react-burger-menu';
import OwlCarousel from 'react-owl-carousel';
import StackGrid from "react-stack-grid";


class App extends Component {




  constructor(props) {
        super(props);
     this.list = [
        {
          source: sample2,
          title: "Macro Nuts Almond Kernals Natural 250g",
          desc: "When it comes to our food we believe it's what's inside that counts. That's why macro is made from 100% natural ingredients. Pure and simple, just the way natural intended."
        },
        {
          source: sample3,
          title: "Woolworths Select Australian Honey Twist & Squeeze 375g",
          desc: "When it comes to our food we believe it's what's inside that counts. That's why macro is made from 100% natural ingredients. Pure and simple, just the way natural intended."
        },
        {
          source: sample1,
          title: "Woolworths Pepper Grinder Medley 45g",
          desc: "When it comes to our food we believe it's what's inside that counts. That's why macro is made from 100% natural ingredients. Pure and simple, just the way natural intended."
        },
        {
          source: sample2,
          title: "Woolworths Sea Salt Grinder 110g",
          desc: "Woolworths Pasta is made in partnership with 100% Australian, family owned company, using a traditional recipe by a dedicated and passionate team of experts. Quality you can enjoy everyday!  "
        },
        {
          source: sample3,
          title: " Woolworths Pasta Spaghetti 500g",
          desc: "Woolworths Pasta is made in partnership with 100% Australian, family owned company, using a traditional recipe by a dedicated and passionate team of experts. Quality you can enjoy everyday!  "
        },
        {
          source: sample3,
          title: "Woolworths Pasta Spaghetti 500g",
          desc: "Woolworths Pasta is made in partnership with 100% Australian, family owned company, using a traditional recipe by a dedicated and passionate team of experts. Quality you can enjoy everyday!  "
        }
      ];
    this.state = {
            filter: "",
            options: {
                loop: true,
                nav: false,
                dots: false,
                autoplay: true,
                stagePadding: 50,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    }
                }
            },
        };


    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
      this.setState({
        filter: 'Ocean'
      }, () => {
      this.grid.updateLayout();});
    }

  render() {

    return (
      <div className="App" >
        <Menu pageWrapId={ "page-wrap" }  >
          <div id="home" className="menu-item title-font" >Home</div>
          <a href="#about-us"><div id="menu-about-us" className="menu-item title-font">About Us</div></a>
          <a href="#categories"><div id="menu-categories" className="menu-item title-font" >Categories</div></a>
          <a href="#contact-us"><div className="menu-item--small title-font">Settings</div></a>
        </Menu>
        <div id="page-wrap">
          <div className="App-header page" >
              <div className="circle">
                <img src={logo}/>
              </div>
          </div>

          <div className="App-about" id="about-us">
              <h1 className="title-font large-font">About Us</h1>
              <p>
              "Yue" according to ancient legend was a magic pearl, splendid and magnificent as the moon !
              "We at Aube International, we are health conscious about food products and as the name "Yue" suggests, 
               we bring the best products from Australia , Belgium and Europe to our customers with the simple 
               criterium : we don't recommend it, if we don't want it ourselves."
               </p>
          </div>

          <hr/>

          <div className="App-categories" id="categories">
              <h1 className="title-font large-font">Categories</h1>
              <OwlCarousel 
                responsiveClass = {true}
                className="owl-theme carousel"
                {...this.state.options}
              >
                  <div className="item tint t2" onClick={this.handleClick}><h1 className="item-header title-font large-font">Nut Bar</h1><img className="tint-img" src={sample1}/></div>
                  <div className="item tint t3"><h1 className="item-header title-font large-font">Honey</h1><img className="tint-img" src={sample2}/></div>
                  <div className="item tint t4"><h1 className="item-header title-font large-font">Nut Bar</h1><img className="tint-img" src={sample3}/></div>
                  <div className="item tint t2"><h1 className="item-header title-font large-font">Honey</h1><img className="tint-img" src={sample1}/></div>
              </OwlCarousel>
          </div>

          <div className="App-categories" id="categories">
              <h1 className="title-font large-font" >Products</h1>
              
            <StackGrid
              gridRef={grid => this.grid = grid}
              columnWidth={300}
              gutterWidth={15}
              gutterHeight={15}
            >
                {this.list
                  .filter(l => (l.title == this.state.filter || this.state.filter == ""))
                  .map((l, i) => (
                  <div className="card">
                    <img width="100%" height="100%" src={l.source}/>
                    <div className="details">
                      <h8 className="title-font normal-font">{l.title}</h8>
                      <div row="4">
                        {l.desc} 
                      </div>
                    </div>
                  </div>
                ))}
            </StackGrid>
          
          </div>

          <hr/>
          <div className="page" id="contact-us">
              <h1 className="title-font large-font">Contact Us</h1>
              
          </div>

        </div>


        
      </div>
    );
  }
}

var logo_container = {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        background: 'red'
}

export default App;
