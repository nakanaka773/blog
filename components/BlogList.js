import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


function BlogList({ blogs }) {
  return (
    <div className={styles.blogall}>
      {blogs.map((blog) => (
        <Link key={blog.id} href={`blog/${blog.id}`} passHref>
          <div className={styles.box}>
            <img className={styles.topImg} src={blog.topImg.url} alt="" />
            <p className={styles.publishdate}>{new Date(blog.publishedAt).toISOString().split('T')[0]}</p>
            <h3 className={styles.title}>{blog.title}</h3>
            <p className={styles.content}>{blog.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogList;
