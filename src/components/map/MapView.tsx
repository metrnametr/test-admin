import {FC, useState} from "react";
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";
import {Theme, Typography, useMediaQuery} from "@mui/material";
import {useRecordContext} from "react-admin";

import { useFormContext } from 'react-hook-form';
interface Icord {
    source: string;
    setLocationState?: any;
}

export const MapView:FC<Icord> = (props) => {

    const record = useRecordContext();
    
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("xl"));
    const { setValue } = useFormContext();
    const [coords, setCoords] = useState(record !== undefined ? record.address : props.source);

    const onMapClick = (e: any) => {
        const currentCoords = e.get('coords');
        setCoords(currentCoords);
        setValue(props.source, currentCoords, { shouldDirty: true });
    }

    return (
        <div>
            <YMaps>
                <Typography
                    variant="h5"
                    component="h2"
                    style={{
                        paddingBottom: 15
                    }}

                >
                    {"Address"}
                </Typography>
                <Map
                    onClick={onMapClick}
                    width={`${!isSmall ? '55vw' : '90%'}`}
                    height={!isSmall ? 320 : 400}
                    defaultState={{center: coords, zoom: 9}}
                >
                    {coords && <Placemark geometry={coords} />}
                </Map>
            </YMaps>
        </div>
    )
};