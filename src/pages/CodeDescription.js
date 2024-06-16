import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Dropdown from '../components/Dropdown';
import DataTable from '../components/DataTable';
import DropdownSearch from '../components/DropdownSearch';

export default function CodeDescription() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const [selectedSubSubCategory, setSelectedSubSubCategory] = useState('');

    const [categories,setCategories] = useState([]);
    const [subCategories,setSubCategories] = useState([]);
    const [subSubCategories,setSubSubCategories] = useState([]);

    const [data,setData] = useState([]);
    const [hsList,setHsList] = useState([]);
    useEffect(()=>{
        fetch('http://10.125.121.220:8080/hscode/categories')
        .then((resp)=>resp.json())
        .then((d)=>setData(d));
    },[]);

    useEffect(()=>{
        if(data.length>0){
            let tm = data.map(item=>item.hscode1);
            tm = new Set(tm);
            tm = [...tm];
            setCategories(tm);
        }
    },[data]);

    const handleCategory = (e) => {
        const selected = e.target.value;
        setSelectedCategory(selected);

        const filteredSubCategories = data
        .filter((item)=>item.hscode1===selected)
        .map((item)=>item.hscode2);

        console.log(filteredSubCategories)
        setSubCategories([...new Set(filteredSubCategories)]);
        setSelectedSubCategory("");
        setSubSubCategories([]);

        //category에 맞춰서 데이터 불러오기
        const url = 'http://10.125.121.220:8080/hscode/major?hscode1='+selected
        
        fetch(url)
        .then((resp)=>resp.json())
        .then((d)=>setHsList(d));
    }
    
    const handleSubCategory=(e)=>{
        const selected = e.target.value;
        setSelectedSubCategory(selected);

        const filteredSubSubcategories = data
            .filter((item)=>item.hscode1===selectedCategory&&item.hscode2===selected)
            .map((item)=>item.hscode3);
        setSubSubCategories([...new Set(filteredSubSubcategories)]);
        setSelectedSubSubCategory('');

        const url = `http://10.125.121.220:8080/hscode/medium?hscode1=${selectedCategory}&hscode2=${selected}`
        
        fetch(url)
        .then((resp)=>resp.json())
        .then((d)=>setHsList(d));
    }

    const handleSubSubCategory=(e)=>{
        const selected = e.target.value;
        setSelectedSubSubCategory(selected);

        const url = `http://10.125.121.220:8080/hscode/minor?hscode1=${selectedCategory}&hscode2=${selectedSubCategory}&hscode3=${selected}`
        
        fetch(url)
        .then((resp)=>resp.json())
        .then((d)=>setHsList(d));
    }

    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <div className='p-4 h-screen w-full flex flex-col justify-center items-center'>
                <h2 className="text-2xl font-bold mb-4">HS코드 검색</h2>
                <div className='grid grid-cols-3 gap-4 mb-4 w-3/4'>
                    <DropdownSearch
                        label="대분류(류)"
                        options={categories}
                        selectedOption={selectedCategory}
                        onChange={handleCategory}
                    />
                    <Dropdown
                        label="중분류(호)"
                        options={subCategories}
                        selectedOption={selectedSubCategory}
                        onChange={handleSubCategory}
                    />
                    <Dropdown
                        label="소분류(소호)"
                        options={subSubCategories}
                        selectedOption={selectedSubSubCategory}
                        onChange={handleSubSubCategory}
                    />
                </div>
                <DataTable data={hsList} />
            </div>
            <Footer />
        </div>
    )
}
