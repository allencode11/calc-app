import './toggle-switch.css';
import {useState} from "react";

export const ToggleSwitch = () => {
  const [position, setPosition] = useState(0); // 0: Position 1, 1: Position 2, 2: Position 3

  const handleToggle = () => {
    setPosition((position + 1) % 3); // Toggle between 0, 1, 2
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
          <div className={'slider'}>
            <div onClick={handleToggle} className={`round position-${position + 1}`}></div>
          </div>
        </div>
      </div>

    </div>
  )
}