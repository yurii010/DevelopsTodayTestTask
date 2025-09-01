import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "../components/Toast/Toast";

const meta: Meta<typeof Toast> = {
    title: "Components/Toast",
    component: Toast,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
    args: { message: "Operation successful!", type: "success" },
};

export const Error: Story = {
    args: { message: "Something went wrong!", type: "error", duration: 1000 },
};

export const Info: Story = {
    args: { message: "Info here!", type: "info", closable: true },
};
