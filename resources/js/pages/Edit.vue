<template>
  <Head title="Edit Page" />

  <Modal>
    <template #title> Edit Contact </template>
    <form class="mt-6" @submit.prevent="submit">
      <div v-if="$page.props.error_message" class="px-3 py-1.5 text-sm bg-red-500 text-white rounded mb-3">
        {{ $page.props.error_message }}
      </div>

      <div class="grid grid-cols-2 gap-x-6 gap-y-8">
        <div>
          <label>First name</label>
          <input type="text" v-model="form.first_name" class="px-3 py-1.5 border border-gray-300 rounded">
          <span v-if="form.errors.first_name" class="text-sm text-red-600">{{ form.errors.first_name }}</span>
        </div>
        <div>
          <label>Last name</label>
          <input type="text" v-model="form.last_name" class="px-3 py-1.5 border border-gray-300 rounded">
          <span v-if="form.errors.last_name" class="text-sm text-red-600">{{ form.errors.last_name }}</span>
        </div>
      </div>

      <div class="mt-6 flex justify-between">
        <button type="submit" :loading="form.processing" class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm rounded ml-auto">
          Update Contact
        </button>
      </div>
    </form>
  </Modal>
</template>

<script setup>
import { Head, useForm } from '@inertiajs/vue3'
import Modal from '../components/Modal.vue'

const props = defineProps({
  contact: Object,
})

const form = useForm({
  first_name: props.contact.first_name,
  last_name: props.contact.last_name,
})

const submit = () => form.put('/update')
</script>
