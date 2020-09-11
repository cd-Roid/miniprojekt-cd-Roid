<template>
  <div class="screen">
    <div class="background" @click="close"></div>
    <div class="settings-modal">
      <span class="material-icons material-icons__close" @click="close"
        >close</span
      >
      <section class="settings-modal__about-us">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eos
        maiores temporibus autem atque eligendi exercitationem vitae eum quasi
        nam et ad assumenda, ut impedit cumque perspiciatis eaque voluptatem.
        Commodi!
      </section>
      <section class="settings-modal__settings">
        <div class="settings-modal__settings__option">
          <p class="settings-modal__settings__option__label">Darkmode</p>
          <div class="settings-modal__settings__option__dropdown">
            <p class="setttings-modal__settings__option__dropdown__value">
              aus
            </p>
            <span class="material-icons material-icons__arrow"
              >arrow_drop_down</span
            >
          </div>
        </div>
        <div class="settings-modal__settings__option">
          <p class="settings-modal__settings__option__label">Vorschaubilder</p>
          <div class="settings-modal__settings__option__dropdown">
            <p class="setttings-modal__settings__option__dropdown__value">
              klein
            </p>
            <span class="material-icons material-icons__arrow"
              >arrow_drop_down</span
            >
          </div>
        </div>
        <div class="settings-modal__settings__option">
          <p class="settings-modal__settings__option__label">Sprache</p>
          <Dropdown />
        </div>
        <div>
          <p class="settings-modal__settings__option__label">Login</p>
          <div class="setttings-modal__settings__login-form">
            <form action method="post">
              <input
                type="text"
                placeholder="Nutzername"
                class="setttings-modal__settings__login-form__name"
              />
              <input
                type="password"
                class="setttings-modal__settings__login-form__password"
              />
              <input
                type="submit"
                value="einloggen"
                class="setttings-modal__settings__login-form__login-button"
              />
              <input
                type="checkbox"
                name="eingeloggt bleiben"
                id
                class="setttings-modal__settings__login-form__checkbox"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Dropdown from "./Dropdown";
export default {
  name: "CardModal",
  components: {
    Dropdown
  },
  props: {
    article: Object
  },
  methods: {
    ...mapState({ modalOpen: state => state.setttingsModalOpen }),
    ...mapActions(["closeSettings"]),
    close() {
      this.closeSettings();
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

.settings-modal {
  color: $grey-darker;
  background-color: $grey;
  border: solid 2px white;
  display: flex;
  flex-direction: row;
  height: 460px;
  top: 25%;
  position: fixed;
  width: 940px;
  z-index: 1;
  &__about-us {
    padding: 60px 10px;
    width: 50%;
  }
  &__settings {
    padding-top: 60px;
    width: 50%;
    &__option {
      display: flex;
      flex-direction: row;
      padding-bottom: 20px;
      &__label {
        font-weight: bolder;
      }
      &__dropdown {
        display: flex;
        justify-content: center;
        position: relative;
        left: 60px;
        border: 1px solid $grey-light;
        background-color: $grey;
        width: 120px;
      }
    }
  }

  .material-icons {
    &__close {
      color: $grey-darker;
      display: block;
      box-sizing: border-box;
      height: fit-content;
      position: absolute;
      right: 10px;
      top: 10px;
    }
    &__arrow {
      padding: 0;
      position: relative;
      left: 40px;
    }
  }
}

@media (max-width: 768px) {
  .modal {
    width: 100%;
    height: 100vh;
    top: 0px;
    &__section {
      &__imagebox {
        height: 42%;
        width: 100%;
      }
      &__description {
        height: 48%;
        width: 100vw;
        position: absolute;
        padding: 10px;
        bottom: 0px;
        font-size: $mobile-fliestext;
        overflow: scroll;
        &__sub {
          &__title {
            font-size: $mobile-title;
          }
          &__text {
            height: max-content;
            padding-right: 10px;
          }
        }
      }
      &__button {
        top: 10px;
        right: 10px;
      }
      &__stats {
        position: relative;
        margin-top: 40px;
        &__inventoryNumber {
          font-size: $mobile-card-id;
        }
      }
      &__interaction {
        position: fixed;
        top: 43%;
        width: 90vw;
        //z-index: 1;
      }
    }
  }
}
</style>
