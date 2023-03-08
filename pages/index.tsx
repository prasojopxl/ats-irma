import { Inter } from "next/font/google"
import Layout from "@/layout"
import { Banner } from "@/components"

export default function Home() {
    return (
        <>
            <Layout>
                <Banner />
            </Layout>
        </>
    )
}
