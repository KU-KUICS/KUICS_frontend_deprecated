import React from 'react';
import { Link } from 'react-router-dom';

import Command from '../../components/common/Command';

const Help = () => (
  <>
    <div>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <Command>login</Command>
      </Link>
      : show login link
    </div>
    <div>
      <Command>
        ls [
        <Link
          to="/ls notice"
          style={{ textDecoration: 'none', color: 'yellow' }}
        >
          notice
        </Link>
        |
        <Link
          to="/ls board"
          style={{ textDecoration: 'none', color: 'yellow' }}
        >
          board
        </Link>
        ]
      </Command>
      : show list of articles
    </div>
    <div>
      <Link to="/find" style={{ textDecoration: 'none' }}>
        <Command>find</Command>
      </Link>
      : search article
    </div>
  </>
);

export default Help;
