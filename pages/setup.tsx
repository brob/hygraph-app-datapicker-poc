import { useApp, Wrapper } from "@graphcms/app-sdk-react";
import { Box, Button, Text, Heading, Stack } from "@hygraph/baukasten";

function SetupElement() {
    const { installation } = useApp();
    if (installation.status === "COMPLETED") {
        return <Configure />;
    }
    return <Install />;
}

function Install() {
    const { updateInstallation } = useApp();
    return (
        <Stack gap="12">
            <Box>
                <Heading>Setting up the Remote Source Data Picker</Heading>
                <Text>This App uses top-level Remote Source Fields to create pickers for various models</Text>
                <Button
                    onClick={() =>
                        updateInstallation({ status: "COMPLETED", config: {} })
                    }
                >
                    Install App
                </Button>
            </Box>
        </Stack>
    );
}

function Configure() {
    const { updateInstallation } = useApp();
    return (
        <Stack gap="12">
            <Box>
                <Heading>Setting up the Remote Source Data Picker</Heading>
                <Text>This App uses top-level Remote Source Fields to create pickers for various models</Text>
                <Button
                    onClick={() =>
                        updateInstallation({ status: "COMPLETED", config: {} })
                    }
                >
                    Save
                </Button>
            </Box>
        </Stack>
    );
}

export default function Setup() {
    return (
        <Wrapper>
            <SetupElement />
        </Wrapper>
    );
}
