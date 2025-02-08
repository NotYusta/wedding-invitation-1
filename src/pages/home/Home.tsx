import Particles from "@tsparticles/react";
import {
    type ISourceOptions,
} from "@tsparticles/engine";
import { WeddingConstants } from "../../constants/wedding";
import gardenBg from "../../assets/garden.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Helmet } from "react-helmet";

export const HomePage = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const nameParam = urlParams.get("name")
    const pOption: ISourceOptions = {
        particles: {
            number: {
                value: 150,
                density: { enable: true },
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
                value: 0.8,

                animation: { enable: false },
            },
            size: {

                value: { min: 1, max: 4 },

            },
            move: {
                enable: true,
                speed: 1.7,
                direction: "bottom",
                random: true,
                straight: false,
                outModes: { default: "out" },
            },
        },
        interactivity: {
            events: { onHover: { enable: false } },
        },
        detectRetina: true,
    }

    const scrolTo = () => {
        const el = document.getElementById("second");
        if (el) {
            el.scrollIntoView({
                behavior: "smooth"
            })
        }
    }

    const [isHidden, setHidden] = useState(true);
    return (
        <div>
            <Helmet>
                <title>Wedding Invitation</title>
            </Helmet>
            <div
                style={{
                    backgroundImage: `url(${gardenBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                    top: 0,
                    left: 0,
                    opacity: 0.2,
                    zIndex: -1,
                }}
            />

            <div className="min-h-screen min-w-screen flex flex-col justify-center relative z-[1] ">
                <div className="flex flex-col relative z-[1] justify-around">
                    <div className="text-2xl">
                        <h2 className="flex flex-col gap-3 text-center font-semibold">
                            <span data-aos="fade-up">
                                The Wedding of
                            </span>


                            <span data-aos="fade-down" className="font-mono text-7xl font-bold">
                                {WeddingConstants.PAIR_ONE} & {WeddingConstants.PAIR_TWO}
                            </span>
                            <span data-aos="fade-right">
                                {WeddingConstants.DAY}, {WeddingConstants.DATE}
                            </span>
                        </h2>
                    </div>
                    <div className="flex flex-col justify-center text-center text-2xl font-bold">
                        <div data-aos="fade-down">
                            <p>
                                Kepada Yth.
                            </p>
                            <h2>
                                {nameParam}
                            </h2>
                        </div>
                        <button onClick={() => {
                            setHidden(false);
                            setTimeout(() => {
                                scrolTo();
                            }, 50)


                        }} className="border-none text-slate-600 bg-stone-200 py-2.5 px-6 mx-auto my-3 rounded-xl transition-all duration-300 hover:scale-105" data-aos="zoom-in">
                            <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-2.5" />
                            Open Invitation

                        </button>
                    </div>
                </div>

            </div>

            <div className={`min-h-screen min-w-screen flex flex-col justify-center  ${isHidden && `hidden`}`}>
                <div id="second" className="flex flex-col relative z-[1] justify-around">
                    <div className="text-2xl">
                        <h2 className="flex flex-col gap-3 text-center font-semibold">
                            <span data-aos="fade-up">
                                The Wedding of
                            </span>


                            <span data-aos="fade-down" className="font-mono text-7xl font-bold">
                                {WeddingConstants.PAIR_ONE} & {WeddingConstants.PAIR_TWO}
                            </span>
                            <span data-aos="fade-right">
                                {WeddingConstants.DAY}, {WeddingConstants.DATE}
                            </span>
                        </h2>
                    </div>
                    <div className="flex flex-col justify-center text-center text-2xl font-bold">
                        <div data-aos="fade-up">
                            <p className="max-w-[60%] mx-auto p-3">
                                “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.”
                            </p>
                            <h2 className="py-3">
                                [QS. Ar Rum:21]
                            </h2>

                            <span className="p-3 block lg:max-w-[30%] mx-auto">
                                Bertempat di:<br />
                                Kp. Kalampean, RT 002, RW 004, Desa Badak Anom, Kec. Sindang Jaya, Kab. Tangerang, Provinsi Banten
                            </span>

                        </div>
                    </div>
                </div>

            </div>


            <Particles
                id="tsparticles"
                options={pOption}
            />
        </div>
    );
}