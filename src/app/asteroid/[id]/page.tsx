'use client';
import { useContext, useEffect } from 'react';
import {AsteroidsContext } from '../../../context';
import { formatName } from '../../../utils';
import { API_KEY } from '../../../config';
import ApproachList from '../../../components/list/ApproachList';

interface AsteroidProps {
  params: {
    id: string;
  }
}

export default function Asteroid({params: {id}}: AsteroidProps) {
  const { asteroid, setAsteroid } = useContext(AsteroidsContext);

  useEffect(function getAsteroid() {
    const API_URL_ID = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`;
    fetch(API_URL_ID)
      .then((response) => response.json())
      .then((data) => {
        setAsteroid(data);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='flex mt-[15px] p-4'>
      <div className='sm:w-[377px] lg:w-[400px] w-[46px]'>
        <h2 className='text-5xl font-bold'>
          {asteroid.name && formatName(asteroid.name)}
        </h2>
        <div className='mt-12'>
          <h3 className='text-2xl max-w-[375px]'>
            Cписок всех сближений
          </h3>
          <ApproachList />
        </div>
      </div>
    </div>
  )
}