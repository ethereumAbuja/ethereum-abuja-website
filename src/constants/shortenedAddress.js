// export const shortenAddress = (address) =>  `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
export const shortenAddress = (address) => address ? address.slice(0, 6) + '...' + address.slice(-4) : '';
