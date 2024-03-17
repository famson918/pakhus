<template>
    <div class="container row justify-content-center my-5">
        <div class="col-md-12">
            <div class="card border-0 shadow-sm">
                <div class="card-body">
                    <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label for="user-title" class="form-label">{{ $t('name') }}</label>
                            <input v-model="user.name" id="user-title" type="text" class="form-control">
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
                            <input v-model="user.email" id="email" type="email" class="form-control">
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
                            <input v-model="user.password" id="password" type="password" class="form-control">
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
                            <input v-model="user.postCode" id="password" type="text" class="form-control">
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
                            <input v-model="user.cellPhone" id="password" type="text" class="form-control">
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
                            <input v-model="user.companyName" id="password" type="text" class="form-control">
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
                            <input v-model="user.position" id="password" type="text" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.position }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.position">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">{{ $t('role') }}</label>
                                <select v-model="user.role" @change="changeRole" class="form-select  col-2" aria-label="Default select example">
                                    <option value="user">{{ $t('user') }}</option>
                                    <option value="admin">{{ $t('admin') }}</option>
                                </select>
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
                        <!-- Role -->
                        <!-- <div class="mb-3">
                            <label for="user-category" class="form-label">
                                Role
                            </label>
                            <v-select multiple  v-model="user.role_id" :options="roleList" :reduce="role => role.id" label="name" class="form-control" />
                            <div class="text-danger mt-1">
                                {{ errors.role_id }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.role_id">
                                    {{ message }}
                                </div>
                            </div>
                        </div> -->
                        <!-- Buttons -->
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { onMounted, reactive, watchEffect } from "vue";
    import { useRoute } from "vue-router";
    import useRoles from "@/composables/roles";
    import useUsers from "@/composables/users";

    const { roleList, getRoleList } = useRoles();
    const { updateUser, getUser, user: postData, validationErrors, isLoading } = useUsers();

    import { useForm, useField, defineRule } from "vee-validate";
    import { required, min } from "@/validation/rules"
    defineRule('required', required)
    defineRule('min', min);

    // Define a validation schema
    const schema = {
        name: 'required',
        email: 'required',
        role: 'required',
        cellPhone:'required',
        companyName:'required',
        position:'required',
        password: 'min:8',
    }

    // Create a form context with the validation schema
    const { validate, errors, resetForm } = useForm({ validationSchema: schema })
    // Define actual fields for validation
    const { value: name } = useField('name', null, { initialValue: '' });
    const { value: email } = useField('email', null, { initialValue: '' });
    const { value: password } = useField('password', null, { initialValue: '' });
    const { value: role } = useField('role', null, { initialValue: '' });
    const { value: cellPhone } = useField('cellPhone', null, { initialValue: '' });
    const { value: companyName } = useField('companyName', null, { initialValue: '' });
    const { value: position } = useField('position', null, { initialValue: '' });
    // const { value: role_id } = useField('role_id', null, { initialValue: '', label: 'role' });

    const user = reactive({
        name,
        email,
        password,
        role,
        cellPhone,
        companyName,
        position,
        // role_id,
    })

    const route = useRoute()
    function submitForm() {
        validate().then(form => { if (form.valid) updateUser(user) })
    }
    onMounted(() => {
        getUser(route.params.id)
        getRoleList()
    })
    // https://vuejs.org/api/reactivity-core.html#watcheffect
    watchEffect(() => {
        user.id = postData.value.id
        user.name = postData.value.name
        user.email = postData.value.email,
        user.role = postData.value.role,
        user.cellPhone = postData.value.cellPhone,
        user.companyName = postData.value.companyName,
        user.position = postData.value.position
        // user.role_id = postData.value.role_id
    })
</script>
