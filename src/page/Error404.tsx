import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Error404() {
    return <div className={"w-full h-[300px] flex justify-center items-center"}>
        <ul className={"list-none rounded bg-red-500 p-5 flex flex-col items-center justify-center"}>

            <FontAwesomeIcon icon={"circle-exclamation"} className={"text-7xl"}/>
            <h1 className={"text-5xl font-bold bg-red-500 p-4 rounded"}>404 Error</h1>
            <p className={"text-2xl"}>Page not found.</p>

        </ul>
    </div>;
}