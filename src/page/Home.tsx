import { useState, useEffect, FC } from 'react';
import Project from '../component/Project';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/free-brands-svg-icons";

interface FetchItem {
    title: string;
    description: string[];
    url: string;
    logos: IconName[];
    open: boolean;
    classes: string;
}

const Portfolio: FC = () => {
    const [data, setData] = useState<FetchItem[]>([]);

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
                const transformedData: FetchItem[] = data.map((item: any) => {
                    return {
                        title: item.title,
                        description: JSON.parse(item.description) as string[], // Parse and assert type
                        url: item.url,
                        logos: JSON.parse(item.logos) as IconName[], // Parse and assert type
                        open: item.open,
                        classes: item.classes,
                    };
                });

                setData(transformedData);
            })
            .catch((err) => {
                console.error('Fetch error:', err);
            });
    }

    return <div id={"portfolio"}>
        {data.map((item: FetchItem, key: number) => { return <Project key={key}
                     title={item.title}
                     description={item.description}
                     websiteURL={item.url}
                     languages={item.logos}
                     open={item.open}
                     classes={item.classes}
            />
        })}
    </div>;
}

export default function Home() {
    return <>
        <div className={"flex items-center justify-center flex-col sm:py-20 py-16 gap-3 text-center"}>
            <h1 className={"sm:text-6xl text-[35px] mb-1 sm:mb-0"}><span className={"font-bold"}>Warren Chemerika</span></h1>
            <h2 className={"sm:text-[39px] sm:leading-10 text-[23px] bg-[#999] bg-opacity-10 px-3 py-3 sm:pt-3 sm:pb-4 sm:w-max text-center rounded font-semibold"}>Web Developer @ <a target={"_blank"} className="hover:underline" href={"https://www.servoweb.com/"} title={"Servoweb Technologies"}>Servoweb</a></h2>
            <p className={"sm:mt-3"}><FontAwesomeIcon icon={['fas', 'circle-check']} className={"text-green-500 sm:mr-0.5"} /> Certified by <a href={"/Front-EndWebDevCertificateWarrenChemerika.pdf"} target={"_blank"} className={"underline"} title={"Certificate of Front-End Web Development from Saskatchewan Polytechnic"}>Saskatchewan Polytechnic</a></p>
        </div>
        <Portfolio />
    </>;
}