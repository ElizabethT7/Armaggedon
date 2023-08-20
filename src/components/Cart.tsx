import Link from 'next/link';

export default function Cart() {
  const quantity = '2 астероида'
  return (
    <div className='flex justify-between sm:flex-col absolute bottom-0 left-0 sm:relative rounded-none sm:rounded-3xl z-10
      w-full h-[81px] sm:h-[161px] sm:w-[150px] bg-gray-dark lg:bg-orange-dark p-4'
    >
      <div>
        <h4 className='text-lgc font-bold'>Корзина</h4>
        <p>{quantity ? <span className="cart-quantity">{quantity}</span> : null}</p>
      </div>
      <Link
        href={'/basket'}
        className='block w-[118px] h-[48px] bg-orange-medium rounded-[40px] z-20 text-base font-bold no-underline center pt-3 px-4'
      >
        Отправить
      </Link>
    </div>
  )
} 
