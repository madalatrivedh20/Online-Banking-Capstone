import React, { useRef } from 'react';
import '../style/Home.css';

import { Link } from 'react-router-dom';

const Home = () => {
  const menuRef = useRef();
  return (
    <div>
      <div id="menu" ref={menuRef}>
        <div id="menu-items">
          {[{ text: "Home", to: "/" }, { text: "About", to: "/" }, { text: "Login", to: '/login' }]
            .map((element, index) =>
              <Link
                to={`${element.to}`}
                className="menu-item"
                onMouseOver={e => menuRef.current.dataset.activeIndex = index}>
                {element.text}
              </Link>)}
        </div>
        {/* <div id="menu-background-pattern"></div> */}
        {/* <div id="menu-background-image"></div> */}
      </div>
    </div>
  );
};

export default Home;