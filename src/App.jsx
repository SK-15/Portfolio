import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router basename="/Portfolio">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
