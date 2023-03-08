import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function Header() {
    return (
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
                    <div>
                        <h2 className="text-[20px] text-red">
                            ATS COMMUNICATION
                        </h2>
                        <h6 className="opacity-[0.5]">Ade Irma Suryani</h6>
                    </div>
                </Link>
                <ul className="flex justify-between font-bold space-x-7 text-lg">
                    <li>
                        <Link href="/" className="hover:text-red">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="hover:text-red">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="hover:text-red">
                            Produk
                        </Link>
                    </li>{" "}
                    <li>
                        <Link href="/" className="hover:text-red">
                            Hubungi Kami
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}