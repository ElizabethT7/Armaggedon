'use client';
import { useContext, useEffect } from 'react';
import AsteroidsList from './list/AsteroidsList';
import { API_URL } from '../config';
import { AsteroidsContext } from '../context';



export default function Container() {
  const { 
    setItems,
    handleDistance,
    isDistanceInKm
  } = useContext(AsteroidsContext);

  const handleKmClick = () => {
    handleDistance(true);
  }

  const handleLunarClick = () => {
    handleDistance(false);
  }
  

  useEffect(function getItems() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.near_earth_objects);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='lg:ml-32 sm:ml-14 ml-6 max-w-[279px] sm:max-w-[402px]'>
      <h2 className='text-2xlc font-bold'>Ближайшие подлёты астероидов</h2>
      <span
      className={isDistanceInKm ? 'font-bold' : 'font-normal' + 'text-base mt-2 cursor-pointer'}
      onClick={handleKmClick}
      >
        в километрах
      </span>
      <span className='mx-2 text-base'>|</span>
      <span
        className={!isDistanceInKm ? 'font-bold' : 'font-normal' + 'text-base cursor-pointer'}
        onClick={handleLunarClick}
      >
        в лунных орбитах
      </span>
      <AsteroidsList />
    </div>
  )
} 