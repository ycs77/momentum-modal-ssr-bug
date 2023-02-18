<template>
  <div>
    <div>
      <Link
        href="/"
        :class="{ 'text-red-500 bg-red-100': $page.url === '/' }"
      >
        Home
      </Link>
      <Link
        href="/about"
        :class="{ 'text-red-500 bg-red-100': $page.url === '/about' }"
      >
        About
      </Link>
      <Link
        href="/edit"
        :class="{ 'text-red-500 bg-red-100': $page.url === '/edit' }"
      >
        Edit
      </Link>
    </div>

    <slot />

    <Modal />
  </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import { Modal } from 'momentum-modal'
</script>
