import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';
import LessonLayout from './pages/LessonLayout';
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/lesson/:lessonId" element={<LessonLayout />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;