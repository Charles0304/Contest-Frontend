import React from 'react'

export default function ScrollBar_item() {
    var url = "images/말.png"
    return (
        <div class="flex items-center gap-4 p-4">
            <img class="w-20 h-20 rounded-full" src={url}/>
            <div class="flex flex-col">
                <strong class="text-slate-900 text-lg font-medium ">Andrew Alfred</strong>
                <span class="text-slate-500 text-sm font-medium ">Technical advisor</span>
            </div>
        </div>
    )
}
