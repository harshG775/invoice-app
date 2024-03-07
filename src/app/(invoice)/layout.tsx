"use client";

import Link from "next/link";
import { Icon } from '@iconify/react';
import { useState } from "react";
import { usePathname } from "next/navigation";

type SubItem = {
    id: number;
    name: string;
    path: string;
    iconName: string;
};
type Item = {
    id: number;
    name: string;
    path: string;
    iconName: string;
    subItem: SubItem[];
};

const sidebarData = [
    {
        id: 2,
        name: "Parties",
        path: "/#",
        iconName: "carbon:license-third-party-draft",
        subItem: [
            {
                id: 1,
                name: "Customers",
                path: "parties?type=customers",
                iconName: "eva:arrow-right-fill",
            },
            {
                id: 2,
                name: "Suppliers",
                path: "parties?type=suppliers",
                iconName: "eva:arrow-right-fill",
            },
        ],
    },
    {
        id: 3,
        name: "Inventory",
		path: "/#",
        iconName: "material-symbols:inventory-2",
        subItem: [
            {
                id: 1,
                name: "Items",
                path: "inventory?type=items",
                iconName: "eva:arrow-right-fill",
            },
        ],
    },
    {
        id: 3,
        name: "Bills",
		path: "/#",
        iconName: "tdesign:money",
        subItem: [
            {
                id: 1,
                name: "Sales",
                path: "bills?type=sales",
                iconName: "eva:arrow-right-fill",
            },
        ],
    },
];
function SubItem({ name, path, iconName }: SubItem) {
    return (
        <li>
            <Link href={`/${path}`} className="w-full grid grid-cols-[auto,1fr] gap-3 items-center p-2 hover:bg-neutral-950">
				<Icon icon={iconName}/>
                {name}
            </Link>
        </li>
    );
}
function SidebarItem({ name, path,iconName, subItem }: Item) {
	const pathNames = usePathname();
    if (subItem.length <= 0) {
        return (
            <li>
                <Link href={`/${path}`} className={`w-full grid grid-cols-[auto,1fr] gap-3 items-center p-2 hover:bg-neutral-950 ${pathNames.startsWith(path)?"bg-neutral-950 ":""}`}>
					<Icon icon={iconName}/>
                    {name}
                </Link>
            </li>
        );
    }
    if (subItem.length > 0) {
        return (
            <li className={`group   grid ${true?"grid-rows-[auto,1fr]":"grid-rows-[auto,0fr]"} transition-[grid-template-rows]  `}>
                <button  className="group-focus:bg-blue-500 w-full grid grid-cols-[auto,1fr] gap-3 items-center p-2 hover:bg-neutral-950 text-left">
                    <Icon icon={iconName}/>
					{name}
                </button>
                <ul className="overflow-hidden shadow-inner bg-neutral-900/50">
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
        <div className="
            bg-neutral-800 text-neutral-50 fixed top-0 left-0 bottom-0 w-64
            lg:translate-x-[0%] -translate-x-full transition-transform duration-300
        ">
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
            <div className="lg:pl-64 pl-[0rem] transition-[padding] duration-300">{children}</div>
            
        </>
    );
}
