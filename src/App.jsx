import React, { useState, useEffect } from 'react';
import { Database, Layout, Server, Linkedin, Mail, ArrowRight, Briefcase, Code, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectCard from './components/ProjectCard';
import SkillsRadar from './features/SkillsRadar';
import Languages from './features/Languages';
import SkillLevel from './features/SkillLevel';
import TypeWriter from './components/TypeWriter';
import FloatingIcon from './components/FloatingIcon';
import { Music, Trophy, Star, TrendingUp, Menu, X } from 'lucide-react';

const App = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeroText, setShowHeroText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Delay hero text animation
    const timer = setTimeout(() => setShowHeroText(true), 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.15
      }
    },
    viewport: { once: true }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  };

  return (
    <div className="portfolio">
      <div className="glow-overlay"></div>

      <nav className={`navbar ${navScrolled ? 'scrolled' : ''}`} style={{
        background: navScrolled ? 'rgba(10, 15, 29, 0.95)' : 'transparent',
        padding: navScrolled ? '0.8rem 0' : '1.2rem 0',
      }}>
        <div className="nav-content">
          <motion.div
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            DF<span style={{ color: 'var(--primary)' }}>.</span>
          </motion.div>
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>À propos</a></li>
            <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Compétences</a></li>
            <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projets</a></li>
            <li><a href="#contact" className="btn-primary" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
          <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Data Project Manager @ Hutchinson
            </motion.span>
            <h1>
              {showHeroText && (
                <>
                  Transformer la donnée en{' '}
                  <TypeWriter
                    text="valeur stratégique"
                    className="gradient-text"
                    delay={0}
                  />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >.</motion.span>
                </>
              )}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', marginInline: 'auto' }}
            >
              Spécialiste en gestion de projets Data, j'accompagne Hutchinson dans l'optimisation de ses processus par l'analyse et la visualisation de données complexes.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
            >
              <a href="#projects" className="btn-primary">Voir mes projets</a>
              <a href="#skills" className="btn-outline">Mes compétences</a>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills">
          <motion.div className="section-header" {...fadeIn}>
            <h2>Expertise Technique</h2>
            <p className="section-subtitle">Visualisation de mes domaines d'expertise data</p>
            <div className="line"></div>
          </motion.div>

          <div className="skills-container">
            <motion.div {...fadeIn} style={{ width: '100%' }}>
              <SkillsRadar />
              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Vision globale de mon expertise technique et managériale.</p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} style={{ width: '100%' }}>
              <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--primary)' }}>Outils & Maîtrise</h3>
              <SkillLevel name="PostgreSQL" level="Expert" percentage={92} />
              <SkillLevel name="Python (Pandas/NumPy)" level="Avancé" percentage={88} />
              <SkillLevel name="Excel Pro" level="Expert" percentage={95} />
              <SkillLevel name="Power BI" level="Avancé" percentage={85} />
              <SkillLevel name="Langage C" level="Intermédiaire" percentage={70} />
              <SkillLevel name="Supply Chain Analytics" level="Spécialiste" percentage={80} />
            </motion.div>
          </div>

          <motion.div
            className="skills-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div className="skill-card glass" variants={staggerItem} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FloatingIcon delay={0}>
                <Database size={48} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
              </FloatingIcon>
              <h3>Data Management</h3>
              <p>PostgreSQL, Analyse de données complexes, Structuration de bases de données.</p>
              <div className="skill-tags" style={{ justifyContent: 'center' }}>
                <span>SQL</span><span>ETL</span><span>PostgreSQL</span>
              </div>
            </motion.div>
            <motion.div className="skill-card glass" variants={staggerItem} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FloatingIcon delay={0.5}>
                <Code size={48} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
              </FloatingIcon>
              <h3>Programmation</h3>
              <p>Python, Langage C, Automatisation de scripts et traitement de données.</p>
              <div className="skill-tags" style={{ justifyContent: 'center' }}>
                <span>Python</span><span>Pandas</span><span>C</span>
              </div>
            </motion.div>
            <motion.div className="skill-card glass" variants={staggerItem} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FloatingIcon delay={1}>
                <TrendingUp size={48} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
              </FloatingIcon>
              <h3>Visualisation</h3>
              <p>Excel Avancé, Power BI, Création de dashboards décisionnels.</p>
              <div className="skill-tags" style={{ justifyContent: 'center' }}>
                <span>Power BI</span><span>Excel</span><span>Chart.js</span>
              </div>
            </motion.div>
            <motion.div className="skill-card glass" variants={staggerItem} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FloatingIcon delay={1.5}>
                <Briefcase size={48} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
              </FloatingIcon>
              <h3>Gestion de Projet</h3>
              <p>Pilotage de projets Data, coordination d'équipes et vision produit.</p>
              <div className="skill-tags" style={{ justifyContent: 'center' }}>
                <span>Agile</span><span>Planification</span><span>Communication</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects">
          <motion.div className="section-header" {...fadeIn}>
            <h2>Projets Clés</h2>
            <div className="line"></div>
          </motion.div>
          <div className="projects-grid">
            <ProjectCard
              title="Optimisation Flux Supply Chain"
              description="Analyse et automatisation des rapports de flux pour Hutchinson."
              tags={['Python', 'Excel']}
              icon={Layout}
              color="linear-gradient(135deg, #1e293b, #38bdf8)"
            />
            <ProjectCard
              title="Dashboard RSO Dynamique"
              description="Visualisation des indicateurs de performance RSO pour la CPAM."
              tags={['Power BI', 'Data Viz']}
              icon={Database}
              color="linear-gradient(135deg, #1e293b, #818cf8)"
            />
            <ProjectCard
              title="Scripting Automatisation"
              description="Réduction du temps de traitement manuel des données de 40%."
              tags={['Python', 'Automation']}
              icon={Server}
              color="linear-gradient(135deg, #1e293b, #fbbf24)"
            />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience">
          <motion.div className="section-header" {...fadeIn}>
            <h2>Parcours Professionnel</h2>
            <div className="line"></div>
          </motion.div>
          <div className="timeline" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            <div className="timeline-line" style={{ position: 'absolute', left: '20px', top: 0, width: '2px', height: '100%', background: 'var(--card-border)' }}></div>

            <motion.div className="timeline-item" {...fadeIn} style={{ position: 'relative', paddingLeft: '60px', marginBottom: '4rem' }}>
              <div className="timeline-dot"></div>
              <div className="timeline-content glass" style={{ padding: '2rem' }}>
                <span className="date">Actuel</span>
                <h3>Data Project Manager (Alternance)</h3>
                <h4>Hutchinson</h4>
                <p>Pilotage de projets data stratégiques, analyse de flux et optimisation des processus décisionnels.</p>
              </div>
            </motion.div>

            <motion.div className="timeline-item" {...fadeIn} transition={{ delay: 0.1 }} style={{ position: 'relative', paddingLeft: '60px', marginBottom: '4rem' }}>
              <div className="timeline-dot"></div>
              <div className="timeline-content glass" style={{ padding: '2rem' }}>
                <span className="date">2024</span>
                <h3>Service Civique RSO</h3>
                <h4>CPAM de la Sarthe</h4>
                <p>Mise en place d'actions RSO, ateliers sur la sobriété énergétique et numérique responsable.</p>
              </div>
            </motion.div>

            <motion.div className="timeline-item" {...fadeIn} transition={{ delay: 0.2 }} style={{ position: 'relative', paddingLeft: '60px', marginBottom: '4rem' }}>
              <div className="timeline-dot"></div>
              <div className="timeline-content glass" style={{ padding: '2rem' }}>
                <span className="date">2022 - 2023</span>
                <h3>Equipier Magasin</h3>
                <h4>Auchan</h4>
                <p>Gestion de la relation client et environnement opérationnel dynamique.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Languages & Soft Skills */}
        <section id="languages" className="languages">
          <motion.div className="section-header" {...fadeIn}>
            <h2>Langues & Soft Skills</h2>
            <div className="line"></div>
          </motion.div>
          <Languages />
        </section>

        {/* Beyond Data Section */}
        <section id="hobbies" className="hobbies">
          <motion.div className="section-header" {...fadeIn}>
            <h2>Au-delà de la Data</h2>
            <p className="section-subtitle">Passions et centres d'intérêt</p>
            <div className="line"></div>
          </motion.div>

          <div className="hobbies-grid">
            <motion.div className="glass" {...fadeIn} style={{ padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ background: 'var(--primary-glow)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Music size={40} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Musique</h3>
              <p style={{ color: 'var(--text-muted)' }}>Passionné par la création et l'écoute. La musique nourrit ma créativité dans la résolution de problèmes complexes.</p>
            </motion.div>

            <motion.div className="glass" {...fadeIn} transition={{ delay: 0.1 }} style={{ padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ background: 'var(--accent-glow)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Trophy size={40} color="var(--accent)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Sport</h3>
              <p style={{ color: 'var(--text-muted)' }}>Détermination et esprit d'équipe. Le sport m'apporte la discipline nécessaire pour mener à bien des projets d'envergure.</p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <motion.div className="footer-content" {...fadeIn}>
          <span className="badge">Me contacter</span>
          <h2>
            Prêt à transformer vos <span className="gradient-text">données</span> ?
          </h2>
          <p className="footer-lead">
            Je suis actuellement ouvert à de nouvelles opportunités et collaborations dans le domaine de la Data.
          </p>

          <div className="footer-actions">
            <a href="mailto:dorian.francois.etu@gmail.com" className="btn-primary">
              <Mail size={20} /> Envoyer un email
            </a>
            <a href="https://www.linkedin.com/in/dorian-francois-168306286/" target="_blank" className="btn-outline">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <div className="logo">DF<span style={{ color: 'var(--primary)' }}>.</span></div>
            <p className="copyright">
              © {new Date().getFullYear()} Dorian François. Réalisé avec Passion & Data.
            </p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default App;
