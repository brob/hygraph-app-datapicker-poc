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
        <Heading>Setting up the Remote Source Data Picker</Heading>
        <Text>
          This App uses top-level Remote Source Fields to create pickers for
          various models
        </Text>
        
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
