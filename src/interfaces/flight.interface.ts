import { IJourney } from "./journey.interface";

export interface IFlight {
  itineraryPrice: number;
  journeys: IJourney[];
  duration: number;
}
