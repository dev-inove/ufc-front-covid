import React, { useEffect, useState } from "react";
import api from "../../services/api-back";
import { Form, Button, Col, Jumbotron, Image } from "react-bootstrap";
import Img1 from "../../assets/img/covid-mask.jpg";
import Header from "../../components/Header/Navbar";
// import Footer from "../../components/Footer";

import "./style.scss";

const ListActions = () => {
  return (
    <>
      <Header />
      <div className="page">
        <div className="page-title">
          <h1>Ações</h1>
          <hr />
        </div>
        <div className="page-form">
          <Form>
            <Form.Row>
              <Col>
                <Form.Control
                  column="lg"
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Pesquisar Ações"
                />
              </Col>
              <Col>
                <Button size="lg" className="page-btn" type="submit">
                  Pesquisar
                </Button>
              </Col>
            </Form.Row>
          </Form>
          <div className="selector">
            <Form.Label>Select Category</Form.Label>
            <Form.Control as="select">
              <option>Cat1</option>
              <option>Cat2</option>
              <option>Cat3</option>
              <option>Cat4</option>
              <option>Cat5</option>
            </Form.Control>
          </div>
        </div>
        <div className="page-listActions">
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
          <Jumbotron id="jumbo-listAction">
            <div className="jumbo-listAction-content">
              <h1>
                <strong>Combatemos o Coronga e vencemos!</strong>
              </h1>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill. There is no minimum
                donation, any sum is appreciated - click here to donate using
                PayPal. Thank you for your support.
              </p>

              <Button className="page-btn page-btn2">Ver mais...</Button>
            </div>
            <Image src={Img1} className="jumbo-listAction-image" fluid />
          </Jumbotron>
        </div>
      </div>
    </>
  );
};

export default ListActions;
