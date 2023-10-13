import ApplicationHeader from "@/components/Application-header";
import Application from "@/components/Application";

export default function Page({params}: { params: { batteryId: string } }) {


    return <main>
        <ApplicationHeader batteryId={params.batteryId}/>
        <Application />
    </main>
}