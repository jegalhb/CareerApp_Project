import React, { useState } from 'react';
import Gnb from "../components/Gnb.jsx";

const CareerDesign = () => {
    // 1단계부터 시작하도록 초기화
    const [step, setStep] = useState(1);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);


    const [formData, setFormData] = useState({ id: '', password: '', email: '' });

    // 보안을 위한 회원가입 제출 핸들러 (POST 방식 예시)
    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        // 실제 API 호출 시에는 POST 방식을 사용하여 Body에 데이터를 담습니다.
        console.log("보안 데이터 전송:", formData);
        alert("회원가입 요청이 안전하게 전송되었습니다.");
        setIsSignupPage(false); // 가입 후 메인으로 복귀
    };



    // 샘플 데이터
    const selectedJob = {
        title: 'AI 엔지니어',
        description: 'AI 엔지니어는 방대한 데이터를 분석하고 학습시켜 컴퓨터가 스스로 판단할 수 있는 모델을 개발합니다. 주로 머신러닝, 딥러닝 알고리즘을 설계하고 데이터 전처리를 수행합니다.',
        mentor: {
            name: '김현직',
            role: 'Senior AI Engineer',
            quote: "데이터는 정직합니다. 기술적인 구현 능력도 중요하지만, 비즈니스 문제를 데이터로 어떻게 풀어낼지 고민하는 '문제 해결력'이 가장 강력한 무기가 됩니다."
        }
    };

    return (
        <div className="career-design-wrap" style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
            {/* 상단 스텝퍼 (내비게이션 기능 유지) */}
            <div className="stepper" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
                {[1, 2, 3].map((num) => (
                    <button
                        key={num}
                        onClick={() => setStep(num)}
                        style={{
                            padding: '10px 30px', borderRadius: '20px', border: 'none',
                            background: step === num ? '#2563eb' : '#e5e7eb',
                            color: step === num ? '#fff' : '#6b7280',
                            fontWeight: step === num ? 'bold' : 'normal', cursor: 'pointer',
                            transition: '0.3s'
                        }}
                    >
                        {num}. {num === 1 ? '적성 검사' : num === 2 ? '결과 리스트' : '직업 탐색'}
                    </button>
                ))}
            </div>

            {/* 단계별 콘텐츠 영역 */}
            <div className="content-area">

                {/* 1단계: 적성 검사 */}
                {step === 1 && (
                    <div style={{ textAlign: 'center', padding: '60px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px' }}>
                        <h2 style={{ marginBottom: '20px' }}>AI 진로 적성 검사</h2>
                        <p style={{ color: '#6b7280', marginBottom: '30px' }}>나에게 맞는 진로를 찾기 위해 간단한 문항에 답변해주세요.</p>
                        <button onClick={() => setStep(2)} style={{ padding: '12px 40px', background: '#2563eb', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
                            검사 완료하고 결과 보기
                        </button>
                    </div>
                )}

                {/* 2단계: 결과 리스트 */}
                {step === 2 && (
                    <div style={{ padding: '40px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>분석된 나의 진로 리스트</h2>
                        <div style={{ display: 'grid', gap: '20px' }}>
                            {['AI 엔지니어', '데이터 사이언티스트', 'UI/UX 디자이너'].map((job, idx) => (
                                <div key={idx} style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span>{job} - 추천도: 95%</span>
                                    <button onClick={() => setStep(3)} style={{ padding: '8px 20px', background: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: '6px', cursor: 'pointer' }}>
                                        상세보기
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 3단계: 직업 탐색 (상세 화면 - 유지) */}
                {step === 3 && (
                    <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '40px', alignItems: 'start' }}>

                        {/* 좌측: 실무자 프로필 + 멘토링 프로그램 */}
                        <aside style={{ border: '1px solid #e5e7eb', padding: '24px', borderRadius: '16px', background: '#fff' }}>
                            <div style={{ width: '100px', height: '100px', background: '#e5e7eb', borderRadius: '50%', margin: '0 auto 15px' }} />
                            <h3 style={{ textAlign: 'center' }}>{selectedJob.mentor.name}</h3>
                            <p style={{ textAlign: 'center', color: '#2563eb', fontSize: '14px', marginBottom: '20px', fontWeight: 'bold' }}>{selectedJob.mentor.role}</p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '20px' }}>
                                {['Python', 'TensorFlow', 'SQL', 'MLOps'].map(tag => (
                                    <span key={tag} style={{ background: '#eff6ff', color: '#2563eb', padding: '4px 10px', borderRadius: '6px', fontSize: '12px' }}>{tag}</span>
                                ))}
                            </div>

                            <div style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', borderTop: '1px solid #eee', paddingTop: '15px' }}>
                                <p><strong>연혁:</strong> 테크코프 10년차</p>
                                <p><strong>자격증:</strong> 정보처리기사, AWS ML</p>
                                <p><strong>경력:</strong> AI 모델링 및 서비스 배포 총괄</p>
                            </div>

                            <div style={{ marginTop: '25px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                                <h4 style={{ fontSize: '14px', marginBottom: '12px', color: '#111827' }}>관련 멘토링 프로그램</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', color: '#4b5563' }}>
                                    <li style={{ marginBottom: '8px' }}>- 실시간 AI 모델링 질의응답</li>
                                    <li style={{ marginBottom: '8px' }}>- 현직자 포트폴리오 첨삭</li>
                                    <li>- 주니어 개발자 커리어 로드맵</li>
                                </ul>
                            </div>
                        </aside>

                        {/* 우측: 직업 상세 / 영상 / 로드맵 */}
                        <main>
                            <h1 style={{ fontSize: '28px', marginBottom: '20px' }}>{selectedJob.title} 분석</h1>

                            {/* 3단 하이라이트 카드 */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '30px' }}>
                                {[{t: '평균 연봉', v: '6,500만원'}, {t: '향후 전망', v: '매우 밝음'}, {t: '필수 전공', v: '컴퓨터공학'}].map((item, idx) => (
                                    <div key={idx} style={{ background: '#fff', border: '1px solid #e5e7eb', padding: '15px', borderRadius: '12px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '12px', color: '#6b7280' }}>{item.t}</div>
                                        <div style={{ fontWeight: 'bold', fontSize: '15px', marginTop: '5px', color: '#111827' }}>{item.v}</div>
                                    </div>
                                ))}
                            </div>

                            <section style={{ marginBottom: '30px', padding: '20px', background: '#f9fafb', borderRadius: '12px' }}>
                                <p style={{ color: '#4b5563', lineHeight: '1.7', margin: 0 }}>{selectedJob.description}</p>
                            </section>

                            <section style={{ marginBottom: '40px', padding: '24px', background: '#f9fafb', borderRadius: '16px' }}>
                                <h3 style={{ marginBottom: '15px' }}>현직자 인터뷰 영상</h3>
                                <div style={{ background: '#000', height: '200px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                                    [인터뷰 영상 재생 영역]
                                </div>
                                <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#374151' }}>" {selectedJob.mentor.quote} "</p>
                            </section>

                            <section>
                                {isLoggedIn ? (
                                    <div style={{ background: '#eff6ff', padding: '25px', borderRadius: '12px', border: '1px solid #bfdbfe' }}>
                                        <h3 style={{ color: '#1e40af' }}>나의 진로 로드맵</h3>
                                        <p>이 직업을 위해 현재 3단계 과정을 진행 중입니다.</p>
                                    </div>
                                ) : (
                                    <div style={{ border: '2px solid #2563eb', padding: '25px', borderRadius: '12px', textAlign: 'center' }}>
                                        <h4 style={{ margin: '0 0 10px 0' }}>나만의 로드맵 만들기</h4>
                                        <p style={{ color: '#6b7280', fontSize: '14px' }}>로그인하면 이 직업을 위한 <strong>맞춤형 로드맵</strong>을 바로 생성할 수 있습니다.</p>
                                        <button style={{ marginTop: '15px', padding: '10px 40px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>로그인하기</button>
                                    </div>
                                )}
                            </section>
                        </main>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CareerDesign;