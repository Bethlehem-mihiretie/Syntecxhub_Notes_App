# Syntecxhub Notes App

A simple and elegant notes application built with React that allows you to capture and organize your thoughts one at a time.

## Features

- ✨ **Add Notes**: Quickly jot down your thoughts and ideas
- ✏️ **Edit Notes**: Update existing notes with ease
- 🗑️ **Delete Notes**: Remove notes you no longer need
- 💾 **Local Storage**: Your notes are automatically saved locally
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI**: Clean and intuitive interface with smooth interactions

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Bethlehem-mihiretie/Syntecxhub_Notes_App.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Syntecxhub_Notes_App
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

## Usage

1. **Adding a Note**: Type your note in the input field and click "Add Note" or press Enter
2. **Editing a Note**: Click the "Edit" button on any note to modify it
3. **Deleting a Note**: Click the "Delete" button to remove a note
4. **Automatic Saving**: All changes are automatically saved to your browser's local storage

## Technology Stack

- **React 18**: Modern React with hooks
- **CSS3**: Custom styling with CSS variables
- **LocalStorage API**: For persistent data storage
- **Create React App**: Project setup and build tooling

## Project Structure

```
Syntecxhub_Notes_App/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.css             # Application styles
│   ├── App.js              # Main application component
│   └── index.js            # React entry point
├── package.json            # Project dependencies
└── README.md               # This file
```

## Customization

### Changing Colors

You can customize the app's color scheme by modifying the CSS variables in `src/App.css`:

```css
:root {
    --primary: #6a5acd;    /* Primary color */
    --bg: #f4f7f6;          /* Background color */
    --text: #333;           /* Text color */
}
```

### Modifying the Title

Update the app title in `src/App.js`:

```javascript
<h1>Your Custom Title</h1>
<p>Your custom subtitle</p>
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with React and modern web technologies
- Inspired by the need for a simple, focused note-taking experience
- "One thought at a time. Start here." - The philosophy behind this app

---

**Made with ❤️ by Bethlehem Mihiretie**
