<script>
export default {
  name: 'AchievementsSection',
  props: {
    mainTitle: {
      type: Object,
      required: true
    },
    achievements: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <section class="achievements">
    <!-- <div class="step-icon-wrapper"></div> -->
    <div class="achievements__wrapper">
      <h2 class="achievements__title">{{ mainTitle.titleAchievements }}</h2>
      <div class="achievements__card-wrapper">
        <div v-for="(achievement, index) in achievements" :key="index" class="achievements__card">
          <div class="achievements__experience">
            <div class="achievements__date-place">
              <span v-if="index === 0" class="achievements__date-text">
                {{ achievement.date }} -
                <span class="achievements__date-text--highlight">
                  {{ achievement.datePresent }}
                </span>
              </span>
              <span v-else class="achievements__date-text">{{ achievement.date }}</span>
              <span class="achievements__icon-location-wrapper">
                <component :is="achievement.iconLocation" class="achievements__icon-location" />
              </span>
              <span class="achievements__place-text">{{ achievement.location }}</span>
            </div>
            <div class="achievements__company-wrapper">
              <div class="achievements__company-icon-wrapper">
                <img
                  class="achievements__company-icon"
                  :src="achievement.iconCompany"
                  :alt="`Иконка ${achievement.company}`"
                />
              </div>
              <div class="achievements__position-text">
                <div class="achievements__job-title">{{ achievement.jobTitle }}</div>
                <div class="achievements__company-text">{{ achievement.company }}</div>
              </div>
            </div>
          </div>
          <div class="achievements__description-wrapper">
            <div
              v-for="(description, descIndex) in achievement.descriptions"
              :key="descIndex"
              class="achievements__description"
            >
              <h3 v-if="description.descriptionTitle" class="achievements__description-title">
                {{ description.descriptionTitle }}
              </h3>
              <p class="achievements__description-job">{{ description.descriptionJob }}</p>
              <p v-if="description.resultTitle" class="achievements__description-result-title">
                {{ description.resultTitle }}
                <span v-if="description.result" class="achievements__description-result-text">
                  {{ description.result }}
                </span>
              </p>
            </div>
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

%icon-sm {
  width: 0.8125rem;
  height: 0.8125rem;
}

%icon-square {
  width: 3rem;
  height: 3rem;
}

%text {
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.29;
}
%text-l {
  font-family: var(--second-family);
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.33;
  letter-spacing: 0.01em;
}

%text-m {
  font-weight: 400;
  font-size: 0.75rem;
  letter-spacing: 0.01em;
}

%text-sm {
  font-weight: 400;
  font-size: 0.625rem;
  letter-spacing: 0.01em;
}

// -------------------------------------- //

.achievements {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__title {
    @extend %text-l;
    color: vars.$color-title;
  }

  &__card-wrapper {
    display: flex;
    flex-direction: column;

    @media (max-width: 1129px) {
      gap: 1rem;
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.375rem 0 1rem 0;

    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  &__experience {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media (min-width: 768px) {
      min-width: 230px;
    }

    @media (min-width: 1440px) {
      min-width: 270px;
    }
  }

  &__date-place {
    @extend %text-sm;
    color: vars.$color-text;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    @media (min-width: 1440px) {
      font-size: 0.75rem;
    }
  }

  &__date-text {
    &--highlight {
      @extend %text-sm;
      border-radius: 4px;
      padding: 0px 4px;
      color: vars.$color-text-highlight;
      background-color: vars.$color-label-highlight;

      @media (min-width: 1440px) {
        font-size: 0.75rem;
      }
    }
  }

  &__icon-location-wrapper {
    @extend %icon-wrapper;
    @extend %icon-sm;
  }

  &__icon-location {
    @extend %icon-wrapper;
    @extend %icon-sm;
    color: vars.$color-label;
  }

  &__place-text {
    @extend %text-sm;
    color: vars.$color-label;

    @media (min-width: 1440px) {
      font-size: 0.75rem;
    }
  }

  &__company-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__company-icon-wrapper {
    @extend %icon-wrapper;
    @extend %icon-square;

    @media (min-width: 1440px) {
      width: 4rem !important;
      height: 4rem !important;
    }
  }

  &__company-icon {
    @extend %icon-wrapper;
    @extend %icon-square;

    @media (min-width: 1440px) {
      width: 4rem !important;
      height: 4rem !important;
    }
  }

  &__position-text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  &__job-title {
    @extend %text-m;
    line-height: 1.33;
    color: vars.$color-label;

    @media (min-width: 1440px) {
      font-size: 0.9rem;
    }
  }
  &__company-text {
    @extend %text;
    color: vars.$color-title;

    @media (min-width: 1440px) {
      font-size: 1rem;
    }
  }

  &__description-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      flex: 1 1 calc(67% - 1rem);
    }
  }

  &__description-title {
    @extend %text-m;
    margin-bottom: 0.3rem;
    font-weight: 600;
    color: vars.$color-text;

    @media (min-width: 1440px) {
      font-size: 0.9rem;
    }
  }

  &__description-job {
    @extend %text-m;
    color: vars.$color-label;

    @media (min-width: 1440px) {
      font-size: 0.9rem;
    }
  }

  &__description-result-title {
    @extend %text-m;
    margin-top: 0.15rem;
    font-weight: 600;
    color: vars.$color-label;

    @media (min-width: 1440px) {
      font-size: 0.9rem;
    }
  }

  &__description-result-text {
    @extend %text-m;
    color: vars.$color-label;

    @media (min-width: 1440px) {
      font-size: 0.9rem;
    }
  }
}
</style>
