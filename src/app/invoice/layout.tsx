"use client"

import Link from "next/link";

type SubItem = {
    id: number;
    name: string;
    path: string;
};
type Item = {
    id: number;
    name: string;
    path?: string;
	subItem?: SubItem[]
};

const sidebarData = [
    {
        id: 1,
        name: "Invoice",
        path: "/",
    },
    {
        id: 1,
        name: "Sales",
        path: "/sales",
    },
    {
        id: 1,
        name: "Inventory",
		subItem: [
			{
				id: 1,
				name: "Items",
				path: "/items",
			},
			{
				id: 1,
				name: "Services",
				path: "/services",
			},
		],
    },
]
function SubItem({name, path}: SubItem) {
	return (
		<li>
			<Link href={path} className="w-full inline-block">
				{name}
			</Link>
		</li>
	);
}
function SidebarItem({name, path, subItem}: Item) {
	if (path && !subItem) {
		return (
			<li>
				<Link href={path} className="w-full inline-block">
					{name}
				</Link>
			</li>
		);
	}
	if (subItem && subItem.length > 0) {
		return (
			<li>
				<button className="w-full inline-block text-left">
					{name}
				</button>
				<ul>
					<SubItem {...subItem[0]}/>
				</ul>
			</li>
		);
	}
}
function InvoiceSidebar() {
	return (
        <div className="bg-neutral-900 fixed top-0 left-0 bottom-0 w-64">
            <ul>
                {sidebarData.map((item:Item) => (
                    <SidebarItem key={item.id} {...item} />
                ))}
            </ul>
            <div>user</div>
        </div>
    );
}


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
	return (
        <>
            <InvoiceSidebar />
            <div className="pl-64">{children}</div>
        </>
    );
}
