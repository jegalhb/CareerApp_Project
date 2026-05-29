// src/components/career/JobDetailStep.jsx
import React, { useState } from 'react';
import { getMatchLabel } from '../../utils/Hollandmatcher.js';
import { TYPE_INFO } from '../../data/assessmentData';

const JobDetailStep = ({ job, assessmentResult, onBack, onReset }) => {
    const [tab, setTab] = useState('overview'); // 'overview' | 'roadmap' | 'mentor'
    const matchInfo = getMatchLabel(job.matchScore);

    const TABS = [
        { id: 'overview', label: '직업 개요' },
        { id: 'roadmap',  label: '진로 로드맵' },
        { id: 'mentor',   label: '현직자 멘토' },
    ];

    return (
        <div style={{ paddingTop: '28px' }}>

            {/* 뒤로가기 */}
            <button onClick={onBack} style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                background: 'none', border: 'none', color: '#6b7280',
                fontSize: '13px', cursor: 'pointer', marginBottom: '16px', padding: 0,
            }}>
                ← 결과 목록으로
            </button>

            {/* 직업 헤더 카드 */}
            <div style={{
                background: 'linear-gradient(135deg, #1a365d 0%, #2563eb 100%)',
                borderRadius: '14px', padding: '24px', marginBottom: '16px',
                color: '#fff',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '52px' }}>{job.emoji}</span>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#fff', margin: 0 }}>
                                {job.title}
                            </h2>
                            <span style={{
                                fontSize: '10px', background: 'rgba(255,255,255,0.2)',
                                padding: '3px 8px', borderRadius: '8px', color: 'rgba(255,255,255,0.9)',
                            }}>
                {job.category}
              </span>
                        </div>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {job.hollandCodes.map((code) => (
                                <span key={code} style={{
                                    fontSize: '11px',
                                    background: TYPE_INFO[code]?.color + '40',
                                    color: '#fff', padding: '2px 8px', borderRadius: '6px',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                }}>
                  {TYPE_INFO[code]?.emoji} {TYPE_INFO[code]?.name}
                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 주요 수치 */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                    {job.highlights.map((h, i) => (
                        <div key={i} style={{
                            background: 'rgba(255,255,255,0.12)',
                            borderRadius: '10px', padding: '12px',
                            textAlign: 'center',
                        }}>
                            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
                                {h.label}
                            </div>
                            <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>
                                {h.value}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 적합도 표시 */}
                {job.matchScore && (
                    <div style={{
                        marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px',
                    }}>
                        <div style={{
                            background: 'rgba(255,255,255,0.15)',
                            borderRadius: '999px', height: '6px', flex: 1,
                        }}>
                            <div style={{
                                background: '#fff', height: '6px', borderRadius: '999px',
                                width: `${job.matchScore}%`, transition: 'width 0.8s ease',
                            }} />
                        </div>
                        <span style={{
                            fontSize: '12px', fontWeight: 700,
                            background: matchInfo.bg, color: matchInfo.color,
                            padding: '3px 10px', borderRadius: '12px',
                        }}>
              나와의 적합도 {job.matchScore}%
            </span>
                    </div>
                )}
            </div>

            {/* 탭 네비게이션 */}
            <div style={{
                display: 'flex', gap: 0,
                borderBottom: '2px solid #e5e7eb', marginBottom: '20px',
                background: '#fff', borderRadius: '12px 12px 0 0',
            }}>
                {TABS.map((t) => (
                    <button key={t.id} onClick={() => setTab(t.id)} style={{
                        flex: 1, padding: '12px 8px', border: 'none',
                        background: 'none', cursor: 'pointer',
                        fontSize: '13px', fontWeight: tab === t.id ? 700 : 400,
                        color: tab === t.id ? '#1a365d' : '#6b7280',
                        borderBottom: tab === t.id ? '2px solid #1a365d' : '2px solid transparent',
                        marginBottom: '-2px', transition: 'all 0.15s',
                    }}>
                        {t.label}
                    </button>
                ))}
            </div>

            {/* 탭 콘텐츠 */}
            {tab === 'overview' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

                    {/* 직업 설명 */}
                    <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', padding: '18px' }}>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#1a365d', margin: '0 0 10px' }}>
                            📋 직업 소개
                        </h4>
                        <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.7', margin: 0 }}>
                            {job.desc}
                        </p>
                    </div>

                    {/* 근무 환경 */}
                    <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', padding: '18px' }}>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#1a365d', margin: '0 0 10px' }}>
                            🏢 근무 환경
                        </h4>
                        <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.7', margin: 0 }}>
                            {job.workEnv}
                        </p>
                    </div>

                    {/* 핵심 스킬 */}
                    <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', padding: '18px' }}>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#1a365d', margin: '0 0 12px' }}>
                            🛠 핵심 스킬
                        </h4>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {job.keySkills.map((skill) => (
                                <span key={skill} style={{
                                    fontSize: '12px', background: '#eff6ff', color: '#1e40af',
                                    padding: '5px 12px', borderRadius: '20px',
                                    border: '1px solid #bfdbfe',
                                }}>
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>

                    {/* 관련 전공 */}
                    <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', padding: '18px' }}>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#1a365d', margin: '0 0 12px' }}>
                            🎓 관련 전공
                        </h4>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {job.requiredMajors.map((major) => (
                                <span key={major} style={{
                                    fontSize: '12px', background: '#f0fdf4', color: '#166534',
                                    padding: '5px 12px', borderRadius: '20px',
                                    border: '1px solid #bbf7d0',
                                }}>
                  {major}
                </span>
                            ))}
                        </div>
                    </div>

                    {/* 나의 적합도 분석 */}
                    {assessmentResult && (
                        <div style={{
                            background: '#eff6ff', borderRadius: '12px',
                            border: '1px solid #bfdbfe', padding: '18px',
                        }}>
                            <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#1e40af', margin: '0 0 10px' }}>
                                📊 나와의 적합도 분석
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {job.hollandCodes.map((code, i) => {
                                    const score = assessmentResult.percentScores[code] || 0;
                                    const weight = ['핵심', '보조', '참고'][i] || '참고';
                                    const info = TYPE_INFO[code];
                                    return (
                                        <div key={code}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontSize: '12px', color: info.color, fontWeight: 500 }}>
                          {info.emoji} {info.name} ({weight} 유형)
                        </span>
                                                <span style={{ fontSize: '12px', fontWeight: 600, color: info.color }}>{score}점</span>
                                            </div>
                                            <div style={{ background: '#dbeafe', borderRadius: '999px', height: '5px' }}>
                                                <div style={{
                                                    background: info.color, height: '5px', borderRadius: '999px',
                                                    width: `${score}%`,
                                                }} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {tab === 'roadmap' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', padding: '20px' }}>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#1a365d', margin: '0 0 4px' }}>
                            🗺️ {job.title} 진로 로드맵
                        </h4>
                        <p style={{ fontSize: '12px', color: '#9ca3af', margin: '0 0 18px' }}>
                            {job.growthPath}
                        </p>

                        {/* 스텝 타임라인 */}
                        {job.roadmapSteps.map((step, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '12px', marginBottom: idx < job.roadmapSteps.length - 1 ? '0' : '0' }}>
                                {/* 왼쪽 스텝 번호 + 연결선 */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                                    <div style={{
                                        width: '32px', height: '32px', borderRadius: '50%',
                                        background: '#1a365d', color: '#fff',
                                        fontSize: '13px', fontWeight: 700,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        {idx + 1}
                                    </div>
                                    {idx < job.roadmapSteps.length - 1 && (
                                        <div style={{ width: '2px', flex: 1, minHeight: '24px', background: '#e5e7eb', margin: '4px 0' }} />
                                    )}
                                </div>

                                {/* 스텝 내용 */}
                                <div style={{ paddingBottom: idx < job.roadmapSteps.length - 1 ? '16px' : 0, paddingTop: '6px' }}>
                                    <span style={{ fontSize: '13px', color: '#111827', fontWeight: 500 }}>{step}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 로드맵 추가 CTA */}
                    <div style={{
                        background: 'linear-gradient(135deg, #1a365d, #2563eb)',
                        borderRadius: '12px', padding: '20px', textAlign: 'center', color: '#fff',
                    }}>
                        <p style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>
                            이 직업 로드맵을 내 진로 계획에 추가할까요?
                        </p>
                        <button style={{
                            background: '#fff', color: '#1a365d',
                            border: 'none', borderRadius: '8px',
                            padding: '10px 24px', fontSize: '13px', fontWeight: 700,
                            cursor: 'pointer',
                        }}>
                            + 내 로드맵에 추가하기
                        </button>
                    </div>
                </div>
            )}

            {tab === 'mentor' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {/* 멘토 프로필 */}
                    <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', padding: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                            <div style={{
                                width: '56px', height: '56px', borderRadius: '50%',
                                background: '#1a365d', color: '#fff',
                                fontSize: '20px', fontWeight: 700,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                {job.mentorName?.slice(0, 1) || '?'}
                            </div>
                            <div>
                                <div style={{ fontSize: '15px', fontWeight: 700, color: '#111827' }}>{job.mentorName}</div>
                                <div style={{ fontSize: '12px', color: '#2563eb', fontWeight: 500 }}>{job.mentorRole}</div>
                            </div>
                        </div>

                        <blockquote style={{
                            background: '#f9fafb', borderLeft: '4px solid #1a365d',
                            margin: 0, padding: '14px 16px', borderRadius: '0 8px 8px 0',
                        }}>
                            <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>
                                " {job.mentorQuote} "
                            </p>
                        </blockquote>
                    </div>

                    {/* 멘토링 프로그램 */}
                    <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', padding: '20px' }}>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#1a365d', margin: '0 0 14px' }}>
                            🤝 관련 멘토링 프로그램
                        </h4>
                        {[
                            `실무자와 함께하는 ${job.title} Q&A`,
                            '현직자 포트폴리오 리뷰',
                            '취업 준비 1:1 커리어 코칭',
                        ].map((program, i) => (
                            <div key={i} style={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                padding: '10px 0',
                                borderBottom: i < 2 ? '1px solid #f3f4f6' : 'none',
                            }}>
                                <span style={{ fontSize: '13px', color: '#374151' }}>• {program}</span>
                                <button style={{
                                    fontSize: '11px', padding: '4px 12px', borderRadius: '6px',
                                    background: '#1a365d', color: '#fff', border: 'none', cursor: 'pointer',
                                }}>
                                    신청
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* 하단 버튼 */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
                <button onClick={onBack} style={{
                    flex: 1, padding: '12px', borderRadius: '8px',
                    border: '1.5px solid #e5e7eb', background: '#fff',
                    color: '#4b5563', fontSize: '13px', cursor: 'pointer',
                }}>
                    ← 다른 직업 보기
                </button>
                <button onClick={onReset} style={{
                    flex: 1, padding: '12px', borderRadius: '8px',
                    border: 'none', background: '#1a365d',
                    color: '#fff', fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                }}>
                    ↺ 검사 다시 하기
                </button>
            </div>
        </div>
    );
};

export default JobDetailStep;