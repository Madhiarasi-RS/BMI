import { useBmi } from '../context/BmiContext';

const BmiCalculator = () => {
  const {
    height,
    setHeight,
    weight,
    setWeight,
    bmi,
    bmiStatus,
    errorMessage,
    calculateBmi,
    clearAll
  } = useBmi();

  return (
    <div className='bmi-calculator'>
      <h1>BMI Calculator</h1>
      {errorMessage && <p className='error'>{errorMessage}</p>}
      <div className='input-container'>
        <label htmlFor='height'>Height (in cm): </label>
        <input
          type='text'
          value={height}
          id='height'
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className='input-container'>
        <label htmlFor='weight'>Weight (in kg): </label>
        <input
          type='text'
          value={weight}
          id='weight'
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBmi}>CALCULATE BMI</button>
      <button onClick={clearAll}>CLEAR</button>
      {bmi !== null && (
        <div className='result'>
          <p>Your BMI is: {bmi}</p>
          <p>Status: {bmiStatus}</p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
