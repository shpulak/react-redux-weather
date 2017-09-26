import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(term) {
        this.setState({
            term: term
        });
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term : ''});
    }
    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input
                    className="form-control"
                    type="text"
                    onChange={event => this.onInputChange(event.target.value)}
                    value={this.state.term}
                    placeholder="Get five-day forecast in you fav city" />
                <span className="input-group-btn">
                    <button type="Submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);