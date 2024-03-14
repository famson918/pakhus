import { ref, inject, computed } from 'vue'
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default function useProposals() {
    const { t } = useI18n();
    const  router = useRouter()
    const store = useStore()
    const validationErrors = ref({})
    const isLoading = ref(false)
    const swal = inject('$swal')
    const locale = computed(() => store.state.lang.locale);

    const getGoods = async () => {
        axios.get('/api/get-goods')
            .then(response => {
                store.dispatch('good/getGoods', response.data.data)
            })
    }

    const getGood = async () => {
        axios.get('/api/get-good/' + router.params.id).then(({ data }) => {
            store.dispatch('good/getGood', data)
        })
    }

    const storeGood = async (good) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        let serializedGood = new FormData()
        for (let item in good) {
            if (good.hasOwnProperty(item)) {
                serializedGood.append(item, good[item])
            }
        }
        console.log('serializedGood', serializedGood)

        axios.post('/api/goods', serializedGood,{
            headers: {
                "content-type": "multipart/form-data"
            }
        })
            .then(response => {
                getGoods()
                console.log('response', response)
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: t('goodSavedSuccessMessage'),
                        showConfirmButton: false,
                        timer: 1500
                    })
                router.push({name: 'salesManager.index'})
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }
    const updateGood = async (good) => {
        if (isLoading.value) return;
        
        isLoading.value = true
        validationErrors.value = {}
        
        let serializedGood = new FormData()
        for (let item in good) {
            if (good.hasOwnProperty(item)) {
                serializedGood.append(item, good[item])
            }
        }
        console.log('serializedGood', serializedGood)
        axios.post('/api/goods-update', serializedGood,{
            headers: {
                "content-type": "multipart/form-data"
            }
        })
            .then(response => {
                console.log('response', response)
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: t('goodUpdatedSuccessMessage'),
                        showConfirmButton: false,
                        timer: 1500
                    })
                router.push({name: 'salesManager.index'})
            })
            .catch(error => {
                console.log('error', error)
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }

    const deleteGood = async (id) => {
        let message = {}
            message.title = t('areYouSure')
            message.text = t('youCanCancel')
            message.confirmButtonText = t('yesDeleteIt')
            message.confirmButtonColor = '#ef4444'
            message.timer = 20000
            message.timerProgressBar = true
            message.reverseButtons = true
        swal(message)
            .then(result => {
                if (result.isConfirmed) {
                    axios.delete('/api/goods/' + id)
                        .then(response => {
                            getGoods()
                            router.push({name: 'salesManager.index'})
                                swal({
                                    icon: 'success',
                                    title: t('goodDeletedSuccessMessage')
                                })
                        })
                        .catch(error => {
                                swal({
                                    icon: 'error',
                                    title: t('error_alert_text')
                                })
                        })
                }
            })

    }

    return {
        getGoods,
        getGood,
        storeGood,
        updateGood,
        deleteGood,
        validationErrors,
        isLoading
    }
}
