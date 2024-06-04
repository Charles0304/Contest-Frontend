import React from 'react'

export default function Aside() {
  return (
    <aside className="w-52 p-6 pl-10 border-r border-gray-300 ">
        <h2 className="text-xl font-bold mb-4">마이페이지</h2>
        <nav>
          <ul className="space-y-2">
            <li><a href="#" className="block text-gray-700 hover:text-gray-900">데이터 활용</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-gray-900">데이터 요청</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-gray-900">나의 문의</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-gray-900">회원정보 수정</a></li>
          </ul>
        </nav>
      </aside>
  )
}
