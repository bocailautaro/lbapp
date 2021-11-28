import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogItem from '../blog/BlogItem';
import { motion } from 'framer-motion';

import '../pages/Blog.css';

const Blog = (props) => {

    const [loading, setLoading] = useState(false);
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const cargarBlog = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/blog');
            setBlog(response.data);
            setLoading(false);
        };

        cargarBlog();
    }, []);

    return (
        <motion.section className="holder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.1}}
        >
            <h1>Bienvenidos al Blog</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                blog.map(item => <BlogItem key={item.id}
                    title={item.titulo} subtitle={item.subtitulo}
                    imagen={item.imagen} body={item.cuerpo} />)
            )}
        </motion.section>
    );
}

export default Blog;