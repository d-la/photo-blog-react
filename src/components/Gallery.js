import React, { Component } from 'react';
import GalleryImage from './GalleryImage';
import PropTypes from 'prop-types';

class Gallery extends Component{


    render(){
        return (
            <div className="gallery">
            {this.props.galleryImages.map( (image) => (
                <GalleryImage key={image.id} image={image} />
            ))}
            </div>
        )
    }
}

Gallery.propTypes = {
    galleryImages: PropTypes.array.isRequired
}

export default Gallery;