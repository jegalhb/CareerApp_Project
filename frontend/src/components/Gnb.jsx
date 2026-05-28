// src/Gnb.jsx
import React from 'react';
import {Link} from 'react-router-dom';

const Gnb = ({ activeDropdown, setActiveDropdown }) => {
    const menuData = [
        { title: '채용정보', links: ['채용정보 상세검색', '직종별', '지역별', '테마별'] },
        { title: '취업지원', links: ['워크넷 직업심리검사', '진로상담', '취업지원 프로그램'] },
        { title: '직업/진로', links: ['직업정보 검색', '학과정보', '진로설계 로드맵'] },
        { title: '고객센터', links: ['공지사항', '자주 묻는 질문', '문의하기'] }
    ];

    return (
        <nav className="gnb">
            {/* 좌측 로고 영역 */}
            <Link to="/" className="logo" style={{textDecoration: 'none'}}>
                <div className="logo-mark">
                    {/* 로드맵 경로 SVG 아이콘 */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </div>
                <span className="logo-text">CareerNet</span>
            </Link>

            {/* 중앙 네비게이션 */}
            <div className="gnb-nav">
                <a className="active">진로설계</a>
                <a>직업정보</a>
                <a>멘토링</a>
                <a>채용공고</a>
                <a>커뮤니티</a>
            </div>

            {/* 우측 컨트롤 영역 */}
            <div className="gnb-right">
                {/* 마이페이지 토글러 (사람 그림 SVG) */}
                <div style={{ position: 'relative' }}>
                    <div
                        className="icon-btn"
                        onClick={() => setActiveDropdown(activeDropdown === 'mypage' ? null : 'mypage')}
                        title="마이페이지"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>

                    {activeDropdown === 'mypage' && (
                        <div className="my-dropdown">
                            <div className="my-profile">
                                <div className="my-avatar">김</div>
                                <div>
                                    <div className="my-name">김진로</div>
                                    <div className="my-email">jinro@career.net</div>
                                </div>
                            </div>
                            <div className="my-menu">
                                <div className="my-menu-item">내 프로필</div>
                                <div className="my-menu-item">내 진로 로드맵 <span className="my-badge">진행중</span></div>
                                <div className="my-divider"></div>
                                <div className="my-menu-item">즐겨찾는 직업/학과</div>
                                <div className="my-menu-item">검사 결과 보기</div>
                                <div className="my-menu-item">멘토링 내역</div>
                            </div>
                            <div className="my-logout">로그아웃</div>
                        </div>
                    )}
                </div>

                {/* 로그인 버튼 */}
                <div style={{ position: 'relative' }}>
                    <button
                        className="btn-login"
                        onClick={() => setActiveDropdown(activeDropdown === 'login' ? null : 'login')}
                    >
                        로그인
                    </button>

                    {activeDropdown === 'login' && (
                        <div className="login-dropdown">
                            <div className="ld-header">
                                <p>커리어넷에 오신 것을 환영합니다</p>
                                <strong>로그인 또는 회원가입</strong>
                            </div>
                            <div className="ld-body">
                                <input className="ld-input" type="text" placeholder="아이디 (이메일)" />
                                <input className="ld-input" type="password" placeholder="비밀번호" />
                                <button className="ld-btn-main">로그인</button>
                                <div className="ld-divider"><span>또는</span></div>
                                <button className="ld-btn-signup">회원가입하기</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* 전체 서비스 목록 토글러 (목록 리스트 SVG) */}
                <Link to="/all-menu" className="hamburger-btn" title="전체 서비스 목록" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="8" y1="6" x2="21" y2="6"></line>
                        <line x1="8" y1="12" x2="21" y2="12"></line>
                        <line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                    </svg>
                </Link>
            </div>
        </nav>
    );
};

export default Gnb;