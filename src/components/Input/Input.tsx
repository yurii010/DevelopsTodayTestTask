import React, { useState } from "react";
import { Eye, EyeOff, CircleX } from "lucide-react";
import "./input.css";

export type InputType = "text" | "number" | "password";

export interface InputProps {
    type?: InputType;
    clearable?: boolean;
    placeholder?: string;
}

export const Input = ({ type = "text", clearable = false, placeholder = "" }: InputProps) => {
    const [value, setValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const inputType = type === "password" && showPassword ? "text" : type;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    const handleClear = () => setValue("");

    return (
        <div className="input-wrapper">
            <div className="input-inner">
                <input
                    type={inputType}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                    className={`input-field ${type === "password" && "has-icon"}`}
                />
                {type === "password" &&
                    (showPassword ? (
                        <Eye onClick={() => setShowPassword(!showPassword)} className="show-icon" />
                    ) : (
                        <EyeOff onClick={() => setShowPassword(!showPassword)} className="show-icon" />
                    ))}
            </div>
            {clearable && (
                <button type="button" onClick={handleClear} className="clear-button">
                    <CircleX />
                </button>
            )}
        </div>
    );
};
