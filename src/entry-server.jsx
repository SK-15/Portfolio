import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/MainPage';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import { Routes, Route } from 'react-router-dom';

export function render(path) {
    const html = renderToString(
        <StaticRouter location={path}>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blogs/:slug" element={<BlogPost />} />
                </Routes>
            </MainLayout>
        </StaticRouter>
    );
    return html;
}
