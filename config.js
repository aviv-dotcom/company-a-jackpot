// Company A Jackpot — settings for the GitHub version.
// Fill these in on GitHub: open this file, click the pencil (Edit), paste your values, then "Commit changes".
// These values identify your Firebase project and Amplitude project. They are meant to be public in a web page;
// what protects your data is the Firestore security rules (firestore.rules) and the game password.
window.JACKPOT_CONFIG = {
  // From Firebase console > Project settings > Your apps > Web app > "SDK setup and configuration" > Config.
  // Copy the values from the firebaseConfig object shown there.
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },

  // From Amplitude > Settings > Projects > your project > API Key. Leave empty to turn Amplitude off.
  amplitudeApiKey: "",
  // "us" or "eu" (use "eu" only if your Amplitude project is in the EU data center).
  amplitudeRegion: "us"
};
