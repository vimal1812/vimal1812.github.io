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
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: '2rem'
        }}>
            {/* Background Gradient Mesh */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 15% 50%, rgba(99, 102, 241, 0.15), transparent 25%), radial-gradient(circle at 85% 30%, rgba(168, 85, 247, 0.15), transparent 25%)',
                zIndex: 0
            }} />

            <div style={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
                maxWidth: '800px'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{
                        fontSize: '1.2rem',
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
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        fontWeight: 900,
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        background: 'linear-gradient(to right, #fff, #94a3b8)',
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
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '3rem',
                        height: '1.5em' // Fixed height for typewriter
                    }}
                >
                    <span style={{ marginRight: '0.5rem' }}>I specialize in</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                        <Typewriter text="Python, React, and Data Science." />
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center'
                    }}
                >
                    <a href="#projects" style={{
                        padding: '1rem 2rem',
                        background: 'var(--accent-primary)',
                        color: 'white',
                        borderRadius: '50px',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'transform 0.2s',
                        boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)'
                    }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        View Work <ArrowRight size={20} />
                    </a>

                    <a href="#contact" style={{
                        padding: '1rem 2rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        borderRadius: '50px',
                        fontWeight: 600,
                        transition: 'background 0.2s'
                    }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Decorative Icons */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', top: '20%', left: '10%', color: 'var(--text-secondary)', opacity: 0.1 }}
            >
                <Server size={48} />
            </motion.div>
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ position: 'absolute', bottom: '20%', right: '10%', color: 'var(--text-secondary)', opacity: 0.1 }}
            >
                <Database size={48} />
            </motion.div>
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                style={{ position: 'absolute', top: '30%', right: '20%', color: 'var(--text-secondary)', opacity: 0.1 }}
            >
                <Code size={48} />
            </motion.div>

        </section>
    );
};

export default Hero;
