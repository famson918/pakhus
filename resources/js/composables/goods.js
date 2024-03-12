import { ref, inject, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default function useProposals() {
    const  router = useRouter()
    const store = useStore()
    const validationErrors = ref({})
    const isLoading = ref(false)
    const swal = inject('$swal')
    const locale = computed(() => store.state.lang.locale);

    const getGoods = async () => {
        axios.get('/api/goods')
            .then(response => {
                console.log('response goods .data:>> ', response.data.data);
                store.dispatch('good/getGoods', response.data.data)
            })
    }

    const getGood = async () => {
        console.log('router.params.id', router.params.id)
        axios.get('/api/get-good/' + router.params.id).then(({ data }) => {
            console.log('data----------', data)
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
                if (locale.value === 'en') {
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: 'Goods saved successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: '提案已成功保存',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
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
        
        console.log('good----', good)
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
                if (locale.value === 'en') {
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: 'Goods updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: '商品更新成功',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
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
        if (locale.value === 'en') {
            message.title = 'Are you sure?'
            message.text = 'You won\'t be able to revert this action!'
            message.confirmButtonText = 'Yes, delete it!'
            message.confirmButtonColor = '#ef4444'
            message.timer = 20000
            message.timerProgressBar = true
            message.reverseButtons = true
        } else {
            message.title = '你确定吗？'
            message.text = '您将无法恢复此操作！'
            message.confirmButtonText = '是的，删除它！'
            message.confirmButtonColor = '#ef4444'
            message.timer = 20000
            message.timerProgressBar = true
            message.reverseButtons = true
        };
        swal(message)
            .then(result => {
                if (result.isConfirmed) {
                    axios.delete('/api/goods/' + id)
                        .then(response => {
                            getGoods()
                            router.push({name: 'salesManager.index'})
                            if (locale.value === 'en') {
                                swal({
                                    icon: 'success',
                                    title: 'Good deleted successfully'
                                })
                            } else {
                                swal({
                                    icon: 'success',
                                    title: '好删除成功'
                                })
                            }
                        })
                        .catch(error => {
                            if (locale.value === 'en') {
                                swal({
                                    icon: 'error',
                                    title: 'Something went wrong'
                                })
                            } else {
                                swal({
                                    icon: 'error',
                                    title: '出了些问题'
                                })
                            }
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
