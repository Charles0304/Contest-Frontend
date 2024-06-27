import React, { useEffect, useState } from 'react'

export default function InterestMain() {
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    fetch('http://10.125.121.220:8080/api/likes/' + JSON.parse(localStorage.getItem('user')).id)
      .then((resp) => resp.json())
      .then((d) => setData(d));
    console.log(data.length)
  }, [])

  const handleCheckboxChange = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  const handleDelete = () => {
    const userId = JSON.parse(localStorage.getItem('user')).id;
    const deletePromises = selectedItems.map(hscode =>
      fetch(`http://10.125.121.220:8080/api/likes/${userId}/${hscode}`, {
        method: "DELETE"
      })
    );
    Promise.all(deletePromises).then(() => {
      setData(data.filter(item => !selectedItems.includes(item.hsCode.hscode)));
      setSelectedItems([]);
    })
  }

  return (
    <div className="container mx-auto p-4 h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4">관심HSCode</h2>
      <div className="mb-4 flex justify-between">
        <span className="text-gray-700">전체 {data.length}건</span>
      </div>
      <div className='flex-1 overflow-auto'>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">선택</th>
            <th className="border border-gray-300 p-2">HsCode</th>
            <th className="border border-gray-300 p-2">한글설명</th>
            <th className="border border-gray-300 p-2">영어설명</th>
          </tr>
        </thead>
        <tbody>
          {data.length < 1 ? (
            <tr>
              <td className="border border-gray-300 p-2 text-center" colSpan="4">관심 HsCode가 없습니다. 관심 코드를 등록해주세요.</td>
            </tr>
          ) : (
            <>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className='px-4 py-2 border'>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.hsCode.hscode)}
                      onChange={() => handleCheckboxChange(item.hsCode.hscode)}
                    />
                  </td>
                  <td className='px-4 py-2 border'>{item.hsCode.hscode}</td>
                  <td className='px-4 py-2 border'>{item.hsCode.hs1koreanitem}</td>
                  <td className='px-4 py-2 border'>{item.hsCode.hs1englishitem}</td>

                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between">
        <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={handleDelete}
        >
          삭제
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        * 관심 HSCode 삭제를 원하시는 경우
        <br />1) 삭제하고자 하는 데이터를 선택해 주세요.
        <br />2) 삭제 버튼을 클릭해 주세요.
      </p>
      </div>
    </div>
  )
}
