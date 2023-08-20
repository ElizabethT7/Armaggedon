import { useContext } from 'react';
import {AsteroidsContext } from '../../context';
import AsteroidsItem from '../item/AsteroidsItem';
import Error from '../Error';
import Spinner from '../Spinner';
import IAsteroid from '../../types/IAsteroid';

interface AsteroidsListProps {
  newLimit: () => void;
}

export default function AsteroidsList({newLimit}: AsteroidsListProps) {
  const { items = [], loading } = useContext(AsteroidsContext);

  return (
    <div>
      {loading && <Spinner />}
      {(!loading && !items.length) && <Error />}
      {items && items.map((item: IAsteroid, index: number) => (
        <AsteroidsItem
          key={item.id}
          item={item}
          isLast={index === items.length - 1}
          newLimit={newLimit}
        />
      ))}
    </div>
  );
}

