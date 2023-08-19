import IApproachData from './IApproachData';

export default interface IAsteroid {
  absolute_magnitude_h: number,
  close_approach_data: IApproachData[],
  estimated_diameter: {
    feet: {},
    kilometers: {},
    meters: {
      estimated_diameter_max: number,
      estimated_diameter_min: number,
    },
    miles: {}
  },
  id: string,
  is_potentially_hazardous_asteroid: boolean,
  is_sentry_object: boolean,
  links: {},
  name: string,
  nasa_jpl_url: string,
  neo_reference_id: string,
}