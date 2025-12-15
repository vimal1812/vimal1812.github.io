import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" style={{
            padding: '6rem 2rem 2rem',
            background: 'linear-gradient(to top, var(--bg-secondary), var(--bg-primary))',
            textAlign: 'center'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ maxWidth: '600px', margin: '0 auto 6rem' }}
            >
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '1.5rem',
                    color: 'var(--text-primary)'
                }}>
                    Let's Work Together
                </h2>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem',
                    marginBottom: '3rem',
                    lineHeight: '1.6'
                }}>
                    Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <a href="mailto:hello@example.com" style={{
                    display: 'inline-block',
                    padding: '1rem 2.5rem',
                    background: 'transparent',
                    border: '1px solid var(--accent-primary)',
                    color: 'var(--accent-primary)',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    marginBottom: '4rem'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--accent-primary)';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.boxShadow = '0 0 20px var(--accent-glow)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--accent-primary)';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                    Say Hello
                </a>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    {[
                        { Icon: Github, href: 'https://github.com/vimal1812' },
                        { Icon: Linkedin, href: 'www.linkedin.com/in/vimal-s-239462269' },
                        { Icon: Twitter, href: '#' },
                        { Icon: Mail, href: 'mailto:vimalofficial1812@gmail.com' }
                    ].map(({ Icon, href }, i) => (
                        <a key={i} href={href} style={{
                            color: 'var(--text-secondary)',
                            transition: 'all 0.3s ease',
                            transform: 'scale(1)'
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = 'var(--accent-primary)';
                                e.currentTarget.style.transform = 'translateY(-3px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.color = 'var(--text-secondary)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <Icon size={24} />
                        </a>
                    ))}
                </div>
            </motion.div>

            <div style={{
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem'
            }}>
                <p>Built with React, Vite & Framer Motion</p>
            </div>
        </footer>
    );
};

export default Contact;
