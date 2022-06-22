<script setup name="UserEditMap" lang="ts">
import { onMounted, toRefs, watch } from 'vue'

interface ICoordinates {
  lat: number
  lng: number
}

interface IUserCoordinates {
  lat: ICoordinates
}

interface Props {
  coordinates: IUserCoordinates
}

const props = withDefaults(defineProps<Props>(), {
  coordinates: () => ({
    lat: {
      lat: 0,
      lng: 0,
    },
  }),
})

const { coordinates } = toRefs<Readonly<Props>>(props)

let windowO: Window = window

let map: any = {}

watch(
  () => coordinates,
  () => {
    map.remove()
    setMap()
  },
  { deep: true }
)

const setMap = () => {
  map = windowO.L.mapquest.map('map', {
    center: [coordinates.value.lat.lat, coordinates.value.lat.lng],
    layers: windowO.L.mapquest.tileLayer('map'),
    zoom: 15,
  })

  map.addControl(
    windowO.L.mapquest.control({
      position: 'bottomright',
    })
  )

  windowO.L.marker([coordinates.value.lat.lat, coordinates.value.lat.lng], {
    icon: windowO.L.mapquest.icons.marker({
      primaryColor: '#22407F',
      secondaryColor: '#3B5998',
      shadow: true,
      size: 'sm',
      symbol: 'A',
    }),
  }).addTo(map)
}

onMounted(() => {
  windowO.L.mapquest.key = import.meta.env.VITE_GEOCODING_API_KEY

  setMap()
})
</script>

<template>
  <div class="h-full w-full space-y-2">
    <p class="font-bold tracking-widest text-primary">Users Location:</p>
    <div id="map" class="h-[90%] w-full"></div>
  </div>
</template>
