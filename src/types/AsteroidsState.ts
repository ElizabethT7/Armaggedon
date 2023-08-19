import IAsteroid from './IAsteroid';

export default interface AsteroidsState {
  items: IAsteroid[];
  loading: boolean;
  isBasketShow: boolean;
  isDistanceInKm: boolean;
}