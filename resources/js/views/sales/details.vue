<template>
    <div class="container card p-7" style="max-height: 100vh; overflow-y: auto;">
        <div class="row" v-if="good">
            <div class="col-md-6">
                <div class="scrollable-content">
                    <h1>{{ good.productName }}</h1>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 p-2">
                                <img v-if="image1" :src="image1" class="img-fluid" alt="Large Image">
                            </div>
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-6 p-2">
                                        <img @click="changeURL(good.media[0])" :src="good.media[0] ? good.media[0].original_url : ''" class="img-fluid" alt="Image 1">
                                    </div>
                                    <div class="col-6 p-2">
                                        <img  @click="changeURL(good.media[1])" :src="good.media[1] ? good.media[1].original_url : ''" class="img-fluid" alt="Image 2">
                                    </div>
                                    <div class="col-6 p-2">
                                        <img  @click="changeURL(good.media[2])" :src="good.media[2] ? good.media[2].original_url : ''" class="img-fluid" alt="Image 3">
                                    </div>
                                    <div class="col-6 p-2">
                                        <img  @click="changeURL(good.media[3])" :src="good.media[3] ? good.media[3].original_url : ''" class="img-fluid" alt="Image 4">
                                    </div>
                                    <div class="col-6 p-2">
                                        <img @click="changeURL(good.media[4])" :src="good.media[4] ? good.media[4].original_url : ''" class="img-fluid" alt="Image 5">
                                    </div>
                                    <div class="col-6 p-2">
                                        <img @click="changeURL(good.media[5])" :src="good.media[5] ? good.media[5].original_url : ''" class="img-fluid" alt="Image 6">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <textarea :value="good.productDescription" class="form-control p-2" id="exampleTextarea" rows="20"></textarea>   
                </div>
            </div>
            <div class="col-md-6">
                <div class="fixed-content p-5" style="position: sticky; top: 0;">
                    <!-- Fixed Content Goes Here -->
                    <h1>{{good.startPrice}}RMB ~ {{good.endPrice}}RMB</h1>
                    <h3 class="mt-5">{{ $t('minimumOrderQuantity') }}: {{good.minimumOrderQuantity}}</h3>
                    <h3 class="mt-5"><i class="fa-solid fa-play"></i>生产所需时间</h3>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col" style="background-color: lightblue;">{{ $t('amountperset') }}</th>
                            <th scope="col" style="background-color: lightblue;">{{ good.time11 }}</th>
                            <th scope="col" style="background-color: lightblue;">{{ good.time12 }}</th>
                            <th scope="col" style="background-color: lightblue;">{{ good.time13 }}</th>
                            <th scope="col" style="background-color: lightblue;">>{{ good.time14 }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">{{ $t('predicttime') }}</th>
                            <td>
                                <input v-model="good.time1" type="text" class="form-control" id="inputPassword" readonly>
                            </td>
                            <td>
                                <input v-model="good.time2" type="text" class="form-control" id="inputPassword" readonly>
                            </td>
                            <td>
                                <input v-model="good.time3" type="text" class="form-control" id="inputPassword" readonly>
                            </td>
                            <td>
                                <input v-model="good.time4" type="text" class="form-control" id="inputPassword" readonly>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 class="mt-5"><i class="fa-solid fa-play"></i>{{ $t('customization') }}</h3>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col" style="background-color: lightblue;">{{ $t('amountperset') }}</th>
                            <th scope="col" style="background-color: lightblue;">{{ good.option11 }}</th>
                            <th scope="col" style="background-color: lightblue;">>{{ good.option12 }}</th>
                            <th scope="col" style="background-color: lightblue;">>{{ good.option13 }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">{{ $t('optional') }}</th>
                            <td>
                                <input v-model="good.option1" type="text" class="form-control" id="inputPassword" readonly>
                            </td>
                            <td>
                                <input v-model="good.option2" type="text" class="form-control" id="inputPassword" readonly>
                            </td>
                            <td>
                                <input v-model="good.option3" type="text" class="form-control" id="inputPassword" readonly>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 class="mt-5"><i class="fa-solid fa-play"></i>订购样品</h3>
                    <p>{{ $t('maximumNumberOfSampleOrders') }}: {{ good.maximumNumberOfSampleOrders }}</p>
                    <p>{{ $t('sampleOrderPrice') }}: {{good.sampleOrderPrice}}元/套餐</p>
                    <p>{{ $t('sampleOrderDeliveryTime') }}: {{good.sampleOrderDeliveryTime}}{{ $t('withinADay') }}</p>
                    <button @click="openModal" type="button" class="btn btn-primary" style="float: right;">{{ $t('consult') }}</button>
                    <div :class="{ 'modal1': true, 'show': isModalOpen }">
                        <div class="modal-content1">
                        <div class="modal-header" style="background-color: lightblue;">
                            <h5 class="modal-title" id="exampleModalLabel">{{ $t('contactTitle') }}</h5>
                            <button  @click="closeModal" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <p class="d-flex justify-content-center fs-6">
                                    {{ $t('contactText') }}
                                </p>
                            </div>
                            <div class="row">
                                <div class="d-flex col-6 border-end justify-content-center" >
                                    <div class="row">
                                        <div class="col-12 d-flex justify-content-center">
                                            <i class="fa-regular fa-envelope" style="font-size: 100px; padding-top  : 100px;"></i>
                                        </div>
                                        <div class="col-12 d-flex justify-content-center">
                                            <p class="fs-1">Pakhus@163.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex col-6 border-end justify-content-center">
                                    <div class="row">
                                        <div class="col-12 d-flex justify-content-center">
                                            <i class="fa-regular fa-comment" style="font-size: 100px; padding-top  : 100px;"></i>
                                        </div>
                                        <div class="col-12 d-flex justify-content-center">
                                            <a class="fs-1 text-truncate-link" href="http://pf.kakao.com/_GIsJG/chat" target="_blank" >http://pf.kakao.com/_GIsJG/chat</a>
                                        </div>
                                        <div class="col-12 d-flex justify-content-center">
                                            <img src="../../../../public/images/barcode.png">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from "vue-router";
import { useStore } from 'vuex';
const good = ref();
const route = useRoute()
const store = useStore();
const router = useRouter();
const image1 = ref();
const authenticated = computed(()=> store.state.auth.authenticated)
const isModalOpen = ref(false);

function openModal() {
    if (authenticated.value) {
      isModalOpen.value = true;
  } else {
    router.push({ name: 'auth.login' })
  }
}

function closeModal() {
    isModalOpen.value = false;
}

onMounted(async () => {
    console.log('routedd', route)
    await axios.get('/api/get-good/' + route.params.id).then(({ data }) => {
        console.log('data', data)
        good.value = data;
        image1.value = data.media[0].original_url
    })
})

const changeURL = (item) => {
    console.log('item', item.original_url)
    image1.value = item.original_url
    console.log('image1', image1.value)
}
</script>
<style>
.modal1 {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
}

.modal-content1 {
  background-color: white;
  margin: 10% auto;
  border: 1px solid #888;
  width: 70%;
}

.show {
  display: block;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.text-truncate-link {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 768px) {
  .text-truncate-link {
    max-width: 150px; /* Adjust as needed for mobile */
  }
}
</style>