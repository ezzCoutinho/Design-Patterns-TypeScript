import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

//Receiver
const bedroomLight = new SmartHouseLight('Luz do Quarto');
const restroomLight = new SmartHouseLight('Luz do Banheiro');

//Command
const restroomLightPowerCommand = new LightPowerCommand(restroomLight);
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bedroomIntensityLight = new LightIntensityCommand(bedroomLight);
const restroomIntensityLight = new LightIntensityCommand(restroomLight);

//Controle - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-1', bedroomLightPowerCommand);
smartHouseApp.addCommand('btn-2', restroomLightPowerCommand);
smartHouseApp.addCommand('btn-3', bedroomIntensityLight);
smartHouseApp.addCommand('btn-4', restroomIntensityLight);

smartHouseApp.undoCommand('btn-1');
smartHouseApp.executeCommand('btn-1');
for (let i = 0; i < 51; i++) {
  smartHouseApp.executeCommand('btn-3');
}

smartHouseApp.undoCommand('btn-2');
smartHouseApp.executeCommand('btn-2');
for (let i = 0; i < 51; i++) {
  smartHouseApp.undoCommand('btn-4');
}
