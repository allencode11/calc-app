import './color-button.css';
export type btnProps =  {
  color: string;
  content: string;
  width: number;
  func: Function
  textColor: string;
  shadow: string;
}
export const ColorButton = (btn: btnProps) => {
  return (
    <div id='btn'
         style={{backgroundColor: btn.color, width: btn.width, color: btn.textColor, borderBottom: `4px solid ${btn.shadow}`}}
         onClick={() => {btn.func(btn.content)}}>
      {btn.content}
    </div>
  )
}