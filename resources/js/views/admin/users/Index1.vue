<template>
    <div class="container row justify-content-start my-2 p-7">
        <div class="col-md-12">
            <div class="card border-0">
                <div class="card-header p-7">
                    <h5 class="float-start">{{ $t('users') }}</h5>
                    <router-link :to="{ name: 'users.create' }" class="btn btn-primary float-end justify-content-center">
                        {{ $t('add') }}
                    </router-link>
                </div>
                <div class="card-body">
                    <div class="mb-4">
                        <input v-model="search_global"  type="text" :placeholder="$t('search')"
                               class="form-control form-control-lg form-control-solid">
                    </div>
                    <div class="row mb-4">
                        <div class="col-6">
                            <input v-model="search_id" type="text"
                                           class="inline-block mt-1 form-control form-control-lg form-control-solid"
                                           :placeholder="$t('filterById')">
                        </div>
                        <div class="col-6">
                            <input v-model="search_title" type="text"
                                           class="inline-block mt-1 form-control form-control-lg form-control-solid"
                                           :placeholder="$t('filterByTitle')">
                        </div>
                    </div>
                    <div class="table-responsive bordered table align-middle gs-0 gy-4">
                        <table class="table">
                            <thead>
                            <tr class="fw-bolder text-muted bg-light">
                                <th class="px-6 py-3 text-start">
                                    <div class="flex flex-row"
                                         @click="updateOrdering('id')">
                                        <div class="font-medium text-uppercase"
                                             :class="{ 'font-bold text-blue-600': orderColumn === 'id' }">
                                            ID
                                        </div>
                                        <div class="select-none">
                                <span :class="{
                                  'text-blue-600': orderDirection === 'asc' && orderColumn === 'id',
                                  'hidden': orderDirection !== '' && orderDirection !== 'asc' && orderColumn === 'id',
                                }">&uarr;</span>
                                            <span :class="{
                                  'text-blue-600': orderDirection === 'desc' && orderColumn === 'id',
                                  'hidden': orderDirection !== '' && orderDirection !== 'desc' && orderColumn === 'id',
                                }">&darr;</span>
                                        </div>
                                    </div>
                                </th>
                                <th class="px-6 py-3 text-left">
                                    <div class="flex flex-row"
                                         @click="updateOrdering('title')">
                                        <div class="font-medium text-uppercase"
                                             :class="{ 'font-bold text-blue-600': orderColumn === 'title' }">
                                            {{ $t('name') }}
                                        </div>
                                        <div class="select-none">
                                <span :class="{
                                  'text-blue-600': orderDirection === 'asc' && orderColumn === 'title',
                                  'hidden': orderDirection !== '' && orderDirection !== 'asc' && orderColumn === 'title',
                                }">&uarr;</span>
                                            <span :class="{
                                  'text-blue-600': orderDirection === 'desc' && orderColumn === 'title',
                                  'hidden': orderDirection !== '' && orderDirection !== 'desc' && orderColumn === 'title',
                                }">&darr;</span>
                                        </div>
                                    </div>
                                </th>
                                <th class="px-6 py-3 text-left">
                                    <div class="flex flex-row"
                                         @click="updateOrdering('email')">
                                        <div class="font-medium text-uppercase"
                                             :class="{ 'font-bold text-blue-600': orderColumn === 'email' }">
                                            {{ $t('email') }}
                                        </div>
                                        <div class="select-none">
                                <span :class="{
                                  'text-blue-600': orderDirection === 'asc' && orderColumn === 'email',
                                  'hidden': orderDirection !== '' && orderDirection !== 'asc' && orderColumn === 'email',
                                }">&uarr;</span>
                                            <span :class="{
                                  'text-blue-600': orderDirection === 'desc' && orderColumn === 'email',
                                  'hidden': orderDirection !== '' && orderDirection !== 'desc' && orderColumn === 'email',
                                }">&darr;</span>
                                        </div>
                                    </div>
                                </th>
                                <th class="px-6 py-3 text-left">
                                    <div class="flex flex-row"
                                         @click="updateOrdering('postCode')">
                                        <div class="font-medium text-uppercase"
                                             :class="{ 'font-bold text-blue-600': orderColumn === 'postCode' }">
                                            {{ $t('postCode') }}
                                        </div>
                                        <div class="select-none">
                                <span :class="{
                                  'text-blue-600': orderDirection === 'asc' && orderColumn === 'postCode',
                                  'hidden': orderDirection !== '' && orderDirection !== 'asc' && orderColumn === 'postCode',
                                }">&uarr;</span>
                                            <span :class="{
                                  'text-blue-600': orderDirection === 'desc' && orderColumn === 'postCode',
                                  'hidden': orderDirection !== '' && orderDirection !== 'desc' && orderColumn === 'postCode',
                                }">&darr;</span>
                                        </div>
                                    </div>
                                </th>
                                <th class="px-6 py-3 text-left">
                                    <div class="flex flex-row"
                                         @click="updateOrdering('cellPhone')">
                                        <div class="font-medium text-uppercase"
                                             :class="{ 'font-bold text-blue-600': orderColumn === 'cellPhone' }">
                                            {{ $t('cellPhone') }}
                                        </div>
                                        <div class="select-none">
                                <span :class="{
                                  'text-blue-600': orderDirection === 'asc' && orderColumn === 'cellPhone',
                                  'hidden': orderDirection !== '' && orderDirection !== 'asc' && orderColumn === 'cellPhone',
                                }">&uarr;</span>
                                            <span :class="{
                                  'text-blue-600': orderDirection === 'desc' && orderColumn === 'cellPhone',
                                  'hidden': orderDirection !== '' && orderDirection !== 'desc' && orderColumn === 'cellPhone',
                                }">&darr;</span>
                                        </div>
                                    </div>
                                </th>
                                <th class="px-6 py-3 text-left">
                                    <div class="flex flex-row"
                                         @click="updateOrdering('companyName')">
                                        <div class="font-medium text-uppercase"
                                             :class="{ 'font-bold text-blue-600': orderColumn === 'companyName' }">
                                            {{ $t('companyName') }}
                                        </div>
                                        <div class="select-none">
                                <span :class="{
                                  'text-blue-600': orderDirection === 'asc' && orderColumn === 'companyName',
                                  'hidden': orderDirection !== '' && orderDirection !== 'asc' && orderColumn === 'companyName',
                                }">&uarr;</span>
                                            <span :class="{
                                  'text-blue-600': orderDirection === 'desc' && orderColumn === 'companyName',
                                  'hidden': orderDirection !== '' && orderDirection !== 'desc' && orderColumn === 'companyName',
                                }">&darr;</span>
                                        </div>
                                    </div>
                                </th>
                                <th class="px-6 py-3 text-left">
                                    <div class="flex flex-row"
                                         @click="updateOrdering('position')">
                                        <div class="font-medium text-uppercase"
                                             :class="{ 'font-bold text-blue-600': orderColumn === 'position' }">
                                            {{ $t('position') }}
                                        </div>
                                        <div class="select-none">
                                <span :class="{
                                  'text-blue-600': orderDirection === 'asc' && orderColumn === 'position',
                                  'hidden': orderDirection !== '' && orderDirection !== 'asc' && orderColumn === 'position',
                                }">&uarr;</span>
                                            <span :class="{
                                  'text-blue-600': orderDirection === 'desc' && orderColumn === 'position',
                                  'hidden': orderDirection !== '' && orderDirection !== 'desc' && orderColumn === 'position',
                                }">&darr;</span>
                                        </div>
                                    </div>
                                </th>
                                <th class="px-6 py-3 bg-gray-50 text-left">
                                    <div class="flex flex-row items-center justify-between cursor-pointer"
                                         @click="updateOrdering('created_at')">
                                        <div class="leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                             :class="{ 'font-bold text-blue-600': orderColumn === 'created_at' }">
                                            {{$t('date')}}
                                        </div>
                                        <div class="select-none">
                                <span :class="{
                                  'text-blue-600': orderDirection === 'asc' && orderColumn === 'created_at',
                                  'hidden': orderDirection !== '' && orderDirection !== 'asc' && orderColumn === 'created_at',
                                }">&uarr;</span>
                                            <span :class="{
                                  'text-blue-600': orderDirection === 'desc' && orderColumn === 'created_at',
                                  'hidden': orderDirection !== '' && orderDirection !== 'desc' && orderColumn === 'created_at',
                                }">&darr;</span>
                                        </div>
                                    </div>
                                </th>
                                <th class="px-6 py-3 bg-gray-50 text-left">
                                    {{ $t('actions') }}
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="post in users" :key="post.id">
                                <td class="px-6 py-4 text-sm">
                                    {{ post.id }}
                                </td>
                                <td class="px-6 py-4 text-sm">
                                    {{ post.name }}
                                </td>
                                <td class="px-6 py-4 text-sm">
                                    {{ post.email }}
                                </td>
                                <td class="px-6 py-4 text-sm">
                                    {{ post.postCode }}
                                </td>
                                <td class="px-6 py-4 text-sm">
                                    {{ post.cellPhone }}
                                </td>
                                <td class="px-6 py-4 text-sm">
                                    {{ post.companyName }}
                                </td>
                                <td class="px-6 py-4 text-sm">
                                    {{ post.position }}
                                </td>
                                <td class="px-6 py-4 text-sm">
                                    {{ post.created_at }}
                                </td>
                                <td class="px-6 py-4 text-sm">
                                    <router-link 
                                                 :to="{ name: 'users.edit', params: { id: post.id } }"
                                                 class="badge bg-primary">{{ $t('edit') }}
                                    </router-link>
                                    <a href="#"  @click.prevent="deleteUser(post.id)"
                                       class="ms-2 badge bg-danger">{{ $t('remove') }}</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer" v-if="paginationData">
                    <Pagination :data="users" :limit="3"
                        @pagination-change-page="(page) => getUsers(page, search_id, search_title, search_global, orderColumn, orderDirection)"
                        class="mt-4"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted, watch, watchEffect, computed} from "vue";
import { Bootstrap5Pagination } from 'laravel-vue-pagination';
import useUsers from "../../../composables/users";
import {useAbility} from '@casl/vue'
import { useStore } from 'vuex';

const store = useStore();
const search_id = ref('')
const search_title = ref('')
const search_global = ref('')
const page = ref(5)
const orderColumn = ref('created_at')
const orderDirection = ref('desc')
const { getUsers, deleteUser} = useUsers()
const users = computed(()=> store.state.users.users);
const {can} = useAbility()
const itemsPerPage = 5
const currentPage = ref(localStorage.getItem('currentUserPage') ? localStorage.getItem('currentUserPage') : 1);
let paginationData = ref([]);

onMounted(() => {
    getUsers()
    // if(users.data.length > 0) {
    //     getResults()
    // }
})
const updateOrdering = (column) => {
    orderColumn.value = column;
    orderDirection.value = (orderDirection.value === 'asc') ? 'desc' : 'asc';
    getUsers(
        1,
        search_id.value,
        search_title.value,
        search_global.value,
        orderColumn.value,
        orderDirection.value
    );
}
watch(search_id, (current, previous) => {
    getUsers(
        1,
        current,
        search_title.value,
        search_global.value
    )
})
watch(search_title, (current, previous) => {
    getUsers(
        1,
        search_id.value,
        current,
        search_global.value
    )
})
watch(search_global, _.debounce((current, previous) => {
    getUsers(
        1,
        search_id.value,
        search_title.value,
        current
    )
}, 200))

const getResults = (page) => {
    console.log('users=====  ', users.value)
      localStorage.setItem('currentUserPage', page)
      if (!page) {
          page = 1;
      }
      currentPage.value = page;
      paginationData.value = {
        current_page: page,
        data: users.value,
        from: page,
        last_page: users.value.length / itemsPerPage + 1,
        next_page_url: page < users.value.length /itemsPerPage ? 'http://example.com/page/2' : null,
        per_page: 1,
        prev_page_url: page > 1 ? 'http://example.com/page/1' : null,
        to: page + 1,
        total: users.value.length / itemsPerPage
      };
  }
watch(users, getResults(currentPage.value))
</script>
