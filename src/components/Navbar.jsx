import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '#/home' },
    { name: 'Skills', href: '#/skills' },
    { name: 'Experience', href: '#/experience' },
    { name: 'Projects', href: '#/projects' },
    { name: 'Contact', href: '#/contact' },
];

const Navbar = ({ activePage }) => {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.documentElement.classList.add('light');
            setIsLight(true);
        } else {
            document.documentElement.classList.remove('light');
            setIsLight(false);
        }
    }, []);

    const toggleTheme = () => {
        const nextIsLight = !isLight;
        setIsLight(nextIsLight);
        if (nextIsLight) {
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                padding: '1.5rem',
                zIndex: 1000
            }}
        >
            <div style={{
                background: 'var(--bg-card)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                padding: '0.6rem 2rem',
                borderRadius: '50px',
                border: '1px solid var(--border-card)',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)'
            }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    {navItems.map((item) => {
                        const hashName = item.href.replace('#/', '');
                        const isActive = activePage === hashName;
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                style={{
                                    color: isActive ? 'var(--text-accent)' : 'var(--text-secondary)',
                                    fontSize: '0.9rem',
                                    fontWeight: isActive ? 700 : 500,
                                    transition: 'color 0.3s ease',
                                    position: 'relative',
                                    padding: '0.2rem 0.4rem',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                                }}
                            >
                                {item.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        style={{
                                            position: 'absolute',
                                            bottom: '-4px',
                                            left: '10%',
                                            right: '10%',
                                            height: '2px',
                                            background: 'var(--text-accent)',
                                            borderRadius: '2px'
                                        }}
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        );
                    })}
                </div>

                <div style={{
                    height: '18px',
                    width: '1px',
                    background: 'rgba(255, 255, 255, 0.15)',
                    margin: '0 0.1rem'
                }} />

                <button
                    onClick={toggleTheme}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer',
                        padding: '0.3rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'color 0.2s',
                        borderRadius: '50%'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                    aria-label="Toggle Theme"
                >
                    {isLight ? <Moon size={18} /> : <Sun size={18} />}
                </button>

                <div style={{
                    height: '18px',
                    width: '1px',
                    background: 'rgba(255, 255, 255, 0.15)',
                    margin: '0 0.1rem'
                }} />

                <a
                    href="/Vimal_S_Resume.pdf"
                    download="Vimal_S_Resume.pdf"
                    style={{
                        padding: '0.4rem 1.2rem',
                        background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                        color: 'white',
                        borderRadius: '50px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        transition: 'all 0.3s ease',
                        boxShadow: '0 0 10px rgba(99, 102, 241, 0.3)',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 0 20px var(--accent-glow)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 0 10px rgba(99, 102, 241, 0.3)';
                    }}
                >
                    Resume
                </a>
            </div>
        </motion.nav>
    );
};

export default Navbar;
