import React from 'react';

const Header = ({title}) => (
  <div className="Header">
    <div>
      <h1 className="lead">{ title }</h1>
    </div>
  </div>
);

export default Header;