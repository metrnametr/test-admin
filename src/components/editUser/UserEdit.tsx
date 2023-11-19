import { useState } from 'react'
import {Edit, ImageInput, SimpleForm, TextInput } from 'react-admin';
import {MapView} from "../map/MapView";


export const UserEdit = () => {
    //
    const [locationState, setLocationState] = useState<number[]>([0,0]);
    //
    // useEffect(() => {
    //     console.log(locationState)
    // }, [locationState]);

    const saveFunc = () => {
        console.log(locationState)
    }

    return(
        <Edit resource={'users'}>
            <SimpleForm onSubmit={saveFunc}>
                <TextInput source="id" InputProps={{ disabled: true }}/>
                <TextInput source="name"/>
                <TextInput source="surname" />
                <TextInput source="username" />
                <TextInput source="email" />
                <TextInput source="age" />
                <TextInput source="sex" />
                <ImageInput source="avatar" />
                <MapView source={"address"} setLocationState={setLocationState}/>
            </SimpleForm>
        </Edit>
    )
}