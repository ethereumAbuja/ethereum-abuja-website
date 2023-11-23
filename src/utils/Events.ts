

export interface GetEventsOptions {
  query?: string;
  page: number;
  limit: number;
};

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

export type EventType =
  | "Physical Meetup"
  | "Product Demo Day"
  | "Technical Workshop"
  | "Virtual Hackathon";
  
export type LocationType = "VIRTUAL" | "IN-PERSON";

type EventList = {
  eventType: EventType;
  theme: string;
  dateUnix: number;
  duration: number; // Duration of the event in seconds
  location: LocationType; // Location type: Virtual or In-Person
};

export const getEvents = ({
  query,
  page = 1,
  limit = 10,
}: GetEventsOptions) => {
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

    const totalPages = Math.ceil(eventsList.length / limit);

    const result = eventsList.slice(skip, skip + limit);

    return { events: result, totalPages };
};

export const eventsList: EventList[] = [
  {
    eventType: "Physical Meetup",
    theme: "Aya Gigs X Ethereum Amsterdam 2024 Hackathon Event",
    dateUnix: 1668691200,
    duration: 10800,
    location: "IN-PERSON",
  },
  {
    eventType: "Product Demo Day",
    theme: "Tech Showcase: Future Innovations",
    dateUnix: 1669276800,
    duration: 7200,
    location: "IN-PERSON",
  },
  {
    eventType: "Technical Workshop",
    theme: "Advanced Web Development Workshop",
    dateUnix: 1669862400,
    duration: 10800,
    location: "IN-PERSON",
  },
  {
    eventType: "Virtual Hackathon",
    theme: "Decentralized App Development Challenge",
    dateUnix: 1670448000,
    duration: 7200,
    location: "VIRTUAL",
  },
  // Additional events to make the array at least 10
  {
    eventType: "Physical Meetup",
    theme: "AI and Robotics Symposium",
    dateUnix: 1671033600,
    duration: 7200,
    location: "IN-PERSON",
  },
  {
    eventType: "Product Demo Day",
    theme: "Startup Pitch Day: Emerging Technologies",
    dateUnix: 1671619200,
    duration: 10800,
    location: "IN-PERSON",
  },
  {
    eventType: "Technical Workshop",
    theme: "Cybersecurity Training Session",
    dateUnix: 1672204800,
    duration: 7200,
    location: "IN-PERSON",
  },
  {
    eventType: "Virtual Hackathon",
    theme: "Blockchain for Social Impact",
    dateUnix: 1672790400,
    duration: 10800,
    location: "VIRTUAL",
  },
  {
    eventType: "Physical Meetup",
    theme: "Data Science and Machine Learning Forum",
    dateUnix: 1673376000,
    duration: 10800,
    location: "IN-PERSON",
  },
  {
    eventType: "Product Demo Day",
    theme: "Digital Marketing Trends Expo",
    dateUnix: 1673961600,
    duration: 7200,
    location: "IN-PERSON",
  },
  {
    eventType: "Technical Workshop",
    theme: "AI Ethics and Responsible Innovation",
    dateUnix: 1674547200,
    duration: 7200,
    location: "IN-PERSON",
  },
  {
    eventType: "Virtual Hackathon",
    theme: "Smart Cities Development Challenge",
    dateUnix: 1675132800,
    duration: 10800,
    location: "VIRTUAL",
  },
  {
    eventType: "Physical Meetup",
    theme: "Quantum Computing Symposium",
    dateUnix: 1675718400,
    duration: 7200,
    location: "IN-PERSON",
  },
  {
    eventType: "Product Demo Day",
    theme: "Innovative Gadgets and Wearables Expo",
    dateUnix: 1676304000,
    duration: 10800,
    location: "IN-PERSON",
  },
  {
    eventType: "Technical Workshop",
    theme: "DevOps and Continuous Integration Bootcamp",
    dateUnix: 1676893200,
    duration: 7200,
    location: "IN-PERSON",
  },
  {
    eventType: "Virtual Hackathon",
    theme: "AR/VR Application Development Challenge",
    dateUnix: 1677478800,
    duration: 10800,
    location: "VIRTUAL",
  },
  {
    eventType: "Physical Meetup",
    theme: "Space Exploration and Technology Showcase",
    dateUnix: 1678064400,
    duration: 7200,
    location: "IN-PERSON",
  },
  {
    eventType: "Product Demo Day",
    theme: "Health Tech Innovations Expo",
    dateUnix: 1678650000,
    duration: 10800,
    location: "IN-PERSON",
  },
  {
    eventType: "Technical Workshop",
    theme: "Cloud Computing Solutions Workshop",
    dateUnix: 1679235600,
    duration: 7200,
    location: "IN-PERSON",
  },
  {
    eventType: "Virtual Hackathon",
    theme: "Ethereum Smart Contract Competition",
    dateUnix: 1679821200,
    duration: 10800,
    location: "VIRTUAL",
  },
];
