import React from "react";
import HeaderStyles from "../styles/Header.module.css";

function Header() {
  return (
    <div>
      <h1 className={HeaderStyles.titles}>
        <span>WebDev</span> News
      </h1>
      {/* a discripton of todays news */}
      <p className={HeaderStyles.description}>
        A collection of web development news.
      </p>
    </div>
  );
}

export default Header;
