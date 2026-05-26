import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const experiences = [
    {
        role: 'Freelance Software Developer',
        company: 'Freelance',
        period: 'Aug 2025 - Dec 2025',
        location: 'Remote',
        details: [
            {
                title: 'Beyond Invitations – E-Commerce Website',
                description: 'Developed an e-commerce-style wedding card catalog with extensive product displays, custom filtering options, and a highly responsive, modern user interface.'
            },
            {
                title: 'TechInsight – Portfolio Website',
                description: 'Built a professional, high-performance portfolio website for the TechInsight freelance team using React.js, featuring a clean UI, component-based architecture, and responsive design.'
            }
        ],
        icon: Briefcase
    },
    {
        role: 'Software Developer Trainee',
        company: 'Softscholars Technologies',
        period: 'May 2025 - July 2025',
        location: 'Coimbatore, India',
        details: [
            {
                title: 'Machine Learning & Python Modules',
                description: 'Worked on machine learning algorithms and Python-based backend modules, focusing on architectural scalability, software debugging, and clean code practices.'
            }
        ],
        icon: Briefcase
    }
];

const educations = [
    {
        degree: 'B.Tech in Artificial Intelligence and Data Science',
        institution: 'Karpagam Institute of Technology',
        period: 'Sep 2020 - July 2024',
        location: 'Coimbatore, India',
        grade: 'CGPA: 7.75',
        details: 'Specialized in core concepts of machine learning, data structures, database optimization, and object-oriented programming.',
        icon: GraduationCap
    }
];

const ExperienceCard = ({ item, type, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="timeline-card"
            style={{
                background: 'var(--bg-card)',
                borderRadius: '24px',
                border: '1px solid var(--border-card)',
                padding: '2rem',
                marginBottom: '2rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            }}
        >
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: '3px',
                background: type === 'work'
                    ? 'linear-gradient(to bottom, var(--accent-primary), transparent)'
                    : 'linear-gradient(to bottom, var(--accent-secondary), transparent)',
            }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.25rem' }}>
                        {type === 'work' ? item.role : item.degree}
                    </h3>
                    <p style={{ color: type === 'work' ? 'var(--accent-primary)' : 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.95rem' }}>
                        {type === 'work' ? item.company : item.institution}
                    </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Calendar size={14} /> {item.period}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <MapPin size={14} /> {item.location}
                    </span>
                </div>
            </div>

            {type === 'work' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {item.details.map((detail, idx) => (
                        <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                            <h4 style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                                {detail.title}
                            </h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                                {detail.description}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        background: 'rgba(168, 85, 247, 0.1)',
                        border: '1px solid rgba(168, 85, 247, 0.2)',
                        color: 'var(--accent-secondary)',
                        borderRadius: '50px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        marginBottom: '0.75rem'
                    }}>
                        {item.grade}
                    </span>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                        {item.details}
                    </p>
                </div>
            )}
        </motion.div>
    );
};

const Experience = () => {
    return (
        <motion.section
            id="experience"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{
                padding: '8rem 2rem',
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                minHeight: 'calc(100vh - 8rem)'
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '5rem' }}
            >
                <h2 style={{
                    fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                    marginBottom: '1rem',
                    background: 'linear-gradient(to right, #fff, #94a3b8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Journey & Education
                </h2>
                <div style={{
                    height: '4px',
                    width: '60px',
                    background: 'var(--accent-primary)',
                    borderRadius: '2px',
                    margin: '0 auto 1.5rem'
                }} />
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                    A detailed timeline of my professional experience as a developer and my academic background.
                </p>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '3rem',
                alignItems: 'start'
            }}>
                {/* Work Experience Column */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                        <div style={{
                            background: 'rgba(99, 102, 241, 0.1)',
                            border: '1px solid rgba(99, 102, 241, 0.2)',
                            color: 'var(--accent-primary)',
                            padding: '0.6rem',
                            borderRadius: '12px'
                        }}>
                            <Briefcase size={22} />
                        </div>
                        <h2 style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>Work History</h2>
                    </div>
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} item={exp} type="work" index={index} />
                    ))}
                </div>

                {/* Education Column */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                        <div style={{
                            background: 'rgba(168, 85, 247, 0.1)',
                            border: '1px solid rgba(168, 85, 247, 0.2)',
                            color: 'var(--accent-secondary)',
                            padding: '0.6rem',
                            borderRadius: '12px'
                        }}>
                            <GraduationCap size={22} />
                        </div>
                        <h2 style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>Education</h2>
                    </div>
                    {educations.map((edu, index) => (
                        <ExperienceCard key={index} item={edu} type="education" index={index} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Experience;
