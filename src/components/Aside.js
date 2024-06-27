import React from 'react'
import { Link } from 'react-router-dom'
export default function Aside() {
  return (
    <aside className="w-52 p-6 pl-10 border-r border-gray-300 ">
        <h2 className="text-xl font-bold mb-4"><Link to="/mypage">마이페이지</Link></h2>
        <nav>
          <ul className="space-y-2">
            <li><Link to="/log" className="block text-gray-700 hover:text-gray-900">이용내역 조회</Link></li>
            <li><Link to="#" className="block text-gray-700 hover:text-gray-900">데이터 요청</Link></li>
            <li><Link to="/qna" className="block text-gray-700 hover:text-gray-900">Q&A</Link></li>
            <li><Link to="#" className="block text-gray-700 hover:text-gray-900">회원정보 수정</Link></li>
          </ul>
        </nav>
      </aside>
  )
}
