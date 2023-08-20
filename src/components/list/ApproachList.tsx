import { useContext } from 'react';
import {AsteroidsContext } from '../../context';
import Error from '../Error';
import Spinner from '../Spinner';
import ApproachItem from '../item/ApproachItem';
import IApproachData from '../../types/IApproachData';

export default function ApproachList() {
  const { asteroid, loading } = useContext(AsteroidsContext);

  return (
    <div className='mt-8'>
      {loading && <Spinner />}
      {!loading && !asteroid.close_approach_data.length && <Error />}
      {asteroid.close_approach_data && asteroid.close_approach_data.map((approach: IApproachData, index: number) => (
        <ApproachItem key={index} approach={approach} />
      ))}
    </div>
  );
}