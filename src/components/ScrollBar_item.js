import React, { useState } from 'react'
import { GoHeart,GoHeartFill } from 'react-icons/go';
export default function ScrollBar_item({ hscode, korean, img }) {
    var url = "images/" + img + ".png";
    const [isLiked,setIsLiked] = useState(false);
    const handleLike = () =>{
        setIsLiked(!isLiked)
    }
    return (
        <div class="flex items-center justify-between gap-4 p-4">
            <div class="flex items-center gap-4">
                <img class="w-20 h-20 rounded-full" src={url} />
                <div class="flex flex-col">
                    <strong class="text-slate-900 text-lg font-medium">{hscode}</strong>
                    <span class="text-slate-500 text-sm font-medium">{korean}</span>
                </div>
            </div>
            <button className=" p-4 rounded-full hover:bg-slate-50 flex items-center justify-center"
                    onClick={handleLike}>
                <span className="text-2xl text-red-500">
                {isLiked?<GoHeartFill/>:<GoHeart/>}   
                </span>
            </button>
        </div>
    )
}
