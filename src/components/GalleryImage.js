import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class GalleryImage extends Component {
  render() {
    return (
      <div className="gallery__image">
        <img src={this.props.image.src} alt={this.props.image.title} />
      </div>
    )
  }
}

// PropTypes
GalleryImage.propType = {
    galleryImages: PropTypes.object.isRequired
}

export default GalleryImage
