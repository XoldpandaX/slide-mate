import { useState, type FC } from 'react';

import * as styles from './counter.module.scss';

export const Counter: FC = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = (): void => {
    setCounter((c) => c + 1);
  };

  return (
    <div className={styles.buttonA}>
      <button onClick={increaseCounter}>
        increase counter
      </button>
      <div>current counter is {counter}</div>
    </div>
  );
}
