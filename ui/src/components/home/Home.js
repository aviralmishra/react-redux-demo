import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <p>
          <Link to='/dashboard'>
            Books
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
