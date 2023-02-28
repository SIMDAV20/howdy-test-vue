import { IFlight } from "@/interfaces/flight.interface";
import axios from "axios";
// import fakeData from "@/fakeData.json";

export default new (class flightsService {
  async getData() {
    return (await axios.get("fakeData.json")).data;
  }
})();
