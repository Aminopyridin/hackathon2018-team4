import React from 'react';
import PropTypes from 'prop-types';

export default class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return null;
    }

    createCallback(index) {
        const {rowNumber, callback} = this.props;
        const key = `${rowNumber}_${index}`;
        return (imageKey) => callback(imageKey, key);
    }
}

Row.propTypes = {
    rowNumber: PropTypes.number.isRequired,
    callback: PropTypes.func.isRequired,
};