<template>
  <v-container class="flex flex-col">
    <v-textarea
      v-model="text"
      label="Label"
      rows="3"
      :no-resize="true"
    ></v-textarea>
    <div class="flex justify-end">
      <v-btn variant="tonal" @click="textSubmit">送信</v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'App',
    data() {
      return {
        text: '',
      }
    },
    methods: {
      textSubmit() {
        console.log(this.text)
      },
    },
  })
</script>
