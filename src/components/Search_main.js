
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Scrollbar from '../components/Scrollbar';
import axios from 'axios';

export default function Search_main() {
    const [inputText, setInputText] = useState('input');
    const [translatedText, setTranslatedText] = useState('Result');
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const handleData = () => {
        setIsLoading(true);

        setTranslatedText("Result asdfsdfa");
        setItems([{
            "hscode": "0101-21-1000",
            "hscode1": 101,
            "hscode2": 21,
            "hscode3": 1000,
            "hs1englishitem": "Live horses, asses, mules and hinnies.",
            "hs1koreanitem": "살아 있는 말ㆍ당나귀ㆍ노새ㆍ버새",
            "hs2englishitem": "Pure-bred breeding animals",
            "hs3englishitem": "For farm breeding",
            "hs3koreanitem": "농가 사육용",
            "classificationcode": 11020101,
            "classificationcodename": "(말)",
            "img": "horse"
        },
        {
            "hscode": "2833-29-1000",
            "hscode1": 2833,
            "hscode2": 29,
            "hscode3": 1000,
            "hs1englishitem": "Sulphates; alums; peroxosulphates (persulphates).",
            "hs1koreanitem": "황산염ㆍ명반ㆍ과산화황산염(과황산염)",
            "hs2englishitem": "Other",
            "hs3englishitem": "Iron sulphates",
            "hs3koreanitem": "황산철",
            "classificationcode": 25030101,
            "classificationcodename": "(무기화합물)",
            "img": "compound"
        },
        {
            "hscode": "9706-90-2000",
            "hscode1": 9706,
            "hscode2": 90,
            "hscode3": 2000,
            "hs1englishitem": "Antiques of an age exceeding 100 years.",
            "hs1koreanitem": "골동품(제작 후 100년을 초과한 것으로 한정한다)",
            "hs2englishitem": "Other",
            "hs3englishitem": "Musical instruments",
            "hs3koreanitem": "악기류",
            "classificationcode": 12050201,
            "classificationcodename": "(수집품 및 골동품)",
            "img": "vase"
        }
    ]);
    setIsLoading(false);
    
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
