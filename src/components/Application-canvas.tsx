'use client'
import {Cannon} from "@/model/Cannon";
import {LegacyRef, useEffect, useRef, useState} from "react";
import {PolarPoint} from "@/model/PolarPoint";
import {CartesianPoint} from "@/model/CartesianPoint";

type ApplicationCanvasProps = {
    cannons: Cannon[];
    target: PolarPoint;
}

const ApplicationCanvas = ({cannons, target}: ApplicationCanvasProps) => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [zoom, setZoom] = useState<number>(1);
    const [panX, setPanX] = useState<number>(0);
    const [panY, setPanY] = useState<number>(0);
    const [rightClickDown, setRightClickDown] = useState<boolean>(false);
    const [leftClickDown, setLeftClickDown] = useState<boolean>(false);
    const [middleClickDown, setMiddleClickDown] = useState<boolean>(false);

    const drawShapes = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.setTransform(zoom, 0, 0, zoom, panX, panY);

        // Draw cannons
        cannons?.forEach(cannon => {
            const coordinates = cannon.spotterPolar.toCartesian();

            ctx.beginPath();
            ctx.arc(coordinates.x + canvas.width / 2, coordinates.y + canvas.height / 2, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.closePath();
        })

        //Draw target
        const targetCoordinate = target.toCartesian();

        ctx.beginPath();
        ctx.arc(targetCoordinate.x + canvas.width / 2, targetCoordinate.y + canvas.height / 2, 12.5, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }

    const startDragging = (event: MouseEvent) => {
        switch (event.button) {
            case 0:
                setLeftClickDown(true);
                break;
            case 1:
                setMiddleClickDown(true);
                break;
            case 2:
                setRightClickDown(true);
                break;
        }
    }



    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (canvas == null || ctx == null) {
            return;
        }

        console.log("CANVAS : " + canvas.width + " et " + canvas.height)
        drawShapes(canvas, ctx);

        canvas.addEventListener("click", startDragging);

    }, [cannons, target]);



    return <div className="w-full h-full">
        <canvas ref={canvasRef} width={1600} height={900} className="w-full h-full"/>
    </div>
}

export default ApplicationCanvas;