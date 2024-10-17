import React, { useEffect, useState } from "react";
import "../style/Blog.css";

function Blog() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    async function fetchBlog() {
      const res = await fetch("http://localhost:8000/api/v1/blogs");
      const data = await res.json();
      setBlogData(data.data.blogs);
    }
    fetchBlog();
  }, []);

  const [show, setShow] = useState(1);

  const fetchData = (i) => {
    const blog = blogData[i];
    return blog ? (
      <BlogPost src={blog.imageUrl} alt={blog.title} key={blog.id}>
        {blog.description}
      </BlogPost>
    ) : null;
  };

  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-posts">
          {fetchData(show - 1)} {/* Adjust for 0-based index */}
        </div>
        <Pagination show={show} setShow={setShow} />
      </div>
    </section>
  );
}

function BlogPost({ children, src, alt }) {
  return (
    <div className="blog-post">
      <div className="post-img">
        <img src={src} alt={alt} />
      </div>
      <div className="blog-info">
        <p className="admin">By Admin March 24, 2021</p>
        <h3>
          Uompe Qrear High Ecent Nche Without Some Prinlc Uomp Without Some
          Qreari High Ecent
        </h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

function Pagination({ show, setShow }) {
  return (
    <div className="pagination">
      {[1, 2, 3, 4].map((number) => (
        <p
          key={number}
          className={show === number ? "active" : ""}
          onClick={() => setShow(number)}
        >
          {number}
        </p>
      ))}
    </div>
  );
}

export default Blog;
