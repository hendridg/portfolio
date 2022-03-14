import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*" element={<h2>Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
