<template>
  <a :href="`#/new/${id}`" target="_blank">
    <img class="image" alt :src="image"/>
    <div class="type" :style="typeBg">
      {{ type }}
    </div>
    <div class="title">
      {{ title }}
    </div>
    <div class="date">
      {{ date }}
    </div>
  </a>
</template>

<script>
export default {
  name: "NewLink",
  props: {
    id: [String, Number],
    type: String,
    title: String,
    date: String,
    image: String,
  },
  computed: {
    typeBg() {
      switch(this.type.toLowerCase()) {
        case 'announcement':
          return {
            background: '#00E0FF50'
          }
        case 'opinion':
          return {
            background: '#F7C74550'
          }
        default:
            return {}
      }
    }
  }
}
</script>

<style scoped>
a {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: DM Sans, sans-serif;
  text-decoration: none;
  color: white;
  max-width: 330px;
}

.image {
  max-width: 100%;
  border-radius: 12px;
}

.type {
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  padding: 2px 12px;
  border-radius: 4px;
  margin: 8px 0;
}

.title {
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 4px;
}

.date {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #9F9F9F
}
</style>