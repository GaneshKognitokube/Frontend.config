import ServiceItem from "@/components/Service/ServiceItem"
import Link from "next/link"

const SolutionOne = ({ data, start, limit, title, display, redlink }) => {
    return (
        <section className="section-solution bg-linear lg:mt-20 sm:mt-14 mt-10 lg:py-20 sm:py-14 py-10">
            {/* <div className="container">
                <div className="flex items-center justify-between w-full max-lg:flex-wrap gap-y-4">
                    <div className="xl:w-2/3 lg:w-3/4 w-full">
                        <span className="tag text-label">How we do</span>
                        <h3 className="heading3 text-center mt-3">{title}</h3>
                    </div>
                    <Link className="text-button border-b border-blue inline-block duration-300 hover:text-blue whitespace-nowrap"
                        href="/ourServices"
                    >
                        View All industries
                    </Link>
                </div>
            </div> */}
            <div className="container text-center">
                <span className="tag text-label">How we do</span>
                <h3 className="heading3 text-center mt-3">{title}</h3>
            </div>
            {
                display && 
                    (<div className="container service-block text-right">
                    <Link className="text-button border-b border-blue inline-block duration-300 hover:text-blue whitespace-nowrap"
                            href={redlink}
                        >
                            View All Services
                    </Link>
                </div>
            )}
            
            <div className="container text-center">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-[30px] gap-5 md:mt-10 mt-6">
                    {data.slice(start, limit).map((item, index) => (
                        <ServiceItem data={item} key={index} type={'style-one'} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default SolutionOne