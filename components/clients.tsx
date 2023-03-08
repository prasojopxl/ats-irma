import Image from "next/image"
import React from "react"
import Slider from "react-slick"

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "#333",
                borderRadius: 30,
                right: "10px",
            }}
            onClick={onClick}
        />
    )
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "#333",
                borderRadius: 30,
                left: "10px",
            }}
            onClick={onClick}
        />
    )
}

export default function Clients() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    }
    const ItemSlide = (props: any) => (
        <div className="text-center">
            <Image
                src={props.image}
                alt="pelanggan"
                width={100}
                height={100}
                className="mx-auto"
            />
        </div>
    )
    return (
        <div className="container my-[120px]">
            <h2 className="text-center text-3xl mb-12">
                Pelanggan <span className="text-red">Utama</span>
            </h2>

            <Slider {...settings}>
                <ItemSlide image="/logo/1.jpeg" />
                <ItemSlide image="/logo/2.jpeg" />
                <ItemSlide image="/logo/3.jpeg" />
                <ItemSlide image="/logo/4.jpeg" />
                <ItemSlide image="/logo/5.jpeg" />
                <ItemSlide image="/logo/6.jpeg" />
                <ItemSlide image="/logo/7.jpeg" />
                <ItemSlide image="/logo/8.jpeg" />
                <ItemSlide image="/logo/9.jpeg" />
                <ItemSlide image="/logo/10.jpeg" />
                <ItemSlide image="/logo/11.jpeg" />
                <ItemSlide image="/logo/12.jpeg" />
                <ItemSlide image="/logo/13.jpeg" />
                <ItemSlide image="/logo/14.jpeg" />
                <ItemSlide image="/logo/15.jpeg" />
                <ItemSlide image="/logo/16.jpeg" />
                <ItemSlide image="/logo/17.jpeg" />
                <ItemSlide image="/logo/18.jpeg" />
                <ItemSlide image="/logo/19.jpeg" />
                <ItemSlide image="/logo/20.jpeg" />
                <ItemSlide image="/logo/21.jpeg" />
                <ItemSlide image="/logo/22.jpeg" />
                <ItemSlide image="/logo/23.jpeg" />
                <ItemSlide image="/logo/24.jpeg" />
            </Slider>
        </div>
    )
}
