import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";


/*
    changed second block to ul (was div) for Google
 */
export default function Roadmap() {
    return <>
        <ul
            className={"list-none border-[#999] border-opacity-20 border-l-[2px] border-solid w-full py-10 flex flex-col gap-14"}>
            <li id="2024">
                <h2 className="text-3xl font-bold pl-5 mt-6 mb-10 border-solid border-[#999] border-opacity-20 sm:border-l-[2.5rem] border-l-[1.3rem] h-[2px] flex items-center">2024</h2>
                <ul className={"list-none sm:pl-[3.8rem] pl-[2.5rem] flex flex-col gap-5"}>
                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={faCircleCheck}
                                         className={"h-[30px] w-[20px] sm:mr-5 mr-3 text-green-600"}/>
                        <p>Complete Applied Certificate of Front-End Web Development @ Saskatchewan Polytechnic</p>
                    </li>
                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={faCircleCheck}
                                         className={"h-[30px] w-[20px] sm:mr-5 mr-3 text-green-600"}/>
                        <p>Get hired as Web Developer @ Servoweb Technologies</p>
                    </li>
                </ul>
            </li>
            <li id="2025">
                <h2 className="text-3xl font-bold pl-5 mt-6 mb-10 border-solid border-[#999] border-opacity-20 sm:border-l-[2.5rem] border-l-[1.3rem] h-[2px] flex items-center">2025</h2>
                <ul className={"list-none sm:pl-[3.8rem] pl-[2.5rem] flex flex-col gap-5"}>
                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={faCircle} className={"h-[30px] w-[20px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Complete Front-End Web Developer Certificate @ BCIT</p>
                    </li>
                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={faCircle} className={"h-[30px] w-[20px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Complete Foundations of Math 12 @ EBUS</p>
                    </li>
                </ul>
            </li>
        </ul>
    </>
}
