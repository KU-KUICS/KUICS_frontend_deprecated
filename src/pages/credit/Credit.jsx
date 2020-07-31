import React from 'react';
import styled from 'styled-components';

const Role = styled.td`
    padding-left: 2rem;
`;

const Credit = () => (
  <>
    <div style={{ color: 'red', fontSize: '3rem' }}>Made by</div>
    <table>
      <tr>
        <td>
          <a href="https://github.com/BeLeap">BeLeap</a>
        </td>
        <Role>PM/Deploy/Frontend/Backend</Role>
      </tr>
      <tr>
        <td>
          <a href="https://github.com/hyp3rflow">hyperflow</a>
        </td>
        <Role>Frontend</Role>
      </tr>
      <tr>
        <td>
          <a href="https://github.com/Lanph3re">Lanph3re</a>
          ,
          {' '}
          <a href="http://github.com/lsjbh45">lsjbh45</a>
          ,
          {' '}
          <a href="http://github.com/zheedong">zheedong</a>
        </td>
        <Role>Backend</Role>
      </tr>
    </table>
  </>
);

export default Credit;
