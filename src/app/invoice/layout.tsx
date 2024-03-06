"use client";

import Link from "next/link";

type SubItem = {
    id: number;
    name: string;
    path: string;
    iconName: string;
};
type Item = {
    id: number;
    name: string;
    path?: string;
    iconName: string;
    subItem: SubItem[];
};

const sidebarData = [
    {
        id: 1,
        name: "Invoice",
        path: "/",
        iconName: "",
        subItem: [],
    },
    {
        id: 2,
        name: "Sales",
        path: "/sales",
        iconName: "",
        subItem: [],
    },
    {
        id: 3,
        name: "Inventory",
        iconName: "",
        subItem: [
            {
                id: 1,
                name: "Items",
                path: "/items",
                iconName: "",
            },
            {
                id: 2,
                name: "Services",
                path: "/services",
                iconName: "",
            },
        ],
    },
];
function SubItem({ name, path }: SubItem) {
    return (
        <li>
            <Link href={path} className="w-full inline-block">
                {name}
            </Link>
        </li>
    );
}
function SidebarItem({ name, path, subItem }: Item) {
    if (path) {
        return (
            <li>
                <Link href={path} className="w-full inline-block">
                    {name}
                </Link>
            </li>
        );
    }
    if (subItem.length > 0) {
        return (
            <li>
                <button className="w-full inline-block text-left">
                    {name}
                </button>
                <ul>
					{subItem.map((subItem: SubItem) => (
						<SubItem key={subItem.id} {...subItem} />
					))}
                </ul>
            </li>
        );
    }
}
function InvoiceSidebar() {
    return (
        <div className="bg-neutral-800 text-neutral-50 fixed top-0 left-0 bottom-0 w-64">
            <ul className="h-full overflow-y-scroll scrollbar-thin">
                {sidebarData.map((item: Item) => (
                    <SidebarItem key={item.id} {...item} />
                ))}
            </ul>
            <div>user</div>
        </div>
    );
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <InvoiceSidebar />
            <div className="pl-64">{children}</div>
        </>
    );
}
