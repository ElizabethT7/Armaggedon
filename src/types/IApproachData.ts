export default interface IApproachData {
  //close_approach_date: Date,
  epoch_date_close_approach: Date,
  miss_distance: {
    kilometers: string,
    lunar: string,
  }
}