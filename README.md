# NoteTrail
Notes App is a simple React application that allows users to create, edit, and delete notes. It provides a user-friendly interface for managing personal notes, with features like searching, dark mode, and persistent data storage using local storage.

## Features
* Create a new note by typing in the text area and clicking "Save".
* Edit existing notes by clicking on the note text and modifying it.
* Delete notes by clicking on the delete icon.
* Search for specific notes by typing in the search bar.
* Toggle dark mode for a different visual experience.

## Technologies Used
* React: A popular JavaScript library for building user interfaces.
* nanoid: A library for generating unique IDs.
* localStorage: A web API for storing data in the browser's local storage.

## Installation
1. Clone the repository:
```
git clone [repository_url]
```
2. Navigate to the project directory:
```
cd notes-app
```
3. Install the dependencies:
```
npm install
```
4. Start the application:
```
npm start
```
5. Open your browser and visit http://localhost:3000 to see the Notes App in action.

## Usage
      * The application loads with some example notes prepopulated.
* To add a new note, type in the text area and click the "Save" button.
* To edit an existing note, click on the note text and make the desired changes. Press Enter or click outside the note to save the changes.
* To delete a note, click on the delete icon.
* To search for specific notes, type in the search bar and the notes will be filtered accordingly.
* To toggle dark mode, click the "Toggle Mode" button in the header.

## Folder Structure

```
├── index.html
└── src
    ├── components
    │   ├── AddNote.jsx
    │   ├── Header.jsx
    │   ├── Note.jsx
    │   ├── NoteList.jsx
    │   └── Search.jsx
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```

* The index.html file, the main entry point of the application.
* The src folder contains the source code of the application.
* The components folder contains the individual components used in the application.
* The App.jsx file is the main component that manages the state and renders other components.
* The index.js file is the entry point of the React application.
* The styles.css file contains the CSS styles for the application.
