// import React, { useEffect, useState } from "react";
// import api from "../../services/api-back";
import React from "react";

import Header from "../../components/Header/Navbar";
import { Image } from "react-bootstrap";
import Img1 from "../../assets/img/covid-mask.jpg";
import Footer from "../../components/Footer";

import "./style.scss";

export default function Action() {
  // useEffect(() => {
  // async function load() {
  //   const { data } = await api.post("/sessions", {
  //     email: "bianor.alvaro12@gmail.com",
  //     password: "Alvim",
  //   });
  //   console.log(data);
  // }
  // load();
  // }, []);

  // const [email, setEmail] = useState("");
  // const [action, setAction] = useState([]);

  // async function submitt(e) {
  //   e.preventDefault();

  //   const { data } = await api.get(`/action?title=${email}`);

  //   setAction(data.action);
  // }

  return (
    <>
      <Header />
      <div className="Page">
        <div className="page-header">
          <h1>Title super foda e que vai mudar o mundo muito doido mano</h1>
          <div className="page-header-infos">
            <p>Data: 12/17/1998</p>
            <p>By: Alvim Maroto</p>
          </div>
          <div className="page-header-img">
            <Image src={Img1} thumbnail />
          </div>
        </div>
        <div className="text-description">
          <p>
            {/* <strong> */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            {/* </strong> */}
          </p>
        </div>
        <div className="text-content">
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoid
            worse pains. On the other hand, we denounce with righteous
            indignation and dislike men who are so beguiled and demoralized by
            the charms of pleasure of the moment, so blinded by desire, that
            they cannot foresee the pain and trouble that are bound to ensue;
            and equal blame belongs to those who fail in their duty through
            weakness of will, which is the same as saying through shrinking from
            toil and pain. These cases are perfectly simple and easy to
            distinguish. In a free hour, when our power of choice is
            untrammelled and when nothing prevents our being able to do what we
            like best, every pleasure is to be welcomed and every pain avoided.
            But in certain circumstances and owing to the claims of duty or the
            obligations of business it will frequently occur that pleasures have
            to be repudiated and annoyances accepted. The wise man therefore
            always holds in these matters to this principle of selection: he
            rejects pleasures to secure other greater pleasures, or else he
            endures pains to avoid worse pains.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
