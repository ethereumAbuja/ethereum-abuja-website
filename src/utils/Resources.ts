export interface GetResourcesOptions {
  query?: string;
  page: number;
  limit: number;
}

type PipelineStage =
  | {
      $search: {
        index: string;
        text: {
          query: string;
          fuzzy: {
            maxEdits: number;
            prefixLength: number;
            maxExpansions: number;
          };
          path: {
            wildcard: string;
          };
        };
      };
    }
  | {
      $skip: number;
    }
  | {
      $limit: number;
    };

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export type Type = "Blogs" | "Tutorials" | "Talks";

export type ResourceList = {
  resourceType: Type;
  title: string;
  dateUnix: number;
};

export const getResources = ({
  query,
  page = 1,
  limit = 10,
}: GetResourcesOptions) => {
  const skip = (page - 1) * limit;

  const pipeline: PipelineStage[] = [{ $skip: skip }, { $limit: limit }];

  if (query) {
    pipeline.unshift({
      $search: {
        index: "search",
        text: {
          query,
          fuzzy: {
            maxEdits: 1,
            prefixLength: 3,
            maxExpansions: 50,
          },
          path: {
            wildcard: "*",
          },
        },
      },
    });
  }

  const totalPages = Math.ceil(resourceList.length / limit);

  const result = resourceList.slice(skip, skip + limit);

  return { resources: result, totalPages };
};

export const resourceList: ResourceList[] = [
  {
    resourceType: "Blogs",
    title: "Growing a web3 community as a way to improve the African society",
    dateUnix: 1702406969,
  },
  {
    resourceType: "Tutorials",
    title: "Creating an ERC-20 token using Solidity",
    dateUnix: 1701354600,
  },
  {
    resourceType: "Talks",
    title: "Building a sustainable economy using decentralised technology",
    dateUnix: 1703525640,
  },
  {
    resourceType: "Talks",
    title: "Building with Rust",
    dateUnix: 1706227200,
  },
  {
    resourceType: "Blogs",
    title: "Exploring the Impact of Blockchain in Education",
    dateUnix: 1702406969,
  },
  {
    resourceType: "Tutorials",
    title: "Building a Decentralized Voting System with Smart Contracts",
    dateUnix: 1701354600,
  },
  {
    resourceType: "Talks",
    title: "Decoding the Future: AI and Blockchain Integration",
    dateUnix: 1703525640,
  },
  {
    resourceType: "Talks",
    title: "The Rise of WebAssembly: A Deep Dive",
    dateUnix: 1706227200,
  },
  {
    resourceType: "Blogs",
    title: "NFTs and Digital Art: A Creative Revolution",
    dateUnix: 1705120000,
  },
  {
    resourceType: "Tutorials",
    title: "Introduction to Solidity for Smart Contract Development",
    dateUnix: 1704300000,
  },
  {
    resourceType: "Talks",
    title: "Sustainable Development with Decentralized Technologies",
    dateUnix: 1702900000,
  },
  {
    resourceType: "Blogs",
    title: "The Evolution of Cryptocurrencies: Past, Present, and Future",
    dateUnix: 1701900000,
  },
  {
    resourceType: "Blogs",
    title: "Web3 and the Future of the Internet",
    dateUnix: 1701000000,
  },
  {
    resourceType: "Tutorials",
    title: "Creating a Decentralized Marketplace with Blockchain",
    dateUnix: 1700200000,
  },
  {
    resourceType: "Talks",
    title: "Rust in Blockchain: A Powerful Duo",
    dateUnix: 1700000000,
  },
  {
    resourceType: "Blogs",
    title: "The Impact of Blockchain on Supply Chain Management",
    dateUnix: 1699500000,
  },
  {
    resourceType: "Tutorials",
    title: "Getting Started with Ethereum Development",
    dateUnix: 1699200000,
  },
  {
    resourceType: "Talks",
    title: "Building Decentralized Identity Systems",
    dateUnix: 1698900000,
  },
  {
    resourceType: "Blogs",
    title: "Tokenomics: Designing a Successful Token Economy",
    dateUnix: 1698600000,
  },
  {
    resourceType: "Tutorials",
    title: "Smart Contract Security Best Practices",
    dateUnix: 1698300000,
  },
  {
    resourceType: "Talks",
    title: "The Role of Blockchain in Achieving Financial Inclusion",
    dateUnix: 1698000000,
  },
  {
    resourceType: "Blogs",
    title:
      "The Intersection of AI and Blockchain: Opportunities and Challenges",
    dateUnix: 1697700000,
  },
  {
    resourceType: "Blogs",
    title: "Web3 Adoption Strategies for Businesses",
    dateUnix: 1697400000,
  },
  {
    resourceType: "Tutorials",
    title: "Building Scalable DApps with Layer 2 Solutions",
    dateUnix: 1697100000,
  },
  {
    resourceType: "Talks",
    title: "The Decentralized Future: A Roadmap",
    dateUnix: 1696800000,
  },
  {
    resourceType: "Blogs",
    title: "DeFi and the Evolution of Traditional Finance",
    dateUnix: 1696500000,
  },
  {
    resourceType: "Tutorials",
    title: "Introduction to WebAssembly for Blockchain Developers",
    dateUnix: 1696200000,
  },
  {
    resourceType: "Talks",
    title: "Innovations in Blockchain Governance",
    dateUnix: 1695900000,
  },
  {
    resourceType: "Blogs",
    title: "The Role of Smart Contracts in Automating Processes",
    dateUnix: 1695600000,
  },
  {
    resourceType: "Tutorials",
    title: "Creating Non-Fungible Tokens (NFTs) on the Ethereum Blockchain",
    dateUnix: 1695300000,
  },
  {
    resourceType: "Talks",
    title: "Web3 and its Impact on Social Media",
    dateUnix: 1695000000,
  },
  {
    resourceType: "Blogs",
    title: "The Future of Privacy in a Decentralized World",
    dateUnix: 1694700000,
  },
  {
    resourceType: "Tutorials",
    title: "Building a Decentralized Exchange (DEX) with Solidity",
    dateUnix: 1694400000,
  },
  {
    resourceType: "Talks",
    title: "Ethereum 2.0: The Beacon Chain and Beyond",
    dateUnix: 1694100000,
  },
];
