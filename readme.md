Express + postgresql (NodeJS Backend)
- Menggunakan express sebagai framework
- Parse halaman database.json menjadi dua table.
- Tabel pertama merupakan tabel API Key
- Tabel kedua merupakan tabel artikel
- Api yang dibuat dapat menyajikan data dengan menggunakan input yang hampir sama dengan newsapi (hanya menerima query string q sebagai query dan sortBy untuk sorting item) dan mengambil data tersebut dari database (artikel table).
- Contoh :
```sh
http://localhost:8080/v2/everything?q=bitcoin&sortBy=publishedAt
```
