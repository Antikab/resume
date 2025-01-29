<script>
import InfoAsideSection from '@/components/InfoAsideSection.vue'

export default {
  name: 'MainLayout',
  components: {
    InfoAsideSection
  },
  props: {
    profile: {
      type: Object,
      required: true
    },
    asideTitle: {
      type: Object,
      required: true
    },
    contacts: {
      type: Array,
      required: true
    },
    socials: {
      type: Array,
      required: true
    },
    languages: {
      type: Array,
      required: true
    },
    hobbiesInterests: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="portfolio">
    <InfoAsideSection
      class="portfolio__aside"
      :profile="profile"
      :asideTitle="asideTitle"
      :contacts="contacts"
      :socials="socials"
      :languages="languages"
      :hobbiesInterests="hobbiesInterests"
    />

    <main class="portfolio__main">
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.portfolio {
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    max-width: 1440px;
    margin: 0 auto;
  }

  &__aside {
    flex: 0 0 auto;
    background-color: #f8f8f8;
    padding: 3rem;

    @media (min-width: 768px) {
      flex: 0 0 353px;
      min-width: 10%;
    }

    @media (min-width: 1200px) {
      flex: 0 0 385px;
    }
  }

  &__main {
    flex: 1;
    padding: 4rem 3rem 0;
    background-color: #ffffff;

    @media (max-width: 768px) {
      padding: 3rem 2rem 3rem 1rem;
    }
  }
}
</style>
