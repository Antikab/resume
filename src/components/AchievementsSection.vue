<script>
const MAX_BULLETS_COLLAPSED = 3
const MAX_RESULTS_COLLAPSED = 2
const MAX_LEAD_CHARS_COLLAPSED = 260

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
  },
  data() {
    return {
      expandedMap: {} // { "0:1": true }
    }
  },
  methods: {
    makeKey(achievementIndex, descIndex) {
      return `${achievementIndex}:${descIndex}`
    },
    isExpanded(key) {
      return Boolean(this.expandedMap[key])
    },
    toggleExpanded(key) {
      this.expandedMap[key] = !this.expandedMap[key]
    },

    // --- content helpers ---
    getLeadSource(description) {
      return (description.descriptionLead || description.descriptionJob || '').trim()
    },

    isCollapsible(description) {
      const lead = this.getLeadSource(description)
      const bulletsCount = description.bullets?.length ?? 0
      const resultsCount = description.results?.length ?? 0
      const hasOldResultText = Boolean(description.result)

      return (
        lead.length > MAX_LEAD_CHARS_COLLAPSED ||
        bulletsCount > MAX_BULLETS_COLLAPSED ||
        resultsCount > MAX_RESULTS_COLLAPSED ||
        (hasOldResultText && String(description.result).length > 220)
      )
    },

    getLeadText(description, expanded) {
      const lead = this.getLeadSource(description)
      if (!lead) return ''
      if (expanded) return lead
      if (lead.length <= MAX_LEAD_CHARS_COLLAPSED) return lead
      return `${lead.slice(0, MAX_LEAD_CHARS_COLLAPSED).trimEnd()}…`
    },

    getBullets(description, expanded) {
      const bullets = description.bullets ?? []
      return expanded ? bullets : bullets.slice(0, MAX_BULLETS_COLLAPSED)
    },

    getResults(description, expanded) {
      const results = description.results ?? []
      return expanded ? results : results.slice(0, MAX_RESULTS_COLLAPSED)
    },

    getOldResultText(description, expanded) {
      const text = (description.result || '').trim()
      if (!text) return ''
      if (expanded) return text
      if (text.length <= 220) return text
      return `${text.slice(0, 220).trimEnd()}…`
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
              <h3 v-if="description.descriptionTitle" class="achievements__description-title">
                {{ description.descriptionTitle }}
              </h3>

              <!-- Лид (lead или старый descriptionJob) -->
              <p v-if="getLeadSource(description)" class="achievements__lead">
                {{ getLeadText(description, isExpanded(makeKey(achievementIndex, descIndex))) }}
              </p>

              <!-- Список задач -->
              <div v-if="description.bullets?.length" class="achievements__block">
                <div class="achievements__block-title">
                  {{ description.bulletsTitle || 'Ключевые задачи' }}
                </div>

                <ul class="achievements__list">
                  <li
                    v-for="(item, i) in getBullets(
                      description,
                      isExpanded(makeKey(achievementIndex, descIndex))
                    )"
                    :key="i"
                    class="achievements__list-item"
                  >
                    <span v-html="item"></span>
                  </li>
                </ul>
              </div>

              <!-- Список результатов -->
              <div v-if="description.results?.length" class="achievements__block">
                <div class="achievements__block-title">
                  {{ description.resultTitle || 'Результат' }}
                </div>

                <ul class="achievements__list achievements__list--result">
                  <li
                    v-for="(item, i) in getResults(
                      description,
                      isExpanded(makeKey(achievementIndex, descIndex))
                    )"
                    :key="i"
                    class="achievements__list-item"
                  >
                    <span v-html="item"></span>
                  </li>
                </ul>
              </div>

              <!-- Старый формат результата (если нет results[]) -->
              <p
                v-else-if="description.resultTitle && description.result"
                class="achievements__description-result-title"
              >
                {{ description.resultTitle }}
                <span class="achievements__description-result-text">
                  {{
                    getOldResultText(description, isExpanded(makeKey(achievementIndex, descIndex)))
                  }}
                </span>
              </p>

              <!-- Теги стека -->
              <div v-if="description.stack?.length" class="achievements__tags">
                <span v-for="tag in description.stack" :key="tag" class="achievements__tag">
                  {{ tag }}
                </span>
              </div>

              <!-- Toggle -->
              <button
                v-if="isCollapsible(description)"
                type="button"
                class="achievements__toggle"
                @click="toggleExpanded(makeKey(achievementIndex, descIndex))"
              >
                {{ isExpanded(makeKey(achievementIndex, descIndex)) ? 'Свернуть' : 'Показать ещё' }}
              </button>
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
    margin: 2rem 0 3rem 0;
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-bottom: 1px solid vars.$color-icon-bg;

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

  &__description-result-title {
    @extend %text-m;
    margin-top: 0.1rem;
    font-weight: 700;
    color: vars.$color-title;
  }

  &__description-result-text {
    @extend %text-m;
    color: vars.$color-label;
    white-space: pre-line;
  }

  &__toggle {
    @extend %text-m;
    align-self: flex-start;
    margin-top: 0.25rem;
    padding: 0.25rem 0.55rem;
    border-radius: 10px;
    border: 1px solid vars.$color-icon-bg;
    background: #fff;
    color: vars.$color-label;
    cursor: pointer;
    transition:
      transform 120ms ease,
      box-shadow 120ms ease;

    &:hover {
      box-shadow:
        0 8px 20px rgba(0, 0, 0, 0.06),
        0 2px 6px rgba(0, 0, 0, 0.06);
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
  }
}
</style>
