import React from 'react'

export default function ScrollBar_item({hscode,korean,img}) {
    var url = "images/"+img+".png";
    return (
        <div class="flex items-center gap-4 p-4">
            <img class="w-20 h-20 rounded-full" src={url}/>
            <div class="flex flex-col">
                <strong class="text-slate-900 text-lg font-medium ">{hscode}</strong>
                <span class="text-slate-500 text-sm font-medium ">{korean}</span>
            </div>
        </div>
    )
}
