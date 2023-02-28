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
        for (let journey of journeys) {
          // segments, layovers, qtyStopovers
          for (const segment of journey.segments) {
            if (carriers.value.hasOwnProperty(segment.marketingAirline)) {
              segment.imageThumb = segment.marketingAirline;
              segment.airLineName =
                carriers.value[`${segment.operatingAirline}`];
            }
          }
          journey.qtyStopovers =
            journey.layovers?.all.length == 0
              ? "nonstop"
              : `${journey.layovers?.all.length} stopovers`;
        }
      }
    }
  };

  return {
    flights,
  };
};

export default useFlights;
