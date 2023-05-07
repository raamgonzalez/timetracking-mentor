'use client'
import Image from "next/image";
import UserStats from "./UserStats";
import { useEffect, useState } from "react";



export default function UserCard({hour}){
	const [hours, setHours] = useState(hour)


	const handleDailyChangeStats = () => {
		const newDaily = hours.map((hours) => { return hours + Math.round(Math.random(hours))})
		setHours(newDaily)
	}

	const handleWeeklyChangeStats = () => {
		const newWeek = hours.map((hours) => { return hours + Math.round(Math.random(hours))})
		setHours(newWeek)
	}

	const handleMonthlyChangeStats = () => {
		const newMonth = hours.map((hours) => { return hours + Math.round(Math.random(hours*length))})
		setHours(newMonth)
	}

// 	const handleChangeStats =  () =>{
// 		if(handleDailyChangeStats()) return hours.map((hours) => { return Math.round(Math.random(hours))})
// 		else if(handleWeeklyChangeStats()) return hours.map((hours) => { return Math.round(Math.random(hours))})
// 		else return hours.map((hours) => { return Math.round(Math.random(hours))})
// }



	return (
		<>
			<section className='row-start-1 row-end-3 bg-indigo-950 rounded-2xl h-full 
			flex flex-col justify-start '>
				<div className=' bg-indigo-700  w-full rounded-2xl pt-5 px-5 h-80'>
					<Image className="rounded-full border-2" src='/images/profile_picture.jpg' width={'70'} height={'70'} alt="Imagen de perfil"/>
					<p className="text-slate-400 p-0 mt-6 text-xs">Report for</p>
					<h1 className="text-slate-200 p-0 mt-1 w-3 text-4xl font-light">Ramsés González</h1>
				</div>
				<section className="flex__stats flex flex-col px-4 pt-6 gap-2 justify-center text-md">
					<button onClick={handleDailyChangeStats} className="text-indigo-400 active:text-slate-200 cursor-pointer m-0 p-0 text-left">Daily</button>
					<button onClick={handleWeeklyChangeStats} className="text-indigo-400 active:text-slate-200 cursor-pointer m-0 p-0 text-left">Weekly</button>
					<button onClick={handleMonthlyChangeStats} className="text-indigo-400 active:text-slate-200 cursor-pointer m-0 p-0 text-left">Monthly</button>
				</section>
			</section>
			<UserStats hours={hours}/>
		</>
	)
}