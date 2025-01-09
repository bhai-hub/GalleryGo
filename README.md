# SnapVault

SnapVault is a React-based web application for creating and managing a photo album. Users can upload photos to Firebase Storage, store metadata in Firestore, and view their photos in a beautifully organized gallery.

---

## Features

- **Photo Upload**: Easily upload your photos with a title and description.
- **Photo Gallery**: View all uploaded photos in a visually appealing gallery.
- **Firebase Integration**: Securely store photos in Firebase Storage and metadata in Firestore.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Modern Styling**: Styled using Chakra UI for a sleek and consistent user interface.

---

## Tech Stack

- **Frontend**: ReactJS
- **Styling**: Chakra UI
- **Backend**: Firebase (Storage, Firestore)
- **Routing**: React Router

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/snapvault.git
   cd snapvault
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Go to [Firebase Console](https://console.firebase.google.com/).
   - Create a new project.
   - Enable Firebase Storage and Firestore.
   - Copy your Firebase configuration.
   - Replace the placeholders in `src/firebase-config.js` with your Firebase project credentials.

4. Install Chakra UI:
   ```bash
   npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
   ```

5. Run the application:
   ```bash
   npm start
   ```

---

## Folder Structure

```
src/
  components/
    PhotoUpload.js    # Component for uploading photos
    PhotoGallery.js   # Component for displaying photos
  firebase-config.js  # Firebase configuration file
  App.js              # Main app component
  index.js            # Entry point
```

---

## Usage

1. **Upload Photos**:
   - Navigate to `/upload`.
   - Select an image file, add a title, and upload it.

2. **View Photos**:
   - Go to `/` to see your uploaded photos displayed in a grid layout.

---

## Firebase Rules (Development)

For development purposes, you may use the following rules. Ensure to secure these rules for production:

**Firestore Rules:**
```json
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /photos/{photoId} {
      allow read, write: if true;
    }
  }
}
```

**Storage Rules:**
```json
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /photos/{photoId} {
      allow read, write: if true;
    }
  }
}
```

---

## Future Enhancements

- Add user authentication for personalized albums.
- Implement photo categorization.
- Enable search and filtering functionality.
- Improve the UI/UX design with animations.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## Author

Bhairav K Sharma
