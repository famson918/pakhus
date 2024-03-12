<template>
    <div class="faq-question col-12" @click="toggleCollapse">{{ question }}</div>
    <transition>
        <div v-if="isOpen" class="faq-answer">
            {{ answer }}
        </div>
    </transition>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    question: String,
    answer: String
});

const isOpen = ref(false);

const toggleCollapse = () => {
    isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.faq-item {
    margin-bottom: 10px;
}

.faq-question {
    cursor: pointer;
    font-weight: 500;
    background-color: lightblue;
    border-radius: 5px;
    color: black;
    height: 60px;
    font-size: 25px;
    padding: 10px;
}
.faq-answer{
 border: 1px darkgrey solid;
 padding: 10px;
 border-radius: 5px;
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 1.0s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;   
  transform: translateX(30px);
}
</style>