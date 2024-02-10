<template>
    <div>
     <input
          class=" shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-control "
          id="username"
          :class="{'border-red-500':errorEmail}"
          name="username"
          type="text"
          placeholder="Votre nom d'utilisateur"
          v-model="inputValue"
        />
        <span class="text-red-500"> {{  errorEmail }}</span>
    </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits} from "vue"

const emit = defineEmits('update:modelValue')

const props = defineProps({
     rules: Array
})
import {ref,  watch} from 'vue';
const inputValue = ref();
let errorEmail= ref(false)
watch(inputValue, (value) => {
  errorEmail.value = false;
  console.log(props.rules)
//   if (props.rules.every((rule:any) => rule==='')) {
//     errorEmail.value = true
//   }
  emit('update:modelValue', value)
})
const validateEmail = (email:string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

</script>