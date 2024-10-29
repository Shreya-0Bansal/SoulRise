'use client';
import { client } from "@/app/client";
import { TierCard } from "../../../components/TierCard";
import { useParams } from "next/navigation";
import { useState } from "react";
import { getContract, prepareContractCall, ThirdwebContract } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { lightTheme, TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";

export default function CampaignPage() {
    const account = useActiveAccount();
    const { campaignAddress } = useParams();
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);

    const contract = getContract({
        client: client,
        chain: baseSepolia,
        address: campaignAddress as string,
    });

    // Read contract data
    const { data: name, isLoading: isLoadingName } = useReadContract({
        contract: contract,
        method: "function name() view returns (string)",
        params: [],
    });

    const { data: description } = useReadContract({
        contract,
        method: "function description() view returns (string)",
        params: [],
    });

    const { data: deadline, isLoading: isLoadingDeadline } = useReadContract({
        contract: contract,
        method: "function deadline() view returns (uint256)",
        params: [],
    });

    const deadlineDate = new Date(parseInt(deadline?.toString() as string) * 1000);
    const hasDeadlinePassed = deadlineDate < new Date();

    const { data: goal, isLoading: isLoadingGoal } = useReadContract({
        contract: contract,
        method: "function goal() view returns (uint256)",
        params: [],
    });

    const { data: balance, isLoading: isLoadingBalance } = useReadContract({
        contract: contract,
        method: "function getContractBalance() view returns (uint256)",
        params: [],
    });

    // Calculate balance percentage
    const totalBalance = balance?.toString();
    const totalGoal = goal?.toString();
    let balancePercentage = (parseInt(totalBalance as string) / parseInt(totalGoal as string)) * 100;
    balancePercentage = balancePercentage >= 100 ? 100 : balancePercentage;

    const { data: tiers, isLoading: isLoadingTiers } = useReadContract({
        contract: contract,
        method: "function getTiers() view returns ((string name, uint256 amount, uint256 backers)[])",
        params: [],
    });

    const { data: owner, isLoading: isLoadingOwner } = useReadContract({
        contract: contract,
        method: "function owner() view returns (address)",
        params: [],
    });

    const { data: status } = useReadContract({
        contract,
        method: "function state() view returns (uint8)",
        params: [],
    });

    // Function to handle sharing the campaign
    const shareCampaign = (platform: string) => {
        const url = `https://your-dapp-url.com/campaign/${campaignAddress}`; // Change to your DApp's base URL
        const message = `Check out this campaign: ${name}\n${description}\n${url}`;

        if (platform === "whatsapp") {
            const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
            window.open(whatsappShareUrl, "_blank");
        } else if (platform === "twitter") {
            const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
            window.open(twitterShareUrl, "_blank");
        } else if (platform === "linkedin") {
            const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            window.open(linkedinShareUrl, "_blank");
        } 
    };

    return (
        <div className="mx-auto max-w-7xl px-2 mt-4 sm:px-6 pt-12 lg:px-8" style={{ paddingTop: '5rem' }}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row">
                    {!isLoadingName && (
                        <p className="text-4xl font-semibold">{name}</p>
                    )}
                    {owner === account?.address && (
                        <div className="flex flex-row ml-4">
                            {isEditing && (
                                <p className="px-4 py-2 bg-gray-500 text-white rounded-md mr-2">
                                    Status:   
                                    {status === 0 ? " Active" : 
                                    status === 1 ? " Successful" : " Active"}
                                </p>
                            )}
                            <button
                                className="px-4 py-2 bg-orange-500 text-white rounded-md"
                                onClick={() => setIsEditing(!isEditing)}
                            >
                                {isEditing ? "Done" : "Edit"}
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2"
                                onClick={() => setIsShareModalOpen(true)}
                            >
                                Share
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="my-4">
                <p className="text-lg font-semibold">Description:</p>
                <p>{description}</p>
            </div>
            <div className="mb-4">
                <p className="text-lg font-semibold">Deadline</p>
                {!isLoadingDeadline && (
                    <p>{deadlineDate.toDateString()}</p>
                )}
            </div>
            {!isLoadingBalance && (
                <div className="mb-4">
                    <p className="text-lg font-semibold">Campaign Goal: ${goal?.toString()}</p>
                    <div className="relative w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                        <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500 text-right" style={{ width: `${balancePercentage}%`}}>
                            <p className="text-white dark:text-white text-xs p-1">${balance?.toString()}</p>
                        </div>
                        <p className="absolute top-0 right-0 text-white dark:text-white text-xs p-1">
                            {balancePercentage >= 100 ? "" : `${balancePercentage.toFixed(0)}%`}
                        </p>
                    </div>
                </div>
            )}
            <div>
                <p className="text-lg font-semibold">Tiers:</p>
                <div className="grid grid-cols-3 gap-4 p-4">
                    {isLoadingTiers ? (
                        <p>Loading...</p>
                    ) : (
                        tiers && tiers.length > 0 ? (
                            tiers.map((tier, index) => (
                                <TierCard
                                    key={index}
                                    tier={tier}
                                    index={index}
                                    contract={contract}
                                    isEditing={isEditing}
                                />
                            ))
                        ) : (
                            !isEditing && (
                                <p>No tiers available</p>
                            )
                        )
                    )}
                    {isEditing && (
                        <button
                            className="max-w-sm flex flex-col text-center justify-center items-center font-semibold p-6 bg-[#3E4C54] text-white border border-slate-100 rounded-lg shadow"
                            onClick={() => setIsModalOpen(true)}
                        >
                            + Add Tier
                        </button>
                    )}
                </div>
            </div>
            
            {isModalOpen && (
                <CreateCampaignModal
                    setIsModalOpen={setIsModalOpen}
                    contract={contract}
                />
            )}

            {isShareModalOpen && (
                <ShareModal 
                    setIsShareModalOpen={setIsShareModalOpen}
                    shareCampaign={shareCampaign}
                />
            )}
        </div>
    );
}

type CreateTierModalProps = {
    setIsModalOpen: (value: boolean) => void;
    contract: ThirdwebContract;
};

const CreateCampaignModal = ({ setIsModalOpen, contract }: CreateTierModalProps) => {
    const [tierName, setTierName] = useState<string>("");
    const [tierAmount, setTierAmount] = useState<bigint>(1n);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center backdrop-blur-md">
            <div className="w-1/2 bg-[#212A31] p-6 rounded-md">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-lg text-[#E5E7EB] font-semibold">Create a Funding Tier</p>
                    <button
                        className="text-sm px-4 py-2 bg-slate-600 text-white rounded-md"
                        onClick={() => setIsModalOpen(false)}
                    >
                        Close
                    </button>
                </div>
                <div className="flex flex-col">
                    <label className="text-[#E5E7EB]">Tier Name:</label>
                    <input 
                        type="text" 
                        value={tierName}
                        onChange={(e) => setTierName(e.target.value)}
                        placeholder="What will you call this tier?"
                        className="mb-4 px-4 py-2 bg-slate-200 rounded-md"
                    />
                    <label className="text-[#E5E7EB]">Tier Cost:</label>
                    <input 
                        type="number"
                        value={parseInt(tierAmount.toString())}
                        onChange={(e) => setTierAmount(BigInt(e.target.value))}
                        className="mb-4 px-4 py-2 bg-slate-200 rounded-md"
                    />
                    <TransactionButton
                        style={{
                            marginTop: '1rem',
                            padding: '0.5rem 1rem',
                            backgroundColor: '#FF6F20',
                            color: '#E5E7EB',
                            borderRadius: '0.375rem',
                            transition: 'background 0.3s',
                        }}
                        transaction={() => prepareContractCall({
                            contract: contract,
                            method: "function addTier(string _name, uint256 _amount)",
                            params: [tierName, tierAmount]
                        })}
                        onTransactionConfirmed={async () => {
                            alert("Tier added successfully!");
                            setIsModalOpen(false);
                        }}
                        onError={(error) => alert(`Error: ${error.message}`)}
                        theme={lightTheme()}
                    >
                        Add Tier
                    </TransactionButton>
                </div>
            </div>
        </div>
    );
};

type ShareModalProps = {
    setIsShareModalOpen: (value: boolean) => void;
    shareCampaign: (platform: string) => void;
};

const ShareModal = ({ setIsShareModalOpen, shareCampaign }: ShareModalProps) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center backdrop-blur-md">
            <div className="w-1/3 bg-[#212A31] p-6 rounded-md">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-lg text-[#E5E7EB] font-semibold">Share This Campaign</p>
                    <button
                        className="text-sm px-4 py-2 bg-slate-600 text-white rounded-md"
                        onClick={() => setIsShareModalOpen(false)}
                    >
                        Close
                    </button>
                </div>
                <div className="flex flex-col space-y-2">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={() => shareCampaign("whatsapp")}>
                        Share on WhatsApp
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => shareCampaign("twitter")}>
                        Share on Twitter
                    </button>
                    <button className="bg-blue-700 text-white px-4 py-2 rounded-md" onClick={() => shareCampaign("linkedin")}>
                        Share on LinkedIn
                    </button>
                </div>
            </div>
        </div>
    );
};
