import React, { Component } from 'react';

class Slider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.default
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div className="App-slider">
                <label className="App-label">{this.props.label}</label>
                <input
                    type="range"
                    onChange={this.handleChange}
                    min={this.props.min}
                    value={this.state.value}
                    max={this.props.max}
                    step={this.props.step}
                    list={this.props.name}
                />
                <datalist id={this.props.name}>
                    {this.props.options.map((option, idx) => {
                       return <option key={idx}>{option}</option>;
                    })}
                </datalist>
                <div className="App-slider-value">{this.state.value}</div>
            </div>
        );
    }
}

export default Slider;
