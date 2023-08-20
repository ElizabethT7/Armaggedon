'use client';
import { useContext } from 'react';
import {AsteroidsContext } from '../../context';
import BasketItem from '../item/BasketItem';
import Error from '../Error';
import Spinner from '../Spinner';
import IAsteroid from '../../types/IAsteroid';

export default function BasketList() {
  const { order, loading } = useContext(AsteroidsContext);

  return (
    <div>
      {loading && <Spinner />}
      {(!loading && !order.length) && <Error />}
      {order && order.map((item: IAsteroid) => (
        <BasketItem key={item.id} item={item} />
      ))}
    </div>
  );
}