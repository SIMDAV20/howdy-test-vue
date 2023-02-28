import flightsService from "@/services/flights.service";
import { onMounted, ref } from "vue";

import { IFlight } from "@/interfaces/flight.interface";
const useFlights = () => {
  const flights = ref<IFlight[]>([]);
  const carriers = ref<any>();

  onMounted(async () => {
    const data: any = await flightsService.getData();
    flights.value = data.options;
    carriers.value = data.carriers;
    addImage();
  });

  const addImage = () => {
    if (flights.value.length) {
      for (const { journeys } of flights.value) {
        for (const { segments } of journeys) {
          for (const segment of segments) {
            if (carriers.value.hasOwnProperty(segment.marketingAirline)) {
              segment.imageThumb = segment.marketingAirline;
              segment.airLineName =
                carriers.value[`${segment.operatingAirline}`];
            }
          }
        }
      }
    }
  };

  return {
    flights,
  };
};

export default useFlights;
