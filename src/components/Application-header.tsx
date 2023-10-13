'use client'
import CopyToClipboardIcon from "@/components/svg/Copy-to-clipboard-icon";

type ApplicationHeaderProps = {
    batteryId: string;
}

const ApplicationHeader = ({batteryId}: ApplicationHeaderProps) => {
    const url = `https://foxhole-kaboum.xyz/calculator/${batteryId}`;

    return <header className="border border-black border-b-black">
        <div className="flex justify-center w-full p-2 border border-b-black">
            <span className="text-sm text-blue-800">{url}</span><span onClick={() => {navigator.clipboard.writeText(url)}} ><CopyToClipboardIcon className="w-5 fill-black cursor-copy"/></span>
        </div>
    </header>
}

export default ApplicationHeader;