<script setup lang="ts">
import { computed, toRefs } from "vue";

interface Props {
  image: string;
}

const props = withDefaults(defineProps<Props>(), {
  image: "",
});

const { image } = toRefs(props);

const imagePath = computed(() => {
  switch (image.value) {
    case "UA":
      return new URL("../assets/img/united-airlines.jpg", import.meta.url).href;

    case "AC":
      return new URL("../assets/img/canada-airlines.png", import.meta.url).href;

    case "AM":
      return new URL("../assets/img/mexico-airlines.jpg", import.meta.url).href;

    case "DL":
      return new URL("../assets/img/delta-airlines.png", import.meta.url).href;

    case "AS":
      return new URL("../assets/img/alaska-airlines.jpg", import.meta.url).href;

    case "AA":
      return new URL("../assets/img/american-airlines.jpeg", import.meta.url)
        .href;
  }
});
</script>

<template>
  <img
    :src="imagePath"
    class="img-thumbnail p-1"
    style="height: 60px"
    :alt="imagePath"
  />
</template>

<style lang="scss" scoped></style>
