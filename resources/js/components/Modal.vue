<template>
    <div v-if="true" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <p>This is a modal</p>
      </div>
    </div>
    <button @click="openModal">Open Modal</button>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const showModal = ref(false);
  
  const openModal = () => {
    showModal.value = true;
  };
  
  const closeModal = () => {
    showModal.value = false;
  };
  </script>
  
  <style scoped>
  .modal {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  </style>