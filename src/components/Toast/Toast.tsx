import { useEffect, useState } from "react";
import { X } from "lucide-react";
import "./toast.css";

export type ToastType = "success" | "error" | "info";

export interface ToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
    closable?: boolean;
    show?: boolean;
}

export const Toast = ({ message, type = "success", duration = 3000, closable = false, show = false }: ToastProps) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => setVisible(false), duration);
            return () => clearTimeout(timer);
        }
    }, [duration, visible]);

    useEffect(() => {
        setVisible(show);
    }, [show]);

    return (
        <div className={`toast-container ${visible ? "show" : "hide"} ${type}`}>
            <span>{message}</span>
            {closable && (
                <button className="toast-close" onClick={() => setVisible(false)}>
                    <X size={16} />
                </button>
            )}
        </div>
    );
};
