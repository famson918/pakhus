## Pakhus

[![](https://img.shields.io/badge/vue.js-v3.3-04C690.svg)](https://vuejs.org)
[![](https://img.shields.io/badge/Laravel-v10.26.2-ff2e21.svg)](https://laravel.com)
[![](https://img.shields.io/badge/bootstrap-v5.3-712cf9.svg)](https://getbootstrap.com)
[![](https://img.shields.io/badge/axios-v1.5-5A29E4.svg)](https://axios-http.com)
[![](https://img.shields.io/badge/vite-v4.4-646cff.svg)](https://vitejs.dev)

- [Laravel 10.x](https://github.com/laravel/laravel)
- [Laravel Sanctum](https://laravel.com/docs/10.x/sanctum)
- [Vue 3](https://github.com/vuejs/vue)
- [Vue Router](https://router.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Vue I18n](https://vue-i18n.intlify.dev)
- [Laravel Request Docs](https://github.com/rakutentech/laravel-request-docs)

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Features

The following Sanctum features are implemented in this Vue SPA:

- ✅ Laravel 10
- ✅ Vue 3
- ✅ VueRouter + Vuex
- ✅ Vue I18n Multi Language
- ✅ Login
- ✅ Password Reset
- ✅ Registration
- ✅ Admin Panel
- ✅ Profile Management
- ✅ User Management
- ✅ Roles Management
- ✅ Permissions Management
- ✅ Password Change
- ✅ E-Mail Verification
- ✅ Posts Management
- ✅ Frontend Blog
- ✅ Bootstrap 5
- ✅ Automatic Api Documentation  -- route  /api-docs

## How To Use
#### Clone the repository

```bash
git clone https://github.com/irabbi360/laravel-vue3-spa-starter.git
```

#### Copy .env.example file to .env and edit credentials also set app url

#### Install Via Composer

```bash
composer install
```

#### Generate Application Key

```bash
php artisan key:generate
```

#### Migrate Database

```bash
php artisan migrate
```

#### Run Seeder

```bash
php artisan db:seed
```

#### link storage

```bash
php artisan storage:link
```

#### Install Node Dependencies

```bash
npm install or yarn install

npm run dev or yarn dev
```
#### Production

```bash
npm run build or yarn build
```

## Email Verification

To enable email verification make sure that your `App\User` model implements the `Illuminate\Contracts\Auth\MustVerifyEmail` contract.