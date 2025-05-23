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
![logo pens](media/image97.png)

**b. Connector MySQL**
![logo pens](media/image103.png)

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
<br>

**b. Running Container MySQL**
![logo pens](media/image98.png)
![logo pens](media/image99.png)

#### 3. Copy file sql database ke dalam container docker<br>
![logo pens](media/image100.png)

<br><br>

#### 4. running file sql database<br>
![logo pens](media/image101.png)<br><br>
![logo pens](media/image102.png)

#### 5. menghubungkan ke Power BI<br>
**a. buka Power BI, tab Home, Get Data, pilih Database, pilih MySQL Database**
![logo pens](media/image104.png)

**b. masukkan username dan password dari database yang telah dibuat**
![logo pens](media/image105.png)

**c. pilih table yang akan diimpor**
![logo pens](media/image106.png)

**d. visualkan data sesuai yang dibutuhkan**
![logo pens](media/image107.png)