document.addEventListener('DOMContentLoaded', function () {
    // Initialize the line chart
    var ctxLine = document.getElementById('myLineChart').getContext('2d');
    var myLineChart = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October' ],
            datasets: [{
                label: 'Dataset 1',
                data: [65, 80, 81, 56, 55, -40, 24, 55, -2, 12],
                fill: false,
                borderColor: '#27c04f',
                tension: 0.1
            }, {
                label: 'Dataset 2',
                data: [-28, 48, -40, 19, 86, 90, 88, -30, 0, 15],
                fill: false,
                borderColor: '#31047a',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true
                },
                title: {
                    display: true,
                    text: 'Chart.js Line Chart'
                }
            }
        }
    });

    // Initialize the scatter chart
    const ctxScatter = document.getElementById('myScatterChart').getContext('2d');
    const scatterChart = new Chart(ctxScatter, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Scatter Dataset',
                backgroundColor: '#27c04f',
                borderColor: '#31047a',
                data: [{
                    x: -12,
                    y: 25
                },{
                    x: -7,
                    y: 1
                },{
                    x: -3,
                    y: -4
                },{
                    x: -9,
                    y: -15
                },{
                    x: -10,
                    y: 0
                }, {
                    x: 0,
                    y: 10
                }, {
                    x: 10,
                    y: 5
                }, {
                    x: 5.5,
                    y: 7.5
                }, {
                    x: 0.3,
                    y: 5.1
                }, {
                    x: 0.1,
                    y: 0.5
                }, {
                    x: 2.5,
                    y: 4.5
                }]
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    });
});
