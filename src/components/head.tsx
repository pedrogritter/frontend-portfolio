
// React
import React from "react";

interface HeadProps {
    title?: string;
    description?: string;
    keywords?: string[];
}


const Head = (props: HeadProps) => {

    const title = props.title ? <title>`${props.title} | Front-End Dev`</title> : <title>`Pedro Gritter | Front-End Developer`</title>;

    const description = props.description  &&
        <>
          <meta
            name="description"
            content={props.description}
            key="description"
          />
          <meta
            property="og:description"
            content={props.description}
            key="og:description"
          />
        </>
        
    const keywords = props.keywords && Array.isArray(props.keywords) && <meta
        name="keywords"
        content={props.keywords.join(', ')}
        key="keywords"
    />

   const GoogleFonts = <>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,800;1,300;1,400;1,600&display=swap" rel="stylesheet" />   
    </>

    return(
        <head>
            <meta charSet="UTF-8" key="charset"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            <title>{title}</title>
            {description}
            {keywords}
            {GoogleFonts}
        </head>
    )
}

export default Head;