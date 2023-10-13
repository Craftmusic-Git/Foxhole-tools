import BigButton from "@/components/Big-button";
import AddArtilleryIcon from "@/components/svg/Add-artillery-icon";
import JoinIcon from "@/components/svg/Join-icon";

export default function Home() {

    const joinSvg = <svg>

    </svg>

    return (
        <main className="container mx-auto lg:py-32 py-8">
            <div className="flex flex-col w-full items-center text-center">
                <h1 className="mb-8 lg:mb-16 text-3xl font-extrabold text-gray-900">Foxhole <span className="text-4xl ">KABOUM</span> calculator</h1>
                <sub className="my-4 text-xl font-medium text-gray-600">What you want to do ?</sub>
            </div>
            <section className="flex flex-col items-center md:flex-row justify-center p-4 gap-8">
                <BigButton image={ <AddArtilleryIcon className="h-16 fill-gray-800" /> } label="Create a new battery" />
                <BigButton image={ <JoinIcon className="h-16 stroke-gray-800" /> } label="Join an existing battery"/>
            </section>
        </main>
    )
}
