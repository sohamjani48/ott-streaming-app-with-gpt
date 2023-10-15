export const APP_LOGO =
  "https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png";

export const PHOTO_URL = "https://avatars.githubusercontent.com/u/76684111?v=4";

export const BACKGROUND_IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { idenifier: "en", name: "English" },
  { idenifier: "hindi", name: "Hindi" },
  { idenifier: "es", name: "Spanish" },
];

// export const OPENAI_KEY = "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"; //Old key for sohamjani13579 account
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
