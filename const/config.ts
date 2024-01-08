// const/config.ts
import {
  Constants,
  MintOptions,
  SocialLinks,
  CollectionOptions,
} from "./types";

const socialLinks: SocialLinks = {
  twitter: "https://twitter.com/bobrahmatof",
  instagram: "https://instagram.com/slug_baron",
  telegram: "https://telegram.me/cryptodegenme",
  website: "www.bobirrahmatov.tech",
  email: "mailto:bobirrahmatof@gmail.com", // add 'mailto:' to email link for click event ex 'mailto:example.com'
};

const mintOptions: MintOptions = {
  publicMintStart: new Date("2024-03-1T13:59:00"), // UTC Date, Format: 'YYYY-MM-DDTHH:MM:SS'
  publicMintPrice: 0.006, // Price in Satoshis
  limitPerWallet: 2, // Limit per wallet
  recipientBTCAddress: "19JqvwtG12yST3RPcUVTkZrvM6UF3ZsjKo", // Address to receive mint funds
  totalSupply: 11, // Total supply
  artFilesFolder: "/art", // Full art collection in a folder
  optimizeImages: true, // Optimize images - true/false
  artFilesMimeType: "image/png", // Replace 'image/png' with the actual MIME type of your files.
  artFilesExtension: "png", // File extension of the files.
  serviceFee: 27000, // DO NOT CHANGE THIS REQUIRED!!!!
};

const collectionOptions: CollectionOptions = {
  id: "broflakes", // replace with your collection slug
  creator: "bobirrahmatov", // replace with your creator name
};

const constants: Constants = {
  fontStyle: "Font12", // Font1, Font2, ..to.. Font12, Font13
  title: "broflakes", // Title
  description:
    "🚀 Unleash the power of blockchain as you become part of the exclusive Broflakes community. Whether you're a seasoned crypto enthusiast or a curious newcomer, these NFTs represent the convergence of art, technology, and the limitless possibilities of Bitcoin. 🌌✨", // Description
  collectionImage: "images/logo.png", // Mintpage main image
  navbarImage: "images/logo.png", // Navbar image
  socialLinks: socialLinks,
  mintOptions: mintOptions,
  collectionOptions: collectionOptions,
};

export default constants;
