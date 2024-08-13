import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';

export default function Home() {
  const { userId }: { userId: string | null } = auth();
  const href = userId ? '/journal' : '/new-user';
  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center text-white'>
      <div className='w-full max-w-[600px] max-auto'>
        <h1 className='text-6xl mb-4'>The Best Journal App, Period</h1>
        <p className='text-2xl text-white/60 mb-4'>This is the best journal app for tracking your mood, All you have to do is be honest</p>
        <div className='flex justify-center'>
          <Link href={href}>
            <button className='bg-blue-600 py-4 px-2 rounded-lg text-xl'>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
