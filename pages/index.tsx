import { Inter } from "next/font/google"
import Layout from "@/layout"
import { Banner, Clients, ItemHowTo } from "@/components"
import { FcAssistant, FcIdea, FcParallelTasks } from "react-icons/fc"

export default function Home() {
    return (
        <>
            <Layout>
                <Banner />
                <div className="container my-14">
                    <h2 className="text-center text-3xl">
                        Cara <span className="text-red">Kerja</span>
                    </h2>
                    <div className="flex justify-between lg:space-x-7 sm:flex-row flex-col">
                        <ItemHowTo
                            image=<FcAssistant />
                            title="KONSULTASI KEBUTUHAN INTERNET AKSES"
                            desc="Dengan sangat senang kami mendengarkan kasus dan kebutuhan internet yang Anda sampaikan"
                        />
                        <ItemHowTo
                            image=<FcIdea />
                            title="INVESTIGASI DAN RENCANA"
                            desc="Kami akan segera lakukan investigasi kasus nya dan mempersiapkan segala rencana untuk memberikan layanan yang terbaik"
                        />
                        <ItemHowTo
                            image=<FcParallelTasks />
                            title="AKSI DAN SOLUSI"
                            desc="Team kami yang terbaik akan membangun infrastruktur internet (WiFi,Wireless,Fiber Optic) untuk Anda"
                        />
                    </div>
                </div>
                <Clients />
            </Layout>
        </>
    )
}
