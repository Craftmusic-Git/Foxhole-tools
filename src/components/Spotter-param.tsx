import {PolarPoint} from "@/model/PolarPoint";
import {useEffect, useState} from "react";

type SpotterParamProps = {
    targetCoordinate?: PolarPoint;
    setTarget: (target: PolarPoint) => void;
}

const SpotterParam = ({ targetCoordinate, setTarget }: SpotterParamProps) => {
    const [targetDistance, setTargetDistance] = useState<number>( targetCoordinate?.r ?? 0);
    const [targetAzimuth, setTargetAzimuth] = useState<number>(targetCoordinate?.theta ?? 0);

    useEffect(() => {
        setTarget(new PolarPoint(targetDistance, targetAzimuth));
    }, [targetDistance, targetAzimuth]);

    return <div className="w-full p-2 rounded-md bg-white shadow-xl">
        <div className="">
            <div className="flex gap-4 pb-2">
                <div>
                    <label className="text-sm text-gray-600">Distance :</label>
                    <input type="number"
                           className="w-full border border-gray-800 p-1 rounded-md outline-none focus:bg-gray-200"
                           value={targetDistance}
                           onChange={e => {
                               setTargetDistance(Number.parseFloat(e.target.value ?? 0))
                           }}/>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Azimuth :</label>
                    <input type="number"
                           className="w-full border border-gray-800 p-1 rounded-md outline-none focus:bg-gray-200"
                           value={targetAzimuth}
                           onChange={e => {
                               setTargetAzimuth(Number.parseFloat(e.target.value ?? 0))
                           }}/>
                </div>
            </div>
        </div>
    </div>
}

export default SpotterParam;