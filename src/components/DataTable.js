import React from 'react'

export default function DataTable({ data }) {
    return (
        <div className='overflow-auto h-full w-5/6'>
            <table className='min-w-full bg-white border border-gray-300'>
                <thead>
                    <tr>
                        <th className='px-4 py-2 border w-36'>품목번호</th>
                        <th className='px-4 py-2 border'>품명 (한글)</th>
                        <th className='px-4 py-2 border'>품명 (영문)</th>
                        <th className='px-4 py-2 border w-36'>품명세부 (한글)</th>
                        <th className='px-4 py-2 border w-36'>품명세부 (영문)</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=>(
                        <tr key={index}>
                            <td className='px-4 py-2 border'>{item.hscode}</td>
                            <td className='px-4 py-2 border'>{item.hs1koreanitem}</td>
                            <td className='px-4 py-2 border'>{item.hs1englishitem}</td>
                            <td className='px-4 py-2 border'>{item.hs3koreanitem}</td>
                            <td className='px-4 py-2 border'>{item.hs3englishitem}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
