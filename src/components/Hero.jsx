import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Server } from 'lucide-react';

const Typewriter = ({ text, delay = 50 }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span>{currentText}</span>;
};

const Hero = () => {
    return (
        <motion.section
            id="home"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{
                minHeight: 'calc(100vh - 8rem)',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '8rem 2rem 4rem 2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}
        >
            {/* Background Gradient Mesh */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 15% 50%, rgba(99, 102, 241, 0.12), transparent 25%), radial-gradient(circle at 85% 30%, rgba(168, 85, 247, 0.12), transparent 25%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '4rem',
                width: '100%',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Left Column: Info */}
                <div style={{ textAlign: 'left', maxWidth: '580px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{
                            fontSize: '1.1rem',
                            color: 'var(--accent-primary)',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            marginBottom: '1rem',
                            fontWeight: 700
                        }}>
                            Full-Stack Developer
                        </h2>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            background: 'linear-gradient(to right, var(--text-primary), var(--text-secondary))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        Building the <br />
                        <span style={{ color: 'var(--accent-primary)', WebkitTextFillColor: 'var(--accent-primary)' }}>
                            Digital Future
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{
                            fontSize: '1.2rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '2.5rem',
                            height: '1.5em' // Fixed height for typewriter
                        }}
                    >
                        <span style={{ marginRight: '0.5rem' }}>I specialize in</span>
                        <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                            <Typewriter text="Python, Django, Flask, and React." />
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            flexWrap: 'wrap'
                        }}
                    >
                        <a href="#/projects" style={{
                            padding: '1rem 2rem',
                            background: 'var(--accent-primary)',
                            color: 'white',
                            borderRadius: '50px',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'scale(1.03)';
                                e.currentTarget.style.boxShadow = '0 6px 20px var(--accent-glow)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.3)';
                            }}
                        >
                            View Work <ArrowRight size={20} />
                        </a>

                        <a href="#/contact" style={{
                            padding: '1rem 2rem',
                            background: 'var(--bg-card)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            color: 'var(--text-primary)',
                            borderRadius: '50px',
                            fontWeight: 600,
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                e.currentTarget.style.transform = 'scale(1.03)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'var(--bg-card)';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>

                {/* Right Column: Illustration Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative'
                    }}
                >
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            background: 'var(--bg-card)',
                            padding: '0.8rem',
                            borderRadius: '28px',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25), 0 0 50px var(--accent-glow)',
                            maxWidth: '460px',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden'
                        }}
                    >
                        <motion.img
                            src="/tech_hero.png"
                            alt="Futuristic software engineering and data networks representation"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '20px',
                                display: 'block',
                                objectFit: 'cover'
                            }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Icons */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', top: '15%', left: '5%', color: 'var(--text-secondary)', opacity: 0.08, zIndex: 0 }}
            >
                <Server size={40} />
            </motion.div>
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ position: 'absolute', bottom: '15%', right: '5%', color: 'var(--text-secondary)', opacity: 0.08, zIndex: 0 }}
            >
                <Database size={40} />
            </motion.div>
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                style={{ position: 'absolute', top: '25%', right: '15%', color: 'var(--text-secondary)', opacity: 0.08, zIndex: 0 }}
            >
                <Code size={40} />
            </motion.div>
        </motion.section>
    );
};

export default Hero;
