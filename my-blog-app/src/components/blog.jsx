import axios from "axios";
import React, { useEffect, useState } from "react";
import "./blog.css";

export default function Blog({ post }) {
  const [featuredImage, setFeaturedimage] = useState();

  const getImage = () => {
    axios
     .get(post?._links["wp:featuredmedia"][0]?.href)
     .then((response) => {
      setFeaturedimage(response.data.source_url);
    });
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="container">
      <div className="blog-container">
        <p className="blog-date">
          {new Date(Date.now()).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h2 className="blog-title">{post.title.rendered}</h2>
        <p
          className="blog-excerpt"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
        <img src={featuredImage} class="mask" />
      </div>
    </div>
  );
}