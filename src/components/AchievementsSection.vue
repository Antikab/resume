<script>
import { Collapse } from 'vue-collapsed'

export default {
  name: 'AchievementsSection',
  data() {
    return {
      expandedDescriptions: {},
      defaultExpandedTitle:
        'Проект: glavapu-stat — data-driven аналитика территорий (районы и пользовательские контуры)'
    }
  },
  components: {
    Collapse
  },
  props: {
    mainTitle: Object,
    achievements: Array
  },
  methods: {
    isExpanded(achievementIndex, descIndex) {
      const key = `${achievementIndex}-${descIndex}`
      const expandedValue = this.expandedDescriptions[key]

      if (typeof expandedValue === 'boolean') {
        return expandedValue
      }

      const description = this.achievements?.[achievementIndex]?.descriptions?.[descIndex]
      return description?.descriptionTitle === this.defaultExpandedTitle
    },
    toggleDescription(achievementIndex, descIndex) {
      const key = `${achievementIndex}-${descIndex}`
      const nextValue = !this.isExpanded(achievementIndex, descIndex)

      this.expandedDescriptions = {
        ...this.expandedDescriptions,
        [key]: nextValue
      }
    },
    getDescriptionId(achievementIndex, descIndex) {
      return `achievement-description-${achievementIndex}-${descIndex}`
    },
    getLeadSource(d) {
      return (d.descriptionLead || d.descriptionJob || '').trim()
    }
  }
}
</script>

<template>
  <section class="achievements">
    <div class="achievements__step-wrapper">
      <div class="achievements__step-point-wrapper">
        <span class="achievements__step-point"></span>
      </div>
      <div class="achievements__step-divider"></div>
    </div>

    <div class="achievements__wrapper">
      <h2 class="achievements__title">{{ mainTitle.titleAchievements }}</h2>

      <div class="achievements__card-wrapper">
        <div
          v-for="(achievement, achievementIndex) in achievements"
          :key="achievementIndex"
          class="achievements__card"
        >
          <div class="achievements__experience">
            <div class="achievements__date-place">
              <span v-if="achievementIndex === 0" class="achievements__date-text">
                {{ achievement.date }} -
                <span class="achievements__date-text--highlight">
                  {{ achievement.datePresent }}
                </span>
              </span>

              <span v-else class="achievements__date-text">{{ achievement.date }}</span>

              <span class="achievements__icon-location-wrapper">
                <inline-svg
                  class="achievements__icon-location"
                  :src="achievement.iconLocation"
                  role="presentation"
                />
              </span>

              <span class="achievements__place-text">{{ achievement.location }}</span>
            </div>

            <div class="achievements__company-wrapper">
              <div class="achievements__company-icon-wrapper">
                <inline-svg
                  class="achievements__company-icon"
                  :src="achievement.iconCompany"
                  :aria-label="`Иконка ${achievement.company}`"
                  role="img"
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
              <div class="achievements__description-header">
                <h3 v-if="description.descriptionTitle" class="achievements__description-title">
                  {{ description.descriptionTitle }}
                </h3>

                <button
                  v-if="
                    description.bullets?.length ||
                    description.results?.length ||
                    description.stack?.length
                  "
                  type="button"
                  class="achievements__toggle"
                  :aria-expanded="isExpanded(achievementIndex, descIndex)"
                  :aria-controls="getDescriptionId(achievementIndex, descIndex)"
                  @click="toggleDescription(achievementIndex, descIndex)"
                >
                  {{ isExpanded(achievementIndex, descIndex) ? 'Скрыть' : 'Показать' }}
                </button>
              </div>
              <p v-if="getLeadSource(description)" class="achievements__lead">
                {{ getLeadSource(description) }}
              </p>

              <Collapse :when="isExpanded(achievementIndex, descIndex)">
                <div
                  :id="getDescriptionId(achievementIndex, descIndex)"
                  class="achievements__collapsible-content"
                >
                  <div v-if="description.bullets?.length" class="achievements__block">
                    <div class="achievements__block-title">
                      {{ description.bulletsTitle || 'Ключевые задачи' }}
                    </div>

                    <ul class="achievements__list">
                      <li
                        v-for="(item, i) in description.bullets"
                        :key="i"
                        class="achievements__list-item"
                      >
                        <span v-html="item" />
                      </li>
                    </ul>
                  </div>

                  <div v-if="description.results?.length" class="achievements__block">
                    <div class="achievements__block-title">
                      {{ description.resultTitle || 'Результат' }}
                    </div>

                    <ul class="achievements__list achievements__list--result">
                      <li
                        v-for="(item, i) in description.results"
                        :key="i"
                        class="achievements__list-item"
                      >
                        <span v-html="item" />
                      </li>
                    </ul>
                  </div>

                  <div v-if="description.stack?.length" class="achievements__tags">
                    <span v-for="tag in description.stack" :key="tag" class="achievements__tag">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </Collapse>
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
  font-size: 1.45rem;
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
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  &__step-wrapper {
    width: 2rem;
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    position: relative;
  }

  &__step-point-wrapper {
    position: absolute;
    width: 2rem;
    height: 2rem;
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 50%;
    box-shadow:
      inset 0 2px 2px 0 rgba(0, 0, 0, 0.04),
      0 12px 48px 0 rgba(0, 0, 0, 0.04),
      0 2px 8px 0 rgba(0, 0, 0, 0.05);
    z-index: 2;

    @media (max-width: 768px) {
      width: 1.75rem;
      height: 1.75rem;
    }
  }

  &__step-point {
    width: 0.5625rem;
    height: 0.5625rem;
    flex: 0 0 auto;
    background-color: vars.$color-point;
    border-radius: 50%;
  }

  &__step-divider {
    position: absolute;
    display: flex;
    flex: 0 0 auto;
    width: 1px;
    height: 100%;
    background-color: vars.$color-icon-bg;
    z-index: 1;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__title {
    @extend %text-l;
    color: vars.$color-title;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  &__card-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 2rem 0 3.25rem 0;
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-bottom: 1px solid vars.$color-icon-bg;
    padding-bottom: 0.75rem;

    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1.5rem;
    }

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: -1.5rem;
    }
  }

  &__experience {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
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

    @media (min-width: 1440px) {
      width: 0.9rem;
      height: 0.9rem;
    }
  }

  &__icon-location {
    @extend %icon-wrapper;
    @extend %icon-sm;
    color: vars.$color-label;

    @media (min-width: 1440px) {
      width: 0.9rem;
      height: 0.9rem;
    }
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
      width: 4rem;
      height: 4rem;
    }
  }

  &__company-icon {
    @extend %icon-wrapper;
    @extend %icon-square;

    @media (min-width: 1440px) {
      width: 4rem;
      height: 4rem;
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

    @media (min-width: 768px) {
      flex: 1 1 auto;
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    padding: 0.85rem 0.9rem;
    margin-bottom: 1.5rem;
    border: 1px solid vars.$color-icon-bg;
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.015);
  }

  &__description-header {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    align-items: flex-start;
  }

  &__toggle {
    @extend %text-sm;
    white-space: nowrap;
    border: 1px solid vars.$color-icon-bg;
    border-radius: 999px;
    padding: 0.2rem 0.6rem;
    color: vars.$color-title;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background: vars.$color-label-highlight;
    }
  }

  &__description-title {
    @extend %text-m;
    margin-bottom: 0.1rem;
    font-weight: 700;
    color: vars.$color-title;

    @media (min-width: 1440px) {
      font-size: 0.9rem;
    }
  }

  &__lead {
    @extend %text-m;
    color: vars.$color-label;
    line-height: 1.55;
    white-space: pre-line;
  }

  &__collapsible-content {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }

  &__block-title {
    @extend %text-m;
    font-weight: 700;
    color: vars.$color-title;
    margin-top: 0.1rem;
  }

  &__list {
    margin: 0;
    padding-left: 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  &__list-item {
    @extend %text-m;
    color: vars.$color-label;
    line-height: 1.55;

    :deep(strong) {
      color: vars.$color-title;
      font-weight: 700;
    }
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: 0.15rem;
  }

  &__tag {
    @extend %text-sm;
    padding: 0.15rem 0.45rem;
    border-radius: 999px;
    background: vars.$color-label-highlight;
    color: vars.$color-text-highlight;
    line-height: 1.3;
  }
}
</style>
