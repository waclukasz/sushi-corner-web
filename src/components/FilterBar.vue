<template>
  <div class="container main-filter">
    <div class="columns">
      <div class="column is-flex is-align-center">
        <span class="has-text-weight-semibold has-text-grey mr-2">{{ $t('sushiAdventure') }}</span>

        <div
          v-for="icon in adventuresIcons"
          :key="icon"
          class="circle circle--lg white-bg
          is-flex is-align-center is-justify-center main-filter__adventure-icon lighter-grey-border pointer"
        >
          <img
            :src="require(`@/assets/icons/${icon}.svg`)"
            :alt="icon"
          >
        </div>
      </div>

      <div class="column">
        <div
          class="main-filter__drop-btn is-flex is-space-between is-align-center is-relative"
          :class="{'active': isDropdownActive}"
        >
          <b-button
            class="is-borderless"
            size="is-medium"
            :rounded="true"
            icon-right="chevron-left"
          />

          <div
            role="button"
            class="main-filter__drop-trigger is-flex is-align-center is-justify-center pointer"
            @click="isDropdownActive = !isDropdownActive"
          >
            <span>{{ $t(selectedItem) }}</span>
          </div>

          <b-button
            class="is-borderless"
            size="is-medium"
            :rounded="true"
            icon-right="chevron-right"
          />

          <div
            v-if="isDropdownActive"
            v-on-clickaway="closeDropdown"
            class="main-filter__drop-box"
          >
            <span
              v-for="menuItem in filteredItems"
              :key="menuItem"
              class="main-filter__drop-item"
              @click="selectMenuItem(menuItem)"
            >
              {{ $t(menuItem) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  mixins: [clickaway],
  data() {
    return {
      adventuresIcons: ['1przygoda', '2przygoda', '3przygoda'],
      menuItems: [
        'menuChoose',
        'promotions',
        'futomatki',
        'uromaki',
        'nigiri',
        'tempuraAndGyoza',
        'hosomaki',
        'gunkanamaki',
        'sashimiAndTatars',
        'extras'
      ],
      isDropdownActive: false,
      selectedItem: 'menuChoose'
    };
  },
  computed: {
    filteredItems() {
      return this.menuItems.filter(item => item !== this.selectedItem);
    }
  },
  methods: {
    closeDropdown() {
      if (this.isDropdownActive) { this.isDropdownActive = false; }
    },
    selectMenuItem(value) {
      this.selectedItem = value;
      this.isDropdownActive = false;
    }
  }
};
</script>
