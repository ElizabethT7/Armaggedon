import Image from 'next/image';
import IApproachData from '@/types/IApproachData';
import { formatDate, formatNumber } from '../../utils';
import Img from '../../assets/img/big-item.png';

interface ItemProps {
  approach: IApproachData
}
      
export default function ApproachItem({approach}: ItemProps) {
  const title = formatDate(approach.epoch_date_close_approach);

  return (
    <div className='flex gap-4 mt-8'>
      <div className='w-12'>
        <Image
          src={Img}
          alt='Астероид'
          width={36}
          height={40}
          className='object-cover w-full h-auto'
        />
      </div>
      <div>
        <h3 className='text-2xl font-bold'>{title}</h3>
        <div className='flex wrap items-center mt-2'>
          <div className='pr-2'>
            <div className='text-base font-normal'>
              {formatNumber(+approach.miss_distance.kilometers)}
              <span> км</span>
            </div>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="129" height="6" viewBox="0 0 129 6" fill="none">
                <path d="M0 3L5 5.88675L5 0.113249L0 3ZM129 3.00001L124 0.113259L124 5.88676L129 3.00001ZM4.5 3.5L124.5 3.50001L124.5 2.50001L4.5 2.5L4.5 3.5Z" fill="white" fillOpacity="0.5"/>
              </svg>
            </span>
          </div>
          <div className='text-base font-normal px-4'>
            {approach.orbiting_body}
          </div>
          <div className='text-base font-normal'>
            {formatNumber(+approach.relative_velocity.kilometers_per_hour)}
            <span> км/ч</span>
          </div>
        </div>
      </div>
    </div>
  );
}