import React from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/router";

const LINKS = [
    {
        name: "Questions",
        url: "/",
    },
    {
        name: "Live Status",
        url: "/status",
    },
    {
        name: "Inbox",
        url: "/inbox",
    },
];

const Header = () => {
    const router = useRouter();

    return (
        <nav className="w-full grid grid-cols-12 px-8 py-4 border-b border-slate-300 sticky top-0 bg-slate-100">
            <div className="col-span-3 -violet-400 flex items-center">
                <Link className="text-2xl font-medium" href="/">
                    Easeforms
                </Link>
            </div>
            <div className="col-span-7 -red-400">
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList>
                        {LINKS.map((link, idx) => (
                            <TabsTrigger
                                value={link.name}
                                data-state={
                                    router.pathname === link.url
                                        ? "active"
                                        : "inactive"
                                }
                                key={idx}
                            >
                                <Link href={link.url}>{link.name}</Link>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            </div>
            <div className="col-span-2 -green-400"></div>
        </nav>
    );
};

export default Header;
