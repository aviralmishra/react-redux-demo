import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const dateLabel = (date) => {
  return moment(date).format('ll');
};

const Header = ({company}) => (
  <header className="header clear">
    <h1 className="header-title">{company.companyName}</h1>
    <h3 className="header-text-left">{company.companyMotto}</h3>
    <h3 className="header-text-right">Since {dateLabel(company.companyEst)}</h3>
    <div className="clearfix"></div>
  </header>
);

Header.propTypes = {
  companyInfo: PropTypes.shape(
    {companyName: PropTypes.string.isRequired, companyMotto: PropTypes.string.isRequired, companyEst: PropTypes.string.isRequired}
  )
};

export default Header;
