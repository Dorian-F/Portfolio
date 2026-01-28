// Initialize Lucide icons
lucide.createIcons();

// Skills Radar Chart Initialization
const initRadarChart = () => {
    const ctx = document.getElementById('skillsRadarChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Data Management',
                'Programmation',
                'Visualisation',
                'Gestion de Projet',
                'Analyse Flux',
                'Communication'
            ],
            datasets: [{
                label: 'Niveau de Compétence',
                data: [90, 85, 95, 88, 80, 92],
                fill: true,
                backgroundColor: 'rgba(56, 189, 248, 0.2)',
                borderColor: '#38bdf8',
                pointBackgroundColor: '#38bdf8',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#38bdf8'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    pointLabels: {
                        color: '#94a3b8',
                        font: { size: 12, family: 'Inter' }
                    },
                    ticks: { display: false, stepSize: 20 },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: { display: false }
            },
            maintainAspectRatio: false
        }
    });
};

// Scroll Animation Observer
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');

                // Trigger progress bar animations when in view
                if (entry.target.classList.contains('languages')) {
                    const bars = entry.target.querySelectorAll('.progress');
                    bars.forEach(bar => {
                        const targetWidth = bar.style.width;
                        bar.style.width = '0';
                        setTimeout(() => bar.style.width = targetWidth, 100);
                    });
                }
            }
        });
    }, { threshold: 0.1 });

    const selectors = [
        '.skill-card',
        '.timeline-item',
        '.section-header',
        '.project-card',
        '.lang-item',
        '.radar-chart-wrapper'
    ];

    document.querySelectorAll(selectors.join(', ')).forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Specific observer for languages section to trigger bars
    const langSection = document.querySelector('.languages');
    if (langSection) observer.observe(langSection);
};

// Dynamic Navbar
const handleNavbar = () => {
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '1rem 0';
            nav.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            nav.style.padding = '1.5rem 0';
            nav.style.background = 'rgba(15, 23, 42, 0.8)';
        }
    });
};

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initRadarChart();
    observeElements();
    handleNavbar();
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    .fade-in-up {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);
