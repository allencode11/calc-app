import './color-button.css';
import {useState} from "react";
export type btnProps =  {
  color: string;
  content: string;
  width: number;
  func: Function
  textColor: string;
  shadow: string;
  activeColor: string;
  fontSize: string;
}
export const ColorButton = (btn: btnProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const btnStyles = {
    backgroundColor: isHovered ? btn.activeColor : btn.color,
    width: btn.width,
    color: btn.textColor,
    borderBottom: `4px solid ${btn.shadow}`,
    fontSize: btn.fontSize !== '' ? btn.fontSize : '40px',
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div id='btn'
         onMouseEnter={ handleMouseEnter }
         onMouseLeave={ handleMouseLeave }
         style={btnStyles}
         onClick={() => {btn.func(btn.content)}}>
      {btn.content}
    </div>
  )
}