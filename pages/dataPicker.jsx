import { useFieldExtension, Wrapper } from "@graphcms/app-sdk-react";
import { Input, Label, MultiSelect, Stack, Text } from "@hygraph/baukasten";
import { useState, useEffect } from "react";
import Select from 'react-select';

async function getItems(endpoint, authToken, query) {
    const data = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({ query }),
        })
        return data
}



function FieldElement() {
    const { value, onChange, context, field } = useFieldExtension();
    const { formConfig } = field;
    const { config } = formConfig;
    const { ID_FIELD, QUERY_ID, TITLE_FIELD } = config;
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const query = `
    query MyQuery {
        ${QUERY_ID} {
          ${TITLE_FIELD}
          ${ID_FIELD}
        }
      }
    `
      useEffect(() => {
        getItems(context.environment.endpoint, context.environment.authToken, query)
            .then((response) => response.json())
            .then((data) => {
                setItems(data.data[QUERY_ID])
                setLoading(false)
        })
      }, []);

    return (
        <Stack space="m">

            {items && <Select
                defaultValue={value}
                onChange={(value) => onChange(value.value)}
                options={items.map(item => ({value: item[ID_FIELD], label: item[TITLE_FIELD] }))}
            />}
            <Stack space="s">
            <Label>Current Value</Label>
            <Input
                value={value}
                readOnly
                placeholder="Enter some text"
            />
            </Stack>
        </Stack>
    );
}

export default function Field() {
    return (
        <Wrapper>
            <FieldElement />
        </Wrapper>
    );
}
