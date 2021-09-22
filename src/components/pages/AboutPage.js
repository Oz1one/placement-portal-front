import React, { useState, useEffect } from "react";
import './AboutPage.scss'

function AboutPage() {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
    <>
      <div className="Parallax__content__heading">
        <h1 className="Parallax__content__heading__text">CDAC</h1>
        <h2 className="Parallax__content__heading__caption">
          Campus Placement Forum
        </h2>
      </div>
      <div className="Parallax__content__cta">
        <p>
          <b>The idea is about providing one common platform</b> to get all the placement related information like
        </p>
        <p>
          <b>personal, educational, professional, project</b> and all interview related details of the CDAC students.

        </p>
        
      </div>
    </>
  );

  return (
    <section className="Parallax">
      <div
        className="Parallax__background"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      />
      <div
        className="Parallax__background-triangles"
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      />
      <div className="Parallax__content">{renderContent()}</div>
    </section>
  );
}

export default AboutPage
