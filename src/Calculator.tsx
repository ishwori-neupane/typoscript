import React, { useState } from 'react'

const Calculator = () => {
    const [inputReference, setInputReference] = useState("" as any);
    const handleClick = (e: any) => {
        // console.log(e.target.name);
        setInputReference(inputReference.concat(e.target.name))
    }
    const handleChange = (e: any) => {
        handleClick(e.target.value);
    }
    const clear = () => {
        setInputReference("");
    }
    const backspace = () => {
        setInputReference(inputReference.slice(0,-1))
    }
    const calculate = () => {
        try {
         setInputReference(eval(inputReference).toString());   
        } catch (err) {
            setInputReference("Error")
        }
        
    }
    return (
        <div>
            <div className="main-wrapper">
                <div className="input-wrapper">
                    <input name="inputreferance" type="text" value={inputReference} onChange={handleChange}  className="display" id="display"/>
                </div>

                <div className="buttons-wrapper">
                    <div className="row rew">
                        <button value="1" name="1" onClick={handleClick}>1</button>
                        <button value="2" name="2" onClick={handleClick}>2</button>
                        <button value="3" name="3" onClick={handleClick}>3</button>
                        <button className="hightlight" value="/" name="/" onClick={handleClick}>&#xF7; </button>
                    </div>
                    <div className="row rew">
                        <button value="4" name="4" onClick={handleClick}>4</button>
                        <button value="5" name="5" onClick={handleClick}>5</button>
                        <button value="6" name="6" onClick={handleClick}>6</button>
                        <button className="hightlight" value="X" name="*" onClick={handleClick}>&times;</button>

                    </div>
                    <div className="row rew">
                        <button value="7" name="7" onClick={handleClick}>7</button>
                        <button value="8" name="8" onClick={handleClick}>8</button>
                        <button value="9" name="9" onClick={handleClick}>9</button>
                        <button className="hightlight" value="-" name="-" onClick={handleClick}>-</button>

                    </div>
                    <div className="row">
                        <button  className="clear hightlight" value="Clear" name="C" onClick={clear}>Clear</button>
                        <button  className="clear hightlight" value="C" name="C" onClick={backspace}>C</button>
                        <button className="equalto" value="0" name="0" onClick={handleClick}>0</button>
                        <button  className="equalto hightlight" onClick={calculate}>=</button>
                        <button  className="equalto hightlight" value="+" name="+" onClick={handleClick}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator

