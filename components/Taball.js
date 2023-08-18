import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './Taball.module.css';

const Taball = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div>
            <Tabs className={styles.taball} selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
                <TabList className={styles.tab_title}>
                    <Tab className={`${styles.tab} ${selectedIndex === 0 ? styles.selected : ''}`}>全記事</Tab>
                    <Tab className={`${styles.tab} ${selectedIndex === 1 ? styles.selected : ''}`}>React</Tab>
                    <Tab className={`${styles.tab} ${selectedIndex === 2 ? styles.selected : ''}`}>アルゴリズム</Tab>
                    <Tab className={`${styles.tab} ${selectedIndex === 3 ? styles.selected : ''}`}>人生</Tab>
                </TabList>
                <TabPanel>
                    <h1>HOMEです</h1>
                </TabPanel>
                <TabPanel>
                    <h1>Aboutです</h1>
                </TabPanel>
                <TabPanel>
                    <h1>Contactです</h1>
                </TabPanel>
                <TabPanel>
                    <h1>人生だよん</h1>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Taball;
