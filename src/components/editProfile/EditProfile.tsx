import { useGetIdentity, TextInput, ImageInput, SimpleForm, Edit, useUpdate } from 'react-admin';

export const ProfileEdit = () => {

    const { data: identity, isLoading: identityLoading } = useGetIdentity();

    if (identityLoading) {
        return <div>Loading...</div>;
    }

    if (!identity) {
        return <div>User is not authenticated</div>;
    }


    return (
        <Edit
            resource='auth'
        >
            <SimpleForm
            >
                <TextInput source={`${identity.id}`} InputProps={{ disabled: true }}/>
                <TextInput source={identity.name} />
                <TextInput source={identity.surname} />
                <TextInput source={identity.username} />
                <TextInput source={identity.email} />
                <TextInput source={identity.age} />
                <TextInput source={identity.sex} />
                <ImageInput source={identity.avatar!} />
            </SimpleForm>
        </Edit>
    );
};
