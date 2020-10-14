import React from 'react';
import "./styles/main.scss";
import Header from './components/Header';
import Necessities from './components/Necessities/Necessities';
import Productions from './components/Productions';
import Actions from './components/Actions/Actions';
import Call from './components/CalltoAction/CallToAction';
import Footer from './components/Footer';




const App = () => (
  <div className="App">
   
  <Header />
  <Actions />
  {/* <Productions /> */}
  <Call />
  {/* <Necessities /> */}
  <Footer />
 </div>
 
  );

export default App;