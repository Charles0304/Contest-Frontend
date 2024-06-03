import React from 'react'

export default function Scrollbar() {
    return (
        <div class="relative rounded-xl overflow-auto p-4"><div class="overflow-auto h-96 relative mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y">
            <div class="flex items-center gap-4 p-4">
                <img class="w-20 h-20 rounded-full" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" />
                <div class="flex flex-col">
                    <strong class="text-slate-900 text-lg font-medium ">Andrew Alfred</strong>
                    <span class="text-slate-500 text-sm font-medium ">Technical advisor</span>
                </div>
            </div>
            <div class="flex items-center gap-4 p-4">
                <img class="w-20 h-20 rounded-full" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" />
                <div class="flex flex-col">
                    <strong class="text-slate-900 text-lg font-medium ">Debra Houston</strong>
                    <span class="text-slate-500 text-sm font-medium ">Analyst</span>
                </div>
            </div>
            <div class="flex items-center gap-4 p-4">
                <img class="w-20 h-20 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" />
                <div class="flex flex-col">
                    <strong class="text-slate-900 text-lg font-medium ">Jane White</strong>
                    <span class="text-slate-500 text-sm font-medium ">Director, Marketing</span>
                </div>
            </div>
            <div class="flex items-center gap-4 p-4">
                <img class="w-20 h-20 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" />
                <div class="flex flex-col">
                    <strong class="text-slate-900 text-lg font-medium ">Ray Flint</strong>
                    <span class="text-slate-500 text-sm font-medium ">Technical Advisor</span>
                </div>
            </div>
        </div></div>
    )
}
