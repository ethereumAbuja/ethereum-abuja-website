# The ethabuja.com website stack

- [Node.js](https://nodejs.org/)
- [Yarn package manager](https://yarnpkg.com/cli/install)
- [Next](https://nextjs.org/) - Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.
- [Typescript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript
- [Chakra UI](https://chakra-ui.com/) - A UI library (Migration in progress)
- [Redux-Toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development
- [GitHub Actions](https://github.com/features/actions) - Manages CI/CD, and issue tracking
- [Netlify](https://www.netlify.com/) - DNS management and primary host for `main` build.

## Code structure

| Folder            | Primary use                                               |
| ----------------- | --------------------------------------------------------- |
| `/src`            | Main source folder for development                        |
| `/src/assets`     | Image assets                                              |
| `/src/components` | React components that do not function as standalone pages |
| `/src/app`        | \*Markdown files in App Router                            |

| `/src/app/(main)` | \*Markdown files in where the main content of the web page is found |

| `/src/app/(main)/about` | About us Page |
| `/src/app/(main)/about/aboutUI/index.tsx` | The main page of About Us |
| `/src/app/(main)/about/aboutUI/layout.tsx` | The About Layout |
| `/src/app/(main)/about/aboutUI/page.tsx` | The About page |

| `/src/app/(main)/donation` | Donation Dapp Page |
| `/src/app/(main)/donation/donationUI/index.tsx` | The main page of Donation Dapp |
| `/src/app/(main)/donation/donationUI/layout.tsx` | The Donation Layout |
| `/src/app/(main)/donation/donationUI/page.tsx` | The Donation page |

| `/src/app/(main)/events` | Events Page |
| `/src/app/(main)/events/eventUI/index.tsx` | The main page of Events |
| `/src/app/(main)/events/eventUI/components/` | The components of that is found on Event Page |
| `/src/app/(main)/events/eventUI/layout.tsx` | The Event Layout |
| `/src/app/(main)/events/eventUI/page.tsx` | The Event page |

| `/src/app/(main)/home` | Home Page |
| `/src/app/(main)/home/homeUI/index.tsx` | The main page of Home/Landing page |
| `/src/app/(main)/home/homeUI/components/` | The components of that is found on Home Page |
| `/src/app/(main)/home/homeUI/layout.tsx` | The Home Layout |
| `/src/app/(main)/home/homeUI/page.tsx` | The Home page |

| `/src/app/(main)/resources` | Resources/Guide Page |
| `/src/app/(main)/resources/resourcesUI/index.tsx` | The main page of Resources page |
| `/src/app/(main)/resources/resourcesUI/components/` | The components of that is found on Resources/Guides Page |
| `/src/app/(main)/resources/resourcesUI/layout.tsx` | The Resources Layout |
| `/src/app/(main)/resources/resourcesUI/page.tsx` | The Resources page |

| `/src/components` | General Components files importable to other components |
| `/src/constants` | Most used files on the app |
| `/src/hooks` | Custom React hooks |
| `/src/lib` | General Config files |
| `/src/store` | Redux Toolkit and API slices config files |
| `/src/utils` | The most and important files used on the app |
