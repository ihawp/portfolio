import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons";

export default function Error404() {
    return <div className={"w-full h-[300px] flex justify-center items-center"}>
        <ul className={"list-none rounded bg-green-600 p-5 gap-2 flex flex-col items-center justify-center"}>
            <FontAwesomeIcon icon={faCircleExclamation} className={"text-7xl"}/>
            <h1 className={"text-5xl font-bold"}>404 Error</h1>
            <p className={"text-2xl"}>Page not found.</p>
        </ul>
    </div>;
}