import React from 'react'

function Dropdown({title,options,func}) {
  return (
    <div >
        <select onChange={func} className='w-[30vh]' defaultValue="0" name="format" id="format">
            <option value="0" disabled>
                {title}
            </option>
            {options.map((o,i)=> ( 
                <option key={i} value={o} >
                {o.toUpperCase()}
                </option>
            ))}
        </select>
    </div>
  )
}

export default Dropdown