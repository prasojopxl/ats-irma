import React from "react"

export default function ItemHowTo(props: any) {
    return (
        <div className="flex justify-center mt-9">
            <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700 pt-7">
                <div className="text-[100px] flex justify-center">
                    {props.image}
                </div>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                        {props.title}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {props.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}
