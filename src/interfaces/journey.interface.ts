interface IPlace {
  code: string;
  name: string;
  cityCode: string;
}

interface ISegment {
  originPlace: IPlace;
  destinationPlace: IPlace;
  departureDateTime: string;
  arrivalDateTime: string;
  marketingAirline: string;
  marketingFlightNumber: number;
  operatingAirline: string;
  operatingFlightNumber: number;
  duration: number;
  fareCategory: string;
  fareBasis: string;
  departureDateTimeWithTimeZone: string;
  arrivalDateTimeWithTimeZone: string;
  imageThumb?: string;
  airLineName?: string;
}

interface ILaoyer {
  location: IPlace;
  duration: number;
}

interface IMainLaoyer {
  all: ILaoyer[];
  short: ILaoyer[];
}

export interface IJourney {
  departureDateTime: string;
  arrivalDateTime: string;
  segments: ISegment[];
  originPlace: IPlace;
  destinationPlace: IPlace;
  cabinClass: string;
  duration: number;
  layovers: IMainLaoyer;
  qtyStopovers?: string;
}
