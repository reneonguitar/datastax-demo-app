<script setup lang="ts">
  import { Dialog, DialogPanel } from '@headlessui/vue';
  import {
    ArrowTopRightOnSquareIcon,
    Bars3Icon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline';

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Demo', href: '/cinematch' },
    { name: 'Behind the Scenes', href: '/cinematch/behind-the-scenes' },
  ];

  const mobileMenuOpen = ref(false);
</script>

<template>
  <!-- Header -->
  <header class="absolute inset-x-0 top-0 z-50">
    <nav
      class="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global">
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Datastax Demo App</span>
          <img class="h-36 w-auto" src="~/assets/datastax-logo.jpg" alt="" />
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="text-sm font-semibold leading-6 text-gray-900"
          >{{ item.name }}</NuxtLink
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <NuxtLink
          to="/cinematch"
          class="text-sm font-semibold leading-6 text-gray-900"
          >Let's Go <span aria-hidden="true">&rarr;</span>
        </NuxtLink>
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Datastax Demo</span>
            <img class="h-16 w-auto" src="~/assets/datastax-logo.jpg" alt="" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                @click="mobileMenuOpen = false"
                >{{ item.name }}</NuxtLink
              >
            </div>
            <div class="py-6">
              <NuxtLink
                to="/cinematch"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                @click="mobileMenuOpen = false"
                >Let's Go</NuxtLink
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>

  <main>
    <div class="relative isolate pt-14">
      <svg
        class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true">
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            stroke-width="0" />
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
      </svg>

      <div
        class="mx-auto max-w-7xl px-6 py-32 lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <NuxtPage />
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <NuxtLink
        to="https://www.datastax.com/"
        target="_blank"
        class="flex items-center">
        <img class="h-16" src="~/assets/datastax-logo.jpg" alt="DataStax" />
        <ArrowTopRightOnSquareIcon
          class="h-4 w-4 text-gray-400"
          aria-hidden="true" />
      </NuxtLink>
      <p class="text-xs leading-5 text-gray-400 md:order-1 mb-8">
        &copy; {{ new Date().getFullYear() }} DataStax. All rights reserved.
      </p>
    </div>
  </footer>
</template>
