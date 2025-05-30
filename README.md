# Task Manager

Aplikasi manajemen tugas sederhana menggunakan **ReactJS**, **Laravel Inertia**, dan **MySQL**.

## Deskripsi

Task Manager ini memungkinkan pengguna untuk membuat, mengedit, menghapus, dan mengelola tugas dengan mudah melalui antarmuka ReactJS yang terintegrasi langsung dengan backend Laravel menggunakan Inertia.js.

## Teknologi

- Frontend: ReactJS
- Backend: Laravel + Inertia.js
- Database: MySQL

## Instalasi

1. Clone repository:
   ```bash
   git clone https://github.com/hannadarmawan/task-manager.git
   cd task-manager

2. Install dependencies backend:
    composer install

3. Install dependencies frontend:

    npm install
    # atau
    yarn install

4. Salin file konfigurasi lingkungan:

    cp .env.example .env
   
5. Sesuaikan konfigurasi database pada .env.
6. Generate key aplikasi:

    php artisan key:generate

8. Migrasi database:

   php artisan migrate

Jalankan server Laravel:

    php artisan serve

Jalankan compiler frontend:

    npm run dev
    # atau
    yarn dev
    
    Buka di browser: http://localhost:8000

## Environment Variables

Pastikan variabel berikut sudah diatur di file `.env` agar aplikasi berjalan dengan benar:

APP_NAME=Laravel
APP_ENV=local
APP_KEY= # hasil dari php artisan key:generate
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=task_manager   
DB_USERNAME=root    
DB_PASSWORD=    


