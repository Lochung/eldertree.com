import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function Eldertree() {
  useEffect(() => {
    document.title = 'Eldertree - The Future of Decentralized Fantasy';
  }, []);

  return (
    <div className='bg-gradient-to-b from-green-900 to-green-600 min-h-screen p-8'>
      <div className='max-w-5xl mx-auto text-center space-y-8'>
        <h1 className='text-5xl font-bold text-gold-400'>Eldertree</h1>
        <p className='text-lg text-white'>Unleashing the Power of Fantasy and Blockchain - Join the Saga</p>
        <Button className='bg-gold-400 hover:bg-gold-500 text-black py-2 px-6 rounded-lg'>Join the Launch</Button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-16'>
        <Card className='bg-green-800 p-6 rounded-lg'>
          <CardContent>
            <h2 className='text-xl text-gold-400 font-semibold'>What is Eldertree?</h2>
            <p className='text-white mt-4'>Eldertree is a decentralized fantasy universe powered by blockchain technology. Players can mint, own, and trade unique assets while engaging in a dynamic, evolving storyline shaped by the community.</p>
          </CardContent>
        </Card>
        <Card className='bg-green-800 p-6 rounded-lg'>
          <CardContent>
            <h2 className='text-xl text-gold-400 font-semibold'>Token Launch</h2>
            <p className='text-white mt-4'>Be part of the Eldertree launch and claim your share of the $ELDER token. Join the community and shape the narrative from the beginning.</p>
          </CardContent>
        </Card>
      </div>

      <div className='mt-16 text-center'>
        <h2 className='text-3xl text-gold-400 font-bold'>Join the Community</h2>
        <p className='text-white mt-4'>Follow us on social media and stay updated with the latest news, events, and token drops.</p>
        <div className='mt-4 space-x-4'>
          <Button className='bg-gold-400 hover:bg-gold-500 text-black py-2 px-4 rounded-lg'>Twitter</Button>
          <Button className='bg-gold-400 hover:bg-gold-500 text-black py-2 px-4 rounded-lg'>Discord</Button>
          <Button className='bg-gold-400 hover:bg-gold-500 text-black py-2 px-4 rounded-lg'>Telegram</Button>
        </div>
      </div>
    </div>
  );
}
