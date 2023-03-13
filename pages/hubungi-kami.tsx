import { Banerpages, Banner, ItemProduct } from "@/components"
import Layout from "@/layout"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FaUserAlt } from "react-icons/fa"
import { BsFillTelephoneFill } from "react-icons/bs"
import { FaSms } from "react-icons/fa"
import { BsFillEnvelopeFill } from "react-icons/bs"
import { IoLocationSharp } from "react-icons/io5"

export default function HubungiKami() {
    return (
        <Layout>
            <Banerpages title="Hubungi Kami" />
            <div className="container overflow-clip py-20">
                <div className="contactbox  mx-auto w-full max-w-[600px] shadow-md relative min-h-[200px] mt-[50px]">
                    <div className="absolute top-0 left-0 right-0 mx-auto mt-[-50px] bg-white rounded-full w-[100px] h-[100px] shadow-lg flex justify-center items-center">
                        <FaUserAlt />
                    </div>
                    <div className="text-center pt-[60px]">
                        <h3 className="text-2xl text-red font-bold">
                            Ade Irma Suryani - ATS Internet
                        </h3>
                        <h5>Account Manager</h5>
                        <div className="flex justify-center space-x-4 text-10 mt-3">
                            <Link href="/">
                                <BsFillTelephoneFill />
                            </Link>
                            <Link href="/">
                                <FaSms />
                            </Link>
                            <Link href="/">
                                <BsFillEnvelopeFill />
                            </Link>
                            <Link href="/">
                                <IoLocationSharp />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
