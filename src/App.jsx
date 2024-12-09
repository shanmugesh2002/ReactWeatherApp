import React,{useState} from 'react'
import './App.css';

const App = () => {
const [height, setHeight] = useState("");
const [weight, setWeight] = useState("");
const [bmi, setBmi] = useState(null);
const [bmiStatus, setBmiStatus] = useState("");
const [error, setError] = useState("");


const handleSubmit=()=>{
  const isValidHeight=/^\d+$/.test(height);
  const isValidWeight=/^\d+$/.test(weight);
  if(isValidHeight  &&  isValidWeight){
    setError("")
    const heightInMeter=parseInt(height)/100;
    const bmiValue=parseInt(weight)/(heightInMeter * heightInMeter);
    setBmi(bmiValue.toFixed(2));
    if(bmiValue <18.5){
      setBmiStatus("UnderWeight");
    }else if(bmiValue >18.5 && bmiValue< 24.9){
      setBmiStatus("NormalWeight");
    }else if(bmiValue >=25 && bmiValue< 29.9){
      setBmiStatus("OverWeight");
    }else{
      setBmiStatus("Obese")
    }
  }else{
    setBmi(null)
    setBmiStatus("");
    setError("Please enter a valid height and weight");
  }
}
const handleClear=()=>{
  setBmi(null)
  setBmiStatus("");
  setHeight("");
  setWeight("");
  setError("")
}


  return (
    <div className='container'>
      <div className='left-image'>
        
      </div>
      <div className='right-content'>
        <h3 className='title'>BMI CALCULATOR</h3>
      {error && <p className='error'>please enter a valid height and weight</p>}
        <div className='input-content' id='height'>
          <label htmlFor="height">Height (cm)</label>
          <input type='text' value={height} onChange={(e)=>{setHeight(e.target.value)}}/>
        </div>
        <div className='input-content' id='weight'>
          <label htmlFor="height">Weight (kg)</label>
          <input type='text' value={weight} onChange={(e)=>{setWeight(e.target.value)}}/>
        </div>
        <div className='buttons'>
          <button className='calculate-btn' onClick={handleSubmit}>Calculate BMI</button>
          <button className='clear-btn' onClick={handleClear}>Clear</button>
        </div>
        {bmi!==null &&<div className="result">
          <p>Your BMI is : {bmi}</p>
          <p>Status : {bmiStatus}</p>
        </div>}
      </div>

    </div>
  )
}

export default App