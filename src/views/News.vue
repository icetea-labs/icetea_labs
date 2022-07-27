<template>
  <div class="news">
    <div class="top-news">
      <div class="top-news__image">
        <img alt src="https://gamefi-public.s3.amazonaws.com/accelerator.png" @click="goTo" />
      </div>
      <div class="top-news__detail">
        <div :class="`top-news__detail--type ${type.toLowerCase()}`">
          {{ type }}
        </div>
        <div class="top-news__detail--title" @click="goTo">{{ title }}</div>
        <div class="top-news__detail--date">{{ date }}</div>
        <div class="top-news__detail--info">{{ info }}</div>
      </div>
    </div>
    <div class="news-tab">
      <div
        :class="`news-tab_item ${tab === 'all' ? 'selected' : ''}`"
        @click="tab = 'all'"
      >
        ALL
      </div>
      <div
        :class="`news-tab_item ${tab === 'announcement' ? 'selected' : ''}`"
        @click="tab = 'announcement'"
      >
        Announcement
      </div>
      <div
        :class="`news-tab_item ${tab === 'opinion' ? 'selected' : ''}`"
        @click="tab = 'opinion'"
      >
        Opinion
      </div>
    </div>
    <template v-if="computedNews && computedNews.length">
      <div class="news-tabview">
        <NewLink v-for="(n, i) in computedNews" :key="i" v-bind="n" />
      </div>
      <div class="pagination">
        <div class="pagination-btn" @click="prev">
          <svg
            width="5"
            height="7"
            viewBox="0 0 5 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.63274 6.88907C3.77559 6.83458 3.86777 6.71723 3.97119 6.61444C4.14366 6.44339 4.14351 6.2489 3.97198 6.07722C3.22063 5.32555 2.46929 4.57373 1.71635 3.82349C1.67739 3.78469 1.68151 3.76758 1.71762 3.73131C2.47024 2.98091 3.22158 2.22909 3.97293 1.47742C4.10597 1.34439 4.13971 1.18522 4.04769 1.04426C3.96359 0.915339 3.85161 0.806058 3.72428 0.719583C3.60169 0.636434 3.45044 0.65544 3.33546 0.749992C3.31835 0.764087 3.30172 0.779133 3.28604 0.794813C2.38123 1.69947 1.47641 2.60413 0.57175 3.50895C0.436653 3.64405 0.408304 3.80132 0.491136 3.94877C0.5122 3.98614 0.541658 4.01687 0.57175 4.04696C1.47641 4.95178 2.38139 5.85612 3.28541 6.76173C3.3467 6.82318 3.41734 6.8642 3.49906 6.88923C3.54357 6.88907 3.58807 6.88907 3.63274 6.88907Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          :class="`pagination-item ${i === page ? 'selected' : ''}`"
          v-for="i in totalPage"
          :key="i"
          @click="page = i"
        >
          {{ i }}
        </div>
        <div class="pagination-btn" @click="next">
          <svg
            width="5"
            height="7"
            viewBox="0 0 5 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.912187 6.88907C0.769329 6.83458 0.677153 6.71723 0.573731 6.61444C0.401257 6.44339 0.401415 6.2489 0.572939 6.07722C1.32429 5.32555 2.07564 4.57373 2.82857 3.82349C2.86753 3.78469 2.86341 3.76758 2.8273 3.73131C2.07469 2.98091 1.32334 2.22909 0.571989 1.47742C0.438951 1.34439 0.405217 1.18522 0.497235 1.04426C0.581334 0.915339 0.693307 0.806058 0.820644 0.719583C0.943229 0.636434 1.09448 0.65544 1.20946 0.749992C1.22657 0.764087 1.2432 0.779133 1.25888 0.794813C2.16369 1.69947 3.06851 2.60413 3.97317 3.50895C4.10827 3.64405 4.13662 3.80132 4.05378 3.94877C4.03272 3.98614 4.00326 4.01687 3.97317 4.04696C3.06851 4.95178 2.16354 5.85612 1.25951 6.76173C1.19822 6.82318 1.12758 6.8642 1.04586 6.88923C1.00135 6.88907 0.956849 6.88907 0.912187 6.88907Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </template>
    <template v-else>
      <div style="padding: 24px; font-size: 20px">There is no result.</div>
    </template>
  </div>
</template>

<script>
import news from "../assets/data/data.json";
import NewLink from "@/components/NewLink";

export default {
  name: "News",
  components: { NewLink },
  data() {
    return {
      tab: "all",
      type: "Announcement",
      title: "Introducing the Icetea Labs accelerator program",
      date: "Thu 28/07",
      info: "Icetea Labs Accelerator Program (ILAP) is the 08-week accelerator program that helps Web3 Startups in product/market fit, expansion, and growth.",
      news,
      page: 1,
    };
  },
  computed: {
    filteredNews() {
      switch (this.tab) {
        case "announcement":
          return this.news.filter((n) => n.type === "Announcement");
        case "opinion":
          return this.news.filter((n) => n.type === "Opinion");
        case "all":
        default:
          return this.news;
      }
    },
    totalPage() {
      return Math.ceil(this.filteredNews.length / 9);
    },
    computedNews() {
      return this.filteredNews.slice((this.page - 1) * 9, this.page * 9);
    },
  },
  methods: {
    goTo() {
      this.$router.push("/news/1");
    },
    prev() {
      if (this.page > 1) this.page--;
    },
    next() {
      if (this.page < this.totalPage) this.page++;
    },
  },
};
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
  cursor: pointer;
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
  cursor: pointer;
}

.top-news__detail--date {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #9f9f9f;
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
  background: #00e0ff50;
}

.news-tabview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px 12px;
  /* align-items: center; */
  padding: 24px 0;
  flex-wrap: wrap;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  font-family: DM Sans, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.pagination-btn {
  background: #2e2e2e;
  border-radius: 6px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.pagination-item {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #aeaeae;
  margin: 0 4px;
  user-select: none;
}

.pagination-item.selected {
  color: #00e0ff;
}

@media screen and (max-width: 600px) {
  .news {
    max-width: 100%;
    padding: 24px;
  }

  .top-news {
    flex-direction: column;
  }

  .top-news__detail {
    padding-left: 0;
    padding-top: 12px;
  }

  .news-tabview {
    display: flex;
    flex-direction: column;
  }
}
</style>
