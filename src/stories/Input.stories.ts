import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../components/Input/Input";

const meta = {
    title: "Components/Input",
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
    parameters: {
        layout: "centered",
    },
    args: {
        type: "text",
        clearable: true,
        placeholder: "Type a text..",
    },
};

export const Number: Story = {
    parameters: {
        layout: "centered",
    },
    args: {
        type: "number",
        clearable: false,
        placeholder: "Type a number..",
    },
};

export const Password: Story = {
    parameters: {
        layout: "centered",
    },
    args: {
        type: "password",
        clearable: true,
        placeholder: "Type a password..",
    },
};
