import './simple-button.css';
import '../button.css';

export type btnProps =  {
  content: string;
  func: Function
}
export const SimpleButton = (btn: btnProps) => {
  return (
    <div id='btn' className='simple' onClick={() => {btn.func(btn.content)}}>{btn.content}</div>
  )
}