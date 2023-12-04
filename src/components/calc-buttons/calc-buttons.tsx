import './calc-buttons.css';
import {ColorButton} from "../button/color-button";

type CalcBtnsProps = {
  handleResult: Function,
  handleOperation: Function,
  handleNums: Function,
  handleDel: Function,
  handleReset: Function,
}
export const CalcButtons = ({handleOperation, handleResult, handleNums, handleReset, handleDel}: CalcBtnsProps) => {
  const calcNumsArr = [
    { content: '7', color: '#EAE3DC', func: handleNums, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff'},
    { color: '#EAE3DC', content: '8', func: handleNums, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff'},
    { color: '#EAE3DC', content: '9', func: handleNums, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff'},
    { color: '#647198', content: 'DEL', func: handleDel, width: 101, textColor: '#fff', shadow: '#3A4663', activeColor: '#A2B2E1'},

    { content: '4', color: '#EAE3DC', func: handleNums, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff'},
    { color: '#EAE3DC', content: '5', func: handleNums, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff'},
    { color: '#EAE3DC', content: '6', func: handleNums, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff'},
    { color: '#EAE3DC', content: '+', func: handleOperation, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff'},

    { content: '1', color: '#EAE3DC', func: handleNums, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff'},
    { color: '#EAE3DC', content: '2', func: handleNums, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff'},
    { color: '#EAE3DC', content: '3', func: handleNums, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff'},
    { color: '#EAE3DC', content: '-', func: handleOperation, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff'},

    { content: '.', color: '#EAE3DC', func: handleNums, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff'},
    { color: '#EAE3DC', content: '0', func: handleNums, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff'},
    { color: '#EAE3DC', content: '/', func: handleOperation, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff'},
    { color: '#EAE3DC', content: 'x', func: handleOperation, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff'},

    { content: 'RESET', color: '#647198', func: handleReset, width: 227, textColor: '#fff', shadow: '#3A4663', activeColor: '#A2B2E1'},
    { color: '#D03F2F', content: '=', func: handleResult, width: 227, textColor: '#fff', shadow: '#94241c', activeColor: '#F96B5B'},



  ]
  return (
    <div className='calc-buttons'>
      {
        calcNumsArr.map((item, index) => (
          <ColorButton
            key={index}
            color={item.color}
            content={item.content}
            func={item.func}
            width={item.width}
            shadow={item.shadow}
            activeColor={item.activeColor}
            textColor={item.textColor}></ColorButton>
        ))
      }
    </div>

  );
}