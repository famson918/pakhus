<template>
    <div class="card  overflow-auto mt-13 align-items-center" style="background-color: #f0f2fc;">
        <!--begin::Body-->
        <div class="card-body p-lg-15">
            <!--begin::Classic content-->
            <div class="mb-13">
                <!--begin::Intro-->
                <div class="mb-15">
                    <!--begin::Title-->
                    <!-- <h4 class="fs-2x text-gray-800 w-bolder mb-6">FAQ</h4> -->
                    <!--end::Title-->
                    <!--begin::Text-->
                    <!-- <p class="fw-bold fs-4 text-gray-600 mb-2">First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.</p> -->
                    <!--end::Text-->
                </div>
                <!--end::Intro-->
                <!--begin::Row-->
                <div class="row mb-12">
                    <!--begin::Col-->
                    <div v-if="faqs" class="col-md-12 pe-md-10 mb-10 mb-md-0" style="max-height: 100vh; width: 100vh; ">
                        <!--begin::Title-->
                        <!-- <h2 class="text-gray-800 fw-bolder mb-4">Buying Product</h2> -->
                        <!--end::Title-->
                        <!--begin::Accordion-->
                        <!--begin::Section-->
                        <div v-for="(faq, index) in faqs" :key="index">
                            <div class="d-flex align-items-center collapsible py-3 toggle collapsed mb-0" data-bs-toggle="collapse" :data-bs-target="'#kt_job_' + index">
                                <!-- Icon -->
                                <div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                                <!-- SVG Icon Toggle On -->
                                <span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black" />
                                        <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black" />
                                    </svg>
                                </span>
                                <!-- SVG Icon Toggle Off -->
                                <span class="svg-icon toggle-off svg-icon-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black" />
                                        <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black" />
                                        <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black" />
                                    </svg>
                                </span>
                                </div>
                                <!-- Title -->
                                <h4 class="text-gray-850 fw-bolder cursor-pointer mb-0">{{ faq.question }}</h4>
                            </div>
                            <div :id="'kt_job_' + index" class="collapse fs-6 ms-1">
                                <!-- Text -->
                                <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">{{ faq.answer }}</div>
                            </div>
                            <!-- Separator -->
                            <div class="separator separator-dashed"></div>
                        </div>
                        <!--end::Accordion-->
                    </div>
                    <!--end::Col-->
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import useFaqs from '../../composables/faqs';
const { faqs, getFaqs } = useFaqs()

onMounted(async()=>
{
    await getFaqs();
}
)
</script>
<style>
    
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 1.0s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>