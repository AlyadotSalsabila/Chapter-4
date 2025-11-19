export interface beritaList {
    id: number;
    image: string,
    nama: string;
    category: string;
    isi: string;
}

export const beritaList: beritaList[] = [
    {
        id: 1,
        image: "image/grooming.png",
        nama: "Hadirkan Layanan Premium, Bantu Kucing Tetap Sehat dan Bebas Stres",
        category: "Perawatan",
        isi: "Layanan perawatan kucing kini semakin diminati, seiring meningkatnya jumlah pemilik hewan peliharaan di wilayah perkotaan. Menjawab kebutuhan tersebut, Meow.id Grooming.."
    },
    {
        id: 2,
        image: "image/hotel2.jpg",
        nama: "Jadi Tempat Favorit Titip Kucing, Tawarkan Fasilitas Premium dan Pengawasan 24 Jam",
        category: "Hotel",
        isi: "Meningkatnya minat masyarakat untuk bepergian membuat kebutuhan akan layanan penitipan hewan, khususnya kucing, ikut meningkat. Salah satu tempat.."
    },
    {
        id: 3,
        image: "image/produk.png",
        nama: "Hadirkan Makanan Kucing Rendah Alergen, Solusi untuk Kucing dengan Pencernaan Sensitif",
        category: "Produk",
        isi: "Kebutuhan akan makanan kucing yang aman untuk pencernaan sensitif semakin meningkat, terutama di kalangan pemilik kucing ras seperti Persia, British Shorthair, dan Ragdoll.."
    },
    {
        id: 4,
        image: "image/produk.png",
        nama: "Meow.id Resmi Rilis Paket Lengkap Produk Kucing: Makanan, Mainan Interaktif, dan Obat Perawatan Harian",
        category: "Produk",
        isi: "Brand perlengkapan hewan peliharaan Meow.id meluncurkan paket lengkap produk kucing yang mencakup makanan bergizi, mainan interaktif, serta obat perawatan harian. Peluncuran.."
    },
    {
        id: 5,
        image: "image/grooming.png",
        nama: "Layanan Grooming Kucing Meningkat, Pemilik Hewan Peliharaan Makin Peduli Kebersihan dan Kesehatan",
        category: "Perawatan",
        isi: "Tren perawatan kucing atau cat grooming di berbagai kota di Indonesia terus mengalami peningkatan dalam beberapa tahun terakhir. Banyak pemilik kucing kini lebih sadar.."
    },
    {
        id: 6,
        image: "image/hotel2.jpg",
        nama: "MeowStay Cat Hotel Hadirkan Fasilitas Premium untuk Kucing saat Pemilik Sibuk",
        category: "hotel",
        isi: "MeowStay menyediakan berbagai tipe kamar, mulai dari Standard Cozy Room, Deluxe Play Room, hingga VIP Private Suite yang dilengkapi kamera pemantau sehingga pemilik.."
    }
]