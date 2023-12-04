import './calc-header.css';
import { ToggleSwitch } from "../switch/toggle-switch";

export const CalcHeader = () => {
  return (
    <div className='header'>
      <div className='logo'>calc</div>
        <ToggleSwitch></ToggleSwitch>
    </div>
  );
}