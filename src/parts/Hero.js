import React from "react";
import Fade from "react-reveal/Fade";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTraveler from "assets/images/icons/ic_traveler.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";

import Button from "elements/Button";

import numberFormat from "utils/numberFormat";
export default function Hero(props) {
    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth",
        });
    }

    return (
        <Fade bottom>
            <section className="container pt-4 ">
                <div className="row align-center">
                    <div className="col pr-5" style={{ witdh: 530 }}>
                        <h1 className="font-weight-bold line-height-1 mb-3">
                            Forget Busy Work, <br /> Start Next Vacation
                        </h1>
                        <p
                            className="mb-4 font-weight-light text-gray-500 w-75 pr-5"
                            style={{ lineHeight: "170%" }}
                        >
                            We provide what you need to enjoy your holiday with
                            family. Time to make another memorable moments.
                        </p>

                        <Button
                            className="btn px-5"
                            hasShadow
                            isPrimary
                            onClick={showMostPicked}
                        >
                            Show Me Now
                        </Button>

                        <div className="row" style={{ marginTop: 80 }}>
                            <div
                                className="col-auto"
                                style={{ marginRight: 35 }}
                            >
                                <img
                                    src={IconTraveler}
                                    alt="Travelers Icon"
                                    width="36"
                                    height="36"
                                />
                                <h6 className="mt-3">
                                    {numberFormat(props.data.travelers)}{" "}
                                    <span className="text-gray-500 font-weight-light">
                                        Travelers
                                    </span>
                                </h6>
                            </div>
                            <div
                                className="col-auto"
                                style={{ marginRight: 35 }}
                            >
                                <img
                                    src={IconTreasure}
                                    alt="Treasure Icon"
                                    width="36"
                                    height="36"
                                />
                                <h6 className="mt-3">
                                    {numberFormat(props.data.treasures)}{" "}
                                    <span className="text-gray-500 font-weight-light">
                                        Treasures
                                    </span>
                                </h6>
                            </div>
                            <div className="col-auto">
                                <img
                                    src={IconCities}
                                    alt="Cities Icon"
                                    width="36"
                                    height="36"
                                />
                                <h6 className="mt-3">
                                    {numberFormat(props.data.cities)}{" "}
                                    <span className="text-gray-500 font-weight-light">
                                        Cities
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 pl-5">
                        <div style={{ width: 520, height: 410 }}>
                            <img
                                src={ImageHero}
                                alt="Room with couges"
                                className="img-fluid position-absolute"
                                style={{ margin: "-15px 0 0 -15px", zIndex: 1 }}
                            />
                            <img
                                src={ImageHeroFrame}
                                alt="Room with couges frame"
                                className="img-fluid position-absolute"
                                style={{ margin: "10px 10px 0px" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    );
}
