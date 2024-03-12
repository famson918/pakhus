<template>
    <div class="d-flex align-items-center">
      <label class="col-sm-10 fileName" >{{ label }}</label>
      <button class="col-sm-2 btn btn-primary" @click="downloadFile" type="button">{{ buttonLabel }}</button>
    </div>
  </template>
  
<script setup>
import { ref, onMounted } from 'vue';

let label = ref(' ');
const { buttonLabel, file } = defineProps(['buttonLabel', 'file']);

onMounted(()=> {
    if (file) {
      const parsedUrl = new URL(file);
      const pathArray = parsedUrl.pathname.split('/'); // Split the pathname by '/'
      const fileName = pathArray[pathArray.length - 1]; // Get the last part of the path, which is the file name
      label.value = fileName
    }
})

const downloadFile = () => {
    // Trigger file download
    const url = file; // Add the URL from which to download the file
    const fileName = url.substring(url.lastIndexOf('/') + 1); // Extract the file name from the URL
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = fileName; // Set the file name for download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
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