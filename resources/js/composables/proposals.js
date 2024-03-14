import { computed, watch } from 'vue'
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n';

export default function useProposals() {
    const proposals = ref({})
    const post = ref({
        title: '',
        content: '',
        category_id: '',
        thumbnail: ''
    })
    const { t } = useI18n();

    const router = useRouter()
    const store = useStore()
    const locale = computed(() => store.state.lang.locale);
    const validationErrors = ref({})
    const isLoading = ref(false)
    const swal = inject('$swal')

    const getProposals = async () => {
        axios.get('/api/get-proposals')
            .then(response => {
                console.log('response.data.data :>> ', response.data.data);
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
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: t('proposalSavedSuccessMessage'),
                        showConfirmButton: false,
                        timer: 1500
                    })
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
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: t('proposalUpdatedSuccessMessage'),
                        showConfirmButton: false,
                        timer: 1500
                    })
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
