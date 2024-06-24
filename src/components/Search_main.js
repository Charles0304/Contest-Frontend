
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Scrollbar from '../components/Scrollbar';

export default function Search_main() {
    const [inputText, setInputText] = useState('input');
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    
    const handleData = () => {
        setIsLoading(true);
        console.log(localStorage.getItem('user'))
        setTimeout(() => {
            fetch('http://10.125.121.220:8080/hscode/random-hscodes')
            .then((resp) => resp.json())
            .then((data) => setItems(data));
            setIsLoading(false);
        }, 3000);
    };
    
    
    return (
        <div className='h-screen bg-gray-100 flex items-center justify-center'>
            <div className='bg-white p-4 rounded-lg shadow-lg flex justify-between space-x-4 w-3/4'>
                <div className='flex flex-col flex-1 p-4'>
                    <label htmlFor='inputText' className='text-lg mb-4 font-medium text-gray-700'>Input Text</label>
                    
                    <textarea
                        id="inputText"
                        rows="18"
                        className='p-4 mb-8 shadow-lg rounded-xl ring-1 ring-black/5'
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    
                    <button
                        onClick={handleData}
                        className='border border-[#09A9A9] text-[#09A9A9] hover:bg-[#09A9A9] text-center hover:text-white px-4 py-2 rounded '
                    >Search</button>
                </div>
                <div className='flex items-center justify-center w-24'>
                    {isLoading ? (
                        <div className='loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-14 w-14'></div>
                    ) : (
                        <FaArrowRight className="text-3xl text-gray-500" />
                    )}
                </div>
                <div className='flex flex-col flex-1 p-4'>
                    <label htmlFor='outputText' className='text-lg mb-4 font-medium text-gray-700'>Result</label>
                    <Scrollbar items={items} />
                    <p className='mt-8 border text-[#09A9A9] border-[#09A9A9] hover:bg-[#09A9A9] text-center hover:text-white px-4 py-2 rounded'>Clear</p>
                </div>
            </div>
        </div>
    )
}
