import Header from "@/components/Header";
import Writer from "@/components/Writer";
import { client } from "@/libs/client";
import sanitizeHtml from 'sanitize-html';
import styles from '../../styles/id.module.css';



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
    const cleanHtml = sanitizeHtml(blog.body, {
        allowedTags: ['b', 'i', 'em', 'strong', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'ul', 'li', 'ol', 'br', 'span', 'img', 'code'],
        allowedAttributes: {
            'a': [ 'href' ],
            'img': [ 'src' ]
        },
        selfClosing: ['img', 'br'],
        allowedSchemes: ['http', 'https', 'ftp', 'mailto'],
        transformTags: {
            'a': sanitizeHtml.simpleTransform('a', {rel: 'nofollow'})
        }
    });

    return(
        <main>
            <Header />
            <div className={styles.contents}>
            <div className={styles.content}>
                <h1 className={styles.title}>{blog.title}</h1>
                <p className={styles.publishdate}>{new Date(blog.publishedAt).toISOString().split('T')[0]}</p>
                <img className={styles.topImg} src={blog.topImg.url} alt="" />
                <div dangerouslySetInnerHTML={{__html: cleanHtml}}></div>
            </div>
            <Writer className={styles.writer} />
            </div>
        </main>
    );
}