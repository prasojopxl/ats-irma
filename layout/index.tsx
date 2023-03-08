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
            </Head>
            <Header />
            {props.children}
            <Link
                href="https://wa.me/628971446692"
                className="fixed bottom-1 right-1 w-[100px] block align-middle text-center"
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
