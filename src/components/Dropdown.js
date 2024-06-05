import React from 'react'

export default function Dropdown({label,options,selectedOption, onChange}) {
  return (
    <div>
        <div className='flex flex-col mb-4'>
            <label className='mb-2 font-bold'>{label}</label>
            <select
              className='p-2 border border-gray-300 rounded'
              value={selectedOption}
              onChange={e=>onChange(e.target.value)}
            >
                {options.map(option=>(
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    </div>
  )
}
