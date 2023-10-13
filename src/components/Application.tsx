'use client'
import {useEffect, useState} from "react";
import {Cannon} from "@/model/Cannon";
import ApplicationCanvas from "@/components/Application-canvas";
import ApplicationMenus from "@/components/Application-menus";
import {PolarPoint} from "@/model/PolarPoint";


const Application = () => {
    const [cannons, setCannons] = useState<Cannon[]>([]);
    const [target, setTarget] = useState<PolarPoint>(new PolarPoint(0, 0))

    const updateCannon = (updatedCannon: Cannon) => {
        setCannons((prevCannons) =>
            prevCannons.map((cannon) =>
                cannon.id === updatedCannon.id ? updatedCannon : cannon
            )
        );
    };

    const addCannon = () => {
        setCannons([...cannons, new Cannon(cannons.length)]);
    }

    return <div className="flex flex-row h-[calc(100vh-40px)]">
        <ApplicationMenus cannons={cannons}
                          addCannon={addCannon}
                          updateCannon={updateCannon}
                          target={target}
                          setTarget={setTarget}/>
        <ApplicationCanvas cannons={cannons}
                           target={target}/>
    </div>
}

export default Application;