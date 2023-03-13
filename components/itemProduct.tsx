import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function ItemProduct(props: any) {
    return (
        <div className="sm:flex-[50%] sm:max-w-[50%] flex-[100%] max-w-[100%]  px-[10px]">
            <Link href={props.link} className=" p-5" target="_blank">
                <div className="bg-slate-50 text-center mb-[20px]">
                    <Image
                        src={props.image}
                        width={414 * 2}
                        height={276 * 2}
                        alt="title"
                    />
                </div>
                <h4 className="mb-[5px] text-xl">{props.title}</h4>
                <p>{props.desc}</p>
            </Link>
        </div>
    )
}
