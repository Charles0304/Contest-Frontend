import React, { useState } from 'react';

export default function DropdownSearch({ label, options, selectedOption, onChange }) {
  const [searchQuery, setSearchQuery] = useState('');

  // 필터링된 옵션을 계산합니다
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className='flex flex-col mb-4'>
        <label className='mb-2 font-bold'>{label}</label>
        <input
          type='text'
          className='p-2 border border-gray-300 rounded mb-2'
          placeholder='Search...'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <select
          className='p-2 border border-gray-300 rounded'
          value={selectedOption}
          onChange={onChange}
        >
            <option value="" disabled>Select a category</option>
          {filteredOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
