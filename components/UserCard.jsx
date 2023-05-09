'use client'
import Image from "next/image";
import UserStats from "./UserStats";
import { useState } from "react";
import {data} from '../mock/data';


export default function UserCard({hour}){
	const [hours, setHours] = useState(hour)

	const handleDailyChangeStats = () => {
		const newDaily = data.daily.map((hours) => hours)
		// const newDaily = hours.map((hours) => { return hours + Math.round(Math.random(hours*length))})
		return setHours(newDaily)
	}

	const handleWeeklyChangeStats = () => {
		const newWeek = data.weekly.map((hours) => hours)
		// const newWeek = hours.map((hours) => { return hours + Math.round(Math.random(hours*length))})
		return setHours(newWeek)
	}

	const handleMonthlyChangeStats = () => {
		const newMonth = data.monthly.map((hours) => hours)
		return setHours(newMonth)
	}

	console.log(hours)

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