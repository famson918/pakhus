<template>
  <div class="row align-items-center">
      <label class="col-sm-9 fileName" :for="inputId">{{ label }}</label>
      <input type="file" :id="inputId" @change="handleFileChange" ref="fileInput" style="display: none">
      <button class="col-sm-3 btn btn-primary" @click="openFileInput" type="button">{{ buttonLabel }}</button>
      <img v-if="imageUrl" :src="imageUrl" alt="Selected Image" style="max-width: 100px; max-height: 100px; border: 2px solid darkgray; padding: 10px;">
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const label = ref(' ');
const imageUrl = ref(''); // To store the URL of the selected image
const { buttonLabel, image } = defineProps(['buttonLabel', 'image']);
const inputId = 'customFileInput';

const fileInput = ref(null);

const openFileInput = () => {
  fileInput.value.click();
};

onMounted(()=>{
  if(image){
    label.value = image.file_name;
    imageUrl.value = image.original_url
  }
})

const handleFileChange = () => {
  const file = fileInput.value.files[0];
  if (file) {
    // Read the file and set the URL to imageUrl
    const reader = new FileReader();
    reader.onload = (e) => {
      imageUrl.value = e.target.result;
    };
    reader.readAsDataURL(file);

    if (image) {
      imageUrl.value = image;
    }
    emit('fileSelected', file);
    label.value = file.name;
  }
};

const emit = defineEmits(['fileSelected']);
</script>
<style>
.fileName {
    border: 1px solid lightgray;
    background-color: white;
    padding: 6px;
    border-radius: 4px 0 0 4px;
    height: 38px;
}
.borderButton {
    border: 0 4px 4px 0 !important
}
</style>