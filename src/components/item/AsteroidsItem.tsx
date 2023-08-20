import Link from 'next/link';
import { useContext, useEffect, useRef, useState } from 'react';
import IAsteroid from '@/types/IAsteroid';
import { formatDate, formatName, formatNumber, plural } from '../../utils';
import {AsteroidsContext } from '../../context';
import Image from 'next/image';
import Img from '../../assets/img/big-item.png';

interface ItemProps {
  item: IAsteroid;
  isLast: boolean;
  newLimit: () => void;
}
      
export default function AsteroidsItem({item, isLast, newLimit}: ItemProps) {
  const {  isDistanceInKm, setAsteroid, addToBasket } = useContext(AsteroidsContext);
  const [isBasketShow, setIsBasketShow] = useState(false);
  const itemRef: any = useRef();

  const title = formatDate(item.close_approach_data[0].epoch_date_close_approach);
  const diameter =  Math.round(item.estimated_diameter.meters.estimated_diameter_max);
  const distanceLunar = formatNumber(+item.close_approach_data[0].miss_distance.lunar);

  const handleClick = () => {
    setAsteroid(item);
  }
  const orderAsteroid = () => {
    setIsBasketShow(true)
    addToBasket(item);
  }

  useEffect(() => {
    if (!itemRef?.current) return;
  
    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        newLimit();
        observer.unobserve(entry.target);
      }
    });
  
    observer.observe(itemRef.current);
  }, [isLast]);

  return (
    <div className='mt-6' ref={itemRef}>
      <h3 className='text-2xl font-bold'>{title}</h3>
      <div className='flex flex-wrap items-center mt-2'>
        <div className='pr-2'>
          <div className='text-base font-normal'>
            { isDistanceInKm ?
              <div>
                {formatNumber(+item.close_approach_data[0].miss_distance.kilometers)}
                <span> км</span>
              </div> :
              <div>
                <span>{distanceLunar}</span>
                <span> {plural(+distanceLunar, ['лунная орбита', 'лунные орбиты', 'лунных орбит'])}</span>
              </div>
            }
          </div>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="129" height="6" viewBox="0 0 129 6" fill="none">
              <path d="M0 3L5 5.88675L5 0.113249L0 3ZM129 3.00001L124 0.113259L124 5.88676L129 3.00001ZM4.5 3.5L124.5 3.50001L124.5 2.50001L4.5 2.5L4.5 3.5Z" fill="white" fillOpacity="0.5"/>
            </svg>
          </span>
        </div>
        <div
          className={diameter > 100 ? 'w-9' : 'w-[22px]'}
        >
          <Image
            src={Img}
            alt='Астероид'
            width={36}
            height={40}
            className='object-cover w-full h-auto'
          />
        </div>
        <div className='pl-2'>
          <Link
            href={`/asteroid/${item.id}`}
            className='block'
            onClick={handleClick}
          >
            <h4 className='text-base font-bold underline'>
              {formatName(item.name)}
            </h4>
          </Link>
          <p className='text-xs'>
            Ø {diameter} м
          </p>
        </div>
      </div>
      <div className='flex items-center mt-2'>
        <button
          className='h-[24px] text-smc font-bold text-orange-medium uppercase py-[2px] px-[11px] tracking-[1px] bg-[#250F00] rounded-2xl'
          onClick={orderAsteroid}
        >
          {isBasketShow ?
            "В корзине" :
            "Заказать"
          }       
        </button>
        {item.is_potentially_hazardous_asteroid && 
          <div className='text-sm p-[10px] text-yellow-400 center'>
            <span>&#9888;</span>
             <span className='text-gray-light'> Опасен</span>
          </div>
        }
      </div>
    </div>
  );
}