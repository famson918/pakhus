<template>
<div id="kt_header" class="header align-items-stretch  bg-white fixed" @click="hideSidebar">
    <!--begin::Container-->
    <div class="container-fluid d-flex align-items-stretch justify-content-between" >
        <!--begin::Aside mobile toggle-->
        <div class="d-flex align-items-center d-lg-none ms-n3 me-1" title="Show aside menu">
            <div @click="toggleSidebar" class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px" id="kt_aside_mobile_toggle">
                <!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg-->
                <span class="svg-icon svg-icon-2x mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black" />
                        <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black" />
                    </svg>
                </span>
                <!--end::Svg Icon-->
            </div>
        </div>
        <!--end::Aside mobile toggle-->
        <!--begin::Logo-->
        <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0 me-lg-15">
            <!-- <a href="../../demo1/dist/index.html">
                <img alt="Logo" src="assets/media/logos/logo-1.svg" class="h-20px h-lg-30px" />
            </a> -->
            <router-link to="/" class="fs-1 fw-8">Pakhus</router-link>
        </div>
        <!--end::Logo-->
        <!--begin::Mobile logo-->
        <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0 d-lg-none">
            <h1 style="color: darkgray;">Pakhus</h1>
            <!-- <a href="../../demo1/dist/index.html" class="d-lg-none">
                <img alt="Logo" src="../../assets/media/logos/logo-2.svg" class="h-30px" />
            </a> -->
        </div>
        <!--end::Mobile logo-->
        <!--begin::Wrapper-->
        <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
            <!--begin::Navbar-->
            <div class="d-flex align-items-center" id="kt_header_nav">
            <!--begin::Menu wrapper-->
            <div class="header-menu align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_header_menu_mobile_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
                <!--begin::Menu-->
                <div class="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch" id="#kt_header_menu" data-kt-menu="true">
                    <div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" class="menu-item menu-lg-down-accordion me-lg-1">
                        <router-link to="/faq" class="menu-link py-3">
                            <span class="menu-title fs-2 fw-8">FAQ</span>
                            <span class="menu-arrow d-lg-none"></span>
                        </router-link>
                    </div>
                </div>
                <!--end::Menu-->
            </div>
            <!--end::Menu wrapper-->
            </div>
            <!--end::Navbar-->
            <!--begin::Topbar-->
            <div class="d-flex align-items-stretch flex-shrink-0">
                <!--begin::Toolbar wrapper-->
                <div class="d-flex align-items-stretch flex-shrink-0">
                    <!--begin::User-->
                    <div class="d-flex align-items-center ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <div class="d-flex align-items-center" >
                                <div class="flex-equal text-end ms-1">
									<router-link to="/login"  class="btn btn-success">{{ $t('login') }}</router-link>
								</div>
                                <LocaleSwitcher class="p-3"/>
                                <li class="nav-item dropdown p-3">
                                    <!-- <a v-if="user.name" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                       aria-expanded="false">
                                        {{ user.name }}
                                    </a> -->
                                    <ul class="dropdown-menu dropdown-menu-end border-0 shadow-sm p-4">
                                        <li v-if="user.name"><router-link :to="{ name: 'profile.index' }" class="dropdown-item">{{ $t('profile') }}</router-link></li>
                                        <li>
                                            <div class="separator separator-dashed"></div>
                                        </li>
                                        <li><a class="dropdown-item" :class="{ 'opacity-25': processing }" :disabled="processing"
                                               href="javascript:void(0)" @click="logout">{{ $t('logout') }}</a></li>
                                    </ul>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <!--end::User -->
                </div>
                <!--end::Toolbar wrapper-->
            </div>
            <!--end::Topbar-->
        </div>
        <!--end::Wrapper-->
    </div>
    <!--end::Container-->
</div>
    <!-- <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <router-link to="/" class="navbar-brand">Pakhus</router-link>
            <a class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mt-2 mt-lg-0 me-auto mb-2 mb-lg-0">
                    <LocaleSwitcher />
                </ul>
                <ul class="navbar-nav mt-2 mt-lg-0 ms-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link" aria-current="page">{{ $t('home') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name : 'faqs.index'}" class="nav-link">Blog</router-link>
                        </li>
                    <template v-if="!user?.name">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/login"
                            >{{ $t('login') }}</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/register">{{ $t('register') }}</router-link>
                        </li>
                    </template>
                    <li v-if="user?.name" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ user.name }}
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><router-link class="dropdown-item" to="/admin">Admin</router-link></li>
                            <li><router-link to="/admin/posts" class="dropdown-item">Post</router-link></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="javascript:void(0)" @click="logout">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav> -->
</template>

<script setup>
import { useStore} from "vuex";
import useAuth from "@/composables/auth";
import {computed} from "vue";
import LocaleSwitcher from "../components/LocaleSwitcher.vue";

    const store = useStore();
    const user = computed(() => store.getters["auth/user"])
    const { processing, logout } = useAuth();
</script>
<style>
.fixed{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
}
</style>
