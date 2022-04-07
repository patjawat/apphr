import React from 'react'
import Link from "next/link"
type Props = {}

let data = [{
    1: 'เอกฉันท์',
    2: 'เสียงข้างมาก',
    3: 'ประชุมแล้ว',
    4: 'อยู่ระหว่างแก้ไขตำรา',
    5: 'รอประชุม',
    6: 'ได้ reader ครบ รอผล',
    7: 'อยู่ระหว่างดำเนินการ',
    8: 'ขอทบทวนผล',
}]

const GroupSummary = (props: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 xl:p-0 gap-4 xl:gap-6">
            <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-between">
                <h2 className="text-xs md:text-sm text-gray-700 font-bold tracking-wide md:tracking-wider">
                    Expenses By Category</h2>
                <a href="#" className="text-xs text-gray-800 font-semibold uppercase">More</a>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-50">
                <div className="flex justify-between items-start">
                        <Link href="/group/1">
                            <a>
                    <div className="flex flex-col">
                        <p className="text-xs text-gray-600 tracking-wide">เอกฉันท์</p>
                        <h3 className="mt-1 text-lg text-blue-500 font-bold">$ 818</h3>
                        <span className="mt-4 text-xs text-gray-500">Last Transaction 3 Hours ago</span>
                    </div>
                    </a>
                        </Link>
                    <div className="bg-blue-500 p-1 xl:p-2 rounded-md">
                        {/* <img src="assets/dish-2.png" alt="icon" className="w-auto h-6 xl:h-8 object-cover" /> */}
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-50">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <p className="text-xs text-gray-600 tracking-wide">เสียงข้างมาก</p>
                        <h3 className="mt-1 text-lg text-green-500 font-bold">$ 8,918</h3>
                        <span className="mt-4 text-xs text-gray-500">Last Transaction 3 Days ago</span>
                    </div>
                    <div className="bg-green-500 p-1 xl:p-2 rounded-md">
                        {/* <img src="assets/grocery.png" alt="icon" className="w-auto h-6 xl:h-8 object-cover" /> */}
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-50">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <p className="text-xs text-gray-600 tracking-wide">ประชุมแล้ว</p>
                        <h3 className="mt-1 text-lg text-yellow-500 font-bold">$ 1,223</h3>
                        <span className="mt-4 text-xs text-gray-600">Last Transaction 4 Days ago</span>
                    </div>
                    <div className="bg-yellow-500 p-1 xl:p-2 rounded-md">
                        {/* <img src="assets/gaming.png" alt="icon" className="w-auto h-6 xl:h-8 object-cover" /> */}
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-50">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <p className="text-xs text-gray-600 tracking-wide">อยู่ระหว่างแก้ไขตำรา</p>
                        <h3 className="mt-1 text-lg text-indigo-500 font-bold">$ 5,918</h3>
                        <span className="mt-4 text-xs text-gray-500">Last Transaction 1 Month ago</span>
                    </div>
                    <div className="bg-indigo-500 p-1 xl:p-2 rounded-md">
                        {/* <img src="assets/holiday.png" alt="icon" className="w-auto h-6 xl:h-8 object-cover" /> */}
                    </div>
                </div>
            </div>
{/* Row 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-50">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <p className="text-xs text-gray-600 tracking-wide">รอประชุม</p>
                        <h3 className="mt-1 text-lg text-blue-500 font-bold">$ 818</h3>
                        <span className="mt-4 text-xs text-gray-500">Last Transaction 3 Hours ago</span>
                    </div>
                    <div className="bg-blue-500 p-1 xl:p-2 rounded-md">
                        {/* <img src="assets/dish-2.png" alt="icon" className="w-auto h-6 xl:h-8 object-cover" /> */}
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-50">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <p className="text-xs text-gray-600 tracking-wide">ได้ reader ครบ รอผล</p>
                        <h3 className="mt-1 text-lg text-green-500 font-bold">$ 8,918</h3>
                        <span className="mt-4 text-xs text-gray-500">Last Transaction 3 Days ago</span>
                    </div>
                    <div className="bg-green-500 p-1 xl:p-2 rounded-md">
                        {/* <img src="assets/grocery.png" alt="icon" className="w-auto h-6 xl:h-8 object-cover" /> */}
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-50">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <p className="text-xs text-gray-600 tracking-wide">อยู่ระหว่างดำเนินการ</p>
                        <h3 className="mt-1 text-lg text-yellow-500 font-bold">$ 1,223</h3>
                        <span className="mt-4 text-xs text-gray-600">Last Transaction 4 Days ago</span>
                    </div>
                    <div className="bg-yellow-500 p-1 xl:p-2 rounded-md">
                        {/* <img src="assets/gaming.png" alt="icon" className="w-auto h-6 xl:h-8 object-cover" /> */}
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-50">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <p className="text-xs text-gray-600 tracking-wide">ขอทบทวนผล</p>
                        <h3 className="mt-1 text-lg text-indigo-500 font-bold">$ 5,918</h3>
                        <span className="mt-4 text-xs text-gray-500">Last Transaction 1 Month ago</span>
                    </div>
                    <div className="bg-indigo-500 p-1 xl:p-2 rounded-md">
                        {/* <img src="assets/holiday.png" alt="icon" className="w-auto h-6 xl:h-8 object-cover" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupSummary;