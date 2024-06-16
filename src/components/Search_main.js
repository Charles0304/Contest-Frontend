
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Scrollbar from '../components/Scrollbar';

export default function Search_main() {
    const [inputText, setInputText] = useState('input');
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    
    const handleData = () => {
        setIsLoading(true);
    
        setTimeout(() => {
            fetch('http://10.125.121.220:8080/hscode/random-hscodes')
            .then((resp) => resp.json())
            .then((data) => setItems(data));
            setIsLoading(false);
        }, 3000);
    };
    
    
    return (
        <div className='h-screen bg-gray-100 flex items-center justify-center'>
            <div className='bg-white p-6 rounded-lg shadow-lg flex justify-between space-x-4 w-3/4'>
                <div className='flex flex-col space-y-2 flex-1'>
                    <label htmlFor='inputText' className='p-4 text-sm font-medium text-gray-700'>Input Text</label>
                    <textarea
                        id="inputText"
                        rows="18"
                        className='p-4 border border-gray-300 rounded'
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <button
                        onClick={handleData}
                        className='bg-blue-700 text-white px-4 py-2 rounded hover:bg-gray-800'
                    >Search</button>
                </div>
                <div className='flex items-center justify-center w-24'>
                    {isLoading ? (
                        <div className='loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-14 w-14'></div>
                    ) : (
                        <FaArrowRight className="text-3xl text-gray-500" />
                    )}
                </div>
                <div className='flex flex-col space-y-2 flex-1'>
                    <label htmlFor='outputText' className='p-4 text-sm font-medium text-gray-700'>Result</label>
                    <Scrollbar items={items} />
                    <p className='border text-center border-gray-500 p-4 m-4 rounded-lg'>빈공간</p>
                </div>
            </div>
        </div>
    )
}
