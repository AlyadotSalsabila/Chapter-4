import Link from "next/link";
import Image from "next/image";
import { beritaList } from '../../../data/berita';

type Props = Promise <{
    id: number,
}>;
export default async function detailBerita({params}:{params: Props}) {
    const {id} = await params;
    const berita = beritaList.find((b) => b.id === id);
    if (!berita) return <div>Project not found</div>;
    return(
        <div className="mx-auto p-4">
            <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <p className='font-semibold text-sm text-soft-brown'>{berita?.category}</p>
                <h1 className="text-2xl font-bold text-white">{berita?.nama}</h1>
                <p className="mb-4">{berita?.isi}</p>    
                <Image
                    alt={berita.nama} 
                    src={berita.image} 
                    unoptimized />
            </div> 
        </div>
    )
}
