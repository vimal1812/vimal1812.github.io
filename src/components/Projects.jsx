import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
    {
        title: 'AIVirtualMouse',
        description: 'Developed a real-time gesture-based virtual mouse using OpenCV and MediaPipe. Implemented hand tracking algorithms for cursor movement and click detection, and optimized the processing pipeline for smooth, responsive performance.',
        tags: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
        link: 'https://github.com/vimal1812/Hand-Gesture-Mouse',
        github: 'https://github.com/vimal1812/Hand-Gesture-Mouse'
    },
    {
        title: 'Parking Space Counter',
        description: 'An intelligent parking management system that detects available and occupied parking slots using image processing. Processes video frames to count free spaces and provide real-time parking availability insights.',
        tags: ['Python', 'OpenCV', 'Computer Vision', 'Image Processing'],
        link: 'https://github.com/vimal1812/Parking-Space-Counter',
        github: 'https://github.com/vimal1812/Parking-Space-Counter'
    },
    {
        title: 'Multi-User To-Do Application',
        description: 'Designed and developed a scalable multi-user task management system using Django. Implemented secure authentication, optimized CRUD operations with efficient SQL queries, and ensured data isolation per user. Improved application responsiveness through backend query optimization.',
        tags: ['Django', 'Python', 'SQLite', 'Authentication'],
        link: 'https://github.com/vimal1812/ToDoList-Django',
        github: 'https://github.com/vimal1812/ToDoList-Django'
    },
    {
        title: 'Grocery Store Application',
        description: 'Built a robust backend-driven grocery store application using Flask and relational databases. Designed and implemented RESTful APIs for product browsing, cart management, and user interactions, while optimizing database queries for a clean routing structure.',
        tags: ['Flask', 'Python', 'MySQL', 'REST APIs'],
        link: 'https://github.com/vimal1812/Grocery-Store-Application',
        github: 'https://github.com/vimal1812/Grocery-Store-Application'
    },
    {
        title: 'Expense Tracker',
        description: 'Developed REST APIs using Node.js for personal expense tracking with categorized transaction management. Implemented structured database schemas and optimized queries for handling large transaction records, focusing on modular, clean, and testable code.',
        tags: ['Node.js', 'JavaScript', 'REST APIs', 'Database Design'],
        link: 'https://github.com/vimal1812',
        github: 'https://github.com/vimal1812'
    },
    {
        title: 'Performance Tracking',
        description: 'Developed a robust team performance tracking and project management web application designed to track tasks, log milestones, and monitor team productivity metrics.',
        tags: ['JavaScript', 'React.js', 'Node.js', 'Project Management'],
        link: 'https://github.com/vimal1812/Performance-tracking',
        github: 'https://github.com/vimal1812/Performance-tracking'
    },
    {
        title: 'TechInsights B2B Website',
        description: 'Built a professional, high-performance business catalog and B2B portal for the TechInsights organization using Vue.js, featuring clean component-based routing.',
        tags: ['Vue.js', 'Frontend', 'B2B', 'Web Development'],
        link: 'https://github.com/vimal1812/TechInsights-ai-org-KushiB2B-website',
        github: 'https://github.com/vimal1812/TechInsights-ai-org-KushiB2B-website'
    },
    {
        title: 'Basic Tic-Tac-Toe',
        description: 'A classic interactive Tic-Tac-Toe game built with React.js featuring state management, turn indicators, win/draw condition evaluations, and high-performance rendering.',
        tags: ['React.js', 'JavaScript', 'Games', 'Frontend'],
        link: 'https://github.com/vimal1812/Basic-Tic-Tac-Toe-in-React',
        github: 'https://github.com/vimal1812/Basic-Tic-Tac-Toe-in-React'
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="project-card"
            style={{
                background: 'var(--bg-card)',
                borderRadius: '24px',
                border: '1px solid var(--border-card)',
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
        <motion.section
            id="projects"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{
                padding: '8rem 2rem',
                maxWidth: '1200px',
                margin: '0 auto',
                minHeight: 'calc(100vh - 8rem)'
            }}
        >
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
        </motion.section>
    );
};

export default Projects;
