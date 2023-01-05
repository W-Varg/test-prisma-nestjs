import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { UnidadTitle } from "../unidad/UnidadTitle";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="Assigned To	">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Estimation" source="estimation" />
        <ReferenceInput source="unidad.id" reference="Unidad" label="Project">
          <SelectInput optionText={UnidadTitle} />
        </ReferenceInput>
        <DateTimeInput label="Start Date" source="startDate" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Option 1", value: "New" },
            { label: "Option 2", value: "Pending" },
            { label: "Option 3", value: "Ongoing" },
            { label: "Option 4", value: "Done" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
