import { useState, useEffect, FC } from 'react';
import Project from '../component/Project';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/free-brands-svg-icons";

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
        get();
    }, [])

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
        <div className={"flex items-center justify-center flex-col sm:py-20 py-16 gap-3 text-center"}>
            <h1 className={"sm:text-6xl text-[35px] mb-1 sm:mb-0"}><span className={"font-bold"}>Warren Chemerika</span></h1>
            <h2 className={"sm:text-[39px] sm:leading-10 text-[23px] bg-[#999] bg-opacity-10 px-3 py-3 sm:pt-3 sm:pb-4 sm:w-max text-center rounded font-semibold"}>Web
                Developer @ <a target={"_blank"} className="hover:underline" href={"https://www.servoweb.com/"}
                               title={"Servoweb Technologies"}>Servoweb</a></h2>
            <p className={"sm:mt-3"}><FontAwesomeIcon icon={['fas', 'circle-check']}
                                                      className={"text-green-600 sm:mr-0.5"}/> Certified by <a
                href={"/Front-EndWebDevCertificateWarrenChemerika.pdf"} target={"_blank"} className={"underline"}
                title={"Certificate of Front-End Web Development from Saskatchewan Polytechnic"}>Saskatchewan
                Polytechnic</a></p>
            <p className={"opacity-35 text-xs max-w-80 sm:max-w-none"}>Completing Front-End Web Developer Certificate @ BCIT (January 2025 - July 2025)<br/>
               Applied for Full-Stack Web Developer Diploma @ BCIT (September 2025 - September 2027)</p>
        </div>
        <Portfolio/>
    </>;
}