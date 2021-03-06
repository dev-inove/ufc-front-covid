import React from "react";
// import Header from './components/Header';
// import Necessities from "../../components/Necessities/Necessities";
// import Productions from "../../components/Productions";
import "../../styles/main.scss";

import Header from "../../components/Header";
import Actions from "../../components/Actions/Actions";
import Call from "../../components/CalltoAction/CallToAction";
import Footer from "../../components/Footer";
import TableInfos from "../../components/Header/TableInfos";

const Home = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Actions />
        <TableInfos />
        <Call />
        {/* <Productions /> */}
        {/* <Necessities /> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
