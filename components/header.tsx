import Image from "next/image"
import { HiMenuAlt3 } from "react-icons/hi"
import Link from "next/link"
import React, { useState } from "react"

export default function Header() {
    const [menu, setMenu] = useState(false)
    const changeMenu = () => {
        menu ? setMenu(false) : setMenu(true)
    }
    return (
        <>
            <div className="header absolute left-0 top-0 right-0">
                <div className="container mx-auto  flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <div className="bg-white rounded-full overflow-hidden p-2 w-[100px] h-[100px] mr-[10px]">
                            <Image
                                src="/images/logo.jpg"
                                width={100}
                                height={100}
                                alt="logo"
                            />
                        </div>
                        <div className="lg:block hidden">
                            <h2 className="text-[20px] text-red">
                                ATS COMMUNICATION
                            </h2>
                            <h6 className="opacity-[0.5]">Ade Irma Suryani</h6>
                        </div>
                    </Link>
                    <ul
                        className={`lg:flex justify-between font-bold space-x-7 text-lg hidden`}
                    >
                        <li>
                            <Link href="/" className="hover:text-red">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/tentang-kami"
                                className="hover:text-red"
                            >
                                Tentang Kami
                            </Link>
                        </li>
                        <li>
                            <Link href="/produk" className="hover:text-red">
                                Produk
                            </Link>
                        </li>{" "}
                        <li>
                            <Link
                                href="/hubungi-kami"
                                className="hover:text-red"
                            >
                                Hubungi Kami
                            </Link>
                        </li>
                    </ul>
                    <div className="lg:hidden block text-3xl">
                        <HiMenuAlt3 onClick={changeMenu} />
                    </div>
                </div>
            </div>
            {menu ? (
                <>
                    <div
                        className="bg-slate-900 opacity-80 fixed w-full h-full backdrop-blur z-[5]"
                        onClick={changeMenu}
                    ></div>
                    <div className="fixed top-[50%] translate-y-[-50%] left-0 right-0 z-10">
                        <ul
                            className={`block  text-center bg-white shadow-lg mx-4 mt-2 py-[20px]`}
                        >
                            <li>
                                <Link href="/" className="p-2 block">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/tentang-kami"
                                    className="p-2 block"
                                >
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link href="/produk" className="p-2 block">
                                    Produk
                                </Link>
                            </li>{" "}
                            <li>
                                <Link
                                    href="/hubungi-kami"
                                    className="p-2 block"
                                >
                                    Hubungi Kami
                                </Link>
                            </li>
                        </ul>
                    </div>
                </>
            ) : null}
        </>
    )
}
