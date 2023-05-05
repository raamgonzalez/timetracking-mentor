import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid grid-cols-4 grid-rows-2 items-center w-full h-full gap-5 px-80 py-60 bg-slate-950">
      <section className='row-start-1 row-end-3 bg-indigo-900 border  rounded-2xl h-full p-5 '>
        hola
      </section>
      <section className='bg-orange-600 border  rounded-2xl h-56 flex flex-col justify-end'>
        <div className=' bg-indigo-900  w-full rounded-2xl h-44 pt-5'>Hola</div>
      </section>
      <section className='bg-cyan-600 border  rounded-2xl h-56 flex flex-col justify-end'>
        <div className=' bg-indigo-900 w-full rounded-2xl h-44 pt-5'>Hola</div>
      </section>
      <section className='bg-rose-600 border  rounded-2xl h-56 flex flex-col justify-end'>
        <div className=' bg-indigo-900 w-full rounded-2xl h-44 pt-5'>Hola</div>
      </section>
      <section className='bg-green-600 border  rounded-2xl h-56 flex flex-col justify-end'>
        <div className=' bg-indigo-900 w-full rounded-2xl h-44 pt-5'>Hola</div>
      </section>
      <section className='bg-indigo-600 border  rounded-2xl h-56 flex flex-col justify-end'>
        <div className=' bg-indigo-900 w-full rounded-2xl h-44 pt-5'>Hola</div>
      </section>
      <section className='bg-yellow-600 border  rounded-2xl h-56 flex flex-col justify-end'>
        <div className=' bg-indigo-900 w-full rounded-2xl h-44 pt-5'>Hola</div>
      </section>
    </main>
  )
}
