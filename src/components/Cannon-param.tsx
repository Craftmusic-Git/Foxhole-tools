import {Cannon} from "@/model/Cannon";
import LockIcon from "@/components/svg/Lock-icon";
import {useEffect, useState} from "react";
import {PolarPoint} from "@/model/PolarPoint";
import spotterParam from "@/components/Spotter-param";

type CannonParamProps = {
    cannon: Cannon;
    updateCannon: (cannon: Cannon) => void;
    target: PolarPoint;
}

const CannonParam = ({cannon, updateCannon, target}: CannonParamProps) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>(cannon.name ?? `Cannon ${cannon.id}`);
    const [targetDistance, setTargetDistance] = useState<number>(cannon.targetPolar?.r ?? 0);
    const [targetAzimuth, setTargetAzimuth] = useState<number>(cannon.targetPolar?.theta ?? 0);
    const [spotterDistance, setSpotterDistance] = useState<number>(cannon.spotterPolar?.r ?? 0);
    const [spotterAzimuth, setSpotterAzimuth] = useState<number>(cannon.spotterPolar?.theta ?? 0);

    useEffect(() => {
        setTargetDistance(cannon.targetPolar.r);
        setTargetAzimuth(cannon.targetPolar.theta);
    }, [cannon, cannon.targetPolar]);

    useEffect(() => {
        console.log("TARGET SETTED ! ! !")
        cannon.targetPolar = target.add(new PolarPoint(spotterDistance, spotterAzimuth + 180));
        updateCannon(cannon);
    }, [target, spotterDistance, spotterAzimuth]);

    useEffect(() => {
        cannon.name = name;
        cannon.spotterPolar = new PolarPoint(spotterDistance, spotterAzimuth);
        updateCannon(cannon)
    }, [name, spotterDistance, spotterAzimuth]);

    const targetAzimuthShow = targetAzimuth < 0 ? targetAzimuth + 360 : targetAzimuth;

    return <div className="w-full p-2 rounded-md bg-white shadow-xl">
        <div>
            <span>Target coordinates :</span>
            <div className="grid grid-cols-2 pb-2 w-full">
                <span className="text-sm text-gray-600">Distance : <span
                    className="text-lg font-bold text-gray-900">{Math.round(targetDistance * 10)  / 10}</span></span>
                <span className="text-sm text-gray-600">Azimuth : <span
                    className="text-lg font-bold text-gray-900">{(Math.round((targetAzimuthShow) * 10) / 10)}</span></span>
            </div>
        </div>
        <div className="flex justify-between">
            <span>Artillery properties :</span>
            <div className="flex">
                <LockIcon className="w-4 stroke-gray-800"/>
                <input type="checkbox" checked={editMode} onChange={e => setEditMode(e.target.checked)}/>
            </div>
        </div>
        <div className="flex flex-col pb-2">
            <label className="text-sm text-gray-600">Name :</label>
            <input type="text"
                   className="border border-gray-800 p-1 rounded-md outline-none focus:bg-gray-300 disabled:bg-gray-200 disabled:text-gray-800"
                   value={name}
                   disabled={editMode}
                   onChange={e => {
                       setName(e.target.value)
                   }}/>
        </div>
        <div className="">
            <div className="flex gap-4 pb-2">
                <div>
                    <label className="text-sm text-gray-600">Distance :</label>
                    <input type="number"
                           className="w-full border border-gray-800 p-1 rounded-md outline-none focus:bg-gray-200 disabled:bg-gray-200 disabled:text-gray-800"
                           value={spotterDistance}
                           disabled={editMode}
                           onChange={e => {
                               setSpotterDistance(Number.parseFloat(e.target.value))
                           }}/>
                </div>
                <div>
                    <label className="text-sm text-gray-600">Azimuth :</label>
                    <input type="number"
                           className="w-full border border-gray-800 p-1 rounded-md outline-none focus:bg-gray-200 disabled:bg-gray-200 disabled:text-gray-800"
                           value={spotterAzimuth}
                           disabled={editMode}
                           onChange={e => {
                               setSpotterAzimuth(Number.parseFloat(e.target.value))
                           }}/>
                </div>
            </div>
        </div>
    </div>
}

export default CannonParam;