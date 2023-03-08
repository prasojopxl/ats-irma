import { Header } from "@/components"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function Layout(props: any) {
    return (
        <>
            <Head>
                <title>
                    ATS Internet | Kontak person ade irma suryani untuk
                    pemasangan internet, wifi wireless, dan fiber
                </title>
                <meta
                    name="description"
                    content="Pasang internet dengan mudah untuk wilayah jakarta bogor tangerang dan bekasi untuk perkantoran dan perumahan. Koneksi internet cepat dan stabil "
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </Head>
            <Header />
            {props.children}
            <div className="bg-slate-100 p-5 text-center text-sm">
                &copy; {new Date().getFullYear()}
            </div>
            <Link
                href="https://wa.me/628971446692"
                className="fixed bottom-1 right-1 w-[100px] block align-middle text-center"
                target="_blank"
            >
                <Image
                    src="/images/wa.png"
                    alt="order"
                    width={50}
                    height={50}
                    className="mx-auto"
                />
                <span className="text-[12px]">Marketing Kami</span>
            </Link>
        </>
    )
}
