import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const SkillsRadar = () => {
    const data = {
        labels: [
            'Data Governance',
            'Python Automation',
            'Business Intelligence',
            'Project Leadership',
            'Analyse Flux Supply',
            'Communication Stratégique'
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
    };

    const options = {
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
    };

    return (
        <div className="radar-chart-wrapper glass" style={{ width: '100%', maxWidth: '600px', padding: '2rem', height: '400px', margin: '0 auto' }}>
            <Radar data={data} options={options} />
        </div>
    );
};

export default SkillsRadar;
