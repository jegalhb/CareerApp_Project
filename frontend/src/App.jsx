// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/careernet.css';
import Gnb from './components/Gnb'; // components 내부로 경로 보정

// 페이지 컴포넌트 로드
import Main from './pages/Main';
import CareerDesign from './pages/CareerDesign';
import JobInfo from './pages/JobInfo';
import JobDetail from './pages/JobDetail';
import Mentoring from './pages/Mentoring';

function App() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    return (
        <Router>
            <div className="wrap">
                <h2 className="sr-only">커리어넷 메인 구조</h2>

                {/* 드롭다운 닫기용 오버레이 */}
                {activeDropdown && (
                    <div className="overlay active" onClick={() => setActiveDropdown(null)} />
                )}

                {/* 상단 GNB 바 고정 */}
                <Gnb
                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                />

                {/* 주소에 따라 해당 페이지만 중앙 영역에 갈아끼웁니다 */}
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/design" element={<CareerDesign />} />
                    <Route path="/jobs" element={<JobInfo />} />
                    <Route path="/jobs/:jobId" element={<JobDetail />} />
                    <Route path="/mentoring" element={<Mentoring />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;