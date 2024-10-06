import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

export function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower();

  //type guard
  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp(); // 20
  abstraction.volumeUp(); // 30
  abstraction.volumeDown(); // 20
}

const tv = new Tv();
const tvController = new RemoteControl(tv);
clientCode(tvController);

console.log('///////////////');

const radio = new Radio();
const radioController = new RemoteControlWithVolume(radio);
clientCode(radioController);
