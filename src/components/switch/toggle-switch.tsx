import './toggle-switch.css';
import { useState } from "react";

type SwitchProps = {
  handleSwitch: Function
}
export const ToggleSwitch = ({ handleSwitch } : SwitchProps) => {
  const [position, setPosition] = useState(0); // 0: Position 1, 1: Position 2, 2: Position 3

  const handleToggle = () => {
    const pos = (position + 1) % 3
    setPosition(pos); // Toggle between 0, 1, 2
    handleSwitch(pos);
  };

  return (
    <div className='toggle-switch'>
      <div className='states-content'>
        <div className='states'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
      <div className='switch-content'>
        <div className='switch-title'>THEME</div>
        <div className='switch'>
          <div onClick={handleToggle} className={'slider'}>
            <div className={`round position-${position + 1}`}></div>
          </div>
        </div>
      </div>

    </div>
  )
}