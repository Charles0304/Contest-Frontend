import React from 'react'
import ScrollBar_item from './ScrollBar_item'

export default function Scrollbar({items}) {
    return (
        <div class="relative rounded-xl overflow-auto p-4"><div class="overflow-auto h-96 relative mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y">
            {items.map((item,idx)=>(
                <ScrollBar_item hscode={item.hscode} korean={item.hs3koreanitem} img={item.img}/>
            ))}
            <ScrollBar_item/>
        </div></div>
    )
}
