<template>
  <div class="new">
    <div v-if="exist" class="new-detail">
      <div :class="`type ${type.toLowerCase()}`">{{ type }}</div>
      <div class="title">{{ title }}</div>
      <div class="date">{{ date }}</div>
      <div v-if="html" class="intro" v-html="intro"></div>
      <p v-else class="intro">{{ intro }}</p>
      <div class="image">
        <img alt :src="image" />
      </div>
      <div class="hashtag">
        <span v-for="(hashtag, i) in hashtags" :key="i">#{{ hashtag }}</span>
      </div>
      <p class="content" v-for="(p, i) in content" :key="i" v-html="p"></p>
      <div class="tag">
        TAGS: <span v-for="(tag, i) in tags" :key="i">{{ tag }}</span>
      </div>
      <div class="new-socials">
        <a
          :href="`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ficetea.io%2Fnew%2${id}`"
          title="Share on Facebook"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11px"
            height="20px"
            viewBox="0 0 11 20"
            version="1.1"
          >
            <path
              fill="#9F9F9F"
              d="M 2.699219 3.910156 L 2.699219 6.617188 L 0.53125 6.617188 L 0.53125 9.96875 L 2.699219 9.96875 L 2.699219 19.855469 L 7.082031 19.855469 L 7.082031 9.96875 L 10.082031 9.96875 C 10.265625 8.910156 10.390625 7.792969 10.449219 6.617188 L 7.128906 6.617188 L 7.128906 4.339844 C 7.128906 4.167969 7.230469 3.988281 7.429688 3.804688 C 7.628906 3.617188 7.851562 3.523438 8.097656 3.523438 L 10.496094 3.523438 L 10.496094 0.0859375 L 7.222656 0.0859375 C 6.359375 0.0859375 5.613281 0.207031 4.984375 0.453125 C 4.351562 0.695312 3.898438 0.96875 3.621094 1.269531 C 3.34375 1.570312 3.128906 1.933594 2.976562 2.363281 C 2.820312 2.792969 2.738281 3.101562 2.722656 3.289062 C 2.707031 3.472656 2.699219 3.683594 2.699219 3.910156 Z M 2.699219 3.910156 "
            />
          </svg>
        </a>
        <a
          :href="`https://twitter.com/intent/tweet?text=Hashed%20and%20Icetea%20Labs%20forge%20a%20strategic%20partnership%20https%3A%2F%2Ficetea.io%2Fnew%2${id}`"
          title="Share on Twitter"
          target="_blank"
        >
          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#9F9F9F"
              d="M17.945 4.0525C18.7583 3.475 19.4425 2.75417 20 1.92417V1.92333C19.2558 2.24917 18.4642 2.46583 17.6375 2.57083C18.4875 2.06333 19.1367 1.26583 19.4417 0.305C18.6492 0.7775 17.7742 1.11083 16.8417 1.2975C16.0892 0.495833 15.0167 0 13.8467 0C11.5767 0 9.74917 1.8425 9.74917 4.10083C9.74917 4.42583 9.77667 4.73833 9.84417 5.03583C6.43583 4.86917 3.41917 3.23583 1.3925 0.746667C1.03917 1.36083 0.830833 2.06333 0.830833 2.81917C0.830833 4.23917 1.56167 5.4975 2.6525 6.22667C1.99333 6.21417 1.3475 6.0225 0.8 5.72167V5.76667C0.8 7.75917 2.22083 9.41417 4.085 9.79583C3.75083 9.8875 3.3875 9.93083 3.01 9.93083C2.7475 9.93083 2.4825 9.91583 2.23417 9.86083C2.765 11.4842 4.27333 12.6783 6.065 12.7175C4.67 13.8083 2.89833 14.4658 0.980833 14.4658C0.645 14.4658 0.3225 14.4508 0 14.41C1.81667 15.5808 3.96833 16.25 6.29 16.25C13.5258 16.25 18.2417 10.2133 17.945 4.0525Z"
            />
          </svg>
        </a>
        <a
          :href="`https://api.whatsapp.com/send?text=Hashed%20and%20Icetea%20Labs%20forge%20a%20strategic%20partnership%20https%3A%2F%2Ficetea.io%2Fnew%2${id}`"
          title="Share on Whatsapp"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 18 18"
            version="1.1"
          >
            <path
              fill="#9F9F9F"
              d="M 13.320312 10.34375 C 13.285156 10.328125 11.972656 9.679688 11.738281 9.597656 C 11.644531 9.5625 11.542969 9.527344 11.433594 9.527344 C 11.253906 9.527344 11.105469 9.617188 10.992188 9.789062 C 10.859375 9.984375 10.464844 10.449219 10.339844 10.585938 C 10.324219 10.605469 10.300781 10.628906 10.289062 10.628906 C 10.277344 10.628906 10.074219 10.542969 10.011719 10.515625 C 8.605469 9.90625 7.535156 8.433594 7.390625 8.1875 C 7.371094 8.152344 7.367188 8.136719 7.367188 8.136719 C 7.375 8.117188 7.421875 8.070312 7.445312 8.042969 C 7.515625 7.972656 7.59375 7.882812 7.667969 7.789062 C 7.703125 7.746094 7.738281 7.707031 7.773438 7.664062 C 7.882812 7.539062 7.933594 7.441406 7.988281 7.328125 L 8.019531 7.265625 C 8.15625 6.996094 8.039062 6.765625 8 6.691406 C 7.96875 6.628906 7.414062 5.292969 7.355469 5.152344 C 7.214844 4.8125 7.027344 4.65625 6.765625 4.65625 C 6.742188 4.65625 6.765625 4.65625 6.664062 4.660156 C 6.542969 4.664062 5.871094 4.753906 5.574219 4.941406 C 5.257812 5.136719 4.726562 5.769531 4.726562 6.882812 C 4.726562 7.882812 5.363281 8.828125 5.636719 9.1875 C 5.640625 9.199219 5.65625 9.214844 5.671875 9.242188 C 6.71875 10.769531 8.019531 11.898438 9.339844 12.425781 C 10.609375 12.933594 11.210938 12.992188 11.554688 12.992188 C 11.699219 12.992188 11.8125 12.980469 11.914062 12.96875 L 11.980469 12.964844 C 12.417969 12.925781 13.382812 12.425781 13.601562 11.816406 C 13.773438 11.335938 13.820312 10.8125 13.707031 10.621094 C 13.625 10.492188 13.492188 10.425781 13.320312 10.34375 Z M 13.320312 10.34375 "
            />
            <path
              fill="#9F9F9F"
              d="M 9.160156 0 C 4.285156 0 0.320312 3.9375 0.320312 8.773438 C 0.320312 10.339844 0.738281 11.871094 1.53125 13.210938 L 0.0117188 17.691406 C -0.015625 17.773438 0.00390625 17.867188 0.0664062 17.929688 C 0.113281 17.976562 0.171875 18 0.234375 18 C 0.257812 18 0.28125 17.996094 0.304688 17.988281 L 4.976562 16.503906 C 6.253906 17.1875 7.699219 17.546875 9.160156 17.546875 C 14.035156 17.546875 18 13.613281 18 8.773438 C 18 3.9375 14.035156 0 9.160156 0 Z M 9.160156 15.71875 C 7.785156 15.71875 6.453125 15.324219 5.304688 14.570312 C 5.269531 14.546875 5.222656 14.535156 5.179688 14.535156 C 5.15625 14.535156 5.128906 14.535156 5.105469 14.542969 L 2.769531 15.289062 L 3.523438 13.058594 C 3.546875 12.988281 3.535156 12.90625 3.488281 12.847656 C 2.617188 11.65625 2.15625 10.246094 2.15625 8.773438 C 2.15625 4.945312 5.296875 1.828125 9.160156 1.828125 C 13.019531 1.828125 16.160156 4.945312 16.160156 8.773438 C 16.160156 12.605469 13.019531 15.71875 9.160156 15.71875 Z M 9.160156 15.71875 "
            />
          </svg>
        </a>
        <a
          :href="`mailto:?subject=Hashed%20and%20Icetea%20Labs%20forge%20a%20strategic%20partnership&body=https%3A%2F%2Ficetea.io%2Fnew%2${id}`"
          title="Send email"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="14px"
            viewBox="0 0 20 14"
          >
            <path
              fill="#9F9F9F"
              d="M 13.257812 7.105469 L 20 11.445312 L 20 2.582031 Z M 13.257812 7.105469 "
            />
            <path
              fill="#9F9F9F"
              d="M 0 2.582031 L 0 11.445312 L 6.742188 7.105469 Z M 0 2.582031 "
            />
            <path
              fill="#9F9F9F"
              d="M 18.75 0 L 1.25 0 C 0.625 0 0.132812 0.472656 0.0390625 1.082031 L 10 7.765625 L 19.960938 1.082031 C 19.867188 0.472656 19.375 0 18.75 0 Z M 18.75 0 "
            />
            <path
              fill="#9F9F9F"
              d="M 12.113281 7.875 L 10.34375 9.058594 C 10.238281 9.128906 10.121094 9.164062 10 9.164062 C 9.878906 9.164062 9.761719 9.128906 9.65625 9.058594 L 7.886719 7.871094 L 0.0390625 12.925781 C 0.136719 13.53125 0.628906 14 1.25 14 L 18.75 14 C 19.371094 14 19.863281 13.53125 19.960938 12.925781 Z M 12.113281 7.875 "
            />
          </svg>
        </a>
        <a @click="copy">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 14.8053C0.10131 14.6682 0.0748816 14.4989 0.109631 14.3457C0.314699 13.4324 0.75371 12.6523 1.41247 11.9926C2.79215 10.6109 4.16841 9.22586 5.55347 7.8496C7.14997 6.26338 9.46151 5.97462 11.3492 7.12868C11.7755 7.38954 12.1949 7.67634 12.4382 8.13689C12.7211 8.67183 12.5884 9.34723 12.1426 9.71577C11.6502 10.123 10.9513 10.1523 10.4658 9.77254C10.1589 9.53272 9.87263 9.27382 9.47717 9.17202C8.7773 8.99191 8.15182 9.11818 7.59975 9.58411C7.46075 9.70109 7.33644 9.83568 7.20723 9.96439C5.8995 11.2707 4.5898 12.575 3.28598 13.8852C2.43439 14.7412 2.4613 16.0396 3.33737 16.8325C4.11653 17.5377 5.32589 17.4932 6.10554 16.7214C6.87785 15.9569 7.65261 15.1939 8.40485 14.4098C8.64956 14.1543 8.86833 14.101 9.19331 14.2336C9.78893 14.4774 10.4213 14.5601 11.0629 14.5703C11.1216 14.5713 11.1804 14.5674 11.2386 14.5743C11.5269 14.6085 11.6522 14.8958 11.4696 15.1205C11.3634 15.2511 11.2357 15.3647 11.1158 15.4841C10.0043 16.5907 8.90553 17.7105 7.77594 18.798C7.06236 19.4851 6.18189 19.8546 5.19522 19.9628C5.16438 19.9662 5.12915 19.9574 5.11789 20C4.79242 20 4.46696 20 4.14149 20C4.07982 19.9261 3.98781 19.9481 3.91048 19.9325C1.9616 19.5434 0.714557 18.3927 0.150742 16.4899C0.0890749 16.2814 0.104247 16.0567 0.000978844 15.859C0 15.5086 0 15.1567 0 14.8053Z"
              fill="#9F9F9F"
            />
            <path
              d="M10.9505 13.5749C9.68138 13.5205 8.57039 13.0654 7.70509 12.0988C7.2607 11.6025 7.31306 10.8375 7.77312 10.3574C8.21654 9.8949 9.00255 9.83176 9.52183 10.2297C9.83065 10.4665 10.116 10.7289 10.5109 10.8312C11.2255 11.0157 11.8701 10.8943 12.4153 10.3951C12.8616 9.98691 13.2796 9.54741 13.7083 9.11965C14.7082 8.12172 15.7115 7.12722 16.7056 6.12341C17.6648 5.15387 17.4627 3.59897 16.3013 2.93776C15.5285 2.49777 14.5413 2.63921 13.8782 3.29553C13.0917 4.07371 12.3057 4.85336 11.5319 5.64476C11.3307 5.8508 11.1457 5.90219 10.8751 5.79403C10.2222 5.53317 9.53553 5.42941 8.8337 5.43088C8.66974 5.43137 8.54054 5.38047 8.47055 5.22287C8.39811 5.06087 8.46321 4.93216 8.57675 4.81959C9.79541 3.60778 10.9896 2.37052 12.2396 1.1915C13.933 -0.405482 16.7178 -0.386395 18.4293 1.18416C20.0331 2.65585 20.4467 4.84112 19.484 6.79049C19.2726 7.21874 18.9907 7.60147 18.653 7.93966C17.2131 9.38149 15.7786 10.8287 14.328 12.2598C13.4989 13.0776 12.4863 13.5029 11.319 13.5509C11.2015 13.5553 11.085 13.5661 10.9505 13.5749Z"
              fill="#9F9F9F"
            />
          </svg>
        </a>
      </div>
    </div>
    <h1 v-else>404 Not Found</h1>
    <template v-if="latestNews && latestNews.length">
      <div class="latest-title">Latest News</div>
      <div class="latest-row">
        <NewLink v-for="(n, i) in latestNews" :key="i" v-bind="n" />
      </div>
    </template>
  </div>
</template>

<script>
import news from "../assets/data/data.json";
import NewLink from "../components/NewLink";

export default {
  name: "New",
  components: { NewLink },
  data() {
    return {
      id: "",
      exist: false,
      type: "",
      title: "",
      date: "",
      image: "",
      hashtags: [],
      intro: "",
      content: [],
      tags: [],
      html: false
    };
  },
  head: {
    title() {
      return this.getTitle();
    },
    meta() {
      return this.getMetadata();
    },
    link() {
      return this.getLinks();
    },
  },
  computed: {
    latestNews() {
      if (news.length > 3) return news.slice(news.length - 3, news.length - 1);
      return news;
    },
  },
  created() {
    this.id = this.$route.params.id;
    const detail = news.find((n) => n.id === this.id);
    if (detail) {
      this.exist = true;
      this.type = detail.type;
      this.title = detail.title;
      this.date = detail.date;
      this.image = detail.image;
      this.hashtags = detail.hashtags;
      if (this.html) {
        this.content = detail.content.map((text) => {
          const indices = [];
          const bolds = [];
          let textArr = text.split("");

          for (let i = 0; i < text.length; i++) {
            if (textArr[i] === '"' || textArr[i] === "“" || textArr[i] === "”")
              indices.push(i);
            if (textArr[i] === "\b") bolds.push(i);
          }
          let additionCharNo = 0;
          indices.forEach((index, i) => {
            if (i % 2 === 0) {
              textArr.splice(index + additionCharNo, 0, "<i>");
              additionCharNo += 3;
            } else {
              textArr.splice(index + additionCharNo, 0, "</i>");
              additionCharNo += 4;
            }
          });
          let additionCharBoldNo = 0;
          bolds.forEach((index, i) => {
            if (i % 2 === 0) {
              textArr.splice(index + additionCharBoldNo, 0, "<h2>");
              additionCharBoldNo += 3;
            } else {
              textArr.splice(index + additionCharBoldNo, 0, "</h2>");
              additionCharBoldNo += 4;
            }
          });
          textArr = textArr.filter((text) => text != "\b");
          let finalText = "";
          finalText = textArr
              .join("")
              .replace(
                  "Twitter",
                  '<a href="https://twitter.com/Icetea_Labs">Twitter</a>'
              );
          finalText = textArr
              .join("")
              .replace(
                  "Eligible projects can apply here",
                  'Eligible projects can apply <a href="https://github.com/filecoin-project/devgrants/blob/master/microgrants/microgrants.md">here</a>'
              );

          return finalText;
        });
      } else {
        this.content = detail.content
      }

      this.tags = detail.tags;
      this.intro = detail.short_intro ? detail.short_intro : detail.intro;
      this.html = detail.html;
    }

    this.$emit("updateHead");
  },
  methods: {
    copy() {
      const url = `https://www.icetea.io/#/news/${this.id}`;
      navigator.clipboard.writeText(url);
    },
    getTitle() {
      if (!this.title) {
        return {
          inner: "Icetea Labs",
        };
      }
      return {
        inner: "Icetea Labs - " + this.title,
      };
    },
    getImageLink() {
      if (this.image && this.image.startsWith("https://")) {
        return this.image;
      }
      return window.location.origin + "/" + this.image;
    },
    getMetadata() {
      return [
        { name: "description", content: this.intro, id: "description" },

        // Twitter
        {
          name: "twitter:title",
          content: `${this.getTitle().inner} | 'Icetea Labs'`,
          id: "twitter:title",
        },
        {
          name: "twitter:description",
          content: this.intro,
          id: "twitter:description",
        },
        {
          name: "twitter:image",
          content: this.getImageLink(),
          id: "twitter:image",
        },

        // Google +
        {
          property: "name",
          itemprop: "name",
          content: this.getTitle().inner,
          id: "name",
        },
        {
          property: "og:description",
          itemprop: "og:description",
          content: this.intro,
          id: "og:description",
        },
        {
          property: "og:desc",
          itemprop: "og:desc",
          content: this.intro,
          id: "og:desc",
        },

        // Facebook
        {
          property: "og:title",
          content: `${this.getTitle().inner} | 'Icetea Labs'`,
          id: "og:title",
        },
        { property: "og:image", content: this.getImageLink(), id: "og:image" },
      ];
    },
    getLinks() {
      return [
        {
          rel: "icon",
          href: `${window.location.origin}/favicon.svg`,
          sizes: "16x16",
        },
        { rel: "preload", href: this.getImageLink(), type: "image/png" },
      ];
    },
  },
};
</script>

<style scoped>
.new {
  padding: 60px 40px;
  font-family: DM Sans, sans-serif;
  flex: 1;
  border-bottom: 1px solid #fff2;
}

.new-detail {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}

.new-socials {
  position: absolute;
  top: 200px;
  right: calc(100% + 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #121212;
  border-radius: 60px;
  padding: 16px;
}

.new-socials a {
  padding: 4px;
  margin: 8px 0;
  cursor: pointer;
}

.new-socials a:hover svg path {
  fill: #00e0ff;
}

.type {
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  padding: 2px 12px;
  border-radius: 4px;
  margin-bottom: 16px;
}

.title {
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 12px;
}

.date {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px;
}

.image {
  width: 100%;
  margin-bottom: 12px;
}

.image img {
  width: 100%;
  border-radius: 12px;
}

.hashtag {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.hashtag span {
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  margin-right: 8px;
  margin-bottom: 12px;
}

p.intro {
  font-family: DM Sans, sans-serif;
  font-size: 20px;
  line-height: 28px;
  margin: 16px 0;
  color: #9e9e9e;
  font-style: italic;
}

p.content {
  font-family: Avenir, sans-serif;
  font-size: 16px;
  line-height: 28px;
  margin-top: 0;
  margin-bottom: 32px;
}

.tag {
  display: flex;
  align-items: center;
  border-top: 1px solid #fff2;
  padding: 16px 0;
  width: 100%;
}

.tag span {
  font-family: Avenir, sans-serif;
  font-size: 16px;
  line-height: 28px;
  padding: 2px 12px;
  border-radius: 4px;
  background: #00e0ff50;
  margin: 0 4px;
}

.tag span:first-child {
  margin-left: 24px;
}

h1 {
  margin: 60px;
}

.latest-title {
  text-align: center;
  font-family: DM Sans, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  margin-top: 80px;
  margin-bottom: 24px;
  width: 100%;
}

.latest-row {
  display: flex;
  /* align-items: center; */
  justify-content: center;
}

.latest-row a {
  margin: 0 16px;
}

@media screen and (max-width: 600px) {
  .new {
    padding: 24px;
  }

  .title {
    font-size: 28px;
    line-height: 36px;
  }

  .new-socials {
    position: static;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    background: transparent;
  }

  .latest-row {
    flex-direction: column;
  }

  .latest-row a {
    margin: 0 0 16px;
  }
}
</style>
