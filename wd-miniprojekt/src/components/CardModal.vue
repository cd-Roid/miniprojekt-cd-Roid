<template>
  <div class="screen">
    <div class="background" @click="close"></div>
    <div class="modal">
      <section class="modal__section__button" @click="close">
        <i>
          <span class="material-icons material-icons__close">close</span>
        </i>
      </section>
      <section class="modal__section__imagebox">
        <img
          class="modal__section__imagebox__img"
          @error="setPlaceholder"
          v-bind:src="article.images.sizes.l.src"
          v-bind:alt="article.title"
        />
      </section>
      <section class="modal__section__description">
        <section class="modal__section__description_sub">
          <h2 class="modal__section__description__sub__title">
            {{ article.title }}
          </h2>
          <p class="modal__section__description__sub__text">
            {{ article.description }}
          </p>
        </section>
        <section class="modal__section__stats">
          <p class="modal__section__stats__location">{{ article.location }}</p>
          <p class="modal__section__stats__repository">
            {{ article.repository }}
          </p>
          <p class="modal__section__stats__dimensions">
            {{ article.dimensions.width }}x{{ article.dimensions.height }}cm
          </p>
          <p class="modal__section__stats__inventoryNumber">
            {{ article.inventoryNumber }}
          </p>
          <p class="modal__section__stats__dating">{{ article.dating }}</p>
        </section>
        <section class="modal__section__interaction">
          <span class="material-icons" @click="prev">arrow_back</span>
          <span class="material-icons" @click="like"> favorite_border</span>
          <span class="material-icons" @click="next">arrow_forward</span>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "CardModal",
  props: {
    article: Object
  },
  methods: {
    ...mapState({ viewed: state => state.viewedArticle }),
    ...mapActions([
      "closeModal",
      "previousArticle",
      "nextArticle",
      "likeArticle"
    ]),
    close() {
      this.closeModal();
    },
    setPlaceholder() {
      if (this.article.images === null) {
        this.removeImg();
      } else {
        const link = "https://via.placeholder.com/300";
        event.target.src = link;
      }
    },
    prev() {
      this.previousArticle();
    },
    next() {
      this.nextArticle();
    },
    like() {
      this.likeArticle();
    }
  }
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";
.background {
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  width: 200%;
  height: 100%;
  top: 0;
  display: flex;
  align-self: center;
}
.screen {
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  color: $grey;
  background-color: $grey-darker;
  border: solid 2px white;
  display: flex;
  flex-direction: row;
  height: 460px;
  top: 25%;
  position: fixed;
  width: 940px;
  z-index: 1;

  &__section {
    &__description {
      width: 50%;
      padding: 20px;
      font-weight: lighter;
      text-align: start;
      font-size: $desktop-fliestext;
      &__sub {
        &__title {
          font-size: $desktop-title;
          font-weight: bold;
          padding-top: 10px;
        }
        &__text {
          overflow: scroll;
          height: 200px;
          padding-bottom: 10px;
          padding-top: 20px;
          &::-webkit-scrollbar {
            display: none;
          }
        }
      }
    }
    &__imagebox {
      width: 50%;
      background: black;
      &__img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
    &__button {
      background-color: $grey-lighter;
      border-radius: 50%;
      height: 24px;
      position: absolute;
      top: -10px;
      right: -10px;
      width: 24px;
    }
    &__stats {
      position: absolute;
      bottom: 20px;
      &__repository,
      &__dimensions {
        margin-bottom: 20px;
      }
    }
    &__interaction {
      position: fixed;
      height: fit-content;
      width: 100px;
      position: absolute;
      bottom: 20px;
      right: 20px;
      display: flex;
      justify-content: space-between;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .material-icons {
    &__close {
      color: $grey-darker;
    }
  }
}
</style>
