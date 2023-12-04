import './toggle-switch.css';

export const ToggleSwitch = () => {
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
        <label className='switch'>
          <input type='checkbox' />
          <span className='slider round'></span>
        </label>
      </div>

    </div>
  )
}