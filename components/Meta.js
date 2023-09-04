import Header from "./Header";
import Head from "next/head"

const Meta = (({keywords,title,description}) => {
    return(
        <div>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charset="UTF-8" />
            <link rel="icon" href="/favicon.icon" />
            <title>{title}</title>
        </Head>
            
        </div>
       )
})

Meta.defaultProps = {
    title : "WebDev News",
    keywords : "Web development, programming",
    description : "Get the latest news of web dev"
}


export default Meta
