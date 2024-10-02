# Shaurya's Blogs

- [Shaurya's Blogs](#shauryas-blogs)
  - [Introduction](#introduction)
  - [Functionality](#functionality)
  - [Tech Stack](#tech-stack)
  - [Github Branches](#github-branches)
  - [DB Schema](#db-schema)

---

## Introduction

This is a practic project.

## Functionality

Todo - 📝, Complete - ✅, Cancle - ❌, Working - 👨‍💻

1. **Admin:**
   1. **Approve/Warn/Ban a user on platfrom:** Admin can approve new users, issue warnings for rule violations, or ban them if necessary.
   2. **Approve/Warn/Ban a post on platform:** Admin can approve posts before publishing, warn authors about post violations, or ban offensive posts.
   3. **Delete a user on platform:** Admin can permanently remove a user and all related content from the platform.
   4. **Delete a post on platform:** Admin can delete any post that violates guidelines or for any other reasons.
   5. **See all users on platform:** Admin has access to view a list of all users with relevant details.
   6. **See all posts on platform:** Admin can view a list of all posts on the platform with options to manage them.
2. **📝 User**
   1. **📝 Auth Operations:**
      1. **📝 Register:** Users can sign up by creating an account on the platform using Google, GIthub, Facebook or with email.
      2. **📝 Login:** Users can sign in to access their account.
      3. **📝 Logout:** Users can securely log out of the platform.
      4. **📝 Reset Password:** Users can reset their password in case they forget it or need to update it.
      5. **Account Verification:** Users must verify their email and phone number by entering an OTP sent to both, ensuring account authenticity and security.
   2. **📝 Own Profile:**
      1. **📝 Edit Profile:** Users can update their personal information, bio, or preferences.
      2. **📝 Delete Profile:** Users can permanently delete their account and associated data.
   3. **Followers/Following:**
      1. **Follow another author**: Users can follow other authors to stay updated with their content.
      2. **See list of folowers**: Users can view the list of people following them.
      3. **See list of followings**: Users can view the list of authors they are following.
   4. **Post Operations:**
      1. **📝 See all posts on website**: Users can browse through all published posts.
      2. **📝 See a particular post**: Users can view the full content of a selected post.
      3. **📝 Edit it's OWN post**: Users can update their own posts after publishing.
      4. **📝 Delete it's OWN post**: Users can remove their own posts from the platform.
      5. **Draft a post**: Users can save a post as a draft to continue working on it later.
      6. **Schedule a post**: Users can schedule posts to be published at a later time.
      7. **Like a post**: Users can express approval for posts they enjoy.
      8. **Comment on a post**: Users can leave comments on posts to engage in discussions.
      9. **Share a post**: Users can share posts with others via social media or direct links.
      10. **Save a post**: Users can bookmark posts for later reading.
   5. **Notifications:**
      1. **Notification for a particular author**: Users can get notifications whenever their favorite author posts new content.
      2. **Notification for a particular category of posts**: Users can receive notifications for new posts in specific categories they are interested in.
      3. **Notifiction of Likes, shares, comments and saves post**: Authors are notified whenever their post receives interaction such as likes, comments, shares, or saves.

## Tech Stack

- **Frotned:**
  - React.jsx
    - **Version 1:** SASS + React.js + Context-API
    - **Version 2:** Tailwind CSS + React.js + Context-API
    - **Version 3:** Tailwind CSS + React.js + Context-API + Clerk
    - **Version 4:** Tailwind CSS + React.js + Context-API + OAuth
    - **Version 5:** Tailwind CSS + React.js + Redux-Tool-Kit (RTK) + Clerk
    - **Version 6:** Tailwind CSS + React.js + Redux-Tool-Kit (RTK) + OAuth
  - React.tsx
    - **Version 1:** SASS + React.js + Context-API
    - **Version 2:** Tailwind CSS + React.ts + Context-API
    - **Version 3:** Tailwind CSS + React.ts + Redux-Tool-Kit (RTK)
    - **Version 4:** Tailwind CSS + React.ts + Redux-Tool-Kit (RTK) + Clerk
    - **Version 5:** Tailwind CSS + React.ts + Redux-Tool-Kit (RTK) + OAuth
- **Backend + Database:**
  - Node.js
    - **Version 1:** Node.js + Express.js + MySQL
    - **Version 2:** Node.js + Express.js + MongoDB
    - **Version 3:** Node.js + Express.js + Prisma ORM
  - Node.ts
    - **Version 1:** Node.ts + Express.ts + MySQL
    - **Version 2:** Node.ts + Express.ts + MongoDB
    - **Version 3:** Node.ts + Express.ts + Prisma ORM

## Github Branches

- [👨‍💻 **main**](https://github.com/ShauryaChawan/Shaurya-Blogs): SASS + React.js Node.js + Express.js + MySQL
- **v1:** (frontend - react.jsx) - SASS + React.js + Context-API
- **v2:** (frontend - react.jsx) - Tailwind CSS + React.js + Context-API
- **v3:** (frontend - react.jsx) - Tailwind CSS + React.js + Context-API + Clerk
- **v4:** (frontend - react.jsx) - Tailwind CSS + React.js + Context-API + OAuth
- **v5:** (frontend - react.jsx) - Tailwind CSS + React.js + Redux-Tool-Kit (RTK) + Clerk
- **v6:** (frontend - react.jsx) - Tailwind CSS + React.js + Redux-Tool-Kit (RTK) + OAuth
- **v7:** (frontend - react.tsx) - SASS + Typescript + React.ts + Context-API
- **v8:** (frontend - react.tsx) - Tailwind CSS + React.ts + Context-API
- **v9:** (frontend - react.tsx) - Tailwind CSS + React.ts + Redux-Tool-Kit (RTK)
- **v10:** (frontend - react.tsx) - Tailwind CSS + React.ts + Redux-Tool-Kit (RTK) + Clerk
- **v11:** (frontend - react.tsx) - Tailwind CSS + React.ts + Redux-Tool-Kit (RTK) + OAuth
- **v12:** (backend - node.js) - Node.js + Express.js + MySQL
- **v13:** (backend - node.js) - Node.js + Express.js + MongoDB
- **v14:** (backend - node.js) - Node.js + Express.js + Prisma ORM
- **v15:** (backend - node.ts) - Node.ts + Express.ts + MySQL
- **v16:** (backend - node.ts) - Node.ts + Express.ts + MongoDB
- **v17:** (backend - node.ts) - Node.ts + Express.ts + Prisma ORM

## DB Schema

[All SQL queries used in this project](./backend/db_queies.md)
