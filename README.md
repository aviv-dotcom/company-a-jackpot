# Company A Jackpot

A slot-machine game for getting to know the members of Company A. Spin to land on a member and a question, answer to
win points and meet the person behind the answer, save their card and connect on LinkedIn.

The member data (names, photos, interests, newsletter stories) is encrypted inside `index.html` and only opens with the
game password. Shared data (leaderboard, player cards, new members) lives in Firebase.

## Files

| File | What it is |
|---|---|
| `index.html` | The game. Don't edit by hand. |
| `config.js` | Your Firebase and Amplitude settings. Fill this in (step 3). |
| `firestore.rules` | Security rules for the database. Paste into Firebase (step 2). |
| `password.js` | The password lock. Holds no readable password. Replace it to change the password. |
| `change-password.html` | Page for changing the game password yourself (see below). |

## Setup

### 1. Create the Firebase project (about 5 minutes)

1. Go to <https://console.firebase.google.com> and click **Create a project**. Name it e.g. `company-a-jackpot`.
   Google Analytics is not needed; you can turn it off.
2. In the left menu: **Build > Authentication > Get started**. On the **Sign-in method** tab, enable **Anonymous**
   and save.
3. Still in Authentication, open **Settings > Authorized domains** and **Add domain**: your GitHub Pages domain,
   e.g. `yourname.github.io`.
4. Left menu: **Build > Firestore Database > Create database**. Pick a location near your members
   (e.g. `eur3` for Europe/Israel), start in **production mode**.

### 2. Add the security rules

In **Firestore Database > Rules**, replace everything with the contents of `firestore.rules` and click **Publish**.

### 3. Fill in `config.js`

1. In Firebase: the gear icon > **Project settings** > **Your apps** > click the **</>** (Web) icon, give it a name,
   and register. Firebase shows a `firebaseConfig` with `apiKey`, `authDomain`, `projectId`, `storageBucket`,
   `messagingSenderId`, `appId`.
2. On GitHub, open `config.js`, click the pencil (Edit), paste those six values between the quotes, add your
   Amplitude API key if you use Amplitude, and click **Commit changes**.

These values are designed to be public in a web page. The security rules and the game password protect the data.

### 4. Publish on GitHub Pages

1. On GitHub: **New repository**, e.g. `company-a-jackpot`, **Public**, then **uploading an existing file**:
   drag in `index.html`, `config.js`, `firestore.rules` and this `README.md`. Commit.
2. Repository **Settings > Pages**: Source **Deploy from a branch**, Branch **main**, folder **/ (root)**, Save.
3. After a minute the game is live at `https://<your-username>.github.io/company-a-jackpot/`.

## Changing the password

1. Open `https://<your-username>.github.io/company-a-jackpot/change-password.html`.
2. Enter the current password and the new one (at least 12 characters), click **Create new password file**, then **Copy**.
3. On GitHub, open `password.js`, click the pencil, select everything (Ctrl+A), paste, and **Commit changes**.

Players keep their cards, scores and saved lists. Everyone, including remembered devices, is asked for the new
password the next time they open the game.

## Managing the game

- **Remove a player or card:** Firebase console > Firestore Database > `profiles` (cards) or `scores` (leaderboard),
  open the document and delete it.
- **See usage:** in Amplitude (events start with `jackpot_`), or Firestore > `events`.
- **Add newsletter stories or members:** ask Claude to rebuild `index.html`, then upload the new file. The password
  and everything players saved stay as they are.
