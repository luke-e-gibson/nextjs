import React from "react";
import ArtStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

export default function Article({ Articles }) {
  return (
    <div className={ArtStyles.grid}>
      {Articles.map((article) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  );
}
