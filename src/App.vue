<template>
  <v-container class="flex flex-col h-full w-full">
    <v-row
      class="border-b border-solid border-black border-opacity-100 flex-none h-8"
      ><div class="text-lg">Title</div></v-row
    >
    <v-row class="flex-grow flex flex-col"
      ><div v-for="item in items" :key="item.id">{{ item.text }}</div></v-row
    >
    <v-row class="flex flex-col flex-none">
      <v-textarea
        v-model="text"
        rows="2"
        :no-resize="true"
        @keydown.enter="handleKeydownTextarea"
      ></v-textarea>
      <div class="flex justify-end">
        <v-btn variant="tonal" @click="sendChat">送信</v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { authService } from './apis/services/auth'
  import { chatMessageService } from './apis/services/chatMessages'

  export default defineComponent({
    name: 'App',
    data() {
      return {
        text: '',
        items: [],
      }
    },
    async created() {
      await authService.login()

      const messages = await chatMessageService.list()
      this.items = messages.results.map((message: any) => {
        return { id: message.id, text: message.text }
      })
    },
    methods: {
      getNextId() {
        const items = this.items
        if (items.length === 0) {
          return 1
        }
        return items[items.length - 1].id + 1
      },

      async sendChat() {
        const message = await chatMessageService.create({ text: this.text })

        this.items.push({ id: message.id, text: message.text })
        this.text = ''
      },

      handleKeydownTextarea(e: KeyboardEvent) {
        if (!e.ctrlKey && !e.metaKey) return
        return this.sendChat()
      },
    },
  })
</script>
