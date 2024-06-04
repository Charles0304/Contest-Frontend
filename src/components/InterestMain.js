import React from 'react'

export default function InterestMain() {
  return (
    <main className="w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-4">관심공공데이터</h2>
        <div className="mb-4 flex justify-between">
          <span className="text-gray-700">전체 0건</span>
          <button className="ml-4 px-3 py-1 border rounded text-sm text-gray-700 hover:text-gray-900">관심 공공데이터 삭제</button>
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">전체선택</th>
              <th className="border border-gray-300 p-2">데이터유형</th>
              <th className="border border-gray-300 p-2">데이터명</th>
              <th className="border border-gray-300 p-2">메일수신여부</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 text-center" colSpan="4">자료가 없습니다. 다른 검색조건을 선택해주세요.</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4 flex justify-between">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">수신</button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">미수신</button>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          * 관심 공공정보 업데이트 알림메일 수신을 원하시는 경우
          <br />1) 알림메일 수신을 받고자 하는 데이터를 선택해 주세요.
          <br />2) 수신 버튼을 클릭해 주세요.
        </p>
      </main>
  )
}
