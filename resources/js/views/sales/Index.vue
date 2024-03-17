<template>
    <div class="container card p-7">
        <div class="row justify-content-center">
        <div class="col-12 mb-2 text-center">
            <p class="fs-1 fw-7">{{ $t('wantToSell') }}</p>
        </div>
        <div class="col-12 mb-2 text-center">
            <p class="fs-4 fw-7">{{ $t('explanation') }}</p>
        </div>
        </div>
        <div class="d-flex">
            <div v-for="good in displayedItems" :key="good" class="card m-2 shadow-sm" style="width: 18rem; border-radius: 5%; text-align: center;">
                <img :src="good.picture1" height="200" class="card-img-to p-4" alt="...">
                   <p class="fs-3 fw-8">{{ good.productName }}</p>
                   <p class="fs-3 fw-8">{{ good.startPrice}}$ ~  {{ good.endPrice}}$</p>
                   <p class="fs-3 fw-8">Min Order: {{ good.minimumOrderQuantity }}</p>
                    <!-- <button @click="goDetails(good)" class="btn btn-primary m-3">{{ $t('viewDetails') }}</button> -->
                    <router-link :to="{ name: 'sales.details', params: { id: good.id } }"
                                    class="btn btn-primary m-3">{{ $t('viewDetails') }}
                    </router-link>
            </div>
        </div>
            <Bootstrap5Pagination
                :data="paginationData"
                class="mb-1 justify-content-center mt-5"
                :limit="3"
                :keep-length="false"
                :show-disabled="false"
                @pagination-change-page="getResults"
            />
    </div>
</template>
<script setup>
import { onMounted, computed, watchEffect } from 'vue';
import useGoods from '../../composables/goods'
import { Bootstrap5Pagination } from 'laravel-vue-pagination';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const { getGoods, deleteGood, getGood } = useGoods();

const store = useStore();
const router = useRouter();

const goods = computed(()=> store.state.good.goods)
const user = computed(()=> store.state.auth.user)
let paginationData = ref([]);
const currentPage = ref(localStorage.getItem('currentSalesPage')? localStorage.getItem('currentSalesPage') : 1);
const role = ref(false);

onMounted(async()=> {
    console.log('goods :>> ', goods.value);
    await getGoods();
    getResults(currentPage.value);
    checkRole(user);
})

const itemsPerPage = role.value ? 4 : 5;

const getResults = (page) => {
    localStorage.setItem('currentSalesPage', page);
    if (!page) {
        page = 1;
    }
    let data = goods.value ? goods.value : []
    currentPage.value = page;
    paginationData.value = {
        current_page: page,
        data: data,
        from: page,
        last_page: data.length / itemsPerPage + 1,
        next_page_url: page < data.length /itemsPerPage ? '' : null,
        per_page: 1,
        prev_page_url: page > 1 ? '' : null,
        to: page + 1,
        total: data.length / itemsPerPage
    };
}

// Computed property to paginate items
const displayedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  let data = goods.value ? goods.value : []
  return data.slice(startIndex, startIndex + itemsPerPage);
});


const getCreating = () => {
    router.push({ name: 'sales.create'})
}

const removeGood = async (item) => {
    await deleteGood(item.id)
    getResults(1)
}


const checkRole = (user) => {
    const inputString = user.value.role ? user.value.role : '';
    const isAdmin = inputString.toLowerCase().includes("admin");
    if (isAdmin) {
        role.value = true
    } else {
        role.value = false
    }
}
</script>
<style>
.page-link {
  border-radius: 50% !important;
}

</style>