<template>
    <div class="mb-3">
        <div class="input-container">
        <i v-if="!searchTerm" class="fas fa-search search-icon"></i>
        <input 
            type="text" 
            v-model="searchTerm" 
            @input="handleSearch" 
            class="form-control form-control-lg text-right-placeholder" 
            id="searchTerm" 
            :placeholder="$t('search')"
        >
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const props = defineProps({
    searchTerm: String,
})

const emit = defineEmits(['update:searchTerm'])

const searchTerm = ref(props.value);

const handleSearch = () => {
    emit('update:searchTerm', searchTerm.value);
};
</script>

<style>
#searchTerm::placeholder {
  text-align: right;
}
.input-container {
  position: relative;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #555; /* Adjust color as needed */
}
</style>