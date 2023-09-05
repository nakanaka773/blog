import React, { useState } from 'react';
import { Tab, Tabs, TabPanel } from 'react-tabs';
import tabstyles from './../components/Taball.module.css';
import TabList from '../components/TabList';
import BlogList from '../components/BlogList';
import { client } from '@/libs/client';
import Header from '@/components/Header';
import Writer from '@/components/Writer';

import styles from './../styles/top.module.css';


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

  const filteredBlogs = (category) => {
    return blog.filter((blogItem) => blogItem.category == category);
  };

  return (
    <div className={styles.content}>
      <Header />
      
      <Tabs className={tabstyles.taball} selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
        <TabList selectedIndex={selectedIndex} onSelect={setSelectedIndex} />
        
        {/* タブが切り替わるたびに、選択されたカテゴリーのブログを表示 */}
        <TabPanel>
          <BlogList blogs={blog} />
        </TabPanel>
        <TabPanel>
          <BlogList blogs={filteredBlogs("react")} />
        </TabPanel>
        <TabPanel>
          <BlogList blogs={filteredBlogs("algo")} />
        </TabPanel>
        <TabPanel>
          <BlogList blogs={filteredBlogs("life")} />
        </TabPanel>
      </Tabs>
      <Writer />
    </div>
  );
}
