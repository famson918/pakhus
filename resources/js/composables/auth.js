import { ref, reactive, inject, computed } from 'vue'
import { useRouter } from "vue-router";
import { AbilityBuilder, createMongoAbility } from '@casl/ability';
import { ABILITY_TOKEN } from '@casl/vue';
import { useStore } from 'vuex';

let user = reactive({
    name: '',
    email: '',
})

export default function useAuth() {
    const processing = ref(false)
    const validationErrors = ref({})
    const router = useRouter()
    const swal = inject('$swal')
    const ability = inject(ABILITY_TOKEN)

    const store = useStore()
    const isLoading = ref(false)
    const locale = computed(() => store.state.lang.locale);

    const loginForm = reactive({
        email: '',
        password: '',
        remember: false
    })

    const forgotForm = reactive({
        email: '',
    })

    const resetForm = reactive({
        // email: '',
        // token: '',
        currentPassword: '',
        password: '',
        password_confirmation: ''
    })

    const registerForm = reactive({
        name: '',
        postCode: '',
        cellPhone: '',
        companyName: '',
        position: '',
        email: '',
        password: '',
        password_confirmation: ''
    })

    const submitLogin = async () => {
        if (processing.value) return

        processing.value = true
        validationErrors.value = {}

        await axios.post('/login', loginForm)
            .then(async response => {
                localStorage.setItem('token', response.data.token)
                await store.dispatch('auth/getUser')
                await loginUser()
                if (locale.value === 'en') {
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: 'Login successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: '登入成功',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                await router.push({ name: 'proposals.index' })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => processing.value = false)
    }

    const submitRegister = async () => {
        if (processing.value) return

        processing.value = true
        validationErrors.value = {}
        await axios.post('/register', registerForm)
            .then(async response => {
                await store.dispatch('auth/getUser')
                await loginUser()
                if (locale.value === 'en') {
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: 'Register successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: '註冊成功',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                await router.push({ name: 'auth.login' })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => processing.value = false)
    }

    const submitForgotPassword = async () => {
        if (processing.value) return

        processing.value = true
        validationErrors.value = {}

        await axios.post('/api/forget-password', forgotForm)
            .then(async response => {
                swal({
                    icon: 'success',
                    title: 'We have emailed your password reset link! Please check your mail inbox.',
                    showConfirmButton: false,
                    timer: 1500
                })
                // await router.push({ name: 'admin.index' })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => processing.value = false)
    }

    const submitResetPassword = async () => {
        if (processing.value) return

        processing.value = true
        validationErrors.value = {}

        await axios.post('/api/reset-password', resetForm)
            .then(async response => {
                 if (locale.value === 'en') {
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: 'Password successfully changed.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    swal({
                        position: "top-end",
                        icon: 'success',
                        title: '密码修改成功。',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                // await router.push({ name: 'auth.login' })
            })
            .catch(error => {
                console.log('error.response.status', error.response.status)
                if (error.response.status === 400) {
                    if (locale.value === 'en') {
                        swal({
                            position: "top-end",
                            icon: 'warning',
                            title: 'Current password is incorrect',
                            showConfirmButton: false,
                            timer: 2500
                        })
                    } else {
                        swal({
                            position: "top-end",
                            icon: 'warning',
                            title: '当前密码不正确',
                            showConfirmButton: false,
                            timer: 2500
                        })
                    }
                }
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => processing.value = false)
    }

    const loginUser = () => {
        user = store.state.auth.user
        // Cookies.set('loggedIn', true)
        // getAbilities()
    }

    const getUser = async () => {
        if (store.getters['auth/authenticated']) {
            await store.dispatch('auth/getUser')
            await loginUser()
        }
    }

    const logout = async () => {
        if (processing.value) return

        processing.value = true

        axios.post('/logout')
            .then(response => {
                user.name = ''
                user.email = ''
                store.dispatch('auth/logout')
                router.push({ name: 'home.index' })
            })
            .catch(error => {
                // swal({
                //     icon: 'error',
                //     title: error.response.status,
                //     text: error.response.statusText
                // })
            })
            .finally(() => {
                processing.value = false
                // Cookies.remove('loggedIn')
            })
    }

    const getAbilities = async() => {
        await axios.get('/api/abilities')
            .then(response => {
                const permissions = response.data
                const { can, rules } = new AbilityBuilder(createMongoAbility)

                can(permissions)

                ability.update(rules)
            })
    }

    return {
        loginForm,
        registerForm,
        forgotForm,
        resetForm,
        validationErrors,
        processing,
        submitLogin,
        submitRegister,
        submitForgotPassword,
        submitResetPassword,
        user,
        getUser,
        logout,
        getAbilities
    }
}
