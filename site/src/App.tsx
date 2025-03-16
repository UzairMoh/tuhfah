import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './components/common/Layout';
import DuroosHomePage from './pages/DuroosHomePage.tsx';
import LessonLayout from './pages/LessonLayout';
import Practice from './pages/Practice';
import './App.css'
import HomePage from "./pages/HomePage.tsx";
import SarfGame from "./pages/SarfGame.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/duroos" element={<DuroosHomePage/>}/>
                    <Route path="/sarf" element={<SarfGame/>}/>
                    <Route path="/lesson/:lessonId" element={<LessonLayout/>}/>
                    <Route path="/practice/:lessonId" element={<Practice/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;