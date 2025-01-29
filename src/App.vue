<script>
import { profile } from '@/data/profile'
import { socials } from '@/data/socials'
import { contacts } from '@/data/contacts'
import { mainTitle } from '@/data/mainTitle'
import { education } from '@/data/education'
import { languages } from '@/data/languages'
import { asideTitle } from '@/data/asideTitle'
import { toolsSkills } from '@/data/toolsSkills'
import { achievements } from '@/data/achievements'
import { certificates } from '@/data/certificates'
import { latestProjects } from '@/data/latestProjects'
import { hobbiesInterests } from '@/data/hobbiesInterests'

import MainLayout from '@/layouts/MainLayout.vue'
import EducationSection from '@/components/EducationSection.vue'
import ToolsSkillsSection from '@/components/ToolsSkillsSection.vue'
import AchievementsSection from '@/components/AchievementsSection.vue'
import CertificatesSection from '@/components/CertificatesSection.vue'
import LatestProjectsSection from '@/components/LatestProjectsSection.vue'

export default {
  name: 'App',
  components: {
    MainLayout,
    EducationSection,
    ToolsSkillsSection,
    AchievementsSection,
    CertificatesSection,
    LatestProjectsSection
  },
  data() {
    return {
      profile,
      socials,
      contacts,
      mainTitle,
      education,
      languages,
      asideTitle,
      toolsSkills,
      achievements,
      certificates,
      latestProjects,
      hobbiesInterests
    }
  }
}
</script>

<template>
  <MainLayout
    :profile="profile"
    :asideTitle="asideTitle"
    :contacts="contacts"
    :socials="socials"
    :languages="languages"
    :hobbiesInterests="hobbiesInterests"
  >
    <EducationSection :mainTitle="mainTitle" :education="education" />
    <AchievementsSection :mainTitle="mainTitle" :achievements="achievements" />
    <ToolsSkillsSection :mainTitle="mainTitle" :toolsSkills="toolsSkills" />
    <LatestProjectsSection :mainTitle="mainTitle" :latestProjects="latestProjects" />
    <CertificatesSection :mainTitle="mainTitle" :certificates="certificates" />
  </MainLayout>
</template>
