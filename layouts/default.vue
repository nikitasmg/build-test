<template>
  <div class="container">
    <div class="header">
      <div class="strip"></div>
      <div class="links">
        <NuxtLink to="/" active-class="active" class="link title-s">
          <Icon type="heart" width="17" height="17"/>
          Склад
        </NuxtLink>
        <NuxtLink to="/favorite" active-class="active" class="link title-s">
          <Icon type="box"  width="17" height="17"/>
          Избранное
        </NuxtLink>
        <NuxtLink to="/deals" active-class="active" class="link title-s">
          <Icon type="bag"  width="17" height="17"/>
          Сделки
        </NuxtLink>
      </div>
    </div>
    <slot/>
  </div>
</template>
<script setup>
</script>

<style scoped lang="scss">

.header {
  position: relative;
  display: flex;
  flex-direction: column;

  margin-bottom: 80px;


  .strip {

    height: 40px;
    width: 100%;

    margin-bottom: 20px;

    background: $color-dark-bg;
    border-radius: 0 0 10px 10px;
  }

  .links {
    display: flex;
    gap: 7px;
    margin-left: auto;

    .link {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 7px;

      text-decoration: none;
      padding: 7px 23px;

      border-radius: $b-radius-sm;

      transition: $transition;

      &:visited {
        color: inherit;
      }

      &.active {
        background-color: $color-light-bg;
        color: inherit;
      }
    }
  }
}

</style>