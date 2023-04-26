<template>
  <n-upload
    action="https://mock-app-2h5z.onrender.com"
    :headers="{
      'naive-info': 'hello!',
    }"
    :data="{
      'naive-data': 'cool! naive!',
    }"
  >
    <n-button>Upload File</n-button>
  </n-upload>
</template>
<script lang="ts" setup>
import { NUpload } from "naive-ui";
</script>
