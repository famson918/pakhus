import { ref, inject, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default function useUsers() {
    const users = ref([])
    const user = ref({
        name: ''
    })

    const router = useRouter()
    const validationErrors = ref({})
    const isLoading = ref(false)
    const swal = inject('$swal')
    const store = useStore()
    const locale = computed(() => store.state.lang.locale)

    const getUsers = async () => {
        axios.get('/api/users')
            .then(response => {
                console.log('response.data.data :>> ', response.data);
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
                if (locale.value === 'en') {
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: 'User saved successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: '用户保存成功',
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

    const updateUser = async (user) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        axios.put('/api/users/' + user.id, user)
            .then(response => {
                getUsers()
                router.push({name: 'users.index'})
                if (locale.value === 'en') {
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: 'User updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: '用户更新成功',
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

    const deleteUser = async (id) => {
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
                    axios.delete('/api/users/' + id)
                        .then(response => {
                            getUsers()
                            router.push({name: 'users.index'})
                            if (locale.value === 'en') {
                                swal({
                                    position: "top-end",
                                    icon: 'success',
                                    title: 'User deleted successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            } else {
                                swal({
                                    position: "top-end",
                                    icon: 'success',
                                    title: '用户删除成功',
                                    showConfirmButton: false,
                                    timer: 1500
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
