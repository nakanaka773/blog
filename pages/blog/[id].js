import Header from "@/components/Header";
import Writer from "@/components/Writer";
import { client } from "@/libs/client";
import sanitizeHtml from 'sanitize-html';
import styles from '../../styles/id.module.css';
import Prism from "prismjs";
import "prismjs/components/prism-javascript"; 
import { useEffect } from "react";
import 'prismjs/themes/prism.css';

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({endpoint: "blognana", contentId: id})
    


    return {
        props: {
            blog: data,
        },
    };
    

};


export const getStaticPaths = async () => {
    const data = await client.get({endpoint:"blognana"})
    const paths = data.contents.map((content) => `/blog/${content.id}`);
    return{
        paths,
        fallback:false,
    };
};



export default function BlogId({ blog }) {

    useEffect(() => {
        Prism.highlightAll();
      }, []);

    return(
        <main>
            <Header />
            <div className={styles.contents}>
            <div className={styles.content}>
                <h1 className={styles.title}>{blog.title}</h1>
                <p className={styles.publishdate}>{new Date(blog.publishedAt).toISOString().split('T')[0]}</p>
                <img className={styles.topImg} src={blog.topImg.url} alt="" />
                <div dangerouslySetInnerHTML={{__html: blog.body}}></div>
            </div>
            <Writer className={styles.writer} />
            </div>
        </main>
        
    );
}