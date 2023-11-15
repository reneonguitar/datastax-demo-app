<template>
  <div class="md:flex md:items-center md:justify-between">
    <div class="min-w-0 flex-1">
      <h2
        class="text-lg font-bold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">
        <slot></slot>
      </h2>
    </div>
    <div class="mt-4 flex md:ml-4 md:mt-0" v-if="$slots.actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
