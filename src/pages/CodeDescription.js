import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Dropdown from '../components/Dropdown';
import DataTable from '../components/DataTable';

export default function CodeDescription() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const [selectedSubSubCategory, setSelectedSubSubCategory] = useState('');

    const categories = ['01 산동물', '02 식물성 제품', '03 지방 및 기름'];
    const subCategories = ['살아 있는 말', '살아 있는 소', '살아 있는 돼지'];
    const subSubCategories = ['소분류1', '소분류2', '소분류3'];

    const data = [
        { id: '4601', koreanName: '플레이트와 이와 유사한 조물 재료의 물품', englishName: 'Plaits and similar products' },
        { id: '4601.2', koreanName: '메트류와 발', englishName: 'Mats, matting and screens' },
    ];

    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <div className='p-4 h-screen w-full flex flex-col justify-center items-center'>
                <h2 className="text-2xl font-bold mb-4">관심공공데이터</h2>
                <div className='grid grid-cols-3 gap-4 mb-4 w-3/4'>
                    <Dropdown
                        label="대분류(류)"
                        options={categories}
                        selectedOption={selectedCategory}
                        onChange={setSelectedCategory}
                    />
                    <Dropdown
                        label="중분류(호)"
                        options={subCategories}
                        selectedOption={selectedSubCategory}
                        onChange={setSelectedSubCategory}
                    />
                    <Dropdown
                        label="소분류(소호)"
                        options={subSubCategories}
                        selectedOption={selectedSubSubCategory}
                        onChange={setSelectedSubSubCategory}
                    />
                </div>
                <DataTable data={data} />
            </div>
            <Footer />
        </div>
    )
}
