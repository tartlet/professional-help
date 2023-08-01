import { Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import AboutPage from './pages/AboutMe/AboutPage';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<ProjectsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
