import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '#/home' },
    { name: 'Skills', href: '#/skills' },
    { name: 'Experience', href: '#/experience' },
    { name: 'Projects', href: '#/projects' },
    { name: 'Contact', href: '#/contact' },
];

const Navbar = ({ activePage }) => {
    const [isLight, setIsLight] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.documentElement.classList.add('light');
            setIsLight(true);
        } else {
            document.documentElement.classList.remove('light');
            setIsLight(false);
        }

        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (!mobile) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
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
        <>
            {/* Desktop Navbar View */}
            {!isMobile && (
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
            )}

            {/* Mobile Header Bar */}
            {isMobile && (
                <motion.header
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '70px',
                        background: 'var(--bg-glass)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        borderBottom: '1px solid var(--border-card)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 1.5rem',
                        zIndex: 1000,
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                    }}
                >
                    <a
                        href="#/home"
                        style={{
                            fontSize: '1.2rem',
                            fontWeight: 900,
                            fontFamily: 'var(--font-display)',
                            letterSpacing: '0.5px',
                            background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            cursor: 'pointer'
                        }}
                    >
                        VIMAL S
                    </a>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <button
                            onClick={toggleTheme}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--text-secondary)',
                                cursor: 'pointer',
                                padding: '0.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'color 0.2s',
                                borderRadius: '50%'
                            }}
                            aria-label="Toggle Theme"
                        >
                            {isLight ? <Moon size={20} /> : <Sun size={20} />}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                padding: '0.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'transform 0.2s ease',
                                borderRadius: '50%'
                            }}
                            aria-label={isOpen ? "Close Menu" : "Open Menu"}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </motion.header>
            )}

            {/* Mobile Fullscreen Navigation Drawer Overlay */}
            <AnimatePresence>
                {isMobile && isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{
                            position: 'fixed',
                            top: '70px',
                            left: 0,
                            width: '100%',
                            height: 'calc(100vh - 70px)',
                            background: 'var(--bg-primary)',
                            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.08), transparent 70%)',
                            zIndex: 999,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '2.5rem',
                            padding: '2rem',
                            boxSizing: 'border-box'
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '2rem',
                            width: '100%'
                        }}>
                            {navItems.map((item, idx) => {
                                const hashName = item.href.replace('#/', '');
                                const isActive = activePage === hashName;
                                return (
                                    <motion.a
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        style={{
                                            color: isActive ? 'var(--text-accent)' : 'var(--text-secondary)',
                                            fontSize: '1.5rem',
                                            fontWeight: isActive ? 800 : 500,
                                            fontFamily: 'var(--font-display)',
                                            letterSpacing: '1px',
                                            transition: 'color 0.3s ease',
                                            position: 'relative',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {item.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeIndicatorMobile"
                                                style={{
                                                    position: 'absolute',
                                                    bottom: '-8px',
                                                    left: '20%',
                                                    right: '20%',
                                                    height: '3px',
                                                    background: 'var(--text-accent)',
                                                    borderRadius: '2px'
                                                }}
                                            />
                                        )}
                                    </motion.a>
                                );
                            })}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            style={{ width: '80%', maxWidth: '280px', marginTop: '1rem' }}
                        >
                            <a
                                href="/Vimal_S_Resume.pdf"
                                download="Vimal_S_Resume.pdf"
                                onClick={() => setIsOpen(false)}
                                style={{
                                    display: 'block',
                                    textAlign: 'center',
                                    padding: '1rem 2rem',
                                    background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                                    color: 'white',
                                    borderRadius: '50px',
                                    fontSize: '1.05rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Resume
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

