import React from 'react';

const BlogItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className="blog">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <img src={imagen} />
            <div className='cuerpo' dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}

export default BlogItem;