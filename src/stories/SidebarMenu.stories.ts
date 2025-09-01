import type { Meta, StoryObj } from "@storybook/react-vite";
import { SidebarMenu } from "../components/SidebarMenu/SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
    title: "Components/SidebarMenu",
    component: SidebarMenu,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        elements: [
            { label: "Test 1", onClick: () => alert("Test 1") },
            {
                label: "Test 2",
                children: [
                    { label: "Test 2.1", onClick: () => alert("Test 2.1") },
                    { label: "Test 2.2", onClick: () => alert("Test 2.2") },
                ],
            },
            { label: "Test 3", onClick: () => alert("Test 3") },
        ],
    },
};
