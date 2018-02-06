import React from 'react';
import PropTypes from 'prop-types';

import EmployeeCard from './EmployeeCard';

const EmployeesList = ({employees}) => {
  return (
    <main className="main-area">
      <div className="centered">
        <h1 className="content-title">Our Employees</h1>
        <section className="cards">
          {
            employees.map((employee) => {
              return <EmployeeCard key={employee.id} employee={employee}/>;
            })
          }
        </section>
      </div>
    </main>
  );
};

EmployeesList.propTypes = {
  employees: PropTypes.array
};

export default EmployeesList;
