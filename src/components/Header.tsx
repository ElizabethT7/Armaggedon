import Logo from './Logo';

export default async function Header() {
  return (
    <header>
      <div className='max-w-[375px] p-4'>
        <Logo />
        <p className='font-sans text-base mt-2'>
          ООО “Команда им. Б. Уиллиса”.
          <br/>
          Взрываем астероиды с 1998 года.
        </p>
      </div>
    </header>
  )
}