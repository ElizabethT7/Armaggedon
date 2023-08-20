'use client';
import { useContext, useEffect, useState } from 'react';
import AsteroidsList from './list/AsteroidsList';
import { BASE_URL, START_DATE, END_DATE, API_KEY } from '../config';
import { AsteroidsContext } from '../context';
import { getNextDate } from '../utils';

export default function Container() {
  const {
    setItems,
    handleDistance,
    isDistanceInKm,
    setNewItems
  } = useContext(AsteroidsContext);

  const [date, setDate] = useState(START_DATE);

  const handleKmClick = () => {
    handleDistance(true);
  }
  const handleLunarClick = () => {
    handleDistance(false);
  }
  const setNewLimit = () => {
    setDate(getNextDate());
  }
  
  useEffect(function getItems() {
    fetch(`${BASE_URL}?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.near_earth_objects);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(function getNewItems() {
    fetch(`${BASE_URL}?start_date=${date}&end_date=${date}&api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if(date !== START_DATE) {
          setNewItems(data.near_earth_objects);
        }
      });
  }, [date]);

  return (
    <div className='lg:ml-32 sm:ml-14 ml-6 max-w-[279px] sm:max-w-[402px]'>
      <h2 className='text-2xlc font-bold pb-2'>Ближайшие подлёты астероидов</h2>
      <span
      className={isDistanceInKm ? 'font-bold' : 'font-normal' + 'text-base cursor-pointer'}
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
      <AsteroidsList newLimit={setNewLimit}/>
    </div>
  )
} 