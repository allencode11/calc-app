import './calc-header.css';
import { ToggleSwitch } from "../switch/toggle-switch";

type HeaderProps = {
  modifyFun: Function
}

export const CalcHeader = ({modifyFun} : HeaderProps) => {
  return (
    <div className='header'>
      <div className='logo'>calc</div>
        <ToggleSwitch handleSwitch={modifyFun}></ToggleSwitch>
    </div>
  );
}