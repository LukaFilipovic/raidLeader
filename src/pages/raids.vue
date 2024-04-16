<template>
    <v-card
      class="ma-4"
      color="#2f3136"
      rounded="lg"
      variant="flat"
    >
      <v-card-item>
        <v-card-title class="text-body-2 d-flex align-center">
          <v-icon
            color="#949cf7"
            icon="mdi-calendar"
            start
          ></v-icon>

          <span class="text-medium-emphasis font-weight-bold">time/date</span>

          <v-spacer></v-spacer>

          <v-avatar
            image="https://cdn.vuetifyjs.com/images/john-smirk.png"
            size="x-small"
          ></v-avatar>

          <v-chip
            class="ms-2 text-medium-emphasis"
            color="grey-darken-4"
            prepend-icon="mdi-account-multiple"
            size="small"
            text="81"
            variant="flat"
          ></v-chip>
        </v-card-title>

        <div class="py-2">
          <div class="text-h6">Raid name</div>

          <div class="font-weight-light text-medium-emphasis">
            Description
          </div>
        </div>
      </v-card-item>

      <v-divider></v-divider>

      <div class="pa-4 d-flex align-center">
        <v-icon
          color="disabled"
          icon="mdi-broadcast"
          start
        ></v-icon>

        <v-icon
          color="#949cf7"
          icon="mdi-video-vintage"
          size="x-small"
        ></v-icon>

        <span class="text-caption text-medium-emphasis ms-1 font-weight-light">
          streaming
        </span>

        <v-spacer></v-spacer>

        <v-btn
          icon="mdi-dots-horizontal"
          variant="text"
        ></v-btn>

        <v-btn
          class="me-2 text-none"
          color="#4f545c"
          prepend-icon="mdi-export-variant"
          variant="flat"
        >
          Share
        </v-btn>

        <v-btn
          class="text-none"
          prepend-icon="mdi-check"
          variant="text"
          border
        >
          Interested
        </v-btn>
      </div>
    </v-card>
</template>

<script lang="ts" setup>
import { definePage } from 'vue-router'

definePage({
  path: '/raids',
  component: () => import('../pages/raids.vue'),
  meta: {
    requiresAuth: true,
  },
})
</script>