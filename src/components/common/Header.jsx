import React from 'react';
import styled from 'styled-components';

const Label = styled.div`
    color: lime;
    font-size: 2rem;
`;

const Header = () => (
  <Label>
    <div style={{ fontSize: '3rem' }}>
      Welcome to
      {' '}
      <span style={{ color: 'yellow' }}>KUICS</span>
      {' '}
      homepage...
    </div>
    <div>
      type
      {' '}
      <span style={{ color: 'yellow' }}>help</span>
      {' '}
      to see command list
    </div>
  </Label>
);

export default Header;
