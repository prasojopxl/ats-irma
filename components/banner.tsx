import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function Banner() {
    return (
        <div className="bg-gradient-to-r flex items-center justify-center h-screen from-[#ECF2F6] to-[#fff]">
            <div className="container">
                <div className="content flex items-center sm:flex-row flex-col">
                    <div className="item flex-1">
                        <h1 className="text-[50px]">
                            ATS <span className="text-red">Internet</span>
                        </h1>
                        <h3>
                            Internet Service Provider untuk wilayah Jakarta,
                            Depok, Tangerang, Bekasi, Cikarang, Karawang,
                            Purwakarta
                        </h3>
                        <Link
                            href="https://wa.me/628971446692"
                            className="btn mt-5"
                            target="_blank"
                        >
                            Pasang Sekarang
                        </Link>
                    </div>
                    <div className="item flex-2">
                        <Image
                            src="/images/connected-cuate.svg"
                            width={500}
                            height={500}
                            alt="image"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
