import React, { useState, useRef } from 'react';
import styles from './Home.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const slides = [
  {
    title: "Banking For A New World",
    text: "We at Vertex Bank belive in delivering the best services to our customers in this new and growing world",
    imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];

const Home = () => {
  const slideRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLeftClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

    const currentSlide = slideRefs.current[activeIndex];
    const nextSlide = slideRefs.current[nextIndex];

    currentSlide.setAttribute("data-status", "after");

    nextSlide.setAttribute("data-status", "becoming-active-from-before");

    setTimeout(() => {
      nextSlide.setAttribute("data-status", "active");
      setActiveIndex(nextIndex);
    });
  };

  const handleRightClick = () => {
    const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

    const currentSlide = slideRefs.current[activeIndex];
    const nextSlide = slideRefs.current[nextIndex];

    currentSlide.setAttribute("data-status", "before");

    nextSlide.setAttribute("data-status", "becoming-active-from-after");

    setTimeout(() => {
      nextSlide.setAttribute("data-status", "active");
      setActiveIndex(nextIndex);
    });
  };

  console.log(slideRefs.current);
  return (
    <>
      <main style={{ height: '100vh', marginBottom: '100px', fontSize: "150%" }}>
        {[...slides, ...slides].map((ele, ind) => (
          <article key={ind} data-index={ind} data-status={ind === 0 ? "active" : "inactive"} ref={e => slideRefs.current[ind] = e}>
            <div style={{ backgroundImage: `url(${ele.imageUrl})` }} className={`${styles.articleimagesection} ${styles.articlesection}`}></div>
            <div className={`${styles.articledescriptionsection} ${styles.articlesection}`}>
              <p>{ele.text}</p>
            </div>
            <div className={`${styles.articletitlesection} ${styles.articlesection}`}>
              <h2>{ele.title}</h2>
            </div>
            <div className={`${styles.articlenavsection} ${styles.articlesection}`}>
              <button className={`${styles.articlenavbutton}`} type="button" onClick={handleLeftClick}>
                <FontAwesomeIcon icon={faArrowLeftLong} />
              </button>
              <button className={`${styles.articlenavbutton}`} type="button" onClick={handleRightClick}>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </button>
            </div>
          </article>
        ))}
      </main>
    </>
  );
};

export default Home;