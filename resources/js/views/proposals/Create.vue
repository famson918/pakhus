<template>
    <div class="container card p-7" style="max-height: 100vh; overflow-y: auto;">
        <div v-if="!edit" class="row justify-content-center">
            <div class="col-6 mb-2 text-center">
            <p class="fs-1 fw-7">{{ $t('what_is_your_item') }}</p>
            <p class="fs-8 fw-5">{{ $t('createText') }}</p>
            </div>
        </div>
        <div v-if="edit">
            <p class="fs-4 fw-7 p-1">{{ $t('what_is_your_item') }}</p>
        </div>
        <div v-if="edit">
            <div class="row">
            <div class="col-6">
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-4 col-form-label">{{ $t('id') }}</label>
                    <div class="col-sm-8">
                        <input :placeholder="formattedNumber" class="form-control" type="text" aria-label="Disabled input example" disabled>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-4 col-form-label">{{ $t('applicationDate') }}</label>
                    <div class="col-sm-8">
                        <input v-model="proposal.applicationDate" class="form-control" type="text" aria-label="Disabled input example" disabled>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <form @submit.prevent="submitForm">
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-3 col-form-label"><span>{{$t('desiredService')}}</span>{{ $t('canSelectManyTimes') }}</label>
                <div class="col-sm-9">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="form-check form-check-custom form-check-solid me-10 p-2">
                                <input v-model="proposal.productDevelopment" @change="changeProductDevelopment" class="form-check-input" type="checkbox" value="" id="productDevelopment">
                                <label class="form-check-label ml-4" for="productDevelopment">
                                    {{$t('productDevelopment')}}
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-check form-check-custom form-check-solid me-10 p-2">
                                <input v-model="proposal.developmentProgram" @change="changeDevelopmentProgram" class="form-check-input" type="checkbox" value="" id="developmentProgram">
                                <label class="form-check-label" for="developmentProgram">
                                    {{$t('developmentProgram')}}
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-check form-check-custom form-check-solid me-10 p-2">
                                <input v-model="proposal.productQuotationSurvey" @change="changeProductQuotationSurvey" class="form-check-input" type="checkbox" value="" id="productQuotationSurvey">
                                <label class="form-check-label" for="productQuotationSurvey">
                                    {{$t('productQuotationSurvey')}}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="form-check form-check-custom form-check-solid me-10 p-2">
                                <input v-model="proposal.connectingChineseFactories"  class="form-check-input" type="checkbox" value="" id="connectingChineseFactories">
                                <label class="form-check-label" for="connectingChineseFactories">
                                    {{$t('connectingChineseFactories')}}
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-check form-check-custom form-check-solid me-10 p-2">
                                <input v-model="proposal.prototypeProduction"  class="form-check-input" type="checkbox" value="" id="prototypeProduction">
                                <label class="form-check-label" for="prototypeProduction">
                                    {{$t('prototypeProduction')}}
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-check form-check-custom form-check-solid me-10 p-2">
                                <input v-model="proposal.massProduction" class="form-check-input" type="checkbox" value="" id="massProduction">
                                <label class="form-check-label" for="massProduction">
                                    {{$t('massProduction')}}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="form-check form-check-custom form-check-solid me-10 p-2">
                                <input v-model="proposal.importCustomsClearance" class="form-check-input" type="checkbox" value="" id="importCustomsClearance">
                                <label class="form-check-label" for="importCustomsClearance">
                                    {{$t('importCustomsClearance')}}
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-check form-check-custom form-check-solid me-10 p-2">
                                <input v-model="proposal.KC_certification"  class="form-check-input" type="checkbox" value="" id="KC_certification">
                                <label class="form-check-label" for="KC_certification">
                                    {{$t('KC_certification')}}
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-check form-check-custom form-check-solid me-10 p-2">
                                <input v-model="proposal.postEventManagement" class="form-check-input" type="checkbox" value="" id="postEventManagement">
                                <label class="form-check-label" for="postEventManagement">
                                    {{$t('post_eventManagement')}}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-3 col-form-label ">{{ $t('productName') }}</label>
                <div class="col-sm-9">
                <input v-model="proposal.productName" type="text" class="form-control" id="inputPassword">
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
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-3 col-form-label ">{{ $t('itemName') }}</label>
                <div class="col-sm-9">
                <input v-model="proposal.itemName" type="text" class="form-control" id="inputPassword">
                <div class="text-danger mt-1">
                    {{ errors.itemName }}
                </div>
                <div class="text-danger mt-1">
                    <div v-for="message in validationErrors?.itemName">
                        {{ message }}
                    </div>
                </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-3 col-form-label ">{{ $t('contactInformation') }}</label>
                <div class="col-sm-9">
                <input v-model="proposal.contactInformation" type="text" class="form-control" id="inputPassword">
                <div class="text-danger mt-1">
                    {{ errors.contactInformation }}
                </div>
                <div class="text-danger mt-1">
                    <div v-for="message in validationErrors?.contactInformation">
                        {{ message }}
                    </div>
                </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-3 col-form-label ">{{$t('Email')}}</label>
                <div class="col-sm-9">
                <input v-model="proposal.email" type="text" class="form-control" id="inputPassword">
                <div class="text-danger mt-1">
                    {{ errors.email }}
                </div>
                <div class="text-danger mt-1">
                    <div v-for="message in validationErrors?.email">
                        {{ message }}
                    </div>
                </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-3 col-form-label"><span class="">{{ $t('productManual') }}</span><span>{{ $t('freeStyle') }}</span></label>
                <div class="col-sm-9">
                <DownloadInput v-if="edit" :buttonLabel="attachment" :file="editableData.productManual" />
                <UploadInput v-else :buttonLabel="attachment" @fileSelected="handleFileSelected1" :error="errors.file1"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-3 col-form-label ">{{ $t('productDrawings') }}</label>
                <div class="col-sm-9">
                <DownloadInput v-if="edit" :buttonLabel="attachment" :file="editableData.productDrawings" />
                <UploadInput v-else :buttonLabel="attachment" @fileSelected="handleFileSelected2" :error="errors.file2"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-3 col-form-label ">{{ $t('photoData_pictures') }}</label>
                <div class="col-sm-9">
                <DownloadInput v-if="edit" :buttonLabel="attachment" :file="editableData.photos"/>
                <UploadInput v-else :buttonLabel="attachment" @fileSelected="handleFileSelected3" :error="errors.file3" />
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-3 col-form-label "><span class="">{{ $t('otherRequestQuestions') }}</span><span>{{ $t('textLimit') }}</span></label>
                <div class="col-sm-9">
                    <textarea v-model="proposal.others" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            <div v-if="!edit" class="mb-3 row justify-content-center">
                <router-link to="/proposals" class="col-4 btn btn-light btn-active-light-primary me-2">
                    <span >{{ $t('cancel') }}</span>
                </router-link>
                <button :disabled="isLoading" class="btn btn-primary col-4">
                    <div v-show="isLoading" class=""></div>
                    <span v-if="isLoading">{{ $t('processing') }}</span>
                    <span v-else>{{ $t('register1') }}</span>
                </button>
            </div>
            <div v-if="edit" class="mb-3 row ">
                <div class="row justify-content-end">
                    <div class="col-sm-3">
                        <select v-model="proposal.status" @change="changeStatus" class="form-select  col-2" aria-label="Default select example">
                            <option value="confirmed">{{ $t('confirmed') }}</option>
                            <option value="notConfirmed">{{ $t('notConfirmed') }}</option>
                            <option value="completed">{{ $t('completed') }}</option>
                            <option value="atWork">{{ $t('atWork') }}</option>
                            <option value="cancel">{{ $t('cancel') }}</option>
                        </select>
                    </div>
                    <div class="col-sm-4">
                        <div class="row">
                            
                                <button :disabled="isLoading" class="btn btn-primary" style="width: 100%;" >
                                    <div v-show="isLoading" class=""></div>
                                    <span v-if="isLoading">{{ $t('processing') }}</span>
                                    <span v-else>{{ $t('setStatus') }}</span>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script setup>
import { defineRule, useField, useForm } from "vee-validate";
import UploadInput from "../../components/UploadInput.vue"
import DownloadInput from '../../components/DownloadInput.vue'
import useProposals from "../../composables/proposals"
import { required, min } from "@/validation/rules";
import { reactive, onMounted, ref, computed, watch } from "vue";
import { useStore } from 'vuex';
import { watchEffect } from "vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineRule('required', required)
defineRule('min', min)

const store = useStore();

const { edit, editableData } = defineProps(['edit', 'editableData'])
const locale = computed(() => store.state.lang.locale);
const user = computed(() => store.state.auth.user);

let formattedNumber = ref();
let attachment = ref();

const updateText = () => {
    if (edit) {
        attachment.value = t('download')
    } else {
        attachment.value = t('upload');
    }
}
updateText();

watchEffect(()=> { updateText() });

onMounted(() => {
     if (edit && editableData) {
        proposal.id = editableData.id
        proposal.productName = editableData.productName;
        proposal.itemName = editableData.itemName;
        proposal.contactInformation = editableData.contactInformation;
        proposal.email = editableData.email;
        proposal.others = editableData.others;
        proposal.developmentProgram = editableData.developmentProgram === 1 ? true : false;
        proposal.KC_certification = editableData.KC_certification === 1 ? true : false;
        proposal.connectingChineseFactories = editableData.connectingChineseFactories === 1 ? true : false;
        proposal.importCustomsClearance = editableData.importCustomsClearance === 1 ? true : false;
        proposal.massProduction = editableData.massProduction === 1 ? true : false;
        proposal.postEventManagement = editableData.postEventManagement === 1 ? true : false;
        proposal.productQuotationSurvey = editableData.productQuotationSurvey === 1 ? true : false;
        proposal.prototypeProduction = editableData.prototypeProduction === 1 ? true : false;
        proposal.productDevelopment = editableData.productDevelopment === 1 ? true : false;
        proposal.applicationDate = editableData.created_at.split('T')[0];
        proposal.status = editableData.status;
        formattedNumber.value = editableData.id.toString().padStart(8, '0')
    }
});

const schema = {    
    productName: 'required',
    itemName: 'required',
    contactInformation: 'required',
    email: 'required',
    file1: 'required',
    file2: 'required',
    file3: 'required',
}
const { validate, errors } = useForm({validationSchema: schema})
const { value: productName } = useField('productName', null, { initialValue: ''})
const { value: itemName } = useField('itemName', null, { initialValue: ''})
const { value: contactInformation } = useField('contactInformation', null, { initialValue: ''})
const { value: email } = useField('email', null, { initialValue: ''})
const { value: file1 } = useField('file1', null, { initialValue: ''})
const { value: file2 } = useField('file2', null, { initialValue: ''})
const { value: file3 } = useField('file3', null, { initialValue: ''})
const { storeProposal, updateProposal, validationErrors, isLoading, getProposals } = useProposals()
const proposal = reactive({
    user_id: user.value.id.toString().padStart(5, '0'),
    productName,
    itemName,
    contactInformation,
    email,
    productDevelopment: false,
    developmentProgram: false,
    productQuotationSurvey: false,
    connectingChineseFactories: false,
    prototypeProduction: false,
    massProduction: false,
    importCustomsClearance: false,
    KC_certification: false,
    postEventManagement: false,
    status: "notConfirmed"
})

const selectedFiles = reactive({
  file1,
  file2,
  file3
});

function submitForm() {
    validate().then( async form => {
        if (form.valid) {
            const proposalWithFiles = {
                ...proposal,
                productManual: selectedFiles.file1,
                productDrawings: selectedFiles.file2,
                photos: selectedFiles.file3
            };
            if (edit) {
                updateProposal(proposal)
                getProposals();
                updateEdit()
            } else {
                console.log('proposalWithFiles :>> ', proposalWithFiles);
                await storeProposal(proposalWithFiles);
                getProposals()
            }
        }
    })
}
const handleFileSelected1 = (file) => {
  selectedFiles.file1 = file;
};
const handleFileSelected2 = (file) => {
  selectedFiles.file2 = file;
};
const handleFileSelected3 = (file) => {
  selectedFiles.file3 = file;
};
const changeStatus = (event) => {
    proposal.status = event.target.value;
}

const emit = defineEmits(['updateEdit']);

const updateEdit = (newValue) => {
  emit('updateEdit', newValue);
};
</script>
<style>
</style>