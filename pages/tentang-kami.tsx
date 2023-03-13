import { Banerpages, Banner } from "@/components"
import Layout from "@/layout"
import Image from "next/image"
import React from "react"

export default function profile() {
    return (
        <Layout>
            <Banerpages title="Tentang Kami" />
            <div className="container overflow-clip py-20">
                <div className="lg:flex flex-wrap">
                    <div className="flex-[30%]">
                        <div className="text-center mx-auto">
                            <Image
                                src="/images/router.png"
                                alt="tentang kami"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="flex-[70%] lg:pl-7">
                        <p>
                            <span className="bolder">ATS COMMUNICATION</span>{" "}
                            dengan nama badan hukum PT. Asia Teknologi Solusi
                            memulai bisnis di bidang IT (Information Technology)
                            sejak tahun 1998. Pada tahun tersebut divisi{" "}
                            <span className="bolder">ATS Data</span> Center kami
                            dimulai. Sampai saat ini sudah ribuan Domain Name
                            yang kami kelola, untuk penempatan data Website,
                            Mail Server, Data Storage, dan Data Application.
                            Kami selalu memegang komitmen tinggi untuk kualitas
                            dan pelayanan kepada para pelanggan. Dengan
                            pengalaman selama bertahun-tahun mengelola server,
                            kami yakin mampu memberikan tempat terbaik untuk
                            mempromosikan usaha pelanggan secara online ke arah
                            global.
                        </p>
                        <p>
                            Pada akhir tahun 2006 kami mulai mendirikan
                            infrastruktur internet di Jakarta. Pada awalnya
                            internet kami siapkan untuk penggunaan internal
                            perusahaan kami, tidak untuk komersial.
                        </p>
                        <p>
                            Pada tahun 2014,{" "}
                            <span className="bolder">ATS Internet</span> mulai
                            melayani pelanggan secara komersial & kami mulai
                            bergabung dalam Asosiasi Penyelenggara Jasa Internet
                            Indonesia dengan nomor registrasi 408/APJII/K-2014.
                            Kami memiliki komitmen untuk memberikan layanan
                            Dedicated Internet (WiFi, Wireless, Fiber Optic)
                            yang cepat & stabil, serta siap bersaing baik
                            kualitas maupun harga, guna memberikan Total
                            Internet Solution kepada para pelanggan kami.
                        </p>
                        <p>
                            Pada awal tahun 2019, kami mulai mendirikan{" "}
                            <span className="bolder">ATS Training Center</span>,
                            dengan komitmen untuk menyalurkan ilmu kepada para
                            murid-murid yang memiliki keinginan untuk terdepan
                            di bidang komputer jaringan. Kami membawa brand
                            MikroTik ( www.mikrotik.com ) dan pengajar resmi
                            bersertifikasi MikroTik Trainer Indonesia. Karena
                            semakin bertambahnya institusi pendidikan yang
                            mengikutsertakan kurikulum MikroTik di dalam
                            pelajaran, maka ATS Training Center juga siap
                            bekerjasama dengan institusi pendidikan di seluruh
                            Indonesia untuk mengadakan MikroTik Academy bagi
                            para pengajar di sekolah/universitas tersebut.
                        </p>
                        <p>
                            ATS Communication akan selalu memiliki komitmen yang
                            sangat tinggi untuk memajukan Teknologi Informasi di
                            Republik Indonesia.
                        </p>
                        <p>
                            ATS Communication @IDNOG 2019, Shangri-La Hotel
                            Jakarta, 25 July 2019
                        </p>
                        <iframe
                            className="lg:w-[500px] lg:h-[300px] w-[100%] h-[250px]"
                            src="https://www.youtube.com/embed/vrBpGJILXHI"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
