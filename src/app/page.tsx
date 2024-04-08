"use client";
import react, {useEffect, useState} from 'react'
import Image from "next/image";

export default function Home() {

  interface animeData {
    anime: string,
    charactor: string,
    quote: string,
  }

  const [dataAnime, setDataAnime] = useState<animeData[]>([]);

  useEffect(()  =>  {
    
    console.log(dataAnime);

    const fetchData = async () => {
      try {
        const response = await fetch('https://animechan.xyz/api/random');
        const jsondata = await response.json();
        setDataAnime(jsondata);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  
  }, [dataAnime])
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  );
}
