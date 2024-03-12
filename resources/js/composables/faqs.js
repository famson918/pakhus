import { computed } from 'vue'
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default function useFaqs() {
    const faqs = ref([])
    const router = useRouter()
    const store = useStore()
    const locale = computed(() => store.state.lang.locale);
    const validationErrors = ref({})
    const isLoading = ref(false)
    const swal = inject('$swal')

    const getFaqs = async () => {
        axios.get('/api/get-faqs')
            .then(response => {
                faqs.value = response.data;
            })
    }

    const getPost = async (id) => {
        axios.get('/api/proposals/' + id)
            .then(response => {
                post.value = response.data.data;
            })
    }

    const storeFaq = async (faq) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        let serializedFaq = new FormData()
        for (let item in faq) {
            if (faq.hasOwnProperty(item)) {
                serializedFaq.append(item, faq[item])
            }
        }

        axios.post('/api/faqs', serializedFaq,{
            headers: {
                "content-type": "multipart/form-data"
            }
        })
            .then(response => {
                // router.push({name: 'proposals.index'})
                if (locale.value === 'en') {
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: 'Faq saved successfully',
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
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }

    const updateFaq = async (faq) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        axios.put('/api/faqs/',  faq)
            .then(response => {
                console.log('response', response)
                // router.push({name: 'proposals.index'})
                if (locale.value === 'en') {
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: 'Faq saved successfully',
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
                store.dispatch('proposal/edit', false)
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }

    const deleteFaq = async (id) => {
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
                    axios.delete('/api/faqs/' + id)
                        .then(response => {
                            getFaqs()
                            // router.push({name: 'proposals.index'})
                            if (locale.value === 'en') {
                                swal({
                                    position: "top-end",
                                    icon: 'success',
                                    title: 'Faq deleted successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            } else {
                                swal({
                                    position: "top-end",
                                    icon: 'success',
                                    title: '常见问题删除成功',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                        .catch(error => {
                            swal({
                                icon: 'error',
                                title: 'Something went wrong'
                            })
                        })
                }
            })

    }

    return {
        faqs,
        getFaqs,
        storeFaq,
        updateFaq,
        deleteFaq,
        validationErrors,
        isLoading
    }
}
