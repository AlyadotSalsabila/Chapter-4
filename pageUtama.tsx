import Sidebar from "@/components/sidebar";
import Link from "next/link";

export default function Home() {
  return(
    <Sidebar title="">
      <section className="bg-red-100/20 mt-0">
        <div className="mx-auto md:pl-30 flex flex-col md:flex-row items-center container mr-0 md:justify-between">
          <div className="text-center md:text-left flex flex-col justify-center md:ml-25">
            <h1 className="md:mt-0 mt-10 text-3xl text-amber-950 font-bold">Selamat Datang di</h1>
            <img src="image/logo.png" alt="" className="md:w-sm w-70 mt-2 "/>

            <div className="w-full flex justify-center md:justify-start mt-6">
              <button className="bg-[#C55454] hover:bg-[#ab3d3d] rounded-xl w-50 h-10 text-white pl-2 text-center">Lihat selengkapnya</button>
            </div>
          </div>

          <img src="image/sayhi2.png" alt="" className="w-lg mt-10"/>
        </div>
      </section>

      <section>
        <div className="mb-10">
          <h1 className="font-bold text-2xl text-center mt-5">Layanan Kami</h1>
          
           <div className="mx-auto px-6 mt-10 flex items-center justify-center">
            <div className="grid md:grid-cols-3 gap-20 text-center text-white">
              <div className="bg-[#C55454] hover:bg-[#ab3d3d] p-5 md:h-60 md:w-40 h-80 w-80 flex flex-col items-center text-center justify-center rounded-md">
                <img className="mx-auto w-25 mb-4" src="image/kucing.png" alt=""/>
                <h3 className="font-bold text-lg mb-2">Grooming</h3>
              </div>

              <div className="bg-[#C55454] hover:bg-[#ab3d3d] p-5 md:h-60 md:w-40 h-80 w-80 flex flex-col items-center text-center justify-center rounded-md">
                <img className="mx-auto w-23 mb-4" src="image/makanan.png" alt="" />
                <h3 className="font-bold text-lg mb-2">Cat's Product</h3>
              </div>

              <div className="bg-[#C55454] hover:bg-[#ab3d3d] p-5 md:h-60 md:w-40 h-80 w-80 flex flex-col items-center text-center justify-center rounded-md">
                <img className="mx-auto w-25 mb-4" src="image/hotel.png" alt="" />
                <h3 className="font-bold text-lg mb-2">Cat's Hotel</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-100/20 pt-5 pb-5">
        <div>
          <h1 className="text-center text-2xl font-bold">Berita Terbaru</h1>
         <div className="grid md:grid-cols-3 gap-2">
            <div className="p-4">
              <img src="image/grooming.png" alt="" className="rounded-lg mb-4"/>
              <h2 className="text-lg font-semibold">Hadirkan Layanan Premium, Bantu Kucing Tetap Sehat dan Bebas Stres</h2>
              <p className="mt-2">Layanan perawatan kucing kini semakin diminati, seiring meningkatnya jumlah pemilik hewan peliharaan di wilayah perkotaan. Menjawab kebutuhan tersebut, Meow.id Grooming..</p>
              <Link href="/detailberita" className="mx-auto mt-5 flex justify-center w-fit p-2 pl-4 pr-4 border-2 border-[#C55454] hover:text-black text-white rounded-lg hover:bg-white bg-[#C55454]">Baca ›</Link>
            </div>

            <div className="p-4">
              <img src="image/hotel2.jpg" alt="" className="rounded-lg mb-4 h-64 w-120"/>
              <h2 className="text-lg font-semibold">Jadi Tempat Favorit Titip Kucing, Tawarkan Fasilitas Premium dan Pengawasan 24 Jam</h2>
              <p className="mt-2">Meningkatnya minat masyarakat untuk bepergian membuat kebutuhan akan layanan penitipan hewan, khususnya kucing, ikut meningkat. Salah satu tempat..</p>
              <Link href="/detailberita" className="mx-auto mt-5 flex justify-center w-fit p-2 pl-4 pr-4 border-2 border-[#C55454] hover:text-black text-white rounded-lg hover:bg-white bg-[#C55454]">Baca ›</Link>
            </div>

            <div className="p-4">
              <img src="image/produk.png" alt="" className="rounded-lg mb-4 h-63"/>
              <h2 className="text-lg font-semibold">Hadirkan Makanan Kucing Rendah Alergen, Solusi untuk Kucing dengan Pencernaan Sensitif</h2>
              <p className="mt-2">Kebutuhan akan makanan kucing yang aman untuk pencernaan sensitif semakin meningkat, terutama di kalangan pemilik kucing ras seperti Persia, British Shorthair, dan Ragdoll..</p>
              <Link href="/detailberita" className="mx-auto mt-5 flex justify-center w-fit p-2 pl-4 pr-4 border-2 border-[#C55454] hover:text-black text-white rounded-lg hover:bg-white bg-[#C55454]">Baca ›</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5">
        <div>
          <h1 className="font-bold text-2xl text-center">Apa kata mereka?</h1>

          <div className="mx-auto px-6 mt-10 flex items-center justify-center">
            <div className="mb-10 grid md:grid-cols-3 gap-5">
              <div className="border-2 border-[#C55454] p-5 h-40 w-90 flex flex-col md:text-left text-center justify-center rounded-md md:mt-0 mt-5">
                <img className="mx-auto -mt-15 md:ml-2 w-15 rounded-full mb-4" src="image/profil1.png" alt="" />
                <h1 className="font-bold text-md md:pl-3">Luna</h1>
                <h2 className="text-sm text-gray-700 md:pl-3 mt-1">Tempatnya bagus, kucing saya senang</h2>
                <h1 className="mt-5 text-blue-900 pl-3 text-sm hover:text-blue-400">Selengkapnya</h1>
              </div>

             <div className="border-2 border-[#C55454] p-5 h-40 w-90 flex flex-col text-center md:text-left justify-center rounded-md md:mt-0 mt-10">
                <img className="mx-auto -mt-15 md:ml-2 w-15 rounded-full mb-4" src="image/profil2.png" alt="" />
                <h1 className="font-bold text-md md:pl-3">Oliver</h1>
                <h2 className="text-sm text-gray-700 md:pl-3 mt-1">Lengkap, ada wet food dan dry food</h2>
                <h1 className="mt-5 text-blue-900 md:pl-3 text-sm hover:text-blue-400">Selengkapnya</h1>
              </div>

              <div className="border-2 border-[#C55454] p-5 h-40 w-90 flex flex-col text-center md:text-left justify-center rounded-md md:mt-0 mt-10">
                <img className="mx-auto -mt-15 md:ml-2 w-15 rounded-full mb-4" src="image/profil3.png" alt="" />
                <h1 className="font-bold text-md md:pl-3">Ginny</h1>
                <h2 className="text-sm text-gray-700 md:pl-3 mt-1">Keren</h2>
                <h1 className="mt-5 text-blue-900 md:pl-3 text-sm hover:text-blue-400">Selengkapnya</h1>
              </div>
            </div>
          </div>

          <button className="flex text-center justify-center border-2 border-[#C55454] p-3 mx-auto rounded-lg hover:bg-[#C55454] hover:text-white">Tampilkan lebih banyak</button>
        </div>
      </section>
    </Sidebar>
  )
}
