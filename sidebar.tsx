"use client"
import { ReactNode, useEffect, useState } from 'react';
import Link from "next/link";

type SidebarProps = {
    children: ReactNode;
    title: string;
}

export default function sidebar({children, title}: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <header className=" w-full bg-white shadow-md px-6 py-3 flex items-center">
                <img src="image/logo.png" alt="logo" className="w-40 mt-2 mb-2"/>
                
                <div className="hidden md:inline ml-auto text-right mr-0 text-md font-bold">
                    <Link href="/" className="hover:text-[#7a2222]">Home</Link>
                    <Link href="/profil" className="hover:text-[#7a2222] ml-4">Profile</Link>
                    <Link href="/berita" className="hover:text-[#7a2222] ml-4">News</Link>
                </div>

                {isOpen ? (
                    <button onClick={() => setIsOpen (false)} className='md:hidden absolute right-6 top-5 text-2xl font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                    </button>
                ):(
                    <button onClick={() => setIsOpen(true)} className='md:hidden absolute right-6 top-5 text-2xl font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </button>
                )}
                {isOpen && (
                    <div className='md:hidden absolute left-0 w-full top-15 bg-white shadow-md'>
                        <div className="flex flex-col p-3">
                            <Link href="/" className="hover:text-[#7a2222] pl-3">Home</Link>
                            <Link href="/profil" className="hover:text-[#7a2222] ml-3 mt-2">Profile</Link>
                            <Link href="/berita" className="hover:text-[#7a2222] ml-3 mt-2">News</Link>
                        </div>
                    </div>
                )}

                <div className="text-lg font-bold ml-4 hover:text-[#7a2222] hover:underline">{title}</div>
                
            </header>

            <div className='text-2xl'>{title}</div>
            <div className="">{children}</div>

            <footer>
            <div className="w-full h-full bg-[#C55454] mx-auto px-6 text-white grid md:grid-cols-3 pb-5 gap-8">

                <div className="md:justify-self-start md:ml-10 justify-self-center"> 
                    <h4 className="font-bold mb-3 mt-10 md:text-left text-center">Contact Now</h4>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center gap-3">
                            <img className="w-5" src="image/email.png" alt="Email" />
                            <span>alyaIr@gmail.com</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center justify-center gap-3">
                            <img className="w-5" src="image/telpon.png" alt="Telepon" />  
                            <span>08**********</span>
                        </div>
                    </div>
                </div>

                <div className="justify-self-center"> 
                    <h4 className="font-bold mb-3 mt-10 md:text-left text-center">Address</h4>

                    <div className="flex items-center gap-3">
                        <img className="w-5" src="image/pesawat.png" alt="Pesawat" />
                        <span>Jl. Serba Ada no.10, Desa Angin, <br/> Kota Langit 12345</span>
                    </div>
                </div>

                <div className="md:justify-self-end md:mr-15 justify-self-center"> 
                    <h4 className="font-bold mb-3 mt-10">Social Media</h4>

                    <div className="flex items-center gap-3"> 
                        <img className="w-6 hover:opacity-50" src="image/ig.png" alt="IG" />
                        <img className="w-6.5 hover:opacity-50" src="image/twitter.png" alt="X" />
                        <img className="w-4.5 hover:opacity-50" src="image/facebook.png" alt="FB" />            
                    </div>
                </div>
            </div>
            </footer>
        </div>
    );
}