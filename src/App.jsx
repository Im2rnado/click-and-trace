import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import City from './pages/City';
import Topic from './pages/Topic';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/city/:id" element={<City />} />
                <Route path="/city/:cityId/topic/:topicId" element={<Topic />} />
            </Routes>
        </Router>
    );
}

export default App;
