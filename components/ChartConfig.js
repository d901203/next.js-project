export const Config = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                usePointStyle: true,
                pointStyle: 'rect',
            }
        },
        title: {
            display: true,
            color: '#000',
            text: 'Melon 5 Minute Chart',
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            }
        },
        y: {
            beginAtZero: true,
        }
    }
};