import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class FallingTrash extends Component {
    constructor(props) {
        super(props);
        this.state = {falling: false}
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

FallingTrash.propTypes = {
    onStart: PropTypes.func,
    onEnd: PropTypes.func,
    onLeft: PropTypes.func,
    onRight: PropTypes.func,
};