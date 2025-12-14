import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
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
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                padding: '0.8rem 2rem',
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                gap: '2rem',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
            }}>
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navbar;
