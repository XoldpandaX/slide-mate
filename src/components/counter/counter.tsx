import React, { useState } from 'react';

import * as styles from './counter.module.scss';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.buttonA}>
      <button onClick={() => setCounter((c) => c + 1)}>
        increase counter
      </button>
      <div>current counter is {counter}</div>
    </div>
  );
}
