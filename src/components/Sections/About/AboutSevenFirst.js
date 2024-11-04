import Image from "next/image"
import Link from "next/link"

const AboutSevenFirst = ({data}) => {
    return (
        <section className="section-about style-seven lg:mt-20 sm:mt-14 mt-10">
            <div className="container">
                <div className="flex items-center justify-between gap-y-8 max-lg:flex-col-reverse">
                    <div className="w-full lg:w-7/12 lg:pr-16">
                        <span className="tag text-label bg-grey text-black">About Us</span>
                        <h3 className="heading3 mt-5">{data.about.heading1 || ""}</h3>
                        <div className="desc mt-5">{data.about.heading2 || ""}</div>
                        <div className="counter flex mt-4">
                            <div className="item">
                                <div className="heading3">20</div>
                                <div className="text-title mt-1">Years experiences</div>
                            </div>
                            <div className="item pl-10">
                                <div className="heading3">1.8<span>k</span></div>
                                <div className="text-title mt-1">Happy customers</div>
                            </div>
                        </div>
                        <Link className="button-main text-black bg-transparent border border-black hover:bg-blue hover:border-blue hover:text-white md:mt-10 mt-7" href="/pages/contact-us">Contact</Link>
                    </div>
                    <div className="w-full lg:w-5/12 lg:pl-4">
                        <Image width={8000} height={8000} className="w-full" src={data.img.img2 || ""} style={{height: data.img.img2_height || "", borderRadius: "20px"}} alt="about-second7" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutSevenFirst