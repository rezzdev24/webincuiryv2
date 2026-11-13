const ctx = document.getElementById('diagramSampah');

new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['Minggu ke-3', 'Minggu ke-4', 'Minggu ke-5', 'Minggu ke-6'],

        datasets: [{
            label: 'Total Sampah (kg)',
            data: [137.1, 79.2, 110.74, 78.3],

            backgroundColor: [
                '#245c3b',
                '#4c956c',
                '#74c69d',
                '#95d5b2'
            ],

            borderRadius: 5
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                position: 'top'
            }
        },

        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Berat Sampah (kg)'
                }
            },

            x: {
                title: {
                    display: true,
                    text: 'Minggu'
                }
            }
        }
    }
});