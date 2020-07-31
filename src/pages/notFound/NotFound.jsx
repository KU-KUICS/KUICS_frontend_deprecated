import React from 'react';

import kuicsNotFound from '../../images/KUICS-404.png';
import Command from '../../components/common/Command';

const NotFound = () => (
  <>
    <div>
      Unknown Command
    </div>
    <div>
      type
      {' '}
      <Command>help</Command>
      {' '}
      to see command list
    </div>
  </>
);

export default NotFound;
