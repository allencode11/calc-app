import './calc-buttons.css';
import { SimpleButton } from "../buttons/simple-btn/simple-button";
import { SecondaryButton } from "../buttons/secondary-btn/secondary-button";
import {EqualButton} from "../buttons/equal-btn/equal-button";

type CalcBtnsProps = {
  handleResult: Function,
  handleOperation: Function,
  handleNums: Function,
  handleDel: Function,
  handleReset: Function,
}
export const CalcButtons = ({handleOperation, handleResult, handleNums, handleReset, handleDel}: CalcBtnsProps) => {
  const calcNumsArr = [

    { color: '#647198', content: 'DEL', func: handleDel, width: 101, textColor: '#fff', shadow: '#3A4663', activeColor: '#A2B2E1', fontSize: '28px'},

    { content: '4', color: '#EAE3DC', func: handleNums, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff',fontSize: ''},
    { color: '#EAE3DC', content: '5', func: handleNums, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff',fontSize: ''},
    { color: '#EAE3DC', content: '6', func: handleNums, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff',fontSize: ''},
    { color: '#EAE3DC', content: '+', func: handleOperation, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff',fontSize: ''},

    { content: '1', color: '#EAE3DC', func: handleNums, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff',fontSize: ''},
    { color: '#EAE3DC', content: '2', func: handleNums, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff',fontSize: ''},
    { color: '#EAE3DC', content: '3', func: handleNums, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff',fontSize: ''},
    { color: '#EAE3DC', content: '-', func: handleOperation, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff',fontSize: ''},

    { content: '.', color: '#EAE3DC', func: handleNums, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff',fontSize: ''},
    { color: '#EAE3DC', content: '0', func: handleNums, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff',fontSize: ''},
    { color: '#EAE3DC', content: '/', func: handleOperation, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff',fontSize: ''},
    { color: '#EAE3DC', content: 'x', func: handleOperation, width: 101, textColor: '#434A59', shadow: '#979797', activeColor: '#fff', fontSize: ''},

    { content: 'RESET', color: '#647198', func: handleReset, width: 227, textColor: '#fff', shadow: '#3A4663', activeColor: '#A2B2E1', fontSize: '28px'},
    { color: '#D03F2F', content: '=', func: handleResult, width: 227, textColor: '#fff', shadow: '#94241c', activeColor: '#F96B5B', fontSize: '28px'},



  ]
  return (
    <div className='calc-buttons'>
      <SimpleButton content='7' func={handleNums}></SimpleButton>
      <SimpleButton content='8' func={handleNums}></SimpleButton>
      <SimpleButton content='9' func={handleNums}></SimpleButton>
      <SecondaryButton content='DEL' func={handleDel} width={null} ></SecondaryButton>

      <SimpleButton content='4' func={handleNums}></SimpleButton>
      <SimpleButton content='5' func={handleNums}></SimpleButton>
      <SimpleButton content='6' func={handleNums}></SimpleButton>
      <SimpleButton content='+' func={handleOperation}></SimpleButton>

      <SimpleButton content='1' func={handleNums}></SimpleButton>
      <SimpleButton content='2' func={handleNums}></SimpleButton>
      <SimpleButton content='3' func={handleNums}></SimpleButton>
      <SimpleButton content='-' func={handleOperation}></SimpleButton>

      <SimpleButton content='.' func={handleNums}></SimpleButton>
      <SimpleButton content='0' func={handleNums}></SimpleButton>
      <SimpleButton content='/' func={handleOperation}></SimpleButton>
      <SimpleButton content='x' func={handleOperation}></SimpleButton>

      <SecondaryButton content='RESET' func={handleReset} width={227} ></SecondaryButton>
      <EqualButton func={handleResult}></EqualButton>
    </div>

  );
}