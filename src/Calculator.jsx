import React, { useState } from 'react'
import './Calculator.css'
const Calculator = () => {
    const[value,setValue]=useState('');
    const handleEvaluation = () => {
        try {
            setValue(eval(value).toString());
        } catch (error) {
            setValue('Error');
        }
    };
    const handleDelete = () => {
        if (value === 'Error') {
            setValue('');
        } else {
            setValue(value.slice(0, -1));
        }
    };
  return (
    <div className="container">
        <div className="calculator">
            
            <form action="">
                <div className='display'>
                    <input type='text' value={value}/>
                </div>
                <div>
                    <input type="button" value="AC" onClick={e=>setValue('')}/>
                    <input type="button" value="DE" onClick={handleDelete}/>
                    <input type="button" value="." onClick={e=>setValue(value+e.target.value)}/>
                    <input type="button" value="/" onClick={e=>setValue(value+e.target.value)}/>
                </div>
                <div>
                    <input type="button" value="7" onClick={e=>setValue(value+e.target.value)}/>
                    <input type="button" value="8" onClick={e=>setValue(value+e.target.value)}/>
                    <input type="button" value="9" onClick={e=>setValue(value+e.target.value)}/>
                    <input type="button" value="*" onClick={e=>setValue(value+e.target.value)}/>
                </div>
                <div>
                    <input type="button" value="4" onClick={e=>setValue(value+e.target.value)}/>
                    <input type="button" value="5" onClick={e=>setValue(value+e.target.value)}/>
                    <input type="button" value="6" onClick={e=>setValue(value+e.target.value)}/>
                    <input type="button" value="+" onClick={e=>setValue(value+e.target.value)}/>
                </div>
                <div>
                    <input type="button" value="1" onClick={e=>setValue(value+e.target.value)}/>
                    <input type="button" value="2" onClick={e=>setValue(value+e.target.value)}/>
                    <input type="button" value="3" onClick={e=>setValue(value+e.target.value)}/>
                    <input type="button" value="-" onClick={e=>setValue(value+e.target.value)}/>
                </div>
                <div>
                    <input type="button" value="00" onClick={e=>setValue(value+e.target.value)}/>
                    <input type="button" value="0" onClick={e=>setValue(value+e.target.value)}/>
                    <input type="button" value="="  className='equal' onClick={handleEvaluation }/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Calculator
