from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/viewer')
def viewer():
    return render_template('viewer.html')

# To Handle page changes
@socketio.on('change_page')
def handle_change_page(data):
    emit('page_changed', data, broadcast=True)

if __name__ == '__main__':
    socketio.run(app, debug=True)