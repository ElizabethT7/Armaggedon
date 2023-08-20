export default interface IApproachData {
  //close_approach_date: Date,
  epoch_date_close_approach: Date,
  orbiting_body: string,
  miss_distance: {
    kilometers: string,
    lunar: string,
  },
  relative_velocity: {
    kilometers_per_hour: string,
  }
}