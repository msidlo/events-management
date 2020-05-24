// @flow

export interface Event {
  id: number,
  name: string,
  participants: Array<any>, // possibly other type if required
  startTime: string,
  endTime: string,
  note: string
  // ...
}

/**
* Additional types if required...
*/
