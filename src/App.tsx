import {Admin, Resource, useGetIdentity} from "react-admin";

import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";

import GroupIcon from '@mui/icons-material/Group';
import ProfileIcon from '@mui/icons-material/Person';

import { MyLayout} from "./components/layout/MyLayout";

import { UsersList } from "./components/listUser/UsersList"
import { UserShow } from "./components/showUser/UserShow"
import { UserEdit } from "./components/editUser/UserEdit";
import { UserCreate } from "./components/createUser/UserCreate";

import { ProfileShow } from "./components/profile/ProfileShow";
import { ProfileEdit } from "./components/editProfile/EditProfile";


export const App = () => {
    // const {data: identity, isLoading: identityLoading} = useGetIdentity();
    //
    // if (identityLoading) {
    //     return <div>Loading...</div>;
    // }
    //
    // if (!identity) {
    //     return <div>User is not authenticated</div>;
    // }

    return (
        <Admin
            layout={MyLayout}
            authProvider={authProvider}
            dataProvider={dataProvider}
            requireAuth
            darkTheme={{palette: {mode: 'dark'}}}
        >
            <Resource
                name={"users"}
                list={UsersList}
                show={UserShow}
                recordRepresentation="name"
                edit={UserEdit}
                create={UserCreate}
                icon={GroupIcon}
            />
            {/*<Resource*/}
            {/*    name={`${identity.id}`}*/}
            {/*    show={ProfileShow}*/}
            {/*    recordRepresentation={"name"}*/}
            {/*    edit={ProfileEdit}*/}
            {/*    icon={ProfileIcon}*/}
            {/*/>*/}
        </Admin>
    );
}

