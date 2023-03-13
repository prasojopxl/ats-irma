import { Banerpages, Banner, ItemProduct } from "@/components"
import Layout from "@/layout"
import Image from "next/image"
import React from "react"

export default function profile() {
    return (
        <Layout>
            <Banerpages title="Produk" />
            <div className="container overflow-clip py-20">
                <div className="flex flex-wrap mx-[-10px]">
                    <ItemProduct
                        image="/images/img3.png"
                        link="https://www.ats-com.net/new/dedicated-wireless-internet"
                        title="Dedicated Wireless Internet"
                        desc="INTERNET DEDICATED CEPAT dan MURAH
                        "
                    />
                    <ItemProduct
                        image="/images/img2.png"
                        link="https://www.ats-com.net/new/internet-fiber-optic"
                        title="Internet Fiber Optic"
                        desc="FIBER OPTIC INTERNET DEDICATED CEPAT dan MURAH
"
                    />
                    <ItemProduct
                        image="/images/img4.png"
                        link="https://www.ats-com.net/new/interkoneksi-internet-jakarta"
                        title="Interkoneksi Internet"
                        desc="ATS Direct Peer adalah layanan interkoneksi dengan ATS Communication khusus bagi perusahaan"
                    />
                    <ItemProduct
                        image="/images/img1.png"
                        link="https://www.ats-com.net/new/internet-murah"
                        title="Internet Perumahan"
                        desc="Harga paket internet murah yang diperuntukan kepada pengguna personal/perumahan."
                    />
                </div>
            </div>
        </Layout>
    )
}
