<template>
    <div class="container row justify-content-center my-5">
        <div class="col-md-12">
            <div class="card border-0 shadow-sm">
                <div class="card-body">
                    <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label for="post-title" class="form-label">{{ $t('name') }}</label>
                            <input v-model="post.name" id="post-title" type="text" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.name }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.name">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">{{ $t('email') }}</label>
                            <input v-model="post.email" id="email" type="email" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.email }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.email">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">{{ $t('password') }}</label>
                            <input v-model="post.password" id="password" type="text" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.password }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.password">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <!-- <div class="mb-3">
                            <label for="password" class="form-label">{{ $t('postCode') }}</label>
                            <input v-model="post.postCode" id="password" type="text" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.postCode }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.postCode">
                                    {{ message }}
                                </div>
                            </div>
                        </div> -->
                        <div class="mb-3">
                            <label for="password" class="form-label">{{ $t('cellPhone') }}</label>
                            <input v-model="post.cellPhone" id="password" type="text" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.cellPhone }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.cellPhone">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">{{ $t('companyName') }}</label>
                            <input v-model="post.companyName" id="password" type="text" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.companyName }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.companyName">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">{{ $t('position') }}</label>
                            <input v-model="post.position" id="password" type="text" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.position }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.position">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <router-link to="/admin/users" class="btn btn-light btn-active-light-primary me-2" >
                                <span>{{ $t('cancel') }}</span>
                            </router-link>
                            <button :disabled="isLoading" class="btn btn-primary">
                                <div v-show="isLoading" class=""></div>
                                <span v-if="isLoading">{{ $t(processing) }}</span>
                                <span v-else>{{ $t('save') }}</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { onMounted, reactive } from "vue";
    import useRoles from "@/composables/roles";
    import useUsers from "@/composables/users";

    const { roleList, getRoleList } = useRoles();
    const { storeUser, validationErrors, isLoading } = useUsers();

    import { useForm, useField, defineRule } from "vee-validate";
    import { required, min } from "@/validation/rules";
    
    defineRule('required', required);
    defineRule('min', min);

    // Define a validation schema
    const schema = {
        name: 'required',
        email: 'required',
        cellPhone: 'required',
        companyName: 'required',
        position: 'required',
        password: 'required|min:8',
    }
    // Create a form context with the validation schema
    const { validate, errors } = useForm({ validationSchema: schema })
    // Define actual fields for validation
    const { value: name } = useField('name', null, { initialValue: '' });
    const { value: email } = useField('email', null, { initialValue: '' });
    const { value: password } = useField('password', null, { initialValue: '' });
    const { value: cellPhone } = useField('cellPhone', null, { initialValue: '' });
    const { value: companyName } = useField('companyName', null, { initialValue: '' });
    const { value: position } = useField('position', null, { initialValue: '' });

    const post = reactive({
        name,
        email,
        password,
        cellPhone,
        companyName,
        position,
    })
    function submitForm() {
        validate().then(form => { if (form.valid) storeUser(post) })
    }
    onMounted(() => {
        getRoleList()
    })
</script>
