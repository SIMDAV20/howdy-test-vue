<script lang="ts" setup>
import useFlights from "@/composables/useFlights";
import useFormatTime from "@/composables/useFormatTime";
import LogoAirLine from "@/components/LogoAirLine.vue";

const { flights } = useFlights();
const { formatDateTime, getHourMinutes } = useFormatTime();
</script>
<template>
  <div class="container-fluid py-4">
    <h1 class="text-center mb-4">FLIGHTS</h1>

    <div
      v-for="(flight, index) in flights"
      :key="`${index}-flight`"
      style="max-width: 700px"
      class="mx-auto"
    >
      <div
        v-for="(journey, index2) in flight.journeys"
        :key="`${index2}-journey`"
        class="card mb-4"
      >
        <div
          v-for="(segment, index3) in journey.segments"
          :key="`${index3}-segment`"
          class="card-body d-md-flex justify-content-between align-items-center"
        >
          <div class="d-flex align-items-center">
            <LogoAirLine :image="segment.imageThumb" />

            <div class="ms-3">
              <h6 class="mb-0">{{ segment.originPlace.code }}</h6>
              <small>{{ formatDateTime(segment.departureDateTime) }}</small>
            </div>
          </div>

          <div class="text-center">
            <p class="mb-1">{{ segment.airLineName }}</p>
            <p class="line bg-secondary rounded mb-1" style="height: 3px"></p>
            <p class="mb-0">{{ getHourMinutes(segment.duration) }}</p>
          </div>

          <div class="text-end">
            <h6 class="mb-0">{{ segment.destinationPlace.code }}</h6>
            <small>{{ formatDateTime(segment.arrivalDateTime) }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.line {
  width: 200px;
}

@media (max-width: 580px) {
  .line {
    width: 100%;
  }
}
</style>
