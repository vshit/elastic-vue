<template>
  <layout>
    <div>
      <div class="flex justify-center py-8">
        <input 
         v-model="searchShow"
         @input="searchInput"
         type="text"
         class="w-1/3 border border-sloid border-gray-600 py-2 px-4"
         placeholder="search...">
      </div>
      <div class="px-6" v-if="result.length">
        <div 
        v-for="item in result"
        :key="item"
        >
          <show :item="item"/>
        </div>
      </div>
      <div class="px-6" v-else>
        <p>undefined</p>
      </div>
    </div>
  </layout>
</template>
<script>
import Show from '@/components/Show.vue'
export default {
  components: {
    Show
  },
  data:() => ({
    searchShow: '',
    controller: new AbortController(),
    result: []
  }),
  methods: {
    searchInput() {
      this.controller.abort()
      this.controller = new AbortController()
      this.search()
    },
    async search() {
      const URL = 'https://api.tvmaze.com/search/shows?q=girls'
      const response = await fetch(`${URL}${this.searchShow}`, {
        method: 'GET',
        signal: this.controller.signal
      })
      const data = await response.json()
      this.result = await data.map(item => ({
        ...item.show
      }))
    }
  }
}
</script>