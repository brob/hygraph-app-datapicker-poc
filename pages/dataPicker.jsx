import { useFieldExtension, Wrapper } from "@graphcms/app-sdk-react";
import { Input, Label, Stack } from "@hygraph/baukasten";
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
                const transformedData = data.data[QUERY_ID].map(item => ({value: item[ID_FIELD], label: item[TITLE_FIELD] }))
                setItems(transformedData)
                setLoading(false)
        })
      }, []);

    return (
        <Stack marginTop={6} gap={36}>


            {items && (
                <Stack gap={6}>
                <Label>Select an item</Label>
                <Select
                    defaultValue={items.find(item => item.value == value)}
                    onChange={(value) =>  onChange((typeof value.value === "string") ? value.value : String(value.value))}
                    
                    options={items}
                />
                </Stack>
            )}
            <Stack gap={6}>
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
