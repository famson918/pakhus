<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6 mb-2 text-center">
          <p class="fs-1 fw-7">{{ $t('users') }}</p>
        </div>
      </div>
      <div>
        <div class="row justify-content-center">
          <div class="col-6 mb-3">
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
        </div>
        <div class="card mb-5">
          <!--begin::Header-->
          <div class="card-header border-0 pt-5">
            <h3 class="card-title align-items-start flex-column">
              <!-- <span class="card-label fw-bolder fs-3 mb-1">New Arrivals</span>
              <span class="text-muted mt-1 fw-bold fs-7">Over 500 new products</span> -->
            </h3>
            <div class="card-toolbar">
                <router-link :to="{ name: 'users.create' }">
                    <button class="btn btn-sm btn-light-primary">
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
                    <span class="svg-icon svg-icon-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
                        <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
                        </svg>
                    </span>
                    <!--end::Svg Icon-->{{ $t('apply') }}</button>
                </router-link>
            </div>
          </div>
          <!--end::Header-->
          <!--begin::Body-->
          <div class="card-body py-3">
            <!--begin::Table container-->
            <div class="table-responsive">
              <!--begin::Table-->
              <table class="table align-middle gs-0 gy-4">
                <!--begin::Table head-->
                <thead>
                  <tr class="fw-bolder text-muted bg-light">
                    <th class="min-w-125px" v-for="column in columns" :key="column" @click="sortTable(column.value)">{{ column.text }}</th>
                  </tr>
                </thead>
                <!--end::Table head-->
                <!--begin::Table body-->
                <tbody>
                  <tr v-for="item in displayedItems" :key="item.id">
                    <td v-for="column in columns" :key="column">
                        <div class="d-flex align-items-center">
                            <div class="d-flex justify-content-end flex-shrink-0" v-if="column.value === 'actions'">
                                <button @click="updateEdit(item)" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                  <span class="svg-icon svg-icon-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                      <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black" />
                                      <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black" />
                                    </svg>
                                  </span>
                                </button>
                                <button @click="deleteItem(item)" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                  <span class="svg-icon svg-icon-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"></path>
                                        <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"></path>
                                        <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"></path>
                                    </svg>
                                  </span>
                                </button>
                            </div>
                            <div class="d-flex justify-content-start flex-column" v-else>
                               {{item[column.value]}}
                            </div>
                        </div>
                    </td>
                  </tr>
                </tbody>
                <!--end::Table body-->
              </table>
              <!--end::Table-->
            </div>
            <!--end::Table container-->
          </div>
          <!--begin::Body-->
        </div>
        <div class="d-flex justify-content-between">
        <select class="form-select float-left" v-model="itemsPerPage" style="width: 80px;">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
        </select>
          <Pagination
              :data="paginationData"
              class="mb-1 bg-white border border-secondary rounded p-2 float-right"
              :limit="3"
              :keep-length="false"
              :show-disabled="false"
              @pagination-change-page="getResults"
          />
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
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const locale = computed(() => store.state.lang.locale);

const store = useStore()
const  router = useRouter();
const page = ref(5)
const { getUsers, deleteUser} = useUsers()
const users = computed(()=> store.state.users.users)
const itemsPerPage = ref(25)
const currentPage = ref(localStorage.getItem('currentUserPage') ? localStorage.getItem('currentUserPage') : 1);
let paginationData = ref([]);
const columns = ref([]);
const searchTerm = ref('');

onMounted(() => {
    getUsers()
    getResults(currentPage.value)
})

  // Computed property to filter items based on search term
  const filteredItems = computed(() => {
    if (users.value) {
      return users.value.filter(item => {
        return Object.values(item).some(value =>
          String(value).toLowerCase().includes(searchTerm.value.toLowerCase())
        );
      });
    }
  });
  
const getResults = (page) => {
      localStorage.setItem('currentUserPage', page)
      if (!page) {
          page = 1;
      }
      currentPage.value = page;
      paginationData.value = {
        current_page: page,
        data: filteredItems.value,
        from: page,
        last_page: filteredItems.value.length / itemsPerPage.value + 1,
        next_page_url: page < filteredItems.value.length /itemsPerPage.value ? 'http://example.com/page/2' : null,
        per_page: 1,
        prev_page_url: page > 1 ? 'http://example.com/page/1' : null,
        to: page + 1,
        total: filteredItems.value.length / itemsPerPage.value
      };
  }
watchEffect(()=> getResults(currentPage.value))



  const updateColumns = () => {
      columns.value = [ 
        { text: t('id'), value: 'id' },
        { text: t('name'), value: 'name' },
        { text: t('email'), value: 'email' },
        { text: t('cellPhone'), value: 'cellPhone' },
        { text: t('postCode'), value: 'postCode' },
        { text: t('companyName'), value: 'companyName' },
        { text: t('position'), value: 'position' },
        { text: t('actions'), value: 'actions' },
      ];
  };

    // Initialize columns based on initial locale
    updateColumns();
    watchEffect(()=> updateColumns());

  const handleSearch = () => {
    getResults(1);
  }

  let sortDirection = 1;
  let sortedColumn = '';
  
  
  
  // Computed property to sort items based on the column and direction
  const sortedItems = computed(() => {
    if (filteredItems.value) {
      if (sortedColumn) {
        return filteredItems.value.slice().sort((a, b) => {
          return sortDirection * (a[sortedColumn] > b[sortedColumn] ? 1 : -1);
        });
      }
      return filteredItems.value;
    }
  });
  
  // Computed property to paginate items
  const displayedItems = computed(() => {
    if (sortedItems.value) {
      const startIndex = (currentPage.value - 1) * itemsPerPage.value;
      return sortedItems.value.slice(startIndex, startIndex + itemsPerPage.value);
    }
  });
  
  // Function to handle sorting when column header is clicked
  const sortTable = (column) => {
    if (column === sortedColumn) {
      sortDirection *= -1;
    } else {
      sortedColumn = column;
      sortDirection = 1;
    }
  };

  const updateEdit = (item) => {
    router.push({ name: 'users.edit', params: { id: item.id } });
  }

  const deleteItem = (item) => {
    deleteUser(item.id)
  }
</script>
<style>
.input-container {
      position: relative;
  }
  
  .input-container input {
      padding-left: 30px; /* Leave space for the pipeline */
  }
  
  .input-container input:focus::before {
      content: "|"; 
      position: absolute; 
      left: 10px; /* Adjust as needed */
      top: 50%;
      transform: translateY(-50%);
      color: #000; /* Adjust the color as needed */
  }
  /* Add custom styles here */
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
  .page-link {
    border-radius: 50% !important;
  }
  
  /* we will explain what these classes do next! */
  .v-enter-active {
    transition: opacity 0.5s ease;
  }
  
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }</style>
