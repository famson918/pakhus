import { ref, inject, computed } from 'vue'
import { useRouter } from 'vue-router'
import store from "../store";

export default function useProfile() {
    const profile = ref({
        name: '',
        email: '',
    })

    const router = useRouter()
    const validationErrors = ref({})
    const isLoading = ref(false)
    const swal = inject('$swal')
    const locale = computed(() => store.state.lang.locale);

    const getProfile = async () => {
        profile.value = store.getters["auth/user"]
        // axios.get('/api/user')
        //     .then(({data}) => {
        //         profile.value = data.data;
        //     })
    }

    const updateProfile = async (profile) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        axios.put('/api/user', profile)
            .then(({data}) => {
                if (data.success) {
                    store.commit('auth/SET_USER', data.data)
                    // router.push({name: 'profile.index'})
                    if (locale.value === 'en') {
                        swal({
                            icon: 'success',
                            title: 'Profile updated successfully'
                        })
                    } else {
                        swal({
                            icon: 'success',
                            title: '个人资料更新成功'
                        })
                    }
              
                }
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }

    return {
        profile,
        getProfile,
        updateProfile,
        validationErrors,
        isLoading
    }
}
