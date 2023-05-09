import UserCard from '@/components/UserCard'
import UserStats from '@/components/UserStats'
import {data} from '../mock/data';

export default function Home() {


  return (
    <main className="wrapper grid grid-cols-4 grid-rows-2 w-full h-full gap-3 bg-slate-950">
      <UserCard hour={data.daily} data={data}/>
    </main>
  )
}
