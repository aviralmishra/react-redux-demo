import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../shared/Modal';

class EmployeeCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const employee = this.props.employee;

    return (
      <React.Fragment>
        <article className="card">
          <a href="#" onClick={this.toggleModal}>
            <img src={employee.avatar} alt={employee.firstName}/>
          </a>
          <a href="#" onClick={this.toggleModal}>
            <div className="card-content">
              <h4>{employee.firstName}{' '}{employee.lastName}</h4>
              <p>{employee.bio.substring(0, 30) + '...'}</p>
            </div>
          </a>
        </article>
        <Modal show={this.state.isOpen} onClose={this.toggleModal} data={employee}/>
      </React.Fragment>
    );
  }
}

EmployeeCard.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    bio: PropTypes.string.isRequired,
    dateJoined: PropTypes.string.isRequired
  })
};

export default EmployeeCard;
