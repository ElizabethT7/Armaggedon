import { useContext } from 'react';
import {AsteroidsContext } from '../../context';
import AsteroidsItem from '../item/AsteroidsItem';
import Error from '../Error';
import Spinner from '../Spinner';
import IAsteroid from '../../types/IAsteroid';

export default function AsteroidsList() {
  const { items = [], loading } = useContext(AsteroidsContext);

  return (
    <div>
      {loading && <Spinner />}
      {(!loading && !items.length) && <Error />}
      {items && items.map((item: IAsteroid) => (
        <AsteroidsItem key={item.id} item={item} />
      ))}
    </div>
  );
}

