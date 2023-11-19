import {EmailField, ImageField, Show, SimpleShowLayout, TextField} from 'react-admin';
import { Card, CardMedia } from '@mui/material';
import {MapView} from "../map/MapView";

const customStyles = {
    height: 320,
    width: 320,
};

export const UserShow = () => {

    return (
        <Show>
            <SimpleShowLayout>
                <ImageField source={"avatar"} />
                <TextField source={"id"} />
                <TextField source={"name"} />
                <TextField source={"surname"} />
                <TextField source={"username"} />
                <EmailField source={"email"} />
                <TextField source="age" />
                <TextField source="sex" />
                <MapView source={"address"} />
            </SimpleShowLayout>
        </Show>
    );
}
