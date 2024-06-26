import React, { useEffect, useState } from 'react'
import { GoHeart, GoHeartFill } from 'react-icons/go';
export default function ScrollBar_item({ hscode, korean, img }) {
    var url = "images/" + img + ".png";
    const [isLiked, setIsLiked] = useState(false);

    useEffect(()=>{
        const fetchLikeStatus = async()=>{
            const userId = JSON.parse(localStorage.getItem('user')).id;
            const response = await fetch(`http://10.125.121.220:8080/like/status/${userId}/${hscode}`);
            if(response.ok){
                const result = await response.json();
                setIsLiked(result.isLiked);
            }else{
                console.error('Failed to fetch like status');
            }

            
        }
        fetchLikeStatus();
    },[hscode]);

    const handleLike = async (e) => {
        e.preventDefault();
        if (isLiked === false) {
            const likeObj = {
                member: JSON.parse(localStorage.getItem('user')).id,
                hsCode: hscode
            };
            const response = await fetch('http://10.125.121.220:8080/like', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(likeObj),
            });
            if (response.ok) {
                setIsLiked(!isLiked)
            } else {
                console.error('Like failed');
            }
        }else{
            const likeObj = {
                member: JSON.parse(localStorage.getItem('user')).id,
                hsCode: hscode
            };
            const response = await fetch('http://10.125.121.220:8080/like', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(likeObj),
            });
            if (response.ok) {
                setIsLiked(!isLiked)
            } else {
                console.error('Like failed');
            }
        }

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
                    {isLiked ? <GoHeartFill /> : <GoHeart />}
                </span>
            </button>
        </div>
    )
}
