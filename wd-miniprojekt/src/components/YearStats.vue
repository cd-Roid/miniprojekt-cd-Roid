<template>
  <div class="accordion">
    <p class="accordion__date">{{ year }}</p>
    <div class="accordion__line"></div>
    <p class="accordion__count">{{ count }}</p>
    <div class="accordion__line"></div>
  </div>
</template>

<script>
export default {
  props: {
    year: Number,
    count: Number
  }
};
</script>
<style lang="scss">
@import "../styles/_variables.scss";
.accordion {
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  margin-top: 30px;

  //justify-content: space-evenly;
  &__date {
    font-size: $desktop-header;
    font-weight: bold;
    margin: 0px;
  }
  &__count {
    font-size: $desktop-fliestext;
    margin: auto;
    color: $grey-light;
  }
  &__line {
    width: 40%;
    height: 0;
    border: 1px solid #c4c4c4;
    margin: auto;
    display: inline-block;
  }
}
</style>
