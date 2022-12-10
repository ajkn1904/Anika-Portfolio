import React from 'react';
import '../Blog/Blog.css'


const Blog = () => {
    return (
        <div className="container h-[80vh]" data-theme='dark'>
            <div className="sign">
                <div className="neon-blue" id="title">Blo<span id="fade">g</span> <span className="neon-purple">is</span></div>
                <div className="neon-blue"> Coming <span className="neon-purple" id="soon">soon</span> ... </div>
            </div>
        </div>
    );
};

export default Blog;