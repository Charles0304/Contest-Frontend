import React from 'react'
import ScrollBar_item from './ScrollBar_item'

export default function Scrollbar({ items }) {
    return (
        <div class="p-4 overflow-auto relative bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y"
                style={{height:"465px"}}>
            {items.length > 0 ? (
                items.map((item, idx) => (
                    <ScrollBar_item key={idx} hscode={item.hscode} korean={item.classificationcodename.slice(1,-1)+" - "+item.hs3koreanitem} img={item.img} />
                ))
            ) : (
                <p>No items available</p>
            )}
        </div>
    )
}
