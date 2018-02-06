import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const dateLabel = (date) => {
  return moment(date).format('ll');
};

class Modal extends React.Component {
  handleClick(e) {
    e.stopPropagation();
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: '0.75em',
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: '0.75em',
    };

    const articleStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '1em',
      flexWrap: 'wrap',
    };

    const summaryStyle = {
      padding: '0.75em',
      flex: '1',
    };

    const summaryElementsStyle = {
      paddingBottom: '0.25em'
    };

    const bioStyle = {
      padding: '0.75em',
      flex: '1',
    };

    const bioTitleStyle = {
      marginTop: 0,
      marginBottom: 0,
    };

    const controlStyle = {
      width: '100%',
      textAlign: 'center',
    };

    const buttonStyle = {
      fontSize: '1em',
      padding: '0.25em 1em',
      background: '#2b4f81',
      color: '#fff',
      border: '2px solid #fff',
      borderRadius: '3px',
    };

    return (
      <div style={backdropStyle} onClick={this.props.onClose}>
        <div style={modalStyle} onClick={this.handleClick}>
          <article style={articleStyle}>
            <div style={summaryStyle}>
              <img
                style={summaryElementsStyle}
                src={this.props.data.avatar}
                alt={this.props.data.firstName}/>
              <div style={summaryElementsStyle}>
                <strong>{this.props.data.jobTitle}</strong>
              </div>
              <div style={summaryElementsStyle}>{this.props.data.age}</div>
              <div style={summaryElementsStyle}>{dateLabel(this.props.data.dateJoined)}</div>
            </div>
            <div style={bioStyle}>
              <h4 style={bioTitleStyle}>{this.props.data.firstName}{' '}{this.props.data.lastName}</h4>
              <p>{this.props.data.bio}</p>
            </div>
          </article>
          <div style={controlStyle}>
            <button style={buttonStyle} onClick={this.props.onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  data: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default Modal;
