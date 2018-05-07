import React from 'react';
import './App.css';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Readings from '../components/Readings';
import Contact from '../components/Contact';
import Footer from '../components/Footer';




class Home extends React.Component {

   render() {
      return (
        <div className="Home">
         <Navbar history={this.props.history}/>
         <About/>
         <Readings/>
         <Contact history={this.props.history}/>
         <Footer/>
        </div>
      );
    }
  }



export default Home;
