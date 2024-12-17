import { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Roadmap() {
    const [wow, setWow] = useState();


    return <>
        <div className={"sm:flex h-max pb-5 hidden gap-3 w-full text-center text-[#999] text-xs"}>
            <a href={"#twenty24"} className={"p-1 flex-grow bg-[#999] bg-opacity-20 rounded hover:bg-opacity-30"}>2024</a>
            <a href={"#twenty25"} className={"p-1 flex-grow bg-[#999] bg-opacity-20 rounded hover:bg-opacity-30"}>2025</a>
            <a href={"#twenty26"} className={"p-1 flex-grow bg-[#999] bg-opacity-20 rounded hover:bg-opacity-30"}>2026</a>
            <a href={"#twenty27"} className={"p-1 flex-grow bg-[#999] bg-opacity-20 rounded hover:bg-opacity-30"}>2027</a>
            <a href={"#twenty28"} className={"p-1 flex-grow bg-[#999] bg-opacity-20 rounded hover:bg-opacity-30"}>2028</a>
            <a href={"#twenty29"} className={"p-1 flex-grow bg-[#999] bg-opacity-20 rounded hover:bg-opacity-30"}>2029</a>
        </div>
        <div className={"list-none border-[#999] border-opacity-20 border-l-[2px] border-solid w-full py-10 flex flex-col gap-14"}>

            <li id="twenty24">
                <h2 className="text-3xl font-bold pl-5 mt-6 mb-10 border-solid border-[#999] border-opacity-20 sm:border-l-[2.5rem] border-l-[1.3rem] h-[2px] flex items-center">2024</h2>
                <ul className={"list-none sm:pl-[3.8rem] pl-[2.5rem] flex flex-col gap-5"}>
                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={"circle-check"} className={"h-[30px] w-[20px] sm:mr-5 mr-3 text-green-600"}/>
                        <p>Complete Applied Certificate of Front-End Web Development @ Saskatchewan Polytechnic</p>
                    </li>
                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={"circle-check"} className={"h-[30px] w-[20px] sm:mr-5 mr-3 text-green-600"}/>
                        <p>Get hired as Web Developer @ Servoweb Technologies</p>
                    </li>

                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={"fa-regular fa-circle"} className={"h-[30px] w-[20px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Complete Foundations of Math 12 @ EBUS</p>
                    </li>
                </ul>
            </li>

            <li id="twenty25">
                <h2 className="text-3xl font-bold pl-5 mt-6 mb-10 border-solid border-[#999] border-opacity-20 sm:border-l-[2.5rem] border-l-[1.3rem] h-[2px] flex items-center">2025</h2>
                <ul className={"list-none sm:pl-[3.8rem] pl-[2.5rem] flex flex-col gap-5"}>

                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={"fa-regular fa-circle"} className={"h-[30px] w-[20px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Complete Front-End Web Developer Certificate @ BCIT</p>
                    </li>

                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={"fa-regular fa-circle"} className={"h-[30px] w-[20px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Complete Pre-Calculus 12 @ EBUS</p>
                    </li>

                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={"fa-regular fa-circle"} className={"h-[30px] w-[20px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Complete Calculus 12 @ EBUS</p>
                    </li>

                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={"fa-regular fa-circle"} className={"h-[30px] w-[20px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Apply for Computer Diploma @ BCIT</p>
                    </li>

                </ul>
            </li>

            <li id="twenty26">
                <h2 className="text-3xl font-bold pl-5 mt-6 mb-10 border-solid border-[#999] border-opacity-20 sm:border-l-[2.5rem] border-l-[1.3rem] h-[2px] flex items-center">2026</h2>
                <ul className={"list-none sm:pl-[3.8rem] pl-[2.5rem] flex flex-col gap-5"}>

                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={"fa-regular fa-circle"} className={"h-[30px] w-[20px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Actively completing Diploma @ BCIT</p>
                    </li>

                </ul>
            </li>

            <li id="twenty27">
                <h2 className="text-3xl font-bold pl-5 mt-6 mb-10 border-solid border-[#999] border-opacity-20 sm:border-l-[2.5rem] border-l-[1.3rem] h-[2px] flex items-center">2027</h2>
                <ul className={"list-none sm:pl-[3.8rem] pl-[2.5rem] flex flex-col gap-5"}>

                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={"fa-regular fa-circle"} className={"h-[30px] w-[20px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Complete Computer Diploma @ BCIT</p>
                    </li>

                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={"fa-regular fa-circle"} className={"h-[30px] w-[20px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Apply for BScACS (Applied Computer Science) Degree @ BCIT</p>
                    </li>

                </ul>
            </li>

            <li id="twenty28">
                <h2 className="text-3xl font-bold pl-5 mt-6 mb-10 border-solid border-[#999] border-opacity-20 sm:border-l-[2.5rem] border-l-[1.3rem] h-[2px] flex items-center">2028</h2>
                <ul className={"list-none sm:pl-[3.8rem] pl-[2.5rem] flex flex-col gap-5"}>

                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={"fa-regular fa-circle"} className={"h-[30px] w-[20px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Actively completing Degree @ BCIT</p>
                    </li>

                </ul>
            </li>

            <li id="twenty29">
                <h2 className="text-3xl font-bold pl-5 mt-6 mb-10 border-solid border-[#999] border-opacity-20 sm:border-l-[2.5rem] border-l-[1.3rem] h-[2px] flex items-center">2029</h2>
                <ul className={"list-none sm:pl-[3.8rem] pl-[2.5rem] flex flex-col gap-5"}>

                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={"fa-regular fa-circle"} className={"h-[30px] w-[20px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Complete Applied Computer Science Degree @ BCIT</p>
                    </li>

                </ul>
            </li>

        </div>
    </>
}
