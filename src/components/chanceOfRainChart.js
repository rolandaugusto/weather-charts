import React, { Component } from 'react';
import Chart from 'chart.js';

class MyChart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lower: this.props.lower,
            mean: this.props.mean,
            upper: this.props.upper
        };

        this.renderChart = this.renderChart.bind(this);

        this._chart = null;
    }

    componentDidMount() {
        this.renderChart();
    }

    componentWillReceiveProps(props) {
        this.setState({
            lower: props.lower,
            mean: props.mean,
            upper: props.upper
        });
        this.renderChart();
    }

    renderChart() {
        this._chart = new Chart(this.refs.chart, {
            type: 'line',
            data: {
                labels: [1,2,3,4,5,6,7],
                datasets: [
                    {
                        label: "Upper",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,12,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.state.upper,
                        spanGaps: false,
                    },
                    {
                        label: "Mean",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,92,192,0.4)",
                        borderColor: "rgba(75,12,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.state.mean,
                        spanGaps: false,
                    },
                    {
                        label: "Lower",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(5,12,12,0.4)",
                        borderColor: "rgba(5,12,12,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(5,12,12,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.state.lower,
                        spanGaps: false,
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: '%'
                        },
                        ticks: {
                            beginAtZero:true
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'days'
                        }
                    }]
                },
                title: {
                    display: true,
                    text: 'Chance of Rain'
                }
            }
        });
    }

    render() {
        return (
            <canvas ref="chart" width="400" height="400" />
        );
    }
}

export default MyChart;