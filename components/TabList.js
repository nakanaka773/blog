import React from 'react';
import { Tab } from 'react-tabs';
import tabstyles from './../components/Taball.module.css';



function TabList({ selectedIndex, onSelect }) {
  const tabs = ["全記事", "React", "アルゴリズム", "その他"];

  return (
    <div className={tabstyles.tab_title}>
      {tabs.map((title, index) => (
        <Tab
          key={index}
          className={`${tabstyles.tab} ${selectedIndex === index ? tabstyles.selected : ''}`}
          onClick={() => onSelect(index)}
        >
          {title}
        </Tab>
      ))}
    </div>
  );
}

export default TabList;
