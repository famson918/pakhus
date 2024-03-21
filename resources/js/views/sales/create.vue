<template>
    <div class="container card p-7" style="max-height: 100vh; overflow-y: auto;">
        <form @submit.prevent="submitForm">
            <div class="mb-3 row">
                <div class="row col-6">
                    <label for="inputPassword" class="col-sm-4 col-form-label">{{ $t('productName') }}</label>
                    <div class="col-sm-8">
                        <input v-model="goods.productName" type="text" class="form-control" id="inputPassword">
                        <div class="text-danger mt-1">
                            {{ errors.productName }}
                        </div>
                        <div class="text-danger mt-1">
                            <div v-for="message in validationErrors?.productName">
                                {{ message }}
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
            <div class="mb-3 row">
                <div class="row col-6">
                    <label for="inputPassword" class="col-sm-4 col-form-label">{{ $t('price') }}</label>
                    <div class="col-sm-4">
                        <input v-model="goods.startPrice" type="text" class="form-control" id="inputPassword">
                        <div class="text-danger mt-1">
                            {{ errors.startPrice }}
                        </div>
                        <div class="text-danger mt-1">
                            <div v-for="message in validationErrors?.startPrice">
                                {{ message }}
                            </div>
                        </div>
                    </div>
                    <label for="inputPassword" class="col-sm-2 col-form-label">{{ $t('yuan') }}</label>
                </div>       
                <div class="row col-6">
                    <label for="inputPassword" class="col-sm-2 col-form-label">~</label>
                    <label for="inputPassword" class="col-sm-4 col-form-label"> {{ $t('bigPrice') }}</label>
                    <div class="col-sm-4">
                        <input v-model="goods.endPrice" type="text" class="form-control" id="inputPassword">
                        <div class="text-danger mt-1">
                            {{ errors.endPrice }}
                        </div>
                        <div class="text-danger mt-1">
                            <div v-for="message in validationErrors?.endPrice">
                                {{ message }}
                            </div>
                        </div>
                    </div>
                    <label for="inputPassword" class="col-sm-2 col-form-label">{{ $t('yuan') }}</label>
                </div>       
            </div>
            <div class="mb-3 row">
                <div class="row col-6">
                    <label for="inputPassword" class="col-sm-4 col-form-label">{{ $t('minimumOrderQuantity') }}</label>
                    <div class="col-sm-8">
                        <input v-model="goods.minimumOrderQuantity" type="text" class="form-control" id="inputPassword">
                        <div class="text-danger mt-1">
                            {{ errors.minimumOrderQuantity }}
                        </div>
                        <div class="text-danger mt-1">
                            <div v-for="message in validationErrors?.minimumOrderQuantity">
                                {{ message }}
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
            <div class="mb-3 row">
                <div class="row col-12">
                    <label for="inputPassword" class="col-sm-2 col-form-label">{{ $t('timeRequired') }}</label>
                    <div class="col-sm-10">
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col" style="background-color: lightblue; min-width: 80px;">{{ $t('amountperset') }}</th>
                            <th scope="col" style="background-color: lightblue;">
                                <input v-model="goods.time11" type="text" class="form-control" id="inputPassword">
                                <div class="text-danger mt-1">
                                    {{ errors.time11 }}
                                </div>
                                <div class="text-danger mt-1">
                                    <div v-for="message in validationErrors?.time11">
                                        {{ message }}
                                    </div>
                                </div>
                            </th>
                            <th scope="col" style="background-color: lightblue;">
                                <input v-model="goods.time12" type="text" class="form-control" id="inputPassword">
                                <div class="text-danger mt-1">
                                    {{ errors.time12 }}
                                </div>
                                <div class="text-danger mt-1">
                                    <div v-for="message in validationErrors?.time12">
                                        {{ message }}
                                    </div>
                                </div>
                            </th>
                            <th scope="col" style="background-color: lightblue;">
                                <input v-model="goods.time13" type="text" class="form-control" id="inputPassword">
                                <div class="text-danger mt-1">
                                    {{ errors.time13 }}
                                </div>
                                <div class="text-danger mt-1">
                                    <div v-for="message in validationErrors?.time13">
                                        {{ message }}
                                    </div>
                                </div>
                            </th>
                            <th scope="col" style="background-color: lightblue; padding-right: 14px;">
                                <input v-model="goods.time14" type="text" class="form-control" id="inputPassword">
                                <div class="text-danger mt-1">
                                    {{ errors.time14 }}
                                </div>
                                <div class="text-danger mt-1">
                                    <div v-for="message in validationErrors?.time14">
                                        {{ message }}
                                    </div>
                                </div>
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row" style="min-width: 90px;">{{ $t('predicttime') }}</th>
                            <td>
                                <input v-model="goods.time1" type="text" class="form-control" id="inputPassword">
                                <div class="text-danger mt-1">
                                    {{ errors.time1 }}
                                </div>
                                <div class="text-danger mt-1">
                                    <div v-for="message in validationErrors?.time1">
                                        {{ message }}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <input v-model="goods.time2" type="text" class="form-control" id="inputPassword">
                                <div class="text-danger mt-1">
                                    {{ errors.time2 }}
                                </div>
                                <div class="text-danger mt-1">
                                    <div v-for="message in validationErrors?.time2">
                                        {{ message }}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <input v-model="goods.time3" type="text" class="form-control" id="inputPassword">
                                <div class="text-danger mt-1">
                                    {{ errors.time3 }}
                                </div>
                                <div class="text-danger mt-1">
                                    <div v-for="message in validationErrors?.time3">
                                        {{ message }}
                                    </div>
                                </div>
                            </td>
                            <td style="padding-right: 14px;">
                                <input v-model="goods.time4" type="text" class="form-control" id="inputPassword">
                                <div class="text-danger mt-1">
                                    {{ errors.time4 }}
                                </div>
                                <div class="text-danger mt-1">
                                    <div v-for="message in validationErrors?.time4">
                                        {{ message }}
                                    </div>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>       
            </div>
            <div class="mb-3 row">
                <div class="row col-12">
                    <label for="inputPassword" class="col-sm-4 col-form-label">{{ $t('customization') }}</label>
                    <div class="col-sm-8">
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col" style="background-color: lightblue; min-width: 80px;">{{ $t('amountperset') }}</th>
                            <th scope="col" style="background-color: lightblue;">
                                <input v-model="goods.option11" type="text" class="form-control" id="inputPassword">
                                <div class="text-danger mt-1">
                                    {{ errors.option11 }}
                                </div>
                                <div class="text-danger mt-1">
                                    <div v-for="message in validationErrors?.option11">
                                        {{ message }}
                                    </div>
                                </div>
                            </th>
                            <th scope="col" style="background-color: lightblue;">
                                <input v-model="goods.option12" type="text" class="form-control" id="inputPassword">
                                <div class="text-danger mt-1">
                                    {{ errors.option12 }}
                                </div>
                                <div class="text-danger mt-1">
                                    <div v-for="message in validationErrors?.option12">
                                        {{ message }}
                                    </div>
                                </div>
                            </th>
                            <th scope="col" style="background-color: lightblue; padding-right: 14px;">
                                <input v-model="goods.option13" type="text" class="form-control" id="inputPassword">
                                <div class="text-danger mt-1">
                                    {{ errors.option13 }}
                                </div>
                                <div class="text-danger mt-1">
                                    <div v-for="message in validationErrors?.option13">
                                        {{ message }}
                                    </div>
                                </div>
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row" style="min-width: 80px;">{{ $t('optional') }}</th>
                            <td>
                                <input v-model="goods.option1" type="text" class="form-control" id="inputPassword">
                                <div class="text-danger mt-1">
                                    {{ errors.option1 }}
                                </div>
                                <div class="text-danger mt-1">
                                    <div v-for="message in validationErrors?.option1">
                                        {{ message }}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <input v-model="goods.option2" type="text" class="form-control" id="inputPassword">
                                <div class="text-danger mt-1">
                                    {{ errors.option2 }}
                                </div>
                                <div class="text-danger mt-1">
                                    <div v-for="message in validationErrors?.option2">
                                        {{ message }}
                                    </div>
                                </div>
                            </td>
                            <td style="padding-right: 14px;">
                                <input v-model="goods.option3" type="text" class="form-control" id="inputPassword">
                                <div class="text-danger mt-1">
                                    {{ errors.option3 }}
                                </div>
                                <div class="text-danger mt-1">
                                    <div v-for="message in validationErrors?.option3">
                                        {{ message }}
                                    </div>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>       
            </div>
            <div class="mb-3 row">
                <div class="row col-6">
                    <label for="inputPassword" class="col-sm-4 col-form-label">{{ $t('maximumNumberOfSampleOrders') }}</label>
                    <div class="col-sm-8">
                        <input v-model="maximumNumberOfSampleOrders" type="text" class="form-control" id="inputPassword">
                        <div class="text-danger mt-1">
                            {{ errors.maximumNumberOfSampleOrders }}
                        </div>
                        <div class="text-danger mt-1">
                            <div v-for="message in validationErrors?.maximumNumberOfSampleOrders">
                                {{ message }}
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
            <div class="mb-3 row">
                <div class="row col-6">
                    <label for="inputPassword" class="col-sm-4 col-form-label">{{ $t('sampleOrderPrice') }}</label>
                    <div class="col-sm-8">
                        <input v-model="sampleOrderPrice" type="text" class="form-control" id="inputPassword">
                        <div class="text-danger mt-1">
                            {{ errors.sampleOrderPrice }}
                        </div>
                        <div class="text-danger mt-1">
                            <div v-for="message in validationErrors?.sampleOrderPrice">
                                {{ message }}
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
            <div class="mb-3 row">
                <div class="row col-6">
                    <label for="inputPassword" class="col-sm-4 col-form-label">{{ $t('sampleOrderDeliveryTime') }}</label>
                    <div class="col-sm-5">
                        <input v-model="sampleOrderDeliveryTime" type="text" class="form-control" id="inputPassword">
                        <div class="text-danger mt-1">
                            {{ errors.sampleOrderDeliveryTime }}
                        </div>
                        <div class="text-danger mt-1">
                            <div v-for="message in validationErrors?.sampleOrderDeliveryTime">
                                {{ message }}
                            </div>
                        </div>
                    </div>
                    <label for="inputPassword" class="col-sm-3 col-form-label">{{ $t('withinADay') }}</label>
                </div>       
            </div>
            <div class="mb-3 row">
                <div class="row col-6 mb-3">
                    <label for="inputPassword" class="col-sm-4 col-form-label">#1 {{$t('uploadPictures')}}</label>
                    <div class="col-sm-8">
                        <UploadInput :buttonLabel="attachment" @fileSelected="handleFileSelected1" :error="errors.file1" />
                    </div>
                </div>       
                <div class="row col-6 mb-3">
                    <label for="inputPassword" class="col-sm-4 col-form-label">#2 {{$t('uploadPictures')}}</label>
                    <div class="col-sm-8">
                        <UploadInput :buttonLabel="attachment" @fileSelected="handleFileSelected2" :error="errors.file2" />
                    </div>
                </div>       
                <div class="row col-6 mb-3">
                    <label for="inputPassword" class="col-sm-4 col-form-label">#3 {{$t('uploadPictures')}}</label>
                    <div class="col-sm-8">
                        <UploadInput :buttonLabel="attachment" @fileSelected="handleFileSelected3"  :error="errors.file3" />
                    </div>
                </div>       
                <div class="row col-6 mb-3">
                    <label for="inputPassword" class="col-sm-4 col-form-label">#4 {{$t('uploadPictures')}}</label>
                    <div class="col-sm-8">
                        <UploadInput :buttonLabel="attachment" @fileSelected="handleFileSelected4" :error="errors.file4"/>
                    </div>
                </div>       
                <div class="row col-6 mb-3">
                    <label for="inputPassword" class="col-sm-4 col-form-label">#5 {{$t('uploadPictures')}}</label>
                    <div class="col-sm-8">
                        <UploadInput :buttonLabel="attachment" @fileSelected="handleFileSelected5" :error="errors.file5" />
                    </div>
                </div>       
                <div class="row col-6 mb-3">
                    <label for="inputPassword" class="col-sm-4 col-form-label">#6 {{$t('uploadPictures')}}</label>
                    <div class="col-sm-8">
                        <UploadInput :buttonLabel="attachment" @fileSelected="handleFileSelected6" :error="errors.file6" />
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <div class="row col-12">
                    <label for="inputPassword" class="col-sm-12 col-form-label">{{$t('productDescription')}}</label>
                    <div class="col-sm-12">
                        <textarea v-model="goods.productDescription" class="form-control" id="exampleFormControlTextarea1" rows="15"></textarea>
                    </div>
                    <div class="text-danger mt-1">
                        {{ errors.productDescription }}
                    </div>
                    <div class="text-danger mt-1">
                        <div v-for="message in validationErrors?.productDescription">
                            {{ message }}
                        </div>
                    </div>
                </div>       
            </div>
            <div class="mb-3 row ">
                <div class="row justify-content-end">
                    <div class="col-sm-3">
                        <a @click="goGoods" class="btn btn-light btn-active-light-primary me-2" style="width: 100%;" >
                            <span >{{ $t('cancel') }}</span>
                        </a>
                    </div>
                    <div class="col-sm-3">
                        <button :disabled="isLoading" class="btn btn-primary" style="width: 100%;" >
                            <div v-show="isLoading" class=""></div>
                            <span v-if="isLoading">{{ $t('processing') }}</span>
                            <span v-else>{{ $t('registerGoods') }}</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref, computed, watch, reactive, onMounted } from 'vue';
import UploadInput from '../../components/UploadInput.vue';
import { useStore } from 'vuex';
import { defineRule, useField, useForm } from "vee-validate";
import useGoods from '../../composables/goods';
import useRules from "@/validation/rules";
import { useRouter } from 'vue-router';
import { watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { required  }  = useRules();
defineRule('required', required)

const store = useStore();
const router = useRouter()

const locale = computed(() => store.state.lang.locale);
let attachment = ref();

const updateText = () => {
    attachment.value = t('upload');
}
updateText();

watchEffect(() => {updateText()})
const schema = {
    productName: 'required',
    startPrice: 'required',
    endPrice: 'required',
    minimumOrderQuantity: 'required',
    maximumNumberOfSampleOrders: 'required',
    sampleOrderPrice: 'required',
    sampleOrderDeliveryTime: 'required',
    productDescription: 'required',    
    time1: 'required',
    time2:'required',
    time3:'required',
    time4:'required',
    time11:'required',
    time12:'required',
    time13:'required',
    time14:'required',
    option1: 'required',
    option2:'required',
    option3:'required',
    option11:'required',
    option12:'required',
    option13:'required',
    file1: 'required',
    file2: 'required',
    file3: 'required',
    file4: 'required',
    file5: 'required',
    file6: 'required',
    productDescription: 'required',
}
const { validate, errors } = useForm({validationSchema: schema})
const { value: productName } = useField("productName", null, { initialValue: ''})
const { value: startPrice } = useField("startPrice", null, { initialValue: ''})
const { value: endPrice } = useField("endPrice", null, { initialValue: ''})
const { value: minimumOrderQuantity } = useField("minimumOrderQuantity", null, { initialValue: ''})
const { value: maximumNumberOfSampleOrders } = useField("maximumNumberOfSampleOrders", null, { initialValue: ''})
const { value: sampleOrderPrice } = useField("sampleOrderPrice", null, { initialValue: ''})
const { value: sampleOrderDeliveryTime } = useField("sampleOrderDeliveryTime", null, { initialValue: ''})
const { value: productDescription } = useField("productDescription", null, { initialValue: ''})
const { value: time1 } = useField("time1", null, { initialValue: ''})
const { value: time2 } = useField("time2", null, { initialValue: ''})
const { value: time3 } = useField("time3", null, { initialValue: ''})
const { value: time4 } = useField("time4", null, { initialValue: ''})
const { value: time11 } = useField("time11", null, { initialValue: ''})
const { value: time12 } = useField("time12", null, { initialValue: ''})
const { value: time13 } = useField("time13", null, { initialValue: ''})
const { value: time14 } = useField("time14", null, { initialValue: ''})
const { value: option1 } = useField("option1", null, { initialValue: ''})
const { value: option3 } = useField("option3", null, { initialValue: ''})
const { value: option2 } = useField("option2", null, { initialValue: ''})
const { value: option11 } = useField("option11", null, { initialValue: ''})
const { value: option12 } = useField("option12", null, { initialValue: ''})
const { value: option13 } = useField("option13", null, { initialValue: ''})
const { value: file1 } = useField("file1", null, { initialValue: ''})
const { value: file2 } = useField("file2", null, { initialValue: ''})
const { value: file3 } = useField("file3", null, { initialValue: ''})
const { value: file4 } = useField("file4", null, { initialValue: ''})
const { value: file5 } = useField("file5", null, { initialValue: ''})
const { value: file6 } = useField("file6", null, { initialValue: ''})
const { storeGood, isLoading, validationErrors, getGood } = useGoods();

const goods = reactive({
    productName,
    startPrice,
    endPrice,
    minimumOrderQuantity,
    maximumNumberOfSampleOrders,
    sampleOrderDeliveryTime,
    sampleOrderPrice,
    productDescription,
    time11,
    time12,
    time13,
    time14,
    time1,
    time2,
    time3,
    time4,
    option11,
    option12,
    option13,
    option1,
    option2,
    option3
})

const selectedPictures = reactive({
    file1,
    file2,
    file3,
    file4,
    file5,
    file6
})

function submitForm() {
    validate().then( async form => {
        console.log('called', form)
        if (form.valid) {
            const goodsWithPictures = {
                ...goods,
                picture1: selectedPictures.file1,
                picture2: selectedPictures.file2,
                picture3: selectedPictures.file3,
                picture4: selectedPictures.file4,
                picture5: selectedPictures.file5,
                picture6: selectedPictures.file6,
            };
            console.log('goodsWithPictures', goodsWithPictures)
            storeGood(goodsWithPictures);
        }
    })
}

const handleFileSelected1 = (file) => {
  selectedPictures.file1 = file;
};
const handleFileSelected2 = (file) => {
  selectedPictures.file2 = file;
};
const handleFileSelected3 = (file) => {
  selectedPictures.file3 = file;
};
const handleFileSelected4 = (file) => {
  selectedPictures.file4 = file;
};
const handleFileSelected5 = (file) => {
  selectedPictures.file5 = file;
};
const handleFileSelected6 = (file) => {
  selectedPictures.file6 = file;
};
const goGoods = () => {
    router.push({ name: 'salesManager.index'})
}
</script>
<style>
.lightBlue {
    background-color: lightblue;
}
</style>