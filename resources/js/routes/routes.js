import Cookies from 'js-cookie'
import store from "../store";

const AuthenticatedLayout = () => import('../layouts/Authenticated.vue')
const GuestLayout = ()  => import('../layouts/Guest.vue');
const UserLayout = () => import("../layouts/User.vue");

const PostsIndex  = ()  => import('../views/admin/posts/Index.vue');
const PostsCreate  = ()  => import('../views/admin/posts/Create.vue');
const PostsEdit  = ()  => import('../views/admin/posts/Edit.vue');

function requireLogin(to, from, next) {
    let isLogin = false;
    isLogin = !!store.state.auth.authenticated;
    if (isLogin) {
        next()
    } else {
        next('/login')
    }
}

function guest(to, from, next) {
    let isLogin;
    isLogin = !!store.state.auth.authenticated;

    if (isLogin) {
        next('/')
    } else {
        next()
    }
}

export default [
    {
        path: '/',
        redirect: {
            name: 'home.index'
        },
        component: UserLayout,
        children: [
            {
                path: 'login',
                name: 'auth.login',
                component: () => import('../views/login/Login.vue'),
            },
            {
                path: 'home',
                name: 'home.index',
                component: () => import('../views/home/index.vue'),
            },
            {
                path: 'register',
                name: 'auth.register',
                component: () => import('../views/register/index.vue'),
            },
            {
                path: 'faq',
                name: 'faq.index',
                component: () => import('../views/faqs/Index.vue'),
            },
        ]
    },
    {
        path: '/',
        component: UserLayout,
        beforeEnter: requireLogin,
        children: [
            {
                path: 'proposals',
                name: 'proposals.index',
                component: () => import('../views/proposals/Index.vue'),
            },
            {
                path: 'proposals/create',
                name: 'proposals.create',
                component: () => import('../views/proposals/Create.vue'),
            },
            // {
            //     path: 'faq',
            //     name: 'faq.index',
            //     component: () => import('../views/faqs/Index.vue'),
            // },
            {
                path: 'faqs',
                name: 'faqs.index',
                component: () => import('../views/faqs/faqs.vue'),
            },
            {
                path: 'sales/create',
                name: 'sales.create',
                component: () => import('../views/sales/create.vue'),
            },
            {
                path: 'sales/:id',
                name: 'sales.details',
                component: () => import('../views/sales/details.vue'),
            },
            {
                path: 'salesManager/:id',
                name: 'salesManager.edit',
                component: () => import('../views/sales/Edit.vue'),
            },
            {
                path: 'salesManager',
                name: 'salesManager.index',
                component: () => import('../views/sales/Manager.vue'),
                beforeEnter: requireLogin,
            },
            {
                path: 'sales',
                name: 'sales.index',
                component: () => import('../views/sales/Index.vue'),
                beforeEnter: requireLogin,
            },
            {
                name: 'profile.index',
                path: 'profile',
                component: () => import('../views/admin/profile/index.vue'),
                meta: { breadCrumb: 'Profile' }
            },
            {
                name: 'users.index',
                path: 'users',
                component: () => import('../views/admin/users/Index.vue'),
                meta: { breadCrumb: 'Users' }
            },
            {
                name: 'users.create',
                path: 'users/create',
                component: () => import('../views/admin/users/Create.vue'),
                meta: { breadCrumb: 'Add New' }
            },
            {
                name: 'users.edit',
                path: 'users/edit/:id',
                component: () => import('../views/admin/users/Edit.vue'),
                meta: { breadCrumb: 'User Edit' }
            },
            {
                path: 'reset-password',
                name: 'auth.reset-password',
                component: () => import('../views/auth/passwords/Reset.vue'),
            },
        ]
    },
    {
        path: "/:pathMatch(.*)*",
        name: 'NotFound',
        component: () => import("../views/errors/404.vue"),
    },
];
