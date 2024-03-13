import { ref, inject, computed } from 'vue'
import { useRouter } from 'vue-router'
import store from "../store";
import { useI18n } from 'vue-i18n';

export default function useProfile() {
    const profile = ref({
        name: '',
        email: '',
    })
    const { t } = useI18n();

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
                        swal({
                            icon: 'success',
                            title: t('profileUpdatedSuccessMessage')
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

    return {
        profile,
        getProfile,
        updateProfile,
        validationErrors,
        isLoading
    }
}
