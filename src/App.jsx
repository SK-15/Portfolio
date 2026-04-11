import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/MainPage';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router basename="/Portfolio">
      <MainLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
