import {useGetIdentity,  EditButton } from "react-admin";
import { Card, Typography, CardContent, CardHeader, CardMedia, useMediaQuery, Theme} from '@mui/material';

import { MapView } from "../map/MapView";
import EditIcon from '@mui/icons-material/Edit';


const customStyles = {
    height: 320,
    width: 320,
};

export const Profile = () => {

    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("xl"));
    const { data: identity, isLoading: identityLoading } = useGetIdentity();

    if (identityLoading) {
        return <div>Loading...</div>;
    }

    if (!identity) {
        return <div>User is not authenticated</div>;
    }




    return (
            <Card
                style={{
                    padding: 20
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <CardHeader title={'Profile'} />
                    <EditButton
                        resource={'users'}
                        record={identity}
                        label={'edit'}
                        href={'/edit-profile'}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            width: 'max-content'
                        }}
                    >
                        <CardMedia
                            image={identity.avatar}
                            sx={customStyles}
                        />
                        <CardContent
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 20
                            }}
                        >
                            <Typography variant="h5" component="h2">
                                Name: {identity.name}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Surname: {identity.surname}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                NickName: {identity.username}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Email: {identity.email}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Age: {identity.age}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Sex: {identity.sex}
                            </Typography>
                        </CardContent>
                    </div>
                    <MapView source={identity.address} />
                </div>
            </Card>
    );
};
