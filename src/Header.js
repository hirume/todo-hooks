import React from 'react';
import moment from 'moment';
import './Header.css'

function Header(props) {
    let timeInput = 0;
  


    return (
        <div>
            <form>
                <form>
                <input type='number' className='input-num' min='0' max='23'></input>
                <input type='number' className='input-num' min='0' max='59'></input>
                <button>Start</button>
                </form>
                <form>
                <input type='number' className='input-num' min='0' max='23'></input>
                <input type='number' className='input-num' min='0' max='59'></input>
                <button>End</button>
                </form>
                
                {timeInput}

                <input type='text' className='input-txt'></input>
                <select>
  <option value="tpz">Tpz</option>
  <option value="tptd">Tptd</option>
  <option value="top">Top</option>
  <option value="nr">NR</option>
  <option value="pr">Pr</option>
  <option value="tpnt">Tpnt</option>
  <option value="obs">Tobsl</option>
  <option value="none">none</option>
</select> 
<input type='submit'></input>
            </form>
            
        </div>
    )
}

export default Header