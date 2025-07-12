import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppinsExtraBold = Poppins({
  weight: '800',
  subsets: ['latin'],
  display: 'swap',
});
 
export default function Home() {
  return (
   <main className="bg-purple-100">
    <section className="grid grid-cols-2 h-[83.7vh]">
      <div className=" flex flex-col gap-4 items-center justify-center">
        <p className={`text-3xl font-bold ${poppinsExtraBold.className}`}>
          The Best URL Shortener in the Market
        </p>
        <p className="text-lg text-gray-600 px-32 text-center">
          WackLink is a free URL shortener that allows you to shorten your links, track their performance, and manage them easily and efficiently. 
        </p>
        <div className='flex gap-3 justify-start'>
            <Link href="/generate"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 text-white'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 text-white'>Github</button></Link>
        </div>
      </div>
      <div className=" flex justify-start relative">
        <Image
          src={"/vector.jpg"}
          alt="Hero Image"
          fill={true}
          className="mix-blend-darken object-contain"
        />
      </div>
    </section>
   </main>
  );
}
