<template>
    	<div class="d-flex flex-column flex-root mt-12">
			<!--begin::Authentication - Sign-up -->
			<div class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed background-image" style="">
				<!--begin::Content-->
				<div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
					<!--begin::Logo-->
					<!-- <a href="../../demo1/dist/index.html" class="mb-12">
						<img alt="Logo" src="assets/media/logos/logo-1.svg" class="h-40px" />
					</a> -->
					<!--end::Logo-->
					<!--begin::Wrapper-->
					<div class="w-lg-600px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
						<!--begin::Form-->
						<form @submit.prevent="submitRegister" class="form w-100" novalidate="novalidate" id="kt_sign_up_form">
							<!--begin::Heading-->
							<div class="mb-10 text-center">
								<!--begin::Title-->
								<h1 class="text-dark mb-3">{{$t('createAnAccount')}}</h1>
								<!--end::Title-->
								<!--begin::Link-->
								<div class="text-gray-400 fw-bold fs-4">{{$t('alreadyAccount')}}
								    <router-link to="/login"  class="link-primary fw-bolder">{{ $t('signHere') }}</router-link>
                                </div>
								<!--end::Link-->
							</div>
							<!--end::Heading-->
							<!--begin::Action-->
							<!-- <button type="button" class="btn btn-light-primary fw-bolder w-100 mb-10">
							<img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" class="h-20px me-3" />Sign in with Google</button> -->
							<!--end::Action-->
							<!--begin::Separator-->
							<!-- <div class="d-flex align-items-center mb-10">
								<div class="border-bottom border-gray-300 mw-50 w-100"></div>
								<span class="fw-bold text-gray-400 fs-7 mx-2">OR</span>
								<div class="border-bottom border-gray-300 mw-50 w-100"></div>
							</div> -->
							<!--end::Separator-->
							<!--begin::Input group-->
							<div class="row fv-row mb-7">
								<!--begin::Col-->
                                <label class="form-label fw-bolder text-dark fs-6">{{ $t('postCode') }}</label>
                                <input v-model="registerForm.postCode" class="form-control form-control-lg form-control-solid" type="text" placeholder="" name="first-name" autocomplete="off" />
								<!--end::Col-->
							</div>
							<div class="row fv-row mb-7">
                                <label class="form-label fw-bolder text-dark fs-6">{{ $t('name') }}</label>
                                <input v-model="registerForm.name" class="form-control form-control-lg form-control-solid" type="text" placeholder="" name="last-name" autocomplete="off" />
							</div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.name">
                                    {{ message }}
                                </div>
                            </div>
							<!--begin::Input group-->
							<div class="fv-row mb-7">
								<label class="form-label fw-bolder text-dark fs-6">{{ $t('email') }}</label>
								<input v-model="registerForm.email" class="form-control form-control-lg form-control-solid" type="email" placeholder="" name="email" autocomplete="off" />
							</div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.email">
                                    {{ message }}
                                </div>
                            </div>
							<!--end::Input group-->
							<!--begin::Input group-->
							<div class="mb-10 fv-row" data-kt-password-meter="true">
								<!--begin::Wrapper-->
								<div class="mb-1">
									<!--begin::Label-->
									<label class="form-label fw-bolder text-dark fs-6">{{ $t('password') }}</label>
									<!--end::Label-->
									<!--begin::Input wrapper-->
									<div class="position-relative mb-3">
										<input v-model="registerForm.password"  class="form-control form-control-lg form-control-solid" type="password" placeholder="" name="password" autocomplete="off" />
										<span class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
											<i class="bi bi-eye-slash fs-2"></i>
											<i class="bi bi-eye fs-2 d-none"></i>
										</span>
									</div>
									<!--end::Input wrapper-->
									<!--begin::Meter-->
									<div class="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
										<div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
										<div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
										<div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
										<div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
									</div>
									<!--end::Meter-->
								</div>
								<!--end::Wrapper-->
								<!--begin::Hint-->
								<div class="text-muted">{{$t('passwordRule')}}</div>
								<!--end::Hint-->
							</div>
							<!--end::Input group=-->
							<!--begin::Input group-->
							<div class="fv-row mb-5">
								<label class="form-label fw-bolder text-dark fs-6">{{ $t('confirm_password') }}</label>
								<input v-model="registerForm.password_confirmation"  class="form-control form-control-lg form-control-solid" type="password" placeholder="" name="confirm-password" autocomplete="off" />
							</div>
							<!--end::Input group-->
                            <!--begin::Input group-->
							<div class="fv-row mb-7">
								<label class="form-label fw-bolder text-dark fs-6">{{ $t('cellPhone') }}</label>
								<input v-model="registerForm.cellPhone" class="form-control form-control-lg form-control-solid" type="email" placeholder="" name="email" autocomplete="off" />
							</div>
                            <div class="fv-row mb-7">
                                <label class="form-label fw-bolder text-dark fs-6">{{ $t('companyName') }}</label>
                                <input v-model="registerForm.companyName" class="form-control form-control-lg form-control-solid" type="email" placeholder="" name="email" autocomplete="off" />
                            </div>
                            <div class="fv-row mb-7">
                                <label class="form-check form-check-custom form-check-solid form-check-inline" for="flexCheckIndeterminate">
                                <input class="form-check-input" type="checkbox" name="individual"  v-model="registerForm.individual" id="flexCheckIndeterminate">
                                    <span class="form-check-label fw-bold text-gray-700 fs-6">{{ $t('individual') }}</span>
                                </label>
                            </div>
							<div class="fv-row mb-7">
								<label class="form-label fw-bolder text-dark fs-6">{{ $t('position') }}</label>
								<input v-model="registerForm.position" class="form-control form-control-lg form-control-solid" type="email" placeholder="" name="email" autocomplete="off" />
							</div>
							<!--end::Input group-->
							<!--begin::Input group-->
							<div class="fv-row mb-10">
								<label class="form-check form-check-custom form-check-solid form-check-inline">
									<input class="form-check-input" type="checkbox" name="toc" value="1" />
									<span class="form-check-label fw-bold text-gray-700 fs-6">{{$t('iAgree')}}
									<a href="#" class="ms-1 link-primary">{{ $t('terms') }}</a>.</span>
								</label>
							</div>
							<!--end::Input group-->
							<!--begin::Actions-->
							<div class="text-center">
								<button type="submit" id="kt_sign_up_submit" :class="{ 'opacity-25': processing }" :disabled="processing" class="btn btn-lg btn-primary">
									<span class="indicator-label">{{ $t('register') }}</span>
									<!-- <span class="indicator-progress">Please wait...
									<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span> -->
								</button>
							</div>
							<!--end::Actions-->
						</form>
						<!--end::Form-->
					</div>
					<!--end::Wrapper-->
				</div>
				<!--end::Content-->
			</div>
			<!--end::Authentication - Sign-up-->
		</div>
</template>

<script setup>

import useAuth from '@/composables/auth'

const { registerForm, validationErrors, processing, submitRegister } = useAuth();

</script>
<style>
.background-image {
    background-image: url('../../assets/media/illustrations/sketchy-1/14.png')
}
</style>