import React from "react";
import { NavLink } from "react-router-dom";
import "./Body.css";

const Body = () => {
  return (
    <section id="home">
      <div class="caption">
        <h2>Distance Learning Education Center</h2>
        <h4>
          Our online courses are designed to fit in your industry supporting
          all-round with latest technologies.
        </h4>
        <NavLink to="/features" className="section-btn">
          Discover more
        </NavLink>
      </div>

      <div class="caption">
        <h2>Start your journey with our practical courses</h2>
        <h4>
          Our online courses are built in partnership with technology leaders
          and are designed to meet industry demands.
        </h4>

        <NavLink to="/courses" className="section-btn">
          Take a course
        </NavLink>
      </div>

      <div class="caption">
        <h2>Efficient Learning Methods</h2>
        <h4>
          Nam eget sapien vel nibh euismod vulputate in vel nibh. Quisque eu ex
          eu urna venenatis sollicitudin ut at libero page.
        </h4>
        <NavLink to="/contact" className="section-btn">
          Let's chat
        </NavLink>
      </div>
    </section>
  );
};

export default Body;
