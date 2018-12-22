import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Card.css';
import images from '../images/puting.png';
import {ImageStorage} from "../ImageStorage";

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick() {
        const {callback, imageKey} = this.props;
        callback(imageKey);
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
        const imageSrc = ImageStorage.storage['putin'];
        return (
            <img style={{"width": "100%", "height": "100%"}} src={imageSrc}/>
        )
    }
}

Card.propTypes = {
    imageKey: PropTypes.string.isRequired,
    displayed: PropTypes.bool.isRequired,
    callback: PropTypes.func.isRequired,
};