import { useContext } from 'react';
import {AsteroidsContext } from '../../context';
import Item from './Item';
import Error from './Error';
import Spinner from './Spinner';

export default function List() {
  const { items = [], loading } = useContext(AsteroidsContext);

  return (
    <>
      {loading && <Spinner />}
      {!loading && !items.length && <Error />}
      {items && items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
}

