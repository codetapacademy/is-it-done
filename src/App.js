import React from 'react';
import './App.css';
import Input from './component/input';
import NumberStepper from './component/number-stepper';

const IsItDone = ({}) => {
    return (
      <div className="IsItDone">
        <h1>It works</h1>
        <Input term="Super nice" />
        <NumberStepper/>
      </div>
    );
}

export default IsItDone;
