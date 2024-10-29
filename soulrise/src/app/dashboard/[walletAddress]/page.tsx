'use client';
import { client } from "@/app/client";
import { CROWDFUNDING_FACTORY } from "@/app/constants/contracts";
import { MyCampaignCard } from "../../../components/MyCampaignCard";
import { useState, useEffect } from "react";
import { getContract } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { deployPublishedContract } from "thirdweb/deploys";
import { useActiveAccount, useReadContract } from "thirdweb/react";

// Avatar options
const animalAvatars = [
    { name: "Leo", image: "../../image/lion.jpg" },
    { name: "Ella", image: "../../image/Ele.avif" },
    { name: "Foxy", image: "../../image/fox.avif" },
];

export default function DashboardPage() {
    const account = useActiveAccount();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [userAvatar, setUserAvatar] = useState<{ avatarName: string, avatarImage: string } | null>(null);
    const [selectedAvatar, setSelectedAvatar] = useState<string>(animalAvatars[0].image);
    const [avatarName, setAvatarName] = useState<string>("");

    const contract = getContract({
        client: client,
        chain: baseSepolia,
        address: CROWDFUNDING_FACTORY,
    });

    // Load the avatar from localStorage on component mount
    useEffect(() => {
        const avatarData = localStorage.getItem('userAvatar');
        if (avatarData) {
            setUserAvatar(JSON.parse(avatarData));
        }
    }, []);

    const handleSaveAvatar = () => {
        const avatarData = { avatarName, avatarImage: selectedAvatar };
        localStorage.setItem('userAvatar', JSON.stringify(avatarData));
        setUserAvatar(avatarData);
    };

    // Get Campaigns
    const { data: myCampaigns, isLoading: isLoadingMyCampaigns, refetch } = useReadContract({
        contract: contract,
        method: "function getUserCampaigns(address _user) view returns ((address campaignAddress, address owner, string name, uint256 creationTime)[])",
        params: [account?.address as string]
    });

    return (
        <div className="wrapper">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
            <div className="page-header">
                <div className="container align-items-center">
                    <div className="row">
                        {/* User Summary and Portfolio Table */}
                        <div className="col-lg-7 col-md-6">
                            <h1 className="profile-title text-left">{userAvatar ? userAvatar.avatarName : 'Name'}</h1>
                            <h5 className="text-on-back">01</h5>

                            <div className="card mt-6">
                                <div className="card-body">
                                    <ul className="nav nav-tabs nav-tabs-primary">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="tab" href="#donation-history">
                                                Avatar
                                            </a>
                                        </li>
                                    </ul>

                                    {/* Avatar selection section */}
                                    <div className="mt-4">
                                    <div className="flex items-center mb-4">
                                        <label className="text-[#E5E7EB] mr-2">Name:</label>
                                        <input
                                            type="text"
                                            value={avatarName}
                                            onChange={(e) => setAvatarName(e.target.value)}
                                            placeholder="Inspire with your name!"
                                            className="px-4 py-2 bg-[#2E3A44] text-[#E5E7EB] placeholder-gray-400 focus:bg-[#39454F] rounded-md border border-[#E5E7EB] focus:border-[#A0AEC0] transition duration-200"
                                        />
                                    </div>
                                        <label className="text-[#E5E7EB]">Select an Avatar:</label>
                                        <div className="grid grid-cols-3 gap-4 mt-2">
                                            {animalAvatars.map((animal, index) => (
                                                <div
                                                    key={index}
                                                    className={`p-2 border-2 rounded-md cursor-pointer ${selectedAvatar === animal.image ? 'border-orange-400' : 'border-gray-400'}`}
                                                    onClick={() => setSelectedAvatar(animal.image)}
                                                >
                                                    <img src={animal.image} alt={animal.name} className="w-full h-auto" />
                                                    <p className="text-center text-white mt-2">{animal.name}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            className="mt-4 px-3 py-3 bg-orange-400 text-white rounded-md"
                                            onClick={handleSaveAvatar}
                                        >
                                            Save Avatar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* User Photo */}
                        <div className="col-lg-5 col-md-5 d-flex align-items-end">
                            <div className="card card-plain text-center">
                                <div className="card-header">
                                    <img
                                        src={userAvatar?.avatarImage || "../../image/lion.jpg"}
                                        className="img-center img-fluid rounded-circle mb-3"
                                        alt="User"
                                    />
                                    <h4 className="title">{userAvatar ? userAvatar.avatarName : 'User Name'}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dashboard Section */}
            <div className="mx-auto max-w-7xl px-4 mt-2 sm:px-6 lg:px-8">
                <section className="section-perf">
                    <div className="container">
                        <div className="row-launch">
                            <div className="col-lg-12 col-md-12 ml-auto mr-auto">
                                <div className="card card-plain">
                                    <div className="card-header">
                                        <h1 className="profile-title text-left">Dashboard</h1>
                                        <h5 className="text-on-back">02</h5>
                                    </div>
                                    <button
                                        className="px-1 py-2 bg-orange-400 text-white rounded-md"
                                        onClick={() => setIsModalOpen(true)}
                                    >
                                        Create Campaign
                                    </button>

                                    <p className="text-2xl font-semibold mb-4">My Campaigns:</p>
                                    <div className="grid grid-cols-3 gap-4">
                                        {!isLoadingMyCampaigns && (
                                            myCampaigns && myCampaigns.length > 0 ? (
                                                myCampaigns.map((campaign, index) => (
                                                    <MyCampaignCard
                                                        key={index}
                                                        contractAddress={campaign.campaignAddress}
                                                    />
                                                ))
                                            ) : (
                                                <p>No campaigns</p>
                                            )
                                        )}
                                    </div>

                                    {isModalOpen && (
                                        <CreateCampaignModal
                                            setIsModalOpen={setIsModalOpen}
                                            refetch={refetch}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
};


type CreateCampaignModalProps = {
    setIsModalOpen: (value: boolean) => void
    refetch: () => void
}

const CreateCampaignModal = (
    { setIsModalOpen, refetch }: CreateCampaignModalProps
) => {
    const account = useActiveAccount();
    const [isDeployingContract, setIsDeployingContract] = useState<boolean>(false);
    const [campaignName, setCampaignName] = useState<string>("");
    const [campaignDescription, setCampaignDescription] = useState<string>("");
    const [campaignGoal, setCampaignGoal] = useState<number>(1);
    const [campaignDeadline, setCampaignDeadline] = useState<number>(1);
    
    // Deploy contract from CrowdfundingFactory
    const handleDeployContract = async () => {
        setIsDeployingContract(true);
        try {
            console.log("Deploying contract...");
            const contractAddress = await deployPublishedContract({
                client: client,
                chain: baseSepolia,
                account: account!,
                contractId: "Crowdfunding",
                contractParams: [
                    campaignName,
                    campaignDescription,
                    campaignGoal,
                    campaignDeadline
                ],
                publisher: "0xb2df10F132c4eaA886C8E9138005f7488779F866",
                version: "1.0.7",
            });
            alert("Contract deployed successfully!");
        } catch (error) {
            console.error(error);
        } finally {
            setIsDeployingContract(false);
            setIsModalOpen(false);
            refetch ();
        }
    };

    const handleCampaignGoal = (value: number) => {
        const goal = parseInt(value.toString());
        setCampaignGoal(isNaN(goal) || goal < 1 ? 1 : goal);
    };
    
    const handleCampaignLengthChange = (value: number) => {
        const length = parseInt(value.toString());
        setCampaignDeadline(isNaN(length) || length < 1 ? 1 : length);
    };    

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-md">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
    <div className="w-1/2 bg-[#212A31] p-6 rounded-md">
        <div className="flex justify-between items-center mb-4">
            <p className="text-lg text-[#E5E7EB] font-semibold">CREATE A CAMPAIGN</p>
            <button
                className="text-sm px-4 py-2 bg-[#3E4C54] text-[#E5E7EB] hover:bg-[#5A6E72] rounded-md"
                onClick={() => {
                    console.log("Close button clicked");
                    setIsModalOpen(false);
                }}
            >Close</button>
        </div>
        <div className="flex flex-col">
            <label className="text-[#E5E7EB]">Campaign Name:</label>
            <input 
                type="text" 
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                placeholder="What's the name that will inspire others to join?"
                className="mb-4 px-4 py-2 bg-[#2E3A44] text-[#E5E7EB] placeholder-gray-400 focus:bg-[#39454F] rounded-md"
            />
            <label className="text-[#E5E7EB]">Campaign Description:</label>
            <textarea
                value={campaignDescription}
                onChange={(e) => setCampaignDescription(e.target.value)}
                placeholder="Share your vision! Tell us what makes this campaign special."
                className="mb-4 px-4 py-2 bg-[#2E3A44] text-[#E5E7EB] placeholder-gray-400 focus:bg-[#39454F] rounded-md"
            ></textarea>
            <div className="flex justify-between items-center mb-4">
            <div className="flex-1 mr-2">
            <label className="text-[#E5E7EB]">Campaign Goal:</label>
            
            <input 
                type="number"
                value={campaignGoal}
                onChange={(e) => handleCampaignGoal(parseInt(e.target.value))}
                className="mb-4 px-4 py-2 bg-[#2E3A44] text-[#E5E7EB] placeholder-gray-400 focus:bg-[#39454F] rounded-md"
            />
            </div>
            <div className="flex-1 ml-2">
            <label className="text-[#E5E7EB]">{`Campaign Length (Days)`}</label>
            
                <input 
                    type="number"
                    value={campaignDeadline}
                    onChange={(e) => handleCampaignLengthChange(parseInt(e.target.value))}
                    className="mb-4 px-4 py-2 bg-[#2E3A44] text-[#E5E7EB] placeholder-gray-400 focus:bg-[#39454F] rounded-md"
                />
            </div>
            </div>

            <button
                className="mt-4 px-4 py-2 bg-orange-400 text-[#E5E7EB] hover:bg-[#5A6E72] rounded-md"
                onClick={handleDeployContract}
            >{
                isDeployingContract ? "Creating Campaign..." : "Create Campaign"
            }</button>
        </div>
    </div>
</div>
    )
};
