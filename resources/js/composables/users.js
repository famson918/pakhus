import { ref, inject, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n';

export default function useUsers() {
    const users = ref([])
    const user = ref({
        name: ''
    })

    const { t } = useI18n();

    const router = useRouter()
    const validationErrors = ref({})
    const isLoading = ref(false)
    const swal = inject('$swal')
    const store = useStore()
    const locale = computed(() => store.state.lang.locale)

    const getUsers = async () => {
        axios.get('/api/users')
            .then(response => {
                store.dispatch('users/getUsers', response.data)
                users.value = response.data;
            })
    }

    const getUser = async (id) => {
        axios.get('/api/users/' + id)
            .then(response => {
                user.value = response.data.data;
            })
    }

    const storeUser = async (user) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        let serializedPost = new FormData()
        for (let item in user) {
            if (user.hasOwnProperty(item)) {
                serializedPost.append(item, user[item])
            }
        }

        axios.post('/api/users', serializedPost)
            .then(response => {
                getUsers()
                router.push({name: 'users.index'})
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: t('userSavedSuccessMessage'),
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

    const updateUser = async (user) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        axios.put('/api/users/' + user.id, user)
            .then(response => {
                getUsers()
                router.push({name: 'users.index'})
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: t('userUpdatedSuccessMessage'),
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

    const deleteUser = async (id) => {
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
                    axios.delete('/api/users/' + id)
                        .then(response => {
                            getUsers()
                            router.push({name: 'users.index'})
                                swal({
                                    position: "top-end",
                                    icon: 'success',
                                    title: t('userDeletedSuccessMessage'),
                                    showConfirmButton: false,
                                    timer: 1500
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
        users,
        user,
        getUsers,
        getUser,
        storeUser,
        updateUser,
        deleteUser,
        validationErrors,
        isLoading
    }
}
