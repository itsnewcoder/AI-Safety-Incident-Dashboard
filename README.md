# AI Safety Incident Dashboard

A frontend application for viewing and logging hypothetical AI safety incidents, built with React and Material UI.

## Project Overview

This project is a frontend-only implementation of an AI Safety Incident Dashboard that allows users to:
- View a list of AI safety incidents
- Filter incidents by severity
- Sort incidents by reported date
- View detailed information about each incident
- Report new incidents

## Setup Instructions

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn

### Installation

1. Clone this repository or unzip the project files
2. Navigate to the project directory
3. Install dependencies:
```bash
npm install
```
or
```bash
yarn install
```

### Running the Application

Start the development server:
```bash
npm start
```
or
```bash
yarn start
```

The application will run at [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- **Incident List**: Displays all recorded AI safety incidents with their title, severity, and reported date
- **Filtering**: Filter incidents by severity level (All, Low, Medium, High)
- **Sorting**: Sort incidents by reported date (newest first or oldest first)
- **Detail View**: Expand/collapse incident details
- **Incident Reporting**: Form to submit new incidents with validation

## Technical Details

- **Framework**: React (JavaScript)
- **UI Library**: Material UI with a dark blue theme
- **State Management**: React Hooks (useState)
- **Data**: All data is stored locally in the application state

## Design Decisions

- Used Material UI for consistent styling and responsive design
- Implemented a violet-themed color scheme for visual appeal
- Created separate components for better code organization and maintainability
- Used client-side filtering and sorting for better user experience
- Added form validation to ensure data integrity
