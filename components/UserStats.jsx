import UserStatsCard from "./UserStatsCard"

export default function UserStats({hours}){

	// const hours = stats.map((hour) => {return hour})

	const statsData = {
		hour: hours,
		title: ['Work', 'Play', 'Study', 'Exercise', 'Social', 'Self Care'],
		color: ['bg-orange-400', 'bg-sky-400', 'bg-red-400', 'bg-green-400', 'bg-fuchsia-400', 'bg-yellow-200'],
		svg: ['./images/icon-work.svg', './images/icon-play.svg', './images/icon-study.svg', './images/icon-exercise.svg', './images/icon-social.svg', './images/icon-self-care.svg']
	}

	return (
		<>
			{
				statsData.title.map((title, index) => {
					return <UserStatsCard key={title} hours={statsData.hour[index]} title={title} color={statsData.color[index]} svg={statsData.svg[index]}/>	})
			}
		</>
	)
}