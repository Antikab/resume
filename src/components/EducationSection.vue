<script>
export default {
  name: 'EducationSection',
  props: {
    mainTitle: {
      type: Object,
      required: true
    },
    education: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <section class="education">
    <!-- <div class="step-icon-wrapper"></div> -->
    <div class="education__wrapper">
      <h2 class="education__title">{{ mainTitle.titleEducation }}</h2>
      <div class="education__card-wrapper">
        <div v-for="(item, index) in education" class="education__card" :key="index">
          <div class="education__logo-wrapper">
            <div class="education__logo-icon-wrapper">
              <img
                class="education__logo-icon"
                :src="item.icon"
                :alt="`Иконка ${item.institution}`"
              />
            </div>
            <h3 class="education__institution">{{ item.institution }}</h3>
          </div>

          <div class="education__details">
            <a :href="item.link" target="_blank" rel="noopener noreferrer" class="education__link">
              <div class="education__link-icon-wrapper">
                <component :is="item.iconLink" class="education__link-icon" />
              </div>
              <p class="education__degree">{{ item.degree }}</p>
            </a>
            <p class="education__years">{{ item.years }}</p>
            <p class="education__percentage">
              <span class="education__percentage--highlight">{{ item.labelPercentage }}</span> -
              {{ item.percentage }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as vars;

// --------- Общие плейсхолдеры --------- //

%icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}

%icon-base {
  width: 3rem;
  height: 3rem;
}

%text {
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.29;
}

%text-sm {
  font-weight: 400;
  font-size: 0.625rem;
  letter-spacing: 0.01em;
}

// -------------------------------------- //

.education {
  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.33;
    letter-spacing: 0.01em;
    color: vars.$color-title;
  }

  &__card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem;
    margin: 2rem 0 3rem 0;

    border-radius: 8px;
    overflow: hidden;
  }

  &__card {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    gap: 0.5rem;
    background: vars.$color-card-bg;
    box-shadow: inset 0px -10px 20px 0px rgba(0, 0, 0, 0.03);

    @media (min-width: 550px) {
      flex: 1 1 calc(50% - 1.25rem);
    }

    @media (min-width: 768px) and (max-width: 1129px) {
      flex: 1 1 100%;
    }

    @media (min-width: 1200px) {
      flex: 1 1 calc(33% - 0.5rem);
      border-radius: 0;
    }

    @media (min-width: 1440px) {
      gap: 1rem;
    }
  }

  &__logo-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (min-width: 1200px) {
      align-items: start;
    }
  }

  &__logo-icon-wrapper {
    @extend %icon-wrapper;
    @extend %icon-base;

    @media (min-width: 1440px) {
      width: 4rem !important;
      height: 4rem !important;
    }
  }

  &__logo-icon {
    @extend %icon-wrapper;
    @extend %icon-base;

    @media (min-width: 1440px) {
      width: 4rem !important;
      height: 4rem !important;
    }
  }

  &__institution {
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.33;
    color: vars.$color-title;

    @media (min-width: 1440px) {
      font-size: 0.9rem;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    @extend %text;
    color: vars.$color-title;

    &:hover {
      text-decoration: underline;
      text-decoration-skip-ink: auto;
    }
  }

  &__link-icon-wrapper {
    @extend %icon-wrapper;
    background-color: vars.$color-icon-bg;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
  }

  &__link-icon {
    width: 1rem;
    height: 1rem;
  }

  &__degree {
    @extend %text;
    color: vars.$color-title;

    @media (min-width: 1440px) {
      font-size: 1rem !important;
    }
  }

  &__years {
    color: vars.$color-label;
    @extend %text-sm;

    @media (min-width: 1440px) {
      font-size: 0.75rem !important;
    }
  }

  &__percentage {
    font-weight: 400;
    font-size: 0.75rem;
    letter-spacing: 0.01em;
    color: vars.$color-label;

    &--highlight {
      color: vars.$color-text-highlight-secondary;
    }

    @media (min-width: 1440px) {
      font-size: 0.9rem;
    }
  }
}
</style>
