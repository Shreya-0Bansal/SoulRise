// cd soulrise, npm run dev
'use client';
import { client } from "@/app/client";
import Link from "next/link";
import { ConnectButton, useActiveAccount } from "thirdweb/react";

export const Navbar = () => {
    const account = useActiveAccount();

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-transparent" color-on-scroll="100">
            <div className="container">
                <div className="navbar-translate">
                    <a className="navbar-brand" href="/">
                        <span>SoulRise</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-bar bar1"></span>
                        <span className="navbar-toggler-bar bar2"></span>
                        <span className="navbar-toggler-bar bar3"></span>
                    </button>
                </div>
                <div className="navbar-collapse" id="navigation">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/create/createId" className="nav-link">Campaigns</Link>
                        </li>
                        {account && (
                            <li className="nav-item">
                                <Link href={`/dashboard/${account?.address}`} className="nav-link">Dashboard</Link>
                            </li>
                        )}
                    </ul>
                    <div className="ml-auto">
                        <ConnectButton 
                            client={client}
                            detailsButton={{
                                style: {
                                    maxHeight: "50px",
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};
