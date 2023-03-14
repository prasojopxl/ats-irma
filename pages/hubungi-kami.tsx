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

function ItemInfo(props: any) {
    return (
        <div className="border-b border-solid border-gray-300 mb-2">
            <label className="text-sm"> {props.title}:</label>
            <div className="text-lg">
                {props.link ? (
                    <Link href={props.link}>{props.info}</Link>
                ) : (
                    props.info
                )}
            </div>
        </div>
    )
}

export default function HubungiKami() {
    return (
        <Layout>
            <Banerpages title="Hubungi Kami" />
            <div className="container overflow-clip py-20">
                <div className="contactbox  mx-auto w-full max-w-[600px] shadow-md relative min-h-[200px] mt-[50px]">
                    <div className="absolute top-0 left-0 right-0 mx-auto mt-[-50px] bg-white rounded-full w-[100px] h-[100px] shadow-lg flex justify-center items-center overflow-hidden">
                        <Image
                            src="/images/pp.png"
                            width={100}
                            height={100}
                            alt="pasang internet"
                        />
                    </div>
                    <div className="text-center pt-[60px]">
                        <h3 className="text-2xl text-red font-bold">
                            Ade Irma Suryani - ATS Internet
                        </h3>
                        <h5>Account Manager</h5>
                        <div className="flex justify-center space-x-4 text-10 mt-3">
                            <Link href="tel:08971446692" target="_blank">
                                <BsFillTelephoneFill />
                            </Link>
                            <Link href="sms:628971446692" target="_blank">
                                <FaSms />
                            </Link>
                            <Link href="mailto:ade@ats-com.net" target="_blank">
                                <BsFillEnvelopeFill />
                            </Link>
                            <Link
                                href="https://www.google.com/maps/search/Pantai+Indah+Kapuk+2%0D%0ARukan+Shibuya+Blok+SHJ-11%0D%0ATangerang%2C+Banten+15510"
                                target="_blank"
                            >
                                <IoLocationSharp />
                            </Link>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-5 my-5 m-5 rounded-md">
                        <ItemInfo title="Phone" info="08971446692" />
                        <ItemInfo
                            link="mailto:ade@ats-com.net"
                            title="Email"
                            info="ade@ats-com.net"
                        />
                        <ItemInfo title="Company" info="ATS Internet" />
                        <ItemInfo
                            title="Location"
                            info="Pantai Indah Kapuk 2 Rukan Shibuya Blok SHJ-11 Tangerang, Banten 15510"
                            link="https://www.google.com/maps/search/Pantai+Indah+Kapuk+2+Rukan+Shibuya+Blok+SHJ-11+Tangerang%2C+Banten+15510"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
