<template>
  <div class="grid h-screen grid-cols-12 overflow-y-hidden bg-gray-100">
    <NotificationRoot />

    <div
      class="
        flex
        items-center
        justify-center
        w-full
        max-w-sm
        col-span-12
        p-4
        mx-auto
        text-gray-900
        flex-2
        md:pb-48 md:pt-40
      "
    >
      <div class="w-full">
        <!-- <MainLogo
          v-if="!loginPageLogo"
          class="block w-48 h-auto max-w-full mb-32 text-primary-500"
        />

        <img
          v-else
          :src="loginPageLogo"
          class="block w-48 h-auto max-w-full mb-32 text-primary-500"
        /> -->

        <img
        :src="marshaLogo"
        class="block w-48 h-auto max-w-full mb-32 text-primary-500 mx-auto"
        />

        <router-view />
      </div>
    </div>
    <!-- <div
      class="
        relative
        flex-col
        items-center
        justify-center
        hidden
        w-full
        h-full
        pl-10
        bg-no-repeat bg-cover
        md:col-span-6
        lg:col-span-8
        md:flex
        content-box
        overflow-hidden
      "
    >

      <div class="md:pl-10 xl:pl-0 relative z-50 w-7/12 xl:w-5/12 xl:w-5/12">
        <h1
          class="
            hidden
            mb-3
            text-3xl
            leading-normal
            text-left text-white
            xl:text-5xl xl:leading-tight
            md:none
            lg:block
          "
        >
          
        </h1>
        <p
          class="
            hidden
            text-sm
            not-italic
            font-normal
            leading-normal
            text-left text-gray-100
            xl:text-base xl:leading-6
            md:none
            lg:block
          "
        >
          
        </p>
      </div>

      <LoginBottomVector
        class="
          absolute
          z-50
          w-full
          bg-no-repeat
          content-bottom
          h-[15vw]
          lg:h-[22vw]
          right-[32%]
          bottom-0
        "
      />
    </div> -->
  </div>
</template>

<script setup>
import NotificationRoot from '@/scripts/components/notifications/NotificationRoot.vue'
import MainLogo from '@/scripts/components/icons/MainLogo.vue'
import LoginBackground from '@/scripts/components/svg/LoginBackground.vue'
import LoginPlanetCrater from '@/scripts/components/svg/LoginPlanetCrater.vue'
import LoginBottomVector from '@/scripts/components/svg/LoginBottomVector.vue'
import LoginBackgroundOverlay from '@/scripts/components/svg/LoginBackgroundOverlay.vue'
import { computed, ref } from 'vue'

const pageHeading = computed(() => {
  if (window.login_page_heading) {
    return window.login_page_heading
  }

  return 'Simple Invoicing for Individuals Small Businesses'
})

const pageDescription = computed(() => {
  if (window.login_page_description) {
    return window.login_page_description
  }

  return 'Crater helps you track expenses, record payments & generate beautiful invoices & estimates.'
})

const copyrightText = computed(() => {
  if (window.copyright_text) {
    return window.copyright_text
  }
  return 'Copyright @ Crater Invoice, Inc.'
})

const loginPageLogo = computed(() => {
  if (window.login_page_logo) {
    return window.login_page_logo
  }

  return false
})

const marshaLogo = computed(() => {
  const imgUrl = new URL('/img/marshaLogo.png', import.meta.url);
  return imgUrl
})
</script>

<style lang="scss" scoped>
</style>
