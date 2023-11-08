import { useFieldExtension, Wrapper } from "@graphcms/app-sdk-react";
import { Input, Label, Stack } from "@hygraph/baukasten";
import { useState, useEffect } from "react";
import Select from 'react-select';

async function getItems(endpoint: string, authToken: string, query: string) {
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
    const { ID_FIELD, QUERY_ID, TITLE_FIELD, DATA_KEY } = config;
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    let query;
    if (DATA_KEY) {
        query = `
        query MyQuery {
            ${QUERY_ID} {
                ${DATA_KEY} {
                    ${TITLE_FIELD}
                    ${ID_FIELD}
                }
            }
        }
        `
    } else {
        query = `
    query MyQuery {
        ${QUERY_ID} {
          ${TITLE_FIELD}
          ${ID_FIELD}
        }
      }
    `
    }
    console.log({query})
      useEffect(() => {
        getItems(context.environment.endpoint, context.environment.authToken, query)
            .then((response) => response.json())
            .then((data) => {
                setItems(data.data[QUERY_ID][DATA_KEY])
                setLoading(false)
        })
      }, []);
    return (
        <Stack space="m">
            {loading ? <p>Loading...</p> : <Select
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
