# PDF Co-Viewer

PDF Co-Viewer is a web application built with Flask that allows multiple users to view and interact with a PDF file in real-time. The application has two roles: Admin and Viewer. The Admin can control the PDF (like changing pages), and Viewers can follow along with the PDF in sync with the Admin.

## Project Structure

    /co-viewer
    │
    ├── app.py                   # Main Flask application
    ├── requirements.txt         # List of dependencies (Flask, Flask-SocketIO, etc.)
    │
    ├── templates/
    │   ├── index.html           # Landing page to choose admin or viewer role
    │   ├── admin.html           # Admin interface to control the PDF
    │   └── viewer.html          # Viewer page to follow along
    │
    ├── static/
    │   ├── css/
    │   │   └── style.css        # Styles for the pages
    │   └── js/
    │       ├── socket.js        # Socket.IO client logic
    │       └── pdf_viewer.js    # PDF.js initialization and setup
    │
    └── static/uploads/
        └── maths.pdf          # PDF file to display  -- as any pdf file can be changed

## Features

- **Admin Controls**: The Admin role has the ability to control the PDF (e.g., navigate through pages).
- **Viewer Synchronization**: Viewers can follow the PDF as the Admin navigates through the document, ensuring everyone is on the same page.
- **Real-Time Interaction**: The app uses Socket.IO to synchronize actions across all connected users in real-time.
- **PDF.js Integration**: The application uses the PDF.js library to render and display PDF files in the browser.

## Installation

To run the application locally, follow these steps:

1. **Clone the repository**:

       git clone https://github.com/yourusername/co-viewer.git
       cd co-viewer

2. **Create a virtual environment** (optional but recommended):

       python -m venv venv
       source venv/bin/activate   # On Windows: venv\Scripts\activate

3. **Install the required dependencies**:

       pip install -r requirements.txt

4. **Run the Flask application**:

       python app.py

   The app will be running on \`http://127.0.0.1:5000/\`.

## Dependencies

This project uses the following libraries:

- **Flask**: Web framework to build the application.
- **Flask-SocketIO**: Real-time communication between the server and clients.
- **PDF.js**: Library to render PDFs in the browser.
- **Socket.IO**: For real-time communication between the admin and viewers.

## Usage

### 1. **Landing Page (\`index.html\`)**
The landing page allows users to choose between two roles:
- **Admin**: The user who will control the PDF.
- **Viewer**: The user who will follow along with the PDF.

### 2. **Admin Page (\`admin.html\`)**
Once an Admin selects their role, they can:
- Control the PDF (navigate through pages).
- Send real-time updates to all viewers to sync the PDF.

### 3. **Viewer Page (\`viewer.html\`)**
- Viewers automatically sync to the Admin's actions (i.e., page changes).
- The PDF rendering is done using PDF.js, and any page change by the Admin will be reflected for the viewers.

## Contributing

Feel free to fork this project and submit pull requests. You can also open issues if you find any bugs or have feature requests.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Demo Video
[Demo Video Link](https://drive.google.com/file/d/1jRDLI6RmusKk2mU2gg6M5qFB6i13JLV0/view?usp=sharing)
