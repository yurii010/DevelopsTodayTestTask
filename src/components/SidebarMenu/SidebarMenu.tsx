import { useState } from "react";
import { ChevronDown, ArrowLeft } from "lucide-react";
import "./sidebarMenu.css";

export type SidebarMenuItem = {
    label: string;
    onClick?: () => void;
    children?: SidebarMenuItem[];
};

export interface SidebarMenuProps {
    elements: SidebarMenuItem[];
}

export const SidebarMenu = ({ elements }: SidebarMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

    const toggleExpand = (label: string) => setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));

    const renderItem = (item: SidebarMenuItem) => (
        <li>
            <div className="menu-item" onClick={() => (item.children ? toggleExpand(item.label) : item.onClick?.())}>
                {item.label}
                {item.children && <ChevronDown className={`${expanded[item.label] && "rotated"}`} />}
            </div>

            {item.children && expanded[item.label] && (
                <ul className="submenu">
                    {item.children.map((child) => (
                        <li onClick={child.onClick} className="submenu-item">
                            {child.label}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open Menu</button>

            {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}

            <div className={`sidebar ${isOpen && "open"}`}>
                <button className="close-btn" onClick={() => setIsOpen(false)}>
                    <ArrowLeft />
                </button>
                <ul>{elements.map(renderItem)}</ul>
            </div>
        </>
    );
};
