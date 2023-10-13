import {ReactElement} from "react";

type ButtonProps = {
    label: string;
    image: ReactElement<SVGElement>;
}

const BigButton = ({label, image}: ButtonProps) => {
    return <button className="grid grid-cols-1 border border-gray-800 border-r-8 border-t-8 place-content-center justify-items-center gap-4 w-48 h-48 rounded-2xl bg-gray-100
                             hover:translate-x-1 hover:-translate-y-1 transition-all hover:border-t-4 hover:border-r-4">
        {image}
        <div>{label}</div>
    </button>
}

export default BigButton;
