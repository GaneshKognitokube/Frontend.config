import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";

const AboutSevenSecond = ({data}) => {
    return (
        <section className="section-about style-seven lg:py-20 sm:py-14 py-10">
            <div className="container">
                <div className="flex items-center justify-between gap-y-8 max-lg:flex-wrap">
                    <div className="w-full lg:w-5/12 lg:pr-4">
                        <Image width={8000} height={8000} className="w-full" src={data.img.img3} style={{height: data.img.img3_height, borderRadius: "20px"}} alt="about-third7" />
                    </div>
                    <div className="w-full lg:w-7/12 lg:pl-16">
                        <span className="tag text-label bg-grey text-black">Why Choose US</span>
                        <h3 className="heading3 mt-5">{data.choose.heading1}</h3>
                        <div className="desc mt-5">{data.choose.heading2}</div>
                        <div className="feature border-t border-outline mt-7">
                            <div className="item flex gap-4 mt-7">
                                <Icon.ChartPolar weight="fill" className="text-5xl flex-shrink-0" />
                                <div className="info sm:flex-shrink-0">
                                    <h5 className="heading5">{data.pointer.head1}</h5>
                                    <span className="inline-block mt-1">{data.pointer.subhesd1}</span>
                                </div>
                            </div>
                            <div className="item flex gap-4 mt-7">
                                <Icon.ChartBar weight="fill" className="text-5xl flex-shrink-0" />
                                <div className="info sm:flex-shrink-0">
                                <h5 className="heading5">{data.pointer.head2}</h5>
                                <span className="inline-block mt-1">{data.pointer.subhesd2}</span>
                                </div>
                            </div>
                            <div className="item flex gap-4 mt-7">
                                <Icon.ChartLineDown className="text-5xl flex-shrink-0" />
                                <div className="info sm:flex-shrink-0">
                                <h5 className="heading5">{data.pointer.head3}</h5>
                                <span className="inline-block mt-1">{data.pointer.subhesd3}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutSevenSecond