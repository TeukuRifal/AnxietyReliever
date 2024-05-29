# Platform Dukungan Kesehatan Mental untuk Siswa

Selamat datang di platform kami yang didedikasikan untuk mendukung siswa sekolah seperti kamu dalam menghadapi tantangan kesehatan mental, khususnya kecemasan. Kami memahami bahwa kehidupan sekolah dapat menimbulkan tekanan dan perasaan cemas. Kami di sini untuk membantumu mengelola kecemasan dan menjaga kesehatan mentalmu.

## Fitur

- **Kuis Penilaian Kecemasan**: Ikuti kuis kami untuk menentukan tingkat kecemasanmu saat ini. Hasilnya akan membantumu memahami posisimu dan memberikan saran yang dipersonalisasi tentang cara mengelola kecemasan.
- **Saran yang Dipersonalisasi**: Berdasarkan hasil kuismu, terima saran dan strategi yang disesuaikan untuk membantu mengatasi kecemasan.
- **Sumber Daya dan Tips**: Akses berbagai sumber daya, termasuk artikel, video, dan aktivitas yang dirancang untuk meningkatkan kesehatan mentalmu.
- **Komunitas Dukungan**: Terhubung dengan siswa lain yang memahami apa yang kamu alami. Berbagi pengalaman, memberikan dukungan, dan membangun jaringan teman yang peduli.
- **Bantuan Profesional**: Temukan informasi tentang cara mencari bantuan dari profesional kesehatan mental saat kamu membutuhkannya.

## Cara Kerja

1. **Ikuti Kuis**: Jawab 10 pertanyaan yang menilai berbagai aspek kecemasanmu.
2. **Dapatkan Hasilmu**: Terima hasil tingkat kecemasanmu secara instan yang dikategorikan sebagai rendah, sedang, atau tinggi.
3. **Terima Saran yang Dipersonalisasi**: Berdasarkan tingkat kecemasanmu, dapatkan saran dan sumber daya spesifik untuk membantu mengelola perasaanmu.
4. **Jelajahi Sumber Daya**: Telusuri daftar artikel, video, dan aktivitas yang dikurasi untuk mendukung perjalanan kesehatan mentalmu.
5. **Bergabung dengan Komunitas**: Berinteraksi dengan siswa lain, berbagi pengalaman, dan temukan kenyamanan dalam mengetahui bahwa kamu tidak sendirian.

## Tingkat Kecemasan dan Saran

### Kecemasan Rendah
- **Pesan**: Tingkat kecemasanmu rendah.
- **Warna Latar Belakang**: Hijau
- **Warna Teks**: Putih
- **Saran**: Tetap pertahankan pola hidup sehat dan berpikir positif.

### Kecemasan Sedang
- **Pesan**: Tingkat kecemasanmu sedang.
- **Warna Latar Belakang**: Kuning
- **Warna Teks**: Hitam
- **Saran**: Coba lakukan relaksasi, olahraga, atau hobi yang menyenangkan.

### Kecemasan Tinggi
- **Pesan**: Tingkat kecemasanmu tinggi.
- **Warna Latar Belakang**: Merah
- **Warna Teks**: Hitam
- **Saran**: Segera konsultasikan dengan ahli kesehatan mental atau psikolog.

## Cara Instalasi

Untuk mulai menggunakan platform kami, ikuti langkah-langkah berikut:

1. **Kloning Repositori**
   ```
   git clone https://github.com/TeukuRifal/AnxietyReliever

2. **Pindah ke Direcrtory**
   ```
   cd AnxietyReliever
   
3. **Install Dependency**
   ```bash
   npm run dev
   
5. **migrate the table**

  Copy the contents of `.env.example` file to new `.env` file:

  ```sh
  cp .env.example .env
  ```
  
  or if error, run this
  
  ```sh
  copy .env.example .env
  ```
  
  Create an empty database and fill in the `DB_DATABASE`, `DB_USER`, and `DB_PSASWORD` fields in the `.env` file to match the credentials of your newly created database.
  
  following the .env file, change `DB_DATABASE = adonis-starter`, so make the empty database name is `adonis-starter`
  
  Run the migrations:
  
  ```sh
  node ace migration:run
  ```

4. run serve with

  ```bash
  node ace serve --watch
  ```
  or
  ```bash
  npm run dev
  ```

## Support

Jika kamu menemui masalah atau memiliki pertanyaan, jangan ragu untuk membuka isu di repositori ini atau hubungi kami di trifalaulia@gmail.com

