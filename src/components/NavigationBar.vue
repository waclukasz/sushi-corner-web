<template>
  <nav
    class="main-navbar"
    role="navigation"
  >
    <div class="level is-mobile">
      <div class="level-left">
        <div class="level-item">
          <router-link to="/">
            <img
              class="main-navbar__logo"
              src="@/assets/images/logo.png"
              alt="Sushi corner"
            >

            <img
              class="main-navbar__logo--small"
              src="@/assets/images/logo-small.png"
              alt="Sushi corner"
            >
          </router-link>
        </div>
      </div>
      <div
        class="level-right"
      >
        <div class="level-item main-navbar__account-item">
          <a href="#">
            <div
              class="circle circle--xl primary-blue-bg is-flex is-align-center is-justify-center"
            >
              <img src="@/assets/icons/account.svg">
            </div>
          </a>
        </div>

        <div class="level-item">
          <a href="#">
            <div
              class="circle circle--xl has-background-white lighter-grey-border is-flex is-align-center is-justify-center"
            >
              <img src="@/assets/icons/motor-icon.svg">
            </div>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
