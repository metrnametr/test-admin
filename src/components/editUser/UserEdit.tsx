import { FC, useState, useEffect } from 'react'
import { Edit, ImageInput, SimpleForm, TextInput, useRecordContext, useDataProvider} from 'react-admin';
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";
import { Typography } from "@mui/material";


export const UserEdit = (props: any) => {

    const [loc, setLoc] = useState<number[]>()
    const dataProvider = useDataProvider();


    const clickFunc = (q: number[]) => {
        setLoc(q)
        dataProvider.getOne('users', { id: props.id }).then((response) => {
            setLoc(response.data.address);
        });
    }

    return(
        <Edit resource={'users'}>
            <SimpleForm>
                <TextInput source="id" InputProps={{ disabled: true }}/>
                <TextInput source="name"/>
                <TextInput source="surname" />
                <TextInput source="username" />
                <TextInput source="email" />
                <TextInput source="age" />
                <TextInput source="sex" />
                <ImageInput source="avatar" />
                <TextInput
                    source="address"
                    label="Address"
                    value={loc}
                    onChange={(event) => setLoc(event.target.value)}
                />
                Address: {loc}
                <MapView
                    source="address"
                    clickFunc={clickFunc}
                />
            </SimpleForm>
        </Edit>
    )
}

interface Icord {
    source: string | number[];
    clickFunc: (value: number[]) => void;
}

const MapView:FC<Icord> = (props) => {

    const record = useRecordContext();

    const [coords, setCoords] = useState(record !== undefined ? record.address : props.source);

    const onMapClick = (e: any) => {
        setCoords(e.get('coords'));
        props.clickFunc(e.get('coords'));
    }


    return (
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
                width={'100%'}
                height={400}
                defaultState={{
                    center: coords,
                    zoom: 9
                }}
            >
                {coords && <Placemark geometry={coords} />}
            </Map>
        </YMaps>
    )
};