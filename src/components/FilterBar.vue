<template>
  <div class="main-filter">
    <div class="columns is-multiline">
      <div class="column is-5-tablet">
        <div class="is-flex is-space-between is-align-center">
          <span class="has-text-weight-semibold has-text-grey mr-3">
            {{ $t('sushiAdventure') }}
          </span>

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
      </div>

      <div class="column is-flex is-12-mobile is-7-widescreen">
        <b-dropdown
          v-model="selectedItem"
          class="main-filter__drop-box mr-5"
          aria-role="list"
        >
          <button
            slot="trigger"
            v-on-clickaway="closeDropdown"
            class="main-filter__drop-btn"
            :class="{'active': isDropdownActive}"
            type="button"
            @click="isDropdownActive = true"
          >
            <span class="size-2">
              {{ $t(selectedItem) }}
            </span>
          </button>

          <b-dropdown-item
            v-for="listItem in menuItems"
            :key="listItem"
            :value="listItem"
            aria-role="listitem"
          >
            {{ $t(listItem) }}
          </b-dropdown-item>
        </b-dropdown>

        <div
          class="main-filter__btn mr-5"
        >
          <span class="size-1 text-no-wrap">
            {{ $t('sushiSets') }}
          </span>
          <div
            class="is-flex is-align-center main-filter__switcher"
          >
            <button
              @click.stop="substractPersonFromSet()"
            >
              <b-icon
                class="main-filter__switcher-btn"
                icon="minus-circle-outline"
              />
            </button>
            <span class="text-no-wrap">
              {{ personsQuantity }} {{ $t('personShort') }}
            </span>
            <button
              @click.stop="addPersonToSet()"
            >
              <b-icon
                class="main-filter__switcher-btn"
                icon="plus-circle-outline"
              />
            </button>
          </div>
        </div>

        <button class="main-filter__btn">
          <span class="size-1">
            {{ $t('diet') }}
          </span>
        </button>
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
      isSetsActive: false,
      selectedItem: 'menuChoose',
      personsQuantity: 1
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
    },
    addPersonToSet() {
      const maxQuantity = 10;
      if (this.personsQuantity < maxQuantity) {
        this.personsQuantity += 1;
      }
    },
    substractPersonFromSet() {
      if (this.personsQuantity > 1) {
        this.personsQuantity -= 1;
      }
    }
  }
};
</script>
