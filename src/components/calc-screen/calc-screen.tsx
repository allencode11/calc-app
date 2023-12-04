import './calc-screen.css';

type CalcResult = {
  result: number;
}
export const CalcScreen = ({result} : CalcResult) => {
  return (
    <div className='calc-screen'>
      <div className='calc-result'>{result}</div>
    </div>
  );
}