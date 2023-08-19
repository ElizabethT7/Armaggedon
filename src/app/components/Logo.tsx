import Link from "next/link";
import { Passion_One } from 'next/font/google';

const inter = Passion_One({
  subsets: ['latin'],
  weight:["400"],
});

export default function Logo() {
  return (
    <Link
      href='/'
      className='font-passion text-3xlc text-orange-medium uppercase'
    >
      <h1>Armaggedon 2023</h1>
    </Link>
  )
}