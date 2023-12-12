import './secondary-button.css';
import '../button.css';

export type btnProps =  {
  content: string;
  width: number | null;
  func: Function
}
export const SecondaryButton = (btn: btnProps) => {
  const w = btn.width == null ? 101 : btn.width;

  return (
    <div id='btn' className='secondary' style={{width: w}} onClick={() => {btn.func(btn.content)}}>{btn.content}</div>
  )
}