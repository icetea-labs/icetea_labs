<template>
  <div class="news">
    <div class="top-news">
      <div class="top-news__image">
        <img alt src="news/top-new.png"/>
      </div>
      <div class="top-news__detail">
        <div :class="`top-news__detail--type ${type.toLowerCase()}`">{{ type }}</div>
        <div class="top-news__detail--title">{{ title }}</div>
        <div class="top-news__detail--date">{{ date }}</div>
        <div class="top-news__detail--info">{{ info }}</div>
      </div>
    </div>
    <div class="news-tab">
      <div :class="`news-tab_item ${tab === 'all' ? 'selected' : ''}`" @click="tab = 'all'">ALL</div>
      <div :class="`news-tab_item ${tab === 'announcement' ? 'selected' : ''}`" @click="tab = 'announcement'">Announcement</div>
      <div :class="`news-tab_item ${tab === 'opinion' ? 'selected' : ''}`" @click="tab = 'opinion'">Opinion</div>
    </div>
    <template v-if="computedNews && computedNews.length">
      <div class="news-tabview">
        <NewLink v-for="(n, i) in computedNews" :key="i" v-bind="n"/>
      </div>
    </template>
    <template v-else>
      <div style="padding: 24px; font-size: 20px">There is no result.</div>
    </template>
  </div>
</template>

<script>
import news from '../assets/data/data.json'
import NewLink from "@/components/NewLink";

export default {
  name: "News",
  components: {NewLink},
  data() {
    return {
      tab: 'all',
      type: 'Announcement',
      title: 'Hashed and Icetea Labs forge a strategic partnership',
      date: 'FRI 02/11',
      info: 'Both companies will explore the details to cooperate closely in gaming and metaverse development and finance, ranging from infrastructure layers, platforms and services, to interoperable flagship products, supporting the full lifecycle of games and metaverses from tokenomics design, launching, to building traction...',
      news,
    }
  },
  computed: {
    computedNews() {
      switch (this.tab) {
        case 'announcement':
          return this.news.filter(n => n.type === 'Announcement')
        case 'opinion':
          return this.news.filter(n => n.type === 'Opinion')
        case 'all':
        default:
            return this.news
      }
    }
  }
}
</script>

<style scoped>
  .news {
    max-width: 1026px;
    margin: 60px auto;
  }

  .top-news {
    display: flex;
    align-items: stretch;
  }

  .top-news__image {
    flex: 0 0 50%;
  }

  .top-news__image img {
    width: 100%;
    border-radius: 16px;
  }

  .top-news__detail {
    flex: 0 0 50%;
    padding-left: 24px;
    font-family: DM Sans, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .top-news__detail--type {
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
    padding: 2px 12px;
    border-radius: 4px;
    margin: 8px 0;
  }

  .top-news__detail--title {
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }

  .top-news__detail--date {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #9F9F9F;
    margin-bottom: 12px;
  }

  .top-news__detail--info {
    font-family: Avenir, sans-serif;
    font-size: 14px;
    line-height: 22px;
  }

  .news-tab {
    margin-top: 60px;
    display: flex;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid #fff2;
  }

  .news-tab_item {
    font-family: DM Sans, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 1px;
    padding: 2px 8px;
    margin-right: 16px;
    border-radius: 4px;
    cursor: pointer;
  }

  .news-tab_item.selected {
    background: #00E0FF50
  }

  .news-tabview {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px 12px;
    align-items: center;
    padding: 24px 0;
    flex-wrap: wrap;
  }
</style>