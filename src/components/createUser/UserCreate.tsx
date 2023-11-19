import { Create, SimpleForm, TextInput} from "react-admin";

export const UserCreate = () => (
      <Create>
            <SimpleForm>
                <TextInput source="id" InputProps={{ disabled: true }}/>
                <TextInput source="name"/>
                <TextInput source="username" />
                <TextInput source="email" />
                <TextInput source="age" />
                <TextInput source="sex" />
                <TextInput source="adress" />
            </SimpleForm>
          </Create>
);