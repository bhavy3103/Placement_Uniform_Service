# DE-PLACEMENT_PORTAL

## Project Overview
Implemented a Digital Uniform Management System tailored for optimizing college uniform processes during placements. The system ensures real-time monitoring of measurements, distribution, payments, and issue resolution, streamlining administrative tasks. Its deployment enhances operational efficiency and facilitates seamless coordination, particularly during critical placement activities in the college context

## Features
1. Table view of all the enrolled students.
2. The TPO coordinator can update or make changes in the status of students process points.
3. students can raise queries for uniforms.
4. students can also track their status for uniforms.
5. Payment includation.(in future versions).

## Installation Guide

### 1. Clone Repo.
### 2. `cd client --> npm i`
### 3. `cd server --> npm i`

### 4. Create a .env file in the root directory.
   MONGO = Your_MONGO_URI <br>
   JWT_SECRET_KEY = Your_JWT_Secret_Key <br>
   USER = your Gmail here which has the app password <br>
   PASS = your app password here <br>

   **Note**:  use your mail account in the "USER" env variable, from which you want to send mails.
           First, you'll need to create an app password to start the mail service.

### 5. `cd server --> npm start`
### 6. `cd client --> npm start`
