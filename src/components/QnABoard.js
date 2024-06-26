import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function QnABoard() {
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [answerContent, setAnswerContent] = useState('');
    const [role, setRole] = useState('');
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if(storedUser&&storedUser.role){
            setRole(storedUser.role)
        }
        fetch('http://10.125.121.220:8080/api/questions-answers')
            .then((resp) => resp.json())
            .then((data) => setData(data));
    }, []);

    const toggleSelect = (id) => {
        setSelectedId(selectedId === id ? null : id);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newQuestionData = {
            title: newTitle,
            content: newContent,
            isAnswered: false,
            member: {
                id: 1 // 나중에 로그인 한 사용자로 변경
            }
        };

        fetch('http://10.125.121.220:8080/api/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newQuestionData)
        })
            .then((resp) => resp.json())
            .then((savedQuestion) => {
                setNewContent('');
                setNewTitle('');
                setIsFormVisible(false);
                window.location.reload()
            });
    };

    const handleAnswerSubmit = (e,questionSeq)=>{
        e.preventDefault();
        
        const answerData = {
            title:"답변",
            content:answerContent,
            questionBoard:{
                seq:questionSeq
            },
            member:{
                id:1//나중에 로그인 한 사용자로 변경
            }
        };

        fetch('http://10.125.121.220:8080/api/answers',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(answerData)
        })
        .then((resp)=>resp.json())
        .then((savedAnswer)=>{
            setAnswerContent('');
            window.location.reload();
        });
    };

    return (
        <div className="container mx-auto p-4 h-full flex flex-col">
            <h1 className="text-2xl font-bold mb-4">Q&A 게시판</h1>
            <button 
                onClick={() => setIsFormVisible(!isFormVisible)} 
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded w-1/2"
            >
                문의하기
            </button>
            {isFormVisible && (
                <form className="mb-4 p-4 border rounded" onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">제목</label>
                        <input 
                            type="text" 
                            value={newTitle} 
                            onChange={(e) => setNewTitle(e.target.value)} 
                            className="w-full p-2 border rounded" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">내용</label>
                        <input 
                            type="text" 
                            value={newContent} 
                            onChange={(e) => setNewContent(e.target.value)} 
                            className="w-full p-2 border rounded" 
                            required 
                        />
                    </div>
                    <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">문의 제출</button>
                </form>
            )}
            <div className="flex-1 overflow-auto">
                <ul className="space-y-4">
                    {data.map(item => (
                        <li key={item.questionSeq} className="border p-4 rounded shadow">
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSelect(item.questionSeq)}>
                                <div>
                                    <h2 className="text-lg font-semibold">{item.questionTitle}</h2>
                                    <p className="text-sm text-gray-600">작성자: {item.questionAuthor} | 날짜: {item.questionDate.split('T')[0]}</p>
                                </div>
                                <div className="text-sm">
                                    {item.answerTitle ? (
                                        <span className="text-green-600">답변완료</span>
                                    ) : (
                                        <span className="text-red-600">답변대기</span>
                                    )}
                                </div>
                            </div>
                            {selectedId === item.questionSeq && (
                                <div className="mt-4">
                                    <p className="text-gray-800">질문: {item.questionContent}</p>
                                    {item.answerTitle ? (
                                        <>
                                            <p className="text-gray-800 mt-2">답변: {item.answerContent}</p>
                                            <p className="text-sm text-gray-600 mt-1">답변 날짜: {item.answerDate.split('T')[0]}</p>
                                        </>
                                    ) : (
                                        <>
                                        <p className="text-gray-800 mt-2">답변이 아직 없습니다.</p>
                                        {role==='ROLE_MANAGER'&&(
                                            <form className='mt-4' onSubmit={(e)=>handleAnswerSubmit(e,item.questionSeq)}>
                                                <label className='block text-gray-700'>답변 내용</label>
                                                <input
                                                    type="text"
                                                    value={answerContent}
                                                    onChange={(e)=>setAnswerContent(e.target.value)}
                                                    className='w-full p-2 border rounded'
                                                    required
                                                />
                                                <button type="submit" className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'>답변 제출</button>
                                            </form>
                                        )}
                                        </>
                                    )}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
