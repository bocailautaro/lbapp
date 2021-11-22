import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogItem from '../components/blog/BlogItem';

//import '../styles/components/pages/Blog.css';

const Nav = (props) => {

    const [loading, setLoading] = useState(false);
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const cargarEntrada = async () => {
            setLoading(true);
            
            const response = await axios.get('http://localhost:3000/api/blog');
            setBlog(response.data);
            setLoading(false);
        };

        cargarEntrada();
    }, []);

    return (
        <section className="holder">
            <h1>Bienvenidos al Blog de LB</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                blog.map(item => <BlogItem key={item.id}
                    title={item.titulo} subtitle={item.subtitulo}
                    imagen={item.imagen} body={item.cuerpo} />)
            )}
        </section>
    );
}

export default Nav;