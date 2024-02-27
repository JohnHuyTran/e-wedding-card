"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export function Map() {
    const mapRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
                version: " weekly",
            });

            const { Map } = await loader.importLibrary("maps");
            const { Marker } = (await loader.importLibrary(
                "marker"
            )) as google.maps.MarkerLibrary;
            const position = {
                lat: 19.954866549373442,
                lng: 105.33067468198267,
            };
            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 11,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
            const marker = new Marker({
                map: map,
                position: position,
            });
        };
        initMap();
    }, []);
    return (
        <>
            <div className='col-md-6 map-render'>
                <div
                    className='map'
                    ref={mapRef}
                    style={{ height: "300px" }}
                ></div>
                <div className='address'>
                    <span>
                        Địa chỉ: Làng Hạ, Phùng Minh, Ngọc Lặc, Thanh Hóa
                    </span>
                </div>
                <span>
                    lat: <b>19.954866549373442</b>{" "}
                </span>
                <span>
                    lng:<b>105.33067468198267</b>{" "}
                </span>
            </div>
        </>
    );
}
