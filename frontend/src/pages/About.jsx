import React from 'react';
import './Css/About.css';

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Your daily dose of stories, insights, and inspiration.</p>
      </div>

      <div className="about-content">
        <section>
          <h2>Who We Are</h2>
          <p>
            Welcome to <strong>Blogger</strong>, a modern blogging platform where thoughts meet creativity.
            We aim to provide meaningful, well-curated articles across various categories — from tech and design to lifestyle and personal growth.
            Our goal is to build a community of curious minds who love to explore ideas and share knowledge.
          </p>
        </section>

        <section>
          <h2>What We Offer</h2>
          <p>
            Whether you're here to read thought-provoking blogs or simply explore fresh perspectives,
            we bring you engaging content that informs, educates, and inspires.
            All our posts are structured with readability and value in mind.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            We believe stories have power. Our mission is to empower creators, connect with readers, and foster meaningful conversations through writing.
            We continuously strive to bring quality content and intuitive reading experience to everyone.
          </p>
        </section>

        <section>
          <h2>Join Our Journey</h2>
          <p>
            This blog is evolving and growing — and you’re part of that journey.
            Whether you're a reader or an aspiring writer, we invite you to stay connected, share your thoughts, and keep exploring with us.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
