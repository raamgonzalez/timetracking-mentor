import UserCard from '@/components/UserCard'
import UserStats from '@/components/UserStats'

export default function Home() {

  const hours = [8, 2, 4, 5, 3, 6]

  return (
    <main className="wrapper grid grid-cols-4 grid-rows-2 w-full h-full gap-3 bg-slate-950">
      <UserCard hour={hours} />
    </main>
  )
}
