import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
    {
        title: 'Hand Gesture Mouse',
        description: 'A computer vision–based virtual mouse system that allows users to control mouse movements and clicks using hand gestures captured through a webcam. Built using real-time image processing for accurate gesture detection.',
        tags: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
        link: '#',
        github: '#'
    },
    {
        title: 'Parking Space Counter',
        description: 'An intelligent parking management system that detects available and occupied parking slots using image processing techniques. Processes video frames to count free spaces and provide real-time parking availability insights.',
        tags: ['Python', 'OpenCV', 'Computer Vision', 'Image Processing'],
        link: '#',
        github: '#'
    },
    {
        title: 'Django Todo List',
        description: 'A simple yet secure task management application built using Django. Features user authentication with login and signup, allowing users to create, update, and delete personal to-do items.',
        tags: ['Django', 'Python', 'Authentication', 'SQLite'],
        link: '#',
        github: '#'
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            style={{
                background: 'var(--bg-card)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.5)'
            }}
        >
            <div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.5rem',
                    color: 'var(--accent-primary)'
                }}>
                    <Folder size={40} />
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href={project.github} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} className="hover:text-white">
                            <Github size={20} />
                        </a>
                        <a href={project.link} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} className="hover:text-white">
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>

                <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    color: 'var(--text-primary)',
                    fontWeight: 700
                }}>
                    {project.title}
                </h3>

                <p style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem',
                    lineHeight: '1.7'
                }}>
                    {project.description}
                </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: 'auto' }}>
                {project.tags.map(tag => (
                    <span key={tag} style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-accent)',
                        fontFamily: 'var(--font-code)'
                    }}>
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" style={{
            padding: '8rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ marginBottom: '4rem' }}
            >
                <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    marginBottom: '1rem',
                    color: 'var(--text-primary)'
                }}>
                    Featured Projects
                </h2>
                <div style={{
                    height: '4px',
                    width: '60px',
                    background: 'var(--accent-primary)',
                    borderRadius: '2px'
                }} />
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem'
            }}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
