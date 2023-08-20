import Image from 'next/image';
import Img from '../../assets/img/planeta_zemlia_kosmos_167499_2560x1600 1.png';
import BasketList from '../../components/list/BasketList';

export default function Basket() {
  return (
    <div className='relative flex mt-[15px]'>
      <div className='sm:w-[377px] lg:w-[400px] w-[46px]'>
        <Image
          src={Img}
          alt='Планета Земля'
          width={400}
          height={620}
          sizes="(min-width: 375px) 377px, (min-width: 1025px) 400px"
          className='object-cover w-full sm:h-auto h-[436px] object-right-top'
          priority
        />
      </div>
      <div className='lg:ml-32 sm:ml-14 ml-6 max-w-[279px] sm:max-w-[402px]'>
        <h2 className='text-2xlc font-bold'>Заказ отправлен!</h2>
        <BasketList />
      </div>
    </div>
  )
}