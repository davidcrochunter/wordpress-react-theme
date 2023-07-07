import React, { useEffect, useState } from 'react'
import axios from "axios"
import Blog from './components/blog';

export default function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get("http://localhost/wordpress-react/wp-json/wp/v2/posts")
      .then((res) => {
        setPosts(res.data);
      });
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      {posts.map((item) => (
        <Blog
          post={item}
        />
      ))}
    </div>
  )
}