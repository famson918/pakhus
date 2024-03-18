<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6 mb-2 text-center">
          <p class="fs-1 fw-7">Goods</p>
        </div>
      </div>
      <div v-if="!edit">
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
              <button @click="add" class="btn btn-sm btn-light-primary">
                <span class="svg-icon svg-icon-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
                    <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
                  </svg>
                </span>
                {{ $t('apply') }}
              </button>
              <!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
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
                            <th class="ps-4 min-w-325px rounded-start">{{ $t('productName') }}</th>
                            <th class="min-w-125px">{{ $t('startPrice') }}</th>
                            <th class="min-w-125px">{{ $t('endPrice') }}</th>
                            <th class="min-w-200px">{{ $t('sampleOrderPrice') }}</th>
                            <!-- <th class="min-w-150px">Status</th> -->
                            <th class="min-w-200px text-end rounded-end"></th>
                        </tr>
                    </thead>
                    <!--end::Table head-->
                    <!--begin::Table body-->
                    <tbody>
                        <tr v-for="(good, index) in displayedItems" :key="index" >
                            <td>
                                <div class="d-flex align-items-center">
                                    <div class="symbol symbol-50px me-5">
                                        <img :src="good.picture1" class="" alt="" />
                                    </div>
                                    <div class="d-flex justify-content-start flex-column">
                                        <a href="#" class="text-dark fw-bolder text-hover-primary mb-1 fs-6">{{good.productName}}</a>
                                        <span class="text-muted fw-bold text-muted d-block fs-7">{{ good.productName }}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="#" class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">{{ good.startPrice }}</a>
                                <span class="text-muted fw-bold text-muted d-block fs-7">{{ good.startPrice }}</span>
                            </td>
                            <td>
                                <a href="#" class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">{{ good.endPrice }}</a>
                                <span class="text-muted fw-bold text-muted d-block fs-7">{{ good.endPrice }}</span>
                            </td>
                            <td>
                                <a href="#" class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">{{good.sampleOrderPrice}}</a>
                                <span class="text-muted fw-bold text-muted d-block fs-7">{{ good.sampleOrderPrice }}</span>
                            </td>
                            <!-- <td>
                                <span class="badge badge-light-primary fs-7 fw-bold">Approved</span>
                            </td> -->
                            <td class="text-end">
                                <!-- <a href="#" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                    <span class="svg-icon svg-icon-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="black" />
                                            <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="black" />
                                        </svg>
                                    </span>
                                </a> -->
                                <a v-on:click="editItem(good)" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                    <router-link :to="{ name: 'salesManager.edit', params: { id: good.id } }">
                                        <span class="svg-icon svg-icon-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black" />
                                                <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black" />
                                            </svg>
                                        </span>
                                    </router-link>
                                </a>
                                <a @click="deleteItem(good)" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                    <span class="svg-icon svg-icon-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black" />
                                            <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black" />
                                            <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black" />
                                        </svg>
                                    </span>
                                </a>
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
  import { ref, computed, watch, reactive, watchEffect } from 'vue';
  import { Bootstrap5Pagination } from 'laravel-vue-pagination';
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  import { onMounted } from 'vue';
  import useRules from "@/validation/rules";
  import useGoods from '../../composables/goods'
  

  const store = useStore();
  const  router = useRouter();
  const goods = computed(()=> store.state.good.goods)
  const locale = computed(() => store.state.lang.locale);
  
  const { getGoods, deleteGood, getGood } = useGoods();
  
  const user = computed(()=> store.state.auth.user);
  const edit = ref(false);
  const currentPage = ref(localStorage.getItem('currentSalesManagerPage') ? localStorage.getItem('currentSalesManagerPage') : 1);
  let paginationData = ref([]);
    const role = ref(false);

  
  onMounted(async()=>{
    await getGoods();
    getResults(currentPage.value)
  })
  const searchTerm = ref('');
  const itemsPerPage = ref(25);
  
  
  const handleSearch = () => {
    getResults(1);
  }
  // Computed property to filter items based on search term
  const filteredItems = computed(() => {
    if (goods.value) {
      return goods.value.filter(item => {
        return Object.values(item).some(value =>
          String(value).toLowerCase().includes(searchTerm.value.toLowerCase())
        );
      });
    }
  });
  
  const getResults = (page) => {
      localStorage.setItem('currentSalesManagerPage', page)
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
    watchEffect( async()=>{
        getResults(currentPage.value)
    })

  
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

    const add = () => {
    router.push({ name: 'sales.create'})
    }

    const deleteItem = (item) => {
        deleteGood(item.id);
    }

    const editItem = (item) => {
        router.push({ name: 'salesManager.edit', params: { id: item.id }})
    }
    // Function to handle sorting when column header is clicked
    const sortTable = (column) => {
    if (column === sortedColumn) {
      sortDirection *= -1;
    } else {
      sortedColumn = column;
      sortDirection = 1;
    }
  };
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
  }
  </style>