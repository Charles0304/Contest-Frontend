// src/App.js
import { useState } from 'react';

const data = [
    {
        id: 1,
        question: "박석운 10일 주문",
        author: "kdy*******",
        date: "2024.06.11",
        answer: "",
        answerDate: ""
    },
    {
        id: 2,
        question: "운동화 끈 문의",
        author: "sah*******",
        date: "2024.06.08",
        answer: "",
        answerDate: ""
    },
    {
        id: 3,
        question: "사이즈문의",
        author: "kay*******",
        date: "2024.06.04",
        answer: "안녕하세요 신세계백화점 나이키입니다. 고객님의 문의하신 사항 잘 보았습니다. 문의하신 제품 남여공용 상품입니다. 더 궁금하신 사항 있으시면 언제든지 문의해주세요. 항상 이용해 주셔서 정말 감사합니다.",
        answerDate: "2024.06.05"
    },
    // 추가 데이터...
];


export default function QnABoard() {
    const [selectedId, setSelectedId] = useState(null);

    const toggleSelect = (id) => {
        setSelectedId(selectedId === id ? null : id);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Q&A 게시판</h1>
            <ul className="space-y-4">
                {data.map(item => (
                    <li key={item.id} className="border p-4 rounded shadow">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSelect(item.id)}>
                            <div>
                                <h2 className="text-lg font-semibold">{item.question}</h2>
                                <p className="text-sm text-gray-600">작성자: {item.author} | 날짜: {item.date}</p>
                            </div>
                            <div className="text-sm">
                                {item.answer ? (
                                    <span className="text-green-600">답변완료</span>
                                ) : (
                                    <span className="text-red-600">답변대기</span>
                                )}
                            </div>
                        </div>
                        {selectedId === item.id && (
                            <div className="mt-4">
                                <p className="text-gray-800">질문: {item.question}</p>
                                {item.answer ? (
                                    <>
                                        <p className="text-gray-800 mt-2">답변: {item.answer}</p>
                                        <p className="text-sm text-gray-600 mt-1">답변 날짜: {item.answerDate}</p>
                                    </>
                                ) : (
                                    <p className="text-gray-800 mt-2">답변이 아직 없습니다.</p>
                                )}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}