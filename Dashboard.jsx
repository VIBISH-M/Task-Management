
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Dashboard() {
    const [data, setData] = useState('');
const nav=useNavigate();
    const handleClick = (value) => {
        setData(data + value);
    };

    const clear = () => {
        setData('');
    };

    const calculate = () => {
        try {
            setData(eval(data).toString());
        } catch {
            setData("error");
        }
    };

    return (



        <div className="calculator">
           
            <div className="display">{data}</div>
            <div className="buttons">
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>

                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>

                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('*')}>*</button>

                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('(')}>(</button>
                <button onClick={() => handleClick(')')}>)</button>
                <button onClick={() => handleClick('/')}>/</button>

                <button onClick={clear}>C</button>
                <button onClick={calculate}>=</button>

            </div>
            <button onClick={()=>nav("/task")}>BackToTasks</button>
        </div>
    );
}
export default Dashboard;