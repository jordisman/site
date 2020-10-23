import React from 'react';
import css from './css/style.css';

const App = () => {
  const intro = "I'm a full-stack software engineer experienced with Javascript, HTML5, CSS3, React, Node.js, Express, MongoDB, MySQL, PostgreSQL, etc. and I always love to learn new technologies. I enjoy creating and collaborating with others making full stack web applications.";

  return (
    <div className="container">
      <div className="headerContainer">
        <div className="header">
          <h1 className="underline">Hi, my name is Jordis Man</h1>
          <p>{intro}</p>
        </div>
      </div>


      <section className="item1">
        <div className="content">
          <img src="./images/pic02.jpg" alt="" />
          <h3 className="underline">
            Women2Work
          </h3>
          <p>
            A platform to support career seeking women during the crisis of COVID-19
          </p>
          <a href="https://github.com/jordisman/women2work" target="_blank">Github</a><br/>
          <a href="https://jordisman.github.io/women2work/" target="_blank">Website</a><br/>
          <a href="https://www.youtube.com/watch?v=0bh7mUWTsws&feature=youtu.be&ab_channel=Women2Work" target="_blank">Youtube</a>
        </div>
      </section>

      <section className="item2">
        <div className="content">
          <img src="./images/pic01.jpg" alt="" className="image" />
          <h3 className="underline">
            <a href="" className="h3link">Deepfryd
            </a>
          </h3>
          <p>
            A dynamic e-commerce product page for users to search for products info, availability and reviews. Fullstack customer comments & rating component replica of an electronic e-commerce website frys.com
          </p>
          <a href="https://github.com/hrr37-team-bender/jordisman-service" target="_blank">Github</a>
        </div>
      </section>





      <section className="item3">pro3</section>
      <section className="item4">pro4</section>
      <section className="item5">pro5</section>
      <section className="item6">pro6</section>
      <section className="item7">7</section>
      <section className="item8">8</section>
      <section className="item9">9</section>
      <section className="item10">10</section>
      <section className="footer">footer</section>
      <section className="contact">contact</section>
    </div>
  );
}

export default App;
