import Image from 'next/image';
import Img from './assets/img/planeta_zemlia_kosmos_167499_2560x1600 1.png';

export default function Home() {
  return (
    <div className='mt-[15px]'>
      <div className='mobile:w-[377px] tablet:w-[400px] w-[46px]'>
        <Image
          src={Img}
          alt='Планета Земля'
          width={400}
          height={620}
          sizes="(min-width: 375px) 377px, (min-width: 1025px) 400px"
          className='object-cover w-full mobile:h-auto h-[436px] object-right-top'
          priority
        />
      </div>
    </div>
  )
}
