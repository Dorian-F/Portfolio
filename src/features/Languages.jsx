import React from 'react';
import { motion } from 'framer-motion';

const StarRating = ({ rating }) => {
    return (
        <div style={{ display: 'flex', gap: '0.2rem' }}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} style={{
                    color: star <= rating ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                    fontSize: '1.2rem'
                }}>
                    ★
                </span>
            ))}
        </div>
    );
};

const Languages = () => {
    const langs = [
        { name: 'Français', level: 'Maternel', type: 'text' },
        { name: 'Anglais', rating: 4, type: 'stars' },
        { name: 'Espagnol', rating: 2, type: 'stars' }
    ];

    const softSkills = [
        { name: 'Communication', level: 'Expert en restitution', width: '92%' },
        { name: 'Esprit d\'Équipe', level: 'Collaboratif', width: '88%' },
        { name: 'Agilité', level: 'Adaptabilité', width: '85%' }
    ];

    return (
        <div className="languages-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="languages-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                marginBottom: '4rem'
            }}>
                {langs.map((lang, index) => (
                    <motion.div
                        key={lang.name}
                        className="lang-item glass"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                        <div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{lang.name}</h3>
                            {lang.type === 'text' && <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{lang.level}</span>}
                        </div>
                        {lang.type === 'stars' && <StarRating rating={lang.rating} />}
                        {lang.type === 'text' && <div style={{ color: 'var(--primary)', fontWeight: 600 }}>C2+</div>}
                    </motion.div>
                ))}
            </div>

            <div className="soft-skills-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem'
            }}>
                {softSkills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span style={{ fontWeight: 600 }}>{skill.name}</span>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{skill.level}</span>
                        </div>
                        <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: skill.width }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                style={{ height: '100%', background: 'var(--accent)', borderRadius: '10px' }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Languages;
