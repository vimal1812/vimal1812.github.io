import React from 'react';
import { motion } from 'framer-motion';

const skills = {
    Backend: ['Python', 'Django', 'Flask', 'RESTful APIs'],
    Data: ['NumPy', 'Pandas'],
    Frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Vue.js'],
    Database: ['MySQL'],
    Tools: ['Git', 'GitHub', 'Linux']
};

const SkillCard = ({ category, items, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                background: 'var(--bg-card)',
                padding: '2rem',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                position: 'relative',
                overflow: 'hidden'
            }}
            className="skill-card-hover"
        >
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
                opacity: 0.5
            }} />

            <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
                color: 'var(--accent-secondary)'
            }}>
                {category}
            </h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {items.map((skill) => (
                    <span
                        key={skill}
                        style={{
                            padding: '0.5rem 1rem',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '50px',
                            fontSize: '0.9rem',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            color: 'var(--text-secondary)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
                            e.currentTarget.style.borderColor = 'var(--accent-primary)';
                            e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                        }}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" style={{
            padding: '8rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '1rem',
                    background: 'linear-gradient(to right, #fff, #94a3b8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Technical Arsenal
                </h2>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Tools and technologies I use to bring ideas to life
                </p>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {Object.entries(skills).map(([category, items], index) => (
                    <SkillCard
                        key={category}
                        category={category}
                        items={items}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;
