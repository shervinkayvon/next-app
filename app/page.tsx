import Image from 'next/image'
import chair from '@/public/images/chair.png'

export default async function Home() {
  return (
    <main className='relative h-screen'>
      <h1>Next.js</h1>
      {/* <Image 
        src="https://bit.ly/react-cover" 
        alt="Barber Chair" 
        fill
        className='object-cover'
        sizes="( max-width: 480px ) 100vw, ( max-width: 768px ) 50vw, 33vw"
        quality={100}
        priority
        /> */}
    </main>
  )
}
