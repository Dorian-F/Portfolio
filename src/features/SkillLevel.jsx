import React from 'react';
import { motion } from 'framer-motion';

const SkillLevel = ({ name, level, percentage }) => {
    return (
        <div className="skill-level-item" style={{ marginBottom: '1.5rem' }}>
            <div className="skill-label" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                <span style={{ fontWeight: 600, fontSize: '1rem' }}>{name}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{level}</span>
            </div>
            <div className="skill-bar-bg" style={{
                height: '6px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '10px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.03)'
            }}>
                <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--primary), var(--accent))',
                        boxShadow: '0 0 10px var(--primary-glow)'
                    }}
                />
            </div>
        </div>
    );
};

export default SkillLevel;
