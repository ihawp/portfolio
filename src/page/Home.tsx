import { useState, useEffect, FC } from 'react';
import { Link } from 'react-router-dom';
import Project from '../component/Project';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/free-brands-svg-icons";
import ScrollToTop from "../component/ScrollToTop.tsx";

export interface projectData {
    index: number;
    title: string;
    description: string[];
    url: string;
    github: string;
    logos: IconName[];
    open: boolean;
    toggleDetails: any;
}

const Portfolio: FC = () => {
    const [data, setData] = useState<projectData[]>([]);
    const [currentOpen, setCurrentOpen] = useState(0);

    useEffect(() => {
        if (data.length === 0) {
            get();
        }
    }, [data])

    const get = () => {
        fetch('https://backend.ihawp.com/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                const transformedData: projectData[] = data.map((item: any, index: number) => {
                    return {
                        index: index,
                        title: item.title,
                        description: JSON.parse(item.description) as string[],
                        url: item.url,
                        github: item.github,
                        logos: JSON.parse(item.logos) as IconName[],
                        open: item.open,
                    };
                });

                setData(transformedData);
            })
            .catch((err) => {
                console.error('Fetch error:', err);
            });
    }

    function toggleDetails(index: number) {
        setCurrentOpen(index);
    }

    return <div id={"portfolio"}>
        {data.map((item: projectData, key: number) => {
            return <Project key={key}
                     index={key}
                     title={item.title}
                     description={item.description}
                     url={item.url}
                     github={item.github}
                     logos={item.logos}
                     open={item.index === currentOpen}
                     toggleDetails={toggleDetails}
            />
        })}
    </div>;
}

export default function Home() {
    return <>
        <div className={"flex items-center justify-center flex-col py-8 sm:pt-8 sm:pb-12 gap-3 text-center"}>
            <img alt="Warren Chemerika" className="rounded-full w-[250px] hover:bg-green-600 hover:p-5 transition-all mb-2 shadow-md shadow-[#222]" draggable={"false"} src={"./w.jpg"}/>
            <h1 className={"sm:text-6xl text-[35px] mb-1 sm:mb-0"}><span className={"font-bold"}>Warren Chemerika</span>
            </h1>
            <h2 className={"sm:text-[39px] sm:leading-10 text-[23px] bg-[#999] bg-opacity-10 px-3 py-3 sm:pt-3 sm:pb-4 sm:w-max text-center rounded font-semibold"}>
                Web Developer @ <a target={"_blank"} className="hover:underline" href={"https://www.servoweb.com/"} title={"Servoweb Technologies"}>
                    Servoweb
                </a></h2>
            <p className={"sm:mt-1"}><FontAwesomeIcon icon={['fas', 'circle-check']} className={"text-green-600 sm:mr-0.5"}/> Certified
                by <a
                href={"/Front-EndWebDevCertificateWarrenChemerika.pdf"} target={"_blank"} className={"underline"}
                title={"Certificate of Front-End Web Development from Saskatchewan Polytechnic"}>
                    Saskatchewan Polytechnic</a></p>
            <Link to={"/roadmap"} onClick={ScrollToTop} className={"opacity-35 text-sm max-w-80 sm:max-w-none"}>View Roadmap (2024-2029)</Link>
        </div>
        <Portfolio/>
    </>
;
}