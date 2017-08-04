import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import './../styles/components/Stories.css';

class StoryPreview extends Component {
  render() {
    return (
      <section className="story-container flex-container">
        <div className="story-text">
          <span className="story-year">{this.props.date}</span>
          <div className="story-text">
            <h3>{this.props.title}</h3>
            <ReactMarkdown source={this.props.preview} />
            <div className="read-more">
              <Link to={'/stories/' + this.props.id}>Continue Reading</Link>
            </div>
          </div>
          Tags: {this.props.tags.split(',').join(', ')}
        </div>
        <img
          className="story-image"
          src={this.props.image}
          alt={this.props.title}
        />
      </section>
    );
  }
}

StoryPreview.propTypes = {
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  engPreview: PropTypes.string,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default StoryPreview;
