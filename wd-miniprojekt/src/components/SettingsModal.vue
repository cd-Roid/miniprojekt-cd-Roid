<template>
  <div class="screen">
    <div class="background" @click="close"></div>
    <div class="settings-modal">
      <span class="material-icons material-icons__close" @click="close"
        >close</span
      >
      <section class="settings-modal__about-us">
        <p class="settings-modal__about-us__text">
          Lucas Cranach der Ältere (1472 – 1553) gehört zu den bedeutendsten
          Malern und Grafikern der deutschen Renaissance. Bereits seine
          Zeitgenossen waren beeindruckt von der Geschwindigkeit mit der Cranach
          produzierte: Weltweit sind heute noch mehr als 1500 Gemälde aus der
          Cranach-Werkstatt erhalten, und diese repräsentieren nur einen
          Bruchteil des ursprünglichen Werkbestandes. Eine beträchtliche Anzahl
          der erhaltenen Gemälde wurde bisher nicht wissenschaftlich bearbeitet.
        </p>

        <p class="settings-modal__about-us__text">
          Im Verbund mit 310 Partnern in 31 Ländern arbeiten der Kunstpalast in
          Düsseldorf und die Technischer Hochschule Köln seit Oktober 2009
          gemeinsam an einem Forschungsprojekt zur digitalen Erschließung der
          Gemälde von Lucas Cranach dem Älteren, unterstützt von der Andrew W.
          Mellon Foundation.
        </p>

        <p class="settings-modal__about-us__text">
          Das interdisziplinäre Projektteam konnte bislang Datensätze von über
          1.900 Gemälden auf­bereiten, insgesamt mehr als 16.500 Abbildungen
          (u.a. hochaufgelöste Gesamt- und Detailaufnahmen,
          Infrarotreflektografien und Röntgenaufnahmen) sowie über 1.200
          digitalisierte und transkribierte Archivdokumente. Die Daten werden
          stetig erweitert und den Aus­tausch über neueste Forschungsresultate
          zu Cranachs Bildern sichtbar erleichtern.
        </p>
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
          <p class="settings-modal__settings__option__label">
            Jahre ausblenden
          </p>
          <div class="settings-modal__settings__option__dropdown">
            <p
              class="setttings-modal__settings__option__dropdown__value"
              @click="collapseAllItems"
            >
              ja / nein
            </p>
          </div>
        </div>
        <div class="settings-modal__settings__option">
          <p class="settings-modal__settings__option__label">Sprache</p>
          <Dropdown />
        </div>
        <div>
          <p class="settings-modal__settings__option__label">Login</p>
          <div>
            <form
              action
              method="post"
              class="settings-modal__settings__login-form"
            >
              <input
                type="text"
                placeholder="Nutzername"
                class="settings-modal__settings__login-form__name"
              />
              <input
                type="password"
                class="settings-modal__settings__login-form__password"
              />
              <input
                type="submit"
                value="Einloggen"
                class="settings-modal__settings__login-form__login-button"
              />
              <div>
                <input
                  type="checkbox"
                  name="eingeloggt bleiben"
                  id
                  class="setttings-modal__settings__login-form__checkbox"
                />

                <label class="settings-modal__settings__option__label"
                  >eingeloggt bleiben</label
                >
              </div>
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
    ...mapActions(["closeSettings", "collapseAll"]),
    close() {
      this.closeSettings();
    },
    collapseAllItems() {
      this.collapseAll();
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
    padding: 40px 20px;
    width: 50%;
    &__text {
      padding-bottom: 20px;
    }
  }
  &__settings {
    padding-top: 60px;
    width: 50%;
    &__login-form {
      display: flex;
      flex-direction: column;
      &__name {
        width: 240px;
        margin-bottom: 20px;
      }
      &__password {
        width: 240px;
        margin-bottom: 20px;
      }
      &__login-button {
        background-color: black;
        color: $white;
        width: 80px;
        margin-bottom: 20px;
      }
    }
    &__option {
      display: flex;
      flex-direction: row;
      padding-bottom: 20px;
      &__label {
        font-weight: bolder;
        padding-bottom: 10px;
      }
      &__dropdown {
        display: flex;
        height: 20px;
        padding: 2px;
        border: 1px solid $grey-light;
        justify-content: space-between;
        background-color: $grey;
        width: 120px;
        margin-left: auto;
        margin-right: 20px;
        position: relative;
        &:hover {
          cursor: pointer;
        }
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
      &:hover {
        cursor: pointer;
      }
    }
    &__arrow {
      position: relative;
    }
  }
}

@media (max-width: 768px) {
  .settings-modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    &__about-us {
      display: none;
    }
    &__settings {
      padding: 60px;
      width: 100%;
      &__option {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 40px;
        &__dropdown {
          display: flex;
          height: 20px;
          padding: 2px;
          border: 1px solid $grey-light;
          background-color: $grey;
          width: 80px;
          margin-left: 60px;
          margin-right: 0px;
          position: relative;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
