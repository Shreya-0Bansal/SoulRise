'use client';
import { useReadContract } from "thirdweb/react";
import { client } from "@/app/client";
import { baseSepolia } from "thirdweb/chains";
import { getContract } from "thirdweb";
import { CampaignCard } from "../../../components/CampaignCard";
import { CROWDFUNDING_FACTORY } from "../../constants/contracts";

export default function Create({params}) {
  // Get CrowdfundingFactory contract
  const contract = getContract({
    client: client,
    chain: baseSepolia,
    address: CROWDFUNDING_FACTORY,
  });

  // // Get all campaigns deployed with CrowdfundingFactory
  const { data: campaigns,  isLoading, refetch: refetchCampaigns } = useReadContract({
    contract,
    method: "function getAllCampaigns() view returns ((address campaignAddress, address owner, string name, uint256 creationTime)[])",
    params: []
  });
  console.log(campaigns);

  return (
    <main className="mx-auto max-w-7xl px-4 mt-4 sm:px-6 lg:px-8">
      <div className="py-10">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
        <title>SoulRise</title>
        <div className="page-header">
                <div className="content-center">
                    <div className="row row-grid justify-content-between align-items-center text-left">
                        <div className="col-lg-6 col-md-6">
                            <h1 className="text-white">
                                Support Our Campaigns
                                <br />
                                <span className="text-white">Make a Difference</span>
                            </h1>
                            <p className="text-white mb-3">
                                Join us in our mission to create a positive impact. Explore the campaigns below and donate to support causes that matter. Your contribution, no matter the size, makes a big difference.
                            </p>
                            <div className="mb-3">
                                <p className="category text-success d-inline">Donate Starting From $1</p>
                                <a href="#campaigns" className="btn btn-success btn-link btn-sm">
                                    View All Campaigns <i className="tim-icons icon-minimal-right"></i>
                                </a>
                            </div>
                            <div className="profile">
                                <a target="_blank" rel="noopener noreferrer" href="#" className="btn btn-icon btn-neutral btn-round btn-simple" data-toggle="tooltip" data-original-title="Follow us">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="#" className="btn btn-icon btn-neutral btn-round btn-simple" data-toggle="tooltip" data-original-title="Like us">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="#" className="btn btn-icon btn-neutral btn-round btn-simple" data-toggle="tooltip" data-original-title="Follow us">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-2 img-rt-box">
                            <img src="../../image/bitcoin.png" alt="Circle image" className="img-comp" />
                        </div>
                    </div>
                </div>
            </div>
            <img src="../../image/path3.png" className="path" />
            <div className="col-md-4">
                            <hr className="line-info" />
                            <h1>Explore the Campaigns
                                <span className="text-info"> and Make a Difference</span>
                            </h1>
                        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {!isLoading && campaigns && (
            campaigns.length > 0 ? (
              campaigns.map((campaign) => (
                <CampaignCard
                  key={campaign.campaignAddress}
                  campaignAddress={campaign.campaignAddress}
                />
              ))
            ) : (
              <p>No Campaigns</p>
            )
          )}
        </div>
      </div>
    </main>
  );
}
