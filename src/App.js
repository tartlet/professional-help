import { Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import AboutPage from './pages/AboutMe/AboutPage';
import BloggyPage from './pages/Bloggy/BloggyPage';
import Layout from './components/layout/Layout';
import BlogPostPage from './pages/Bloggy/BlogPostPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BloggyPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
