import Header from '@/components/Header';
import { client } from '@/libs/client';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import tabstyles from './../components/Taball.module.css';
import Writer from '@/components/Writer';




export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blognana" });
  return {
    props: {

      blog: data.contents,
    },

  };

};

export default function Home({ blog }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <Header />
      
      <Tabs className={tabstyles.taball} selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
        <TabList className={tabstyles.tab_title}>
          <Tab className={`${tabstyles.tab} ${selectedIndex === 0 ? tabstyles.selected : ''}`}>全記事</Tab>
          <Tab className={`${tabstyles.tab} ${selectedIndex === 1 ? tabstyles.selected : ''}`}>React</Tab>
          <Tab className={`${tabstyles.tab} ${selectedIndex === 2 ? tabstyles.selected : ''}`}>アルゴリズム</Tab>
          <Tab className={`${tabstyles.tab} ${selectedIndex === 3 ? tabstyles.selected : ''}`}>その他</Tab>
        </TabList>
        <TabPanel>
          <div className={styles.blogall}>
            {blog.map((blog) => (
              <Link className={styles.link} href={`blog/${blog.id}`}>
                <div className={styles.box}>
                  <img className={styles.topImg} src={blog.topImg.url} alt="" />
                  <p className={styles.publishdate}>{new Date(blog.publishedAt).toISOString().split('T')[0]}</p>

                  <h3 className={styles.title}>{blog.title}</h3>
                  <p className={styles.content}>{blog.content}</p>
                </div>
              </Link>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className={styles.blogall}>
            {blog
              .filter((blog) => blog.category == "react")
              .map((blog) => (
                <Link className={styles.link} href={`blog/${blog.id}`}>
                  <div className={styles.box}>
                    <img className={styles.topImg} src={blog.topImg.url} alt="" />
                    <p className={styles.publishdate}>{new Date(blog.publishedAt).toISOString().split('T')[0]}</p>
                    <h3 className={styles.title}>{blog.title}</h3>
                    <p className={styles.content}>{blog.content}</p>
                  </div>
                </Link>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className={styles.blogall}>
            {blog
              .filter((blog) => blog.category == "algo")
              .map((blog) => (
                <Link className={styles.link} href={`blog/${blog.id}`}>
                  <div className={styles.box}>
                    <img className={styles.topImg} src={blog.topImg.url} alt="" />
                    <p className={styles.publishdate}>{new Date(blog.publishedAt).toISOString().split('T')[0]}</p>
                    <h3 className={styles.title}>{blog.title}</h3>
                    <p className={styles.content}>{blog.content}</p>
                  </div>
                </Link>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className={styles.blogall}>
            {blog
              .filter((blog) => blog.category == "life")
              .map((blog) => (
                <Link className={styles.link} href={`blog/${blog.id}`}>
                  <div className={styles.box}>
                    <img className={styles.topImg} src={blog.topImg.url} alt="" />
                    <p className={styles.publishdate}>{new Date(blog.publishedAt).toISOString().split('T')[0]}</p>
                    <h3 className={styles.title}>{blog.title}</h3>
                    <p className={styles.content}>{blog.content}</p>
                  </div>
                </Link>
              ))}
          </div>
        </TabPanel>
      </Tabs>
      <Writer />

    </div>
  )
}

