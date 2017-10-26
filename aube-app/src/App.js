import React, { Component } from 'react';
import logo from './logo.png';
import sample1 from './sample/P6090667.JPG';
import sample2 from './sample/P6100712.JPG';
import sample3 from './sample/P6100750.JPG';
import './App.css';
import { slide as Menu } from 'react-burger-menu';
import OwlCarousel from 'react-owl-carousel';
import { SpringGrid } from 'react-stonecutter';
import StackGrid, {transitions}  from 'react-stack-grid';
import sizeMe from 'react-sizeme';

const { scaleDown } = transitions;


class App extends Component {

  constructor(props) {
        super(props);
     this.list = [
  {
    "title": "Macro Nuts Almond Kernals Natural   250g",
    "source": sample1,
    "country": "",
    "category": "",
    "desc": "When it comes to our food we believe it's what's inside that counts. That's why macro is made from 100% natural ingredients. Pure and simple, just the way natural intended.",
    "remarks": "No artificial colours, flavours or preservatives.",
    "": ""
  },
  {
    "title": "Woolworths Select Australian Honey Twist & Squeeze 375g",
    "source": sample2,
    "country": "Australia",
    "category": "",
    "desc": "",
    "remarks": "100% natural.",
    "": ""
  },
  {
    "title": "Woolworths  Pepper Grinder Medley 45g",
    "source": sample3,
    "country": "Australia",
    "category": "",
    "desc": "",
    "remarks": "Black Peppercorns (55%), White Peppercorns (30%), Green Peppercorns (15%).",
    "": ""
  },
  {
    "title": "Woolworths  Sea Salt Grinder 110g",
    "source": sample2,
    "country": "Australia",
    "category": "",
    "desc": "",
    "remarks": "Sea Salt (100%)",
    "": ""
  },
  {
    "title": "Woolworths Pasta Spaghetti 500g",
    "source": sample1,
    "country": "Australia",
    "category": "",
    "desc": "Woolworths Pasta is made in partnership with 100% Australian, family owned company, using a traditional recipe by a dedicated and passionate team of experts. Quality you can enjoy everyday!",
    "remarks": "",
    "": ""
  },
  {
    "title": "Woolworths  Pepper Grinder Medley 45g",
    "source": sample3,
    "country": "Australia",
    "category": "",
    "desc": "",
    "remarks": "Black Peppercorns (55%), White Peppercorns (30%), Green Peppercorns (15%).",
    "": ""
  },
  {
    "title": "Woolworths  Sea Salt Grinder 110g",
    "source": sample2,
    "country": "Australia",
    "category": "",
    "desc": "",
    "remarks": "Sea Salt (100%)",
    "": ""
  },
  {
    "title": "Woolworths Pasta Spaghetti 500g",
    "source": sample1,
    "country": "Australia",
    "category": "",
    "desc": "Woolworths Pasta is made in partnership with 100% Australian, family owned company, using a traditional recipe by a dedicated and passionate team of experts. Quality you can enjoy everyday!",
    "remarks": "",
    "": ""
  },
  {
    "title": "Woolworths  Pepper Grinder Medley 45g",
    "source": sample3,
    "country": "Australia",
    "category": "",
    "desc": "",
    "remarks": "Black Peppercorns (55%), White Peppercorns (30%), Green Peppercorns (15%).",
    "": ""
  },
  {
    "title": "Woolworths  Sea Salt Grinder 110g",
    "source": sample2,
    "country": "Australia",
    "category": "",
    "desc": "",
    "remarks": "Sea Salt (100%)",
    "": ""
  },
  {
    "title": "Woolworths Pasta Spaghetti 500g",
    "source": sample1,
    "country": "Australia",
    "category": "",
    "desc": "Woolworths Pasta is made in partnership with 100% Australian, family owned company, using a traditional recipe by a dedicated and passionate team of experts. Quality you can enjoy everyday!",
    "remarks": "",
    "": ""
  }
];
    this.state = {
            filter: "",
            list : this.list,
            columnWidth: 0.1*window.innerWidth,
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


    this.onSize = this.onSize.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

  handleClick() {
      this.setState({
        list: this.shuffle(this.list)
      },()=>{this.grid.updateLayout()})
    }

  onSize(size) {
      this.setState({
          columnWidth: 0.25*window.innerWidth
      },()=>{this.grid.updateLayout()});
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
              columnWidth={140+0.10*window.innerWidth}
              gutterWidth={10}
              gutterHeight={10}
              monitorImagesLoaded={true}>
                {this.state.list
                  .map((l, i) => (
                  <div className="card">
                    <img className="image" width="100%" height="100%" src={l.source}/>
                    <div className="details">
                      <h4>{l.title}</h4>
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


// Create the config
const config = { monitorWidth: true };

// Call SizeMe with the config to get back the HOC.
const sizeMeHOC = sizeMe(config);

// Wrap your component with the HOC.
var logo_container = {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        background: 'red'
}

export default sizeMeHOC(App);

