<div align="center">

### LAPORAN PRAKTIKUM
![logo pens](media/image1.jpg)  

**Nama Dosen Pengampu**:  
Bapak Dr. Ferry Astika Saputra ST, M.Sc  
<br>
**Dikerjakan oleh**:  
Nama: Moch. Alif Akbar  
Kelas: 2 D4 IT A  
NRP: 3123600025  
<br>
**DEPARTEMEN TEKNIK INFORMATIKA DAN KOMPUTER**  
**POLITEKNIK ELEKTRONIKA NEGERI SURABAYA**  
**2025**  
</div>

---

#### 1. Instalasi
**a. Power BI**
![logo pens](media/image97.png)<br>
Analisis: power BI dapat diinstall di microsoft store.

**b. Connector MySQL**
![logo pens](media/image103.png)<br>
Analisis: Power BI hanya bisa mengakses database MySQL dengan adanya connector ini, untuk itu maka penginstall ini perlu dilakukan.

<br><br>

#### 2. Menyiapkan Container MySQL
**a. Pembuatan `docker-compose.yaml`**

```bash
version: '3.8'

services:
  db:
    image: mysql:8.0
    container_name: mysql-container
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: rahasia123
      MYSQL_DATABASE: appdb
      MYSQL_USER: appuser
      MYSQL_PASSWORD: appsecret
    volumes:
      - mysql-data:/var/lib/mysql
    ports:
      - "3306:3306"

volumes:
  mysql-data:
```
Analisis:
- `version:` '3.8' versi sintaks file Docker Compose yang digunakan.
- `services:` Mendefinisikan berbagai layanan yang akan dijalankan dari proyek.
- `db:` Mendefinisikan sebuah layanan yang diberi nama db, yang nantinya akan menjalankan database.
- image: mysql:8.0 Menentukan bahwa layanan db akan menggunakan image Docker resmi MySQL versi 8.0.
- `container_name:` mysql-container Memberikan nama spesifik mysql-container pada kontainer yang akan dibuat untuk layanan db.
- `restart:` unless-stopped Menginstruksikan Docker untuk selalu menjalankan ulang kontainer ini kecuali jika kontainer dihentikan secara manual.
- `environment:` Mendefinisikan variabel lingkungan (environment variables) yang akan digunakan di dalam kontainer db.
-` MYSQL_ROOT_PASSWORD:` rahasia123 Mengatur kata sandi untuk pengguna root MySQL di dalam kontainer menjadi rahasia123.
- `MYSQL_DATABASE:` appdb Membuat sebuah database bernama appdb secara otomatis saat kontainer pertama kali dijalankan.
- `MYSQL_USER:` appuser Membuat pengguna baru MySQL bernama appuser di dalam kontainer.
- `MYSQL_PASSWORD:` appsecret Mengatur kata sandi untuk pengguna appuser menjadi appsecret.
- `volumes:` Mendefinisikan bagaimana data penyimpanan (volume) akan dikelola untuk layanan ini.
- `mysql-data:`/var/lib/mysql Memetakan volume bernama mysql-data ke direktori /var/lib/mysql di dalam kontainer, tempat MySQL menyimpan datanya, agar data tetap ada meskipun kontainer dihentikan atau dihapus.
- `ports:` Mendefinisikan pemetaan port antara mesin host dan kontainer.
- `"3306:3306"` Memetakan port 3306 pada mesin host ke port 3306 di dalam kontainer, memungkinkan akses ke MySQL dari luar kontainer melalui port standar MySQL.
- `volumes:` (di level root) Mendefinisikan volume Docker yang akan digunakan oleh layanan-layanan.
- `mysql-data:` Mendeklarasikan sebuah volume bernama mysql-data yang akan dikelola oleh Docker untuk penyimpanan data.

**b. Running Container MySQL**
![logo pens](media/image98.png)<br>
Analisis: menjalankan docker-compose.yaml yang telah dibuat dengan perintah `docker compose -f "docker-compose.yaml" up -d --build`

<br><br>

#### 3. Copy file sql database ke dalam container docker<br>
![logo pens](media/image100.png)<br>
Analisis: copy ini diperlukan agar mysql yang ada dalam container dapat membaca Querynya, karena berada dalam volume yang sama.

<br><br>

#### 4. running file sql database<br>
![logo pens](media/image99.png)<br>
Analisis: Perintah ini digunakan untuk menjalankan sebuah perintah di dalam kontainer yang sudah berjalan (yaitu mysql-container).Bagian -it membuatnya interaktif dan mengalokasikan pseudo-TTY. lalu `mysql -u appuser -pappsecret appdb` untuk masuk ke mysql sebagai appuser dengan db appdb.

![logo pens](media/image101.png)<br>
Analisis: mengeksekusi file query yang telah dicopy tadi dengan perintah SOURCE /axondb.sql

<br><br>

![logo pens](media/image102.png)<br>
Analisis: menampilkan hasil eksekusi.

#### 5. menghubungkan ke Power BI<br>
**a. buka Power BI, tab Home, Get Data, pilih Database, pilih MySQL Database**
![logo pens](media/image104.png)<br>
Analisis: Power BI akan menanyakan server MySQL yang akan digunakan dan nama databasenya.

**b. masukkan username dan password dari database yang telah dibuat**
![logo pens](media/image105.png)<br>
Analisis: lalu setelahnya, memasukkan kredensial databasenya.

**c. pilih table yang akan diimpor**
![logo pens](media/image106.png)<br>
Analisis: memilih ekspor tabel mana yang akan digunakan. Load untuk langsung memuat data ke Power BI, atau Transform Data untuk membuka Power Query Editor jika Anda perlu membersihkan atau mengubah data sebelum dimuat.

**d. visualkan data sesuai yang dibutuhkan**
![logo pens](media/image107.png)<br>
Analisis: dari database., kita dapat memvisualisasikan data sesuai keinginan dengan berbagai tools yang disediakan Power BI.