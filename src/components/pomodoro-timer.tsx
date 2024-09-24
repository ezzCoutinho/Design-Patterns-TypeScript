import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime}></Timer>
      <div className="controls">
        <Button text="Teste" onClick={() => console.log(1)}></Button>
        <Button text="Teste" onClick={() => console.log(1)}></Button>
        <Button text="Teste" onClick={() => console.log(1)}></Button>
      </div>

      <div className="details">
        <p>Testando: aslkdjaljksd alksdjad lkasjdlkjasdljk jh</p>
        <p>Testando: aslkdjaljksd alksdjad lkasjdlkjasdljk jh</p>
        <p>Testando: aslkdjaljksd alksdjad lkasjdlkjasdljk jh</p>
        <p>Testando: aslkdjaljksd alksdjad lkasjdlkjasdljk jh</p>
      </div>
    </div>
  );
}
