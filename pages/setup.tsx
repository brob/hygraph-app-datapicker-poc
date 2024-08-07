import { useApp, Wrapper } from "@graphcms/app-sdk-react";
import { Box, Button, Text, Heading, Stack } from "@hygraph/baukasten";
import { CodeBlock, dracula } from "react-code-blocks";

function SetupElement() {
  const { installation } = useApp();
  if (installation.status === "COMPLETED") {
    return <Install />;
  }
  return <Install />;
}

function Install() {
  const { updateInstallation } = useApp();
  return (
    <Stack gap="12">
        <Heading>Setting up the Remote Source Data Picker</Heading>
        <Text>
          This App uses top-level Remote Source Fields to create pickers for
          various models
        </Text>
        <Button
          onClick={() =>
            updateInstallation({ status: "COMPLETED", config: {} })
          }
        >
          Install App
        </Button>
    </Stack>
  );
}

function Configure() {
  return (
    <div style={{ maxWidth: "84ch" }}>
      <Stack gap="12">
          <Heading>Hygraph Top-Level Remote Source Data Picker App</Heading>
          <div className="[&amp;_img]:rounded [&amp;>*:first-child]:mt-0 [&amp;>*:last-child]:mb-0 [&amp;_h1+*]:mt-0 [&amp;_h2+*]:mt-0 [&amp;_h3+*]:mt-0 [&amp;_h4+*]:mt-0 [&amp;_p:empty]:hidden">
            <p className="my-2xl">
              Give your editors a picker for data they need to attach to content
              via Remote Source fields. Instead of requiring an editor to know
              the proper ID for any external data, install this picker and
              configure each field to search through the data in a top-level
              remote source field and allow for editors to choose content in a
              human-readable way.
            </p>
            <h2 className="font-heading font-bold text-h2-mobile md:text-h2 mt-6xl mb-3xl">
              Install the app
            </h2>
            <p className="my-2xl">
              Use this page to install the app in your project of choice.
            </p>
            <p className="my-2xl">
              If you don't already have a Remote Source. Add one following this
              guide. After a remote source is added, create a top-level remote
              source field that contains an array of data for use in the picker.
              <img
                className="my-3xl block h-auto w-auto max-w-full rounded shadow-sm"
                src="https://media.graphassets.com/URpeiqaPRh2ufx5P6VI4"
                alt="Example top-level remote source field with products"
                title="Example top-level remote source field with products"
                loading="lazy"
              />
              For example, if your remote source contains product information
              from your PIM system, a{" "}
              <code className="px-xs py-xs font-code text-[0.85em] bg-surface-2 border rounded-sm">
                products
              </code>{" "}
              top-level remote source makes sense. This would allow for an
              editor to choose a product on an individual document.
            </p>
            <h2 className="font-heading font-bold text-h2-mobile md:text-h2 mt-6xl mb-3xl">
              Add a Picker field
            </h2>
            <p className="my-2xl">
              The picker fields for GraphQL sources work slightly differently
              than REST sources, so choose the correct field for your project
              and then configure.
              <img
                className="my-3xl block h-auto w-auto max-w-full rounded shadow-sm"
                src="https://media.graphassets.com/h6PbxzP7QkqoYTvqysBw"
                alt="The interface for GraphQL picker vs. REST picker"
                title="The interface for GraphQL picker vs. REST picker"
                loading="lazy"
              />
            </p>
            <p className="my-2xl">
              When adding the field, you'll be asked to configure certain values
              to tell the picker what to display and what to store for the ID.
            </p>
            <p className="my-2xl">
              <img
                className="my-3xl block h-auto w-auto max-w-full rounded shadow-sm"
                src="https://media.graphassets.com/fgRmZKaSGKN6iU6YXefr"
                alt="Configuration fields for Data Array Key, ID FIeld ID, API ID, and Title Field ID"
                title="Configuration fields for Data Array Key, ID FIeld ID, API ID, and Title Field ID"
                loading="lazy"
              />
            </p>
            <p className="my-2xl">
              Once these fields are added, your editors can then choose from the
              list provided by the API. Because this uses the top-level remote
              source fields, it means that the data available will always be in
              sync with what's available to your front-end API, as well.
            </p>
          </div>
      </Stack>
    </div>
  );
}

export default function Setup() {
  return (
    <Wrapper>
      <SetupElement />
    </Wrapper>
  );
}
