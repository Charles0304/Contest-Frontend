import React from 'react'

export default function DataTable({ data }) {
    return (
        <div className='overflow-auto h-96 w-full'>
            <table className='min-w-full bg-white border border-gray-300'>
                <thead>
                    <tr>
                        <th className='px-4 py-2 border'>품목번호</th>
                        <th className='px-4 py-2 border'>품명 (한글)</th>
                        <th className='px-4 py-2 border'>품명 (영문)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=>(
                        <tr key={index}>
                            <td className='px-4 py-2 border'>{item.id}</td>
                            <td className='px-4 py-2 border'>{item.koreanName}</td>
                            <td className='px-4 py-2 border'>{item.englishName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
