import { computed } from 'vue'
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default function useProposals() {
    const proposals = ref({})
    const post = ref({
        title: '',
        content: '',
        category_id: '',
        thumbnail: ''
    })
    const router = useRouter()
    const store = useStore()
    const locale = computed(() => store.state.lang.locale);
    const validationErrors = ref({})
    const isLoading = ref(false)
    const swal = inject('$swal')

    const getProposals = async () => {
        axios.get('/api/proposals')
            .then(response => {
                console.log('response', response)
                store.dispatch('proposal/getProposals', response.data.data)
            })
    }

    const getPost = async (id) => {
        axios.get('/api/proposals/' + id)
            .then(response => {
                post.value = response.data.data;
            })
    }

    const storeProposal = async (proposal) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        let serializedProposal = new FormData()
        for (let item in proposal) {
            if (proposal.hasOwnProperty(item)) {
                serializedProposal.append(item, proposal[item])
            }
        }

        axios.post('/api/proposals', serializedProposal,{
            headers: {
                "content-type": "multipart/form-data"
            }
        })
            .then(response => {
                router.push({name: 'proposals.index'})
                if (locale.value === 'en') {
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: 'Proposal saved successfully',
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

    const updateProposal = async (proposal) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        axios.put('/api/proposals/',  proposal)
            .then(response => {
                router.push({name: 'proposals.index'})
                if (locale.value === 'en') {
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: 'Proposal saved successfully',
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

    const deletePost = async (id) => {
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
                    axios.delete('/api/proposals/' + id)
                        .then(response => {
                            getPosts()
                            router.push({name: 'proposals.index'})
                            swal({
                                icon: 'success',
                                title: 'Post deleted successfully'
                            })
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
        proposals,
        post,
        getProposals,
        getPost,
        storeProposal,
        updateProposal,
        deletePost,
        validationErrors,
        isLoading
    }
}
