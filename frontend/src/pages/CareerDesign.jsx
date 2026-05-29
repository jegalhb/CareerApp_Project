// src/pages/CareerDesign.jsx
import React, { useState } from 'react';
import AssessmentStep from '../components/career/AssessmentStep';
import ResultStep     from '../components/career/ResultStep';
import JobDetailStep  from '../components/career/JobDetailStep';

/**
 * 3단계 진로설계 페이지
 *  Step 1 — AssessmentStep  : Holland RIASEC 적성검사
 *  Step 2 — ResultStep      : 직업 추천 결과 리스트
 *  Step 3 — JobDetailStep   : 선택 직업 상세 정보
 */
const CareerDesign = () => {
    const [step, setStep]               = useState(1);
    const [assessmentResult, setResult] = useState(null); // hollandMatcher 결과
    const [selectedJob, setSelectedJob] = useState(null); // 선택된 직업 객체

    // 1→2: 검사 완료
    const handleAssessmentDone = (result) => {
        setResult(result);
        setStep(2);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 2→3: 직업 선택
    const handleJobSelect = (job) => {
        setSelectedJob(job);
        setStep(3);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 뒤로 가기
    const handleBack = () => {
        setStep((prev) => Math.max(1, prev - 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 처음부터 다시
    const handleReset = () => {
        setStep(1);
        setResult(null);
        setSelectedJob(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const STEP_LABELS = ['적성 검사', '결과 리스트', '직업 탐색'];

    return (
        <div style={{ background: '#f9fafb', minHeight: '100vh', paddingBottom: '60px' }}>

            {/* ── 상단 스테퍼 ── */}
            <div style={{
                background: '#fff',
                borderBottom: '1px solid #e5e7eb',
                padding: '20px 24px',
                position: 'sticky',
                top: '56px',  /* GNB 높이만큼 */
                zIndex: 30,
            }}>
                <div style={{ maxWidth: '860px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                        {STEP_LABELS.map((label, idx) => {
                            const num       = idx + 1;
                            const isActive  = step === num;
                            const isDone    = step > num;
                            return (
                                <React.Fragment key={num}>
                                    {/* 단계 버튼 */}
                                    <button
                                        onClick={() => isDone && setStep(num)}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '8px',
                                            padding: '8px 14px', borderRadius: '24px', border: 'none',
                                            background: isActive ? '#1a365d' : isDone ? '#dbeafe' : '#f3f4f6',
                                            color: isActive ? '#fff' : isDone ? '#1e40af' : '#9ca3af',
                                            fontWeight: isActive ? 700 : 500,
                                            fontSize: '13px',
                                            cursor: isDone ? 'pointer' : 'default',
                                            transition: 'all 0.2s',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                    <span style={{
                        width: '20px', height: '20px', borderRadius: '50%',
                        background: isActive ? 'rgba(255,255,255,0.2)' : isDone ? '#2563eb' : '#d1d5db',
                        color: isActive ? '#fff' : isDone ? '#fff' : '#6b7280',
                        fontSize: '11px', fontWeight: 700,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                    }}>
                      {isDone ? '✓' : num}
                    </span>
                                        {label}
                                    </button>

                                    {/* 연결선 */}
                                    {idx < STEP_LABELS.length - 1 && (
                                        <div style={{
                                            flex: 1, height: '2px',
                                            background: step > num + 1 ? '#2563eb' : step === num + 1 ? '#93c5fd' : '#e5e7eb',
                                            margin: '0 4px',
                                        }} />
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ── 단계별 콘텐츠 ── */}
            <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 16px' }}>
                {step === 1 && (
                    <AssessmentStep onComplete={handleAssessmentDone} />
                )}
                {step === 2 && assessmentResult && (
                    <ResultStep
                        result={assessmentResult}
                        onSelectJob={handleJobSelect}
                        onReset={handleReset}
                    />
                )}
                {step === 3 && selectedJob && (
                    <JobDetailStep
                        job={selectedJob}
                        assessmentResult={assessmentResult}
                        onBack={handleBack}
                        onReset={handleReset}
                    />
                )}
            </div>
        </div>
    );
};

export default CareerDesign;