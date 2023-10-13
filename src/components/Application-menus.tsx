import {Cannon} from "@/model/Cannon";
import CannonParam from "@/components/Cannon-param";
import AddArtilleryIcon from "@/components/svg/Add-artillery-icon";
import SpotterParam from "@/components/Spotter-param";
import {PolarPoint} from "@/model/PolarPoint";

type ApplicationMenusProps = {
    cannons: Cannon[];
    addCannon: () => void;
    updateCannon: (cannon: Cannon) => void;
    target: PolarPoint;
    setTarget: (target: PolarPoint) => void;
}

const ApplicationMenus = ({cannons, addCannon, updateCannon, target, setTarget}: ApplicationMenusProps) => {
    const cannonsParams = cannons?.map((c, index) => <CannonParam key={index} updateCannon={updateCannon} cannon={c} target={target}/>);

    return <section className="bg-gray-200 w-96 h-full overflow-scroll">
        <h1 className="text-3xl text-center py-2">KABOUM</h1>
        <h2>Target :</h2>
        <div className="p-2">
            <SpotterParam targetCoordinate={ target } setTarget={setTarget}/>
        </div>
        <h2>Battery :</h2>
        <div className="flex flex-col p-2 w-full items-center gap-4">
            {cannonsParams}
            <button className="grid grid-cols-1 border border-gray-800 border-r-8 border-t-8 place-content-center justify-items-center gap-4 w-48 h-14 rounded-2xl bg-gray-100
                             hover:translate-x-1 hover:-translate-y-1 transition-all hover:border-t-4 hover:border-r-4"
                    onClick={ () => addCannon() }>
                <AddArtilleryIcon className="w-8 fill-gray-800"/>
            </button>
        </div>
    </section>
}

export default ApplicationMenus;