import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function Banner() {
    return (
        <div className="bg-gradient-to-r flex items-center justify-center h-screen from-[#ECF2F6] to-[#fff]">
            <div className="container">
                <div className="content flex items-center">
                    <div className="item flex-1">
                        <h1 className="text-[30px]">
                            ATS <span className="text-red">Internet</span>
                        </h1>
                        <h3>
                            Internet Service Provider untuk wilayah Jakarta,
                            Depok, Tangerang, Bekasi, Cikarang, Karawang,
                            Purwakarta
                        </h3>
                        <Link href="#" className="btn mt-5">
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
