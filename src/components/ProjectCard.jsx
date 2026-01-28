import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, tags, icon: Icon, color }) => {
    return (
        <motion.div
            className="glass project-card"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ padding: '0', overflow: 'hidden' }}
        >
            <div
                className="project-image"
                style={{
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: color || 'linear-gradient(135deg, #1e293b, #38bdf8)'
                }}
            >
                <Icon size={64} color="white" opacity={0.8} />
            </div>
            <div className="project-info" style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '0.8rem', fontSize: '1.5rem' }}>{title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{description}</p>
                <div className="project-tags" style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {tags.map(tag => (
                        <span key={tag} style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '600', padding: '0.2rem 0.6rem', background: 'rgba(129, 140, 248, 0.1)', borderRadius: '100px' }}>{tag}</span>
                    ))}
                </div>
                <a href="#" className="view-details" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    color: 'var(--primary)',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    justifyContent: 'center',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--primary)'
                }}>
                    Détails
                </a>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
