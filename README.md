# Backend Database Connection and Local Server Configuration Guide

## Table of Contents
1. [Introduction](#introduction)
2. [Setting up the Project](#setting-up-the-project)
3. [Securing Backend Database Connection](#securing-backend-database-connection)
4. [Running Sockets on a Public Local Server (Advanced)](#running-sockets-on-a-public-local-server-advanced)
5. [Enabling Cookies for Localhost/Public Localhost (Advanced)](#enabling-cookies-for-localhostpublic-localhost-advanced)
6. [URLs on Your Browser](#urls-on-your-browser)

## 1. Introduction
This guide provides step-by-step instructions for setting up the project, connecting the backend server to a MongoDB database, and configuring sockets for access from external devices with cookie support on a local public server. It is crucial that the IDE used for this project supports JavaScript/React, as this is the supported language for the project's development. Without proper IDE support for the language, the configurations and processes outlined in this guide may not function as intended.

## 2. Setting up the Project
To run the application, it is essential to install the respective dependencies that are used in the project. The dependencies are listed in the project's `package.json` files under "dependencies".

Before installing, ensure you are inside the correct folder. The terminal command for installing the dependencies is `npm i` or `npm install`.

Depending on the IDE you are using, you may be able to install the dependencies without using the terminal or commands.

Commands to run in the current folders:

**Root:**
\`\`\`bash
\Loading-Exam>
npm i
\`\`\`

**Client:**
\`\`\`bash
\Loading-Exam\client>
cd client
npm i
\`\`\`

**Server:**
\`\`\`bash
\Loading-Exam\server>
cd ..
cd server
npm i
\`\`\`

When the node modules for each section have been installed, return to the root folder and run:
\`\`\`bash
npm run dev
\`\`\`
This command will launch the application.

## 3. Securing Backend Database Connection
To securely connect your backend to the MongoDB database, follow these steps:

1. Ensure a `.env` file is present in the backend's server folder.
2. The `.env` file should contain the key `MONGODB_URL` with the appropriate connection string.
3. If the `.env` file is missing, create one in the `/server/` directory and add the key.
4. The `MONGODB_URL` should be in the following format, replacing `<username>`, `<password>`, and `<cluster-url>` with your actual credentials and cluster URL:
    \`\`\`plaintext
    MONGODB_URL=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
    \`\`\`

## 4. Running Sockets on a Public Local Server (Advanced)
To allow sockets to be accessed from devices like mobile phones:

1. Determine your device IPv4 address using system commands (`ipconfig` on Windows, `ifconfig` on Linux, or check network settings on Mac).
2. The IPv4 address typically looks like this: `192.168.0.182`.
3. Update the WebSocket URL in the following files to use the IPv4 address:
    - `client/Pages/AdminPanel.jsx`
    - `client/PagesOverview/Overview.jsx`
    - `client/PagesOverview/SwitchCasesGame.jsx`

Example:
\`\`\`javascript
const newSocket = new WebSocket('ws://localhost:3000'); // change to:
const newSocket = new WebSocket('ws://192.168.0.182:3000');
\`\`\`

## 5. Enabling Cookies for Localhost/Public Localhost (Advanced)
To support cookies on a local public server:

1. Navigate to the `client/Components/UsernameAndAvatar.jsx` component.
2. Modify the cookie settings as follows:

**Before:**
\`\`\`javascript
Cookies.set("name_token", randomUsername, {expires: 1, path: "/", secure: true, sameSite: 'strict'});
Cookies.set("user_token", avatarId, {expires: 1, path: "/", secure: true, sameSite: 'strict'});
\`\`\`

**After:**
\`\`\`javascript
Cookies.set("name_token", randomUsername, {expires: 1, path: "/"});
Cookies.set("user_token", avatarId, {expires: 1, path: "/"});
\`\`\`

## 6. URLs on Your Browser
Port 3000

**Landing Page:**
- URL: [http://localhost:3000/](http://localhost:3000/)
- Game code password: ab1c34

**Admin Page:**
- URL: [http://localhost:3000/admin](http://localhost:3000/admin)
- Admin page username and password: admin, admin

**Main Screen Page:**
- URL: [http://localhost:3000/over-view=1](http://localhost:3000/over-view=1)

**Game Page:**
- URL: [http://localhost:3000/gameID=1](http://localhost:3000/gameID=1)

By following this guide, you have secured your backend database connection, configured sockets for external access, enabled cookie support on a local public server, and successfully added the necessary dependencies. These steps are crucial for maintaining security and functionality during development and testing.

**NOTE:**
Cookies are only required if you want an avatar and an auto-generated name; otherwise, they are not necessary for navigating the pages. Setting up a local public server is also optional. You can proceed scene to scene using the default settings unless you prefer using your mobile device as intended. The essential steps include configuring the `MONGODB_URL` and securing it in the `.env` file. This ensures a seamless experience as you explore the project.
"""
