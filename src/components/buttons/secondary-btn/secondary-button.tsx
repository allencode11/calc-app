import './secondary-button.css';
import '../button.css';
import {useEffect, useState} from "react";

export type btnProps =  {
  content: string;
  width: number | null;
  func: Function
}
export const SecondaryButton = (btn: btnProps) => {
  const [divWidth, setDivWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 550) {
       setDivWidth(btn.width == null ? 60 : 133);
      } else {
        setDivWidth(btn.width == null ? 101 : btn.width);
      }
    };

    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [divWidth]);

  return (
    <div id='btn' className='secondary' style={{width: divWidth}} onClick={() => {btn.func(btn.content)}}>{btn.content}</div>
  )
}