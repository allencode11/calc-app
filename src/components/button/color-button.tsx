import './color-button.css';
export type btnProps =  {
  color: string;
  content: string;
  width: number;
  func: Function
  textColor: string;
}
export const ColorButton = (btn: btnProps) => {
  return (
    <div id='btn' className='inner-shadow-box' style={{backgroundColor: btn.color, width: btn.width, color: btn.textColor}}
         onClick={() => {btn.func(btn.content)}}>
      {btn.content}
    </div>
  )
}