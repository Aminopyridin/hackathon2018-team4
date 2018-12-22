import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Card.css';
import {ImageStorage} from "../ImageStorage";

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick() {
        const {displayed, callback, imageKey} = this.props;
        if (!displayed) {
            callback(imageKey);
        }
    }

    render () {
        const {imageKey} = this.props;
        return (
            <div onClick={() => this.onClick()} className={styles.card}>
                {this.renderImage()}
            </div>
        )
    }

    renderImage() {
        const {imageKey, displayed} = this.props;
        const imageSrc = displayed ? ImageStorage.storage[imageKey] : ImageStorage.storage['default'];
        return (
            <img className={styles.content} style={{"width": "100%", "height": "100%"}} src={imageSrc}/>
        )
    }
}

Card.propTypes = {
    imageKey: PropTypes.string.isRequired,
    displayed: PropTypes.bool.isRequired,
    callback: PropTypes.func.isRequired,
};