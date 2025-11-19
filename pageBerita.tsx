import Link from "next/link";
import Image from "next/image";
import { beritaList } from '../../data/berita';

export default function berita({ searchParams } : {searchParams: {category?: string}}) {
    const category = searchParams.category;
    const filteredBerita = category ? beritaList.filter(berita => berita.category.toLowerCase () === category.toLowerCase()) : beritaList;

    return(
        <div className="bg-red-100/20">
            <div className="container mx-auto pb-10">
                <div className="mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 className="text-center text-2xl font-bold pb-2 pt-5">Berita Terbaru</h1>

                    {/* Category Filter */}
                    <div className="mb-6 flex justify-center gap-2">
                        <Link href="/berita" className={`text-soft-brown ${!category ? 'font-bold' : ''}`}>All</Link>
                        <Link href="/berita?category=perawatan" className={`text-soft-brown ${category === 'perawatan' ? 'font-bold': ''}`}>Perawatan</Link>
                        <Link href="/berita?category=produk" className={`text-soft-brown ${category === 'produk' ? 'font-bold': ''}`}>Produk</Link>
                        <Link href="/berita?category=hotel" className={`text-soft-brown ${category === 'hotel' ? 'font-bold': ''}`}>Hotel</Link>
                    </div>

                    <div className="mt-6 p-4 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-8 justify-center">
                        {filteredBerita.map((berita, index) => (
                            <div key={index} className="group relative">
                                <Link href={'/berita/${berita.id}'}>
                                    <div className="aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75">
                                        <Image
                                            alt={berita.nama}
                                            src={berita.image}
                                            width={500}
                                            height={90}
                                            unoptimized
                                            className="h-full w-full md:h-50 lg:w-200" />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-md text-soft-brown font-bold">{berita.nama}</h3>
                                            <p className="mt-1 text-sm text-gray-700">{berita.isi}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            
                        ))}
                    </div>
                </div>
                <button className="flex text-center justify-center border-2 hover:border-[#C55454] hover:bg-red-100/20 hover:text-black p-3 mt-5 mx-auto rounded-lg bg-[#C55454] text-white">Tampilkan lebih banyak</button>
            </div>
        </div>
    )
}
