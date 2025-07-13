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
      <section className="grid md:grid-cols-2 grid-cols-1 h-auto min-h-[83.7vh]">
        {/* Left Text Section */}
        <div className="flex flex-col gap-6 items-center justify-center text-center md:text-left p-6 md:p-16">
          <p className={`text-2xl md:text-4xl font-bold ${poppinsExtraBold.className}`}>
            The Best URL Shortener in the Market
          </p>
          <p className="text-base md:text-lg text-gray-600 max-w-xl">
            WackLink is a free URL shortener that allows you to shorten your links, track their performance, and manage them easily and efficiently.
          </p>
          <div className='flex gap-4 flex-wrap justify-center md:justify-start'>
            <Link href="/generate">
              <button className='bg-purple-500 rounded-lg shadow-lg px-5 py-2 text-white'>
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className='bg-purple-500 rounded-lg shadow-lg px-5 py-2 text-white'>
                Github
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full h-64 md:h-auto flex items-center justify-center">
          <Image
            src="/vector.jpg"
            alt="Hero Image"
            fill
            className="mix-blend-darken object-contain"
          />
        </div>
      </section>
    </main>
  );
}
