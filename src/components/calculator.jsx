import React, { useEffect, useState } from 'react';
import './calculator.scss';

const Calculator = () => {
    const [number, setNumber] = useState(null);

    const addTaxToTotal = (e) => {
      const total = Number(e.target.value) + 10;
      const tax = total * 0.15;
  
      const result = total + tax;
  
      setNumber(result);
    };
  
    return (
      <div className="calculator">
        <h2>
            Calculator
        </h2>
        <div>
            <div>Put item price here</div>
            <span>(it'll calculate the tax for you)</span>
            <input onChange={(e) => addTaxToTotal(e)} />
            <div>Total Price With Tax: ${number}</div>
        </div>
      </div>
    );
}

export default Calculator;