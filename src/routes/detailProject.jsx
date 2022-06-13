import React from 'react';
import './detailProject.css';

const data = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1654959484/Home_rdjsqp.png',
    title: 'Halaman Home',
    description: 'Halaman Home ini bisa diakses oleh semua role baik admin, user maupun guest. Pada halaman Home terdapat button humberger untuk beralih ke tampilan header dan button scroll untuk beralih ke tampilan Features Products.',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1654959565/featuresproducts_eaysyz.png',
    title: 'Halaman Features Products',
    description: 'Halaman Features Products memuat beberapa contoh produk yang tersedia pada website e-commerce.',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1654959578/header_gdjwo1.png',
    title: 'Halaman Header',
    description:
      'Pada halaman Header terdapat menu products untuk menampilkan semua produk yang tersedia di dalam website ecommerce, contact untuk terhubung ke admin, about untuk mengetahui informasi umum website, search untuk mencari produk yang diinginkan, cart untuk melihat produk dalam keranjang dan login atau register untuk mendapatkan hak akses sebagai role user.',
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1654964889/register_moyifl.png',
    title: 'Halaman Register',
    description: 'Pada halaman Register diperlukan data berupa nama, email, password dan foto profile yang secara default akan terdaftar sebagai role user.',
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1654964902/login_dgpgop.png',
    title: 'Halaman Login',
    description:
      'Ketika melakukan login, user harus memasukkan email dan password yang sudah diaftarkan sebelumnya. Setelah login berhasil, maka website e-commerce dapat diakses sebagai role user. Pada halaman ini juga tersedia fitur forget password untuk mengganti password ketika user lupa password sebelumnya.',
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1654968504/forgetpassword_mruqiw.png',
    title: 'Halaman Forgot Password',
    description:
      'Pada halaman Forgot Password, user harus memasukkan alamat email yang akan dilakukan reset password. Kemudian, token reset password akan dikirimkan ke alamat email tersebut sehingga user dapat melakukan akses reset password.',
  },
  {
    id: 7,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1654964921/profil_yelwep.png',
    title: 'Halaman Profile',
    description:
      'Setelah login berhasil maka akan tampil halaman Profile seperti pada gambar di atas. Halaman ini berisi data user berupa nama, email dan waktu join ke website e-commerce. Halaman ini juga menyediakan fitur untuk update profile, change password dan melihat daftar produk yang diorder.',
  },
  {
    id: 8,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1654964936/updateprofile_gev4sy.png',
    title: 'Halaman Update Profile',
    description: 'Pada halaman Update Profile, user dapat melakukan edit data profile berupa nama, email dan foto profile.',
  },
  {
    id: 9,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1654964950/changepassword_ipj97u.png',
    title: 'Halaman Change Password',
    description: 'Pada halaman Change Password, user harus memasukkan data berupa password yang lama, password baru dan konfirmasi password. Pastikan agar password baru dan konfirmasi password sama.',
  },
  {
    id: 10,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1654968762/searchproduct_ltpdb0.png',
    title: 'Halaman Search Product',
    description: 'Pada halaman Search Product, user dapat memasukkkan keyword produk yang ingin dicari. Keyword yang dimasukkan dapat berdasarkan kategori dan nama produk.',
  },
  {
    id: 11,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1654969061/products_rxpskr.png',
    title: 'Halaman Products',
    description: 'Halaman Products ini memuat keseluruhan produk yang dapat diakses oleh semua role. Pada bagian samping kiri terdapat filter yang berguna untuk memfilter produk berdasarkan harga, kategori dan rating.',
  },
  {
    id: 12,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655008606/productsbtm_gy77vo.png',
    title: 'Halaman Products',
    description: 'Pada bagian bawah halaman products terdapat pagination yang berguna untuk berpindah ke halaman products yang lain. Setiap halaman products terdiri dari 8 produk.',
  },
  {
    id: 13,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1654969104/detailproduct_rx7ha9.png',
    title: 'Halaman Detail Product',
    description: 'Halaman Detail Product berisi informasi setiap produk berupa nama, id, harga, stock, dan description. Pada halaman ini juga disediakan fitur untuk add product to cart dan submit review product.',
  },
  {
    id: 14,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1654969139/submitreview_wfnf5k.png',
    title: 'Halaman Submit Review',
    description: 'Ketika button submit review diklik maka akan muncul tampilan card seperti gambar di atas. Pada card submit review tersebut, user dapat memasukkan rating dan komentar terhadap produk yang sudah dibeli.',
  },
  {
    id: 15,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655008616/reviewsproduct_it4rdq.png',
    title: 'Halaman Reviews Product',
    description: 'Pada bagian bawah halaman Detail Product terdapat kolom reviews dari semua user yang sudah memberikan review product.',
  },
  {
    id: 16,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655007759/cart_gyqizz.png',
    title: 'Halaman Cart Products',
    description:
      'Halaman Cart memuat informasi detail produk, fitur penambahan dan pengurangan jumlah produk, total harga per produk dan total harga keseluruhan produk di dalam cart. Selain itu, terdapat fitur remove product dari cart dan button checkout untuk melanjutkan ke tahap confirm order.',
  },
  {
    id: 17,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655007801/shippingdetails_dgvxx2.png',
    title: 'Halaman Shipping Details',
    description:
      'Pada halaman Shipping Details, user diharuskan memasukkan beberapa data pribadi berupa alamat, kota tempat tinggal, kode pos, nomor telepon, negara dan provinsi. Pada bagian atas terdapat label checkout steps yang berisi informasi proses order produk.',
  },
  {
    id: 18,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655007823/confirmorder_zb4qxx.png',
    title: 'Halaman Confirm Order',
    description: 'Halaman Confirm Order berisi informasi berupa shipping info, keterangan produk yang akan diorder dan order summary. Jika informasi yang ditampilkan sudah benar, user dapat melanjutkan ke proses payment.',
  },
  {
    id: 19,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655007841/payment_acnfos.png',
    title: 'Halaman Payment',
    description: 'Sistem payment pada website e-commerce ini menggunakan stripe. Untuk melakukan sistem payment diperlukan beberapa data berupa nomor kartu visa, tanggal mendatang nomor visa berlaku, dan tiga angka CVC.',
  },
  {
    id: 20,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655007857/paymentsuccess_o0clku.png',
    title: 'Halaman Payment Success',
    description: 'Ketika payment authentication berhasil maka akan muncul tampilan seperti gambar di atas yang menyatakan bahwa proses order produk berhasil.',
  },
  {
    id: 21,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655007873/myorders_ogo7al.png',
    title: 'Halaman Order -- User',
    description: 'Halaman order untuk tampilan user tersebut berisi informasi mengenai semua produk yang berhasil diorder berupa id produk, status order, jumlah item, total harga dan akses untuk melihat detail order.',
  },
  {
    id: 22,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655007887/orderdetail_ovcwga.png',
    title: 'Halaman Detail Order -- User',
    description: 'Halaman detail order memuat informasi mengenai shipping info yang berisi data user (customer), payment status, order status dan order items.',
  },
  {
    id: 23,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655015383/dashboardadmin_cbgssu.png',
    title: 'Halaman Dashboard -- Admin',
    description:
      'Halaman dashboard ini hanya bisa diakses oleh role admin. Halaman dashboard ini berfungsi untuk memudahkan admin dalam mengelola website e-commerce yang terdiri dari akses untuk mengelola products, orders, users dan reviews. Pada halaman dashboard juga terdapat beberapa informasi berupa jumlah products, orders, users dan total penjualan.',
  },
  {
    id: 24,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655015396/diagrampayment_wfejst.png',
    title: 'Diagram Penjualan',
    description: 'Pada halaman dashboard juga terdapat diagram garis yang mempresentasikan total penjualan saat ini.',
  },
  {
    id: 25,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655015409/diagramstockproduct_wp59xr.png',
    title: 'Diagram Stock Product',
    description: 'Diagram berbentuk kue donat ini berfungsi untuk mempresentasikan status stock product. Warna ungu untuk stock product yang masih ada (in stock) dan warna biru untuk stock product yang habis (out of stock).',
  },
  {
    id: 26,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655015441/createproduct_iq4zr0.png',
    title: 'Halaman Create Product -- Admin',
    description: 'Halaman Create Product dapat diakses oleh admin ketika ingin menambahkan produk baru dengan memasukkan beberapa data produk berupa nama, harga, description, kategori, stock dan gambar produk.',
  },
  {
    id: 27,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655015425/allproducts_u79wxi.png',
    title: 'Halaman All Products -- Admin',
    description: 'Halaman All Products memuat informasi semua product berupa product ID, nama product, harga dan stock. Pada halaman ini, admin diberikan hak akses untuk melakukan edit dan delete product.',
  },
  {
    id: 28,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655015461/allorders_wxpcqu.png',
    title: 'Halaman All Orders -- Admin',
    description: 'Halaman All Orders berisi informasi mengenai status order, jumlah product dan total harga. Pada halaman ini, admin juga diberikan hak akses untuk edit status order dan delete order yang sudah selesai diproses.',
  },
  {
    id: 29,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655015478/editorder_tzpvnc.png',
    title: 'Halaman Edit Order -- Admin',
    description: 'Pada halaman Edit Order, admin dapat mengubah status order dari processing, shipped hingga delivered.',
  },
  {
    id: 30,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655015498/allusers_szl7eg.png',
    title: 'Halaman All Users -- Admin',
    description: 'Halaman All Users ini berisi infromasi semua admin dan user yang sudah terdaftar. Pada halaman ini, admin diberikan hak akses untuk edit dan delete users.',
  },
  {
    id: 31,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655015513/edituser_omnpot.png',
    title: 'Halaman Edit User -- Admin',
    description: 'Pada halaman edit user, admin dapat melakukan perubahan pada data user berupa nama, email dan role (admin atau user).',
  },
  {
    id: 32,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655015537/allreviews_kiklel.png',
    title: 'Halaman All Reviews -- Admin',
    description: 'Halaman All Reviews berfungsi untuk menampilkan sekuruh reviews berdasarkan id product.',
  },
  {
    id: 33,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655015550/allreviewsid_sefop8.png',
    title: 'Halaman All Reviews based on ID -- Admin',
    description: 'Setelah id product dimasukkan maka akan muncul seluruh reviews dari user seperti pada tampilan gambar di atas.',
  },
  {
    id: 34,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655015561/contactadmin_sviggk.png',
    title: 'Halaman Contact',
    description: 'Halaman Contact berisi alamat email yang dapat dihubungi oleh user maupun guest.',
  },
  {
    id: 35,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1655015578/aboutus_uhpuh1.png',
    title: 'Halaman About',
    description: 'Halaman About berisi informasi mengenai media sosial website e-commerce.',
  },
];

const DetailProject = () => {
  return (
    <div className="container container-detailproject">
      <div className="detailproject_header">
        <h2>Website E-commerce</h2>
        <h5>MongoDB || Express JS || Node JS || React JS</h5>

        <p>
          Website e-commerce ini dibuat dengan menerapkan teknologi MERN yaitu React JS untuk frontend, redux untuk state management, Node JS dan Express JS untuk backend dan MongoDB sebagai database. Hak akses yang diterapkan dalam website
          e-commerce ini dibagi ke dalam 3 role yaitu sebagai admin, user dan guest. Untuk role admin sudah disediakan halaman dashboard tersendiri yang dapat memudahkan untuk mengelola website e-commerce. Sedangkan guest memiliki hak akses
          yang sangat terbatas karena ada beberapa fitur website yang hanya bisa diakses jika sudah login (role user). Adapun fitur-fitur di dalam website e-commerce ini akan dijelaskan secara detail sebagai berikut.
        </p>
      </div>

      <div className="detailproject_content">
        {data.map(({ id, image, title, description }) => {
          return (
            <article key={id} className="content_item">
              <h3>{title}</h3>
              <div className="content_item-image">
                <img src={image} alt={title} />
              </div>
              <p>{description}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default DetailProject;
