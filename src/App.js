import React from 'react';
import css from './css/style.css';
import mt from './images/mt-swit.jpg';
import one from './images/1.jpg';

const App = () => {
  const intro = "I'm a full-stack software engineer experienced with Javascript, HTML5, CSS3, React, Node.js, Express, MongoDB, MySQL, PostgreSQL, etc. and I always love to learn new technologies. I enjoy creating and collaborating with others making full stack web applications.";

  return (
    <div className="container">
      <div className="headerContainer">

        <div className="header">

          <h1 className="underline">Hi, my name is Jordis Man</h1>
          <p className="content">{intro}</p>
        </div>
      </div>


      <div className="item1">pro1</div>
      <div className="item2">pro2</div>
      <div className="item3">pro3</div>
      <div className="item4">pro4</div>
      <div className="item5">pro5</div>
      <div className="item6">pro6</div>
      <div className="item7">7</div>
      <div className="item8">8</div>
      <div className="item9">9</div>
      <div className="item10">10</div>
      <div className="footer">footer</div>
      <div className="contact">contact</div>
    </div>
  );
}

export default App;
