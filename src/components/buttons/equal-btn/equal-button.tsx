import './equal-button.css';
import '../button.css';

export type btnProps =  {
  func: Function
}
export const EqualButton = (btn: btnProps) => {
  return (
    <div id='btn' className='equal' onClick={() => {btn.func('=')}}>=</div>
  )
}