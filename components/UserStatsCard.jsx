import Image from "next/image";

export default function UserStatsCard({title, hours, color, svg}){


	return (
		<section className={`${color} overflow-hidden z-10 relative rounded-2xl h-56 flex flex-col justify-end`}>
			<Image className="self-end mr-5 absolute -z-10 bottom-40" src={svg} alt="Imagen de rutina" width={70} height={70}/>
			<div className='bg-indigo-950  hover:bg-indigo-900 cursor-pointer w-full rounded-2xl h-44 pt-5 px-5'>
				<div className="flex flex-row justify-between items-center  text-slate-200">
					<h3 className="text-md">{title}</h3>
					<p className="text-2xl inline-block cursor-pointer">...</p>
				</div>
				<div className="flex flex-col">
					<p className="mt-5 text-slate-200 text-5xl">{hours}hrs</p>
					<p className="text-slate-400 text-md mt-2">Last Week - {hours}hrs</p>
				</div>
			</div>
		</section>
	)
}