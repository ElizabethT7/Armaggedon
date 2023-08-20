'use client';
import Link from 'next/link';
import { useContext } from 'react';
import {AsteroidsContext } from '../context';
import { plural } from '../utils';

export default function Cart() {
  const { quantity, resetQuantity } = useContext(AsteroidsContext);
  const reset = () => {
    resetQuantity  
  }

  return (
    <div className='flex justify-between sm:flex-col absolute bottom-0 left-0 sm:relative rounded-none sm:rounded-3xl z-10
      w-full h-[81px] sm:h-[161px] sm:w-[150px] bg-gray-dark lg:bg-orange-dark p-4'
    >
      <div>
        <h4 className='text-lgc font-bold pb-2'>Корзина</h4>
        {quantity ?
          <div>
            <span className='pr-2'>{quantity}</span>
            <span>{plural(quantity, ['астероид', 'астероида', 'астероидов'])}</span>
          </div>
         : 
         <span>
          Корзина пуста
        </span>
        }
      </div>
      <Link
        href={'/basket'}
        className='block w-[118px] h-[48px] bg-orange-medium rounded-[40px] z-20 text-base font-bold no-underline center pt-3 px-4'
        onClick={reset}
      >
        Отправить
      </Link>
    </div>
  )
} 
