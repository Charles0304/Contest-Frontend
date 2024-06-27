import React, { useEffect, useState } from 'react';
import Scrollbar from './Scrollbar';

export default function Log() {
    const [logs, setLogs] = useState([]);
    const [selectedLogId, setSelectedLogId] = useState(null);

    useEffect(() => {
        fetch('http://10.125.121.220:8080/api/logs/' + JSON.parse(localStorage.getItem('user')).id)
            .then((response) => response.json())
            .then((data) => setLogs(data))
            .catch((error) => console.error('Error fetching logs:', error));
    }, []);

    const toggleDetails = (logId) => {
        setSelectedLogId(selectedLogId === logId ? null : logId);
    };

    return (
        <div className="container mx-auto p-4 h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-4">로그 리스트</h2>
            <div className='flex-1 overflow-auto'>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">ID</th>
                            <th className="border border-gray-300 p-2 w-2/3">입력값</th>
                            <th className="border border-gray-300 w-1/6">날짜</th>
                            <th className="border border-gray-300 p-2 w-36">HS Codes</th>
                            <th className="border border-gray-300 p-2">자세히 보기</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log) => (
                            <React.Fragment key={log.id}>
                                <tr>
                                    <td className="border border-gray-300 p-2">{log.id}</td>
                                    <td className="border border-gray-300 p-2">{log.inputValue}</td>
                                    <td className="border border-gray-300 p-2">{new Date(log.createdDate).toLocaleString()}</td>
                                    <td className="border border-gray-300 p-2">
                                        {log.hsCodes.map((hsCode) => (
                                            <span key={hsCode.hscode}>{hsCode.hscode}<br/> </span>
                                        ))}
                                    </td>
                                    <td className='border border-gray-300 p-2'>
                                        <button onClick={() => toggleDetails(log.id)}>보기</button>
                                    </td>
                                </tr>
                                {selectedLogId === log.id && (
                                    <tr>
                                        <td colSpan="5" className='relative'>
                                            <div className="absolute top-0 right-14 max-w-md flex items-center justify-center bg-black bg-opacity-50">
                                                <div className="bg-white p-4 rounded shadow-lg">
                                                    <Scrollbar items={log.hsCodes} />
                                                </div>
                                            </div>
                                            </td>
                                    </tr>
                                        
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
