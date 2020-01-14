from flask import Flask

app = Flask(__name__)

@app.route('/')  # http://localhost:5000
def index():
    return "Hello Thành"
    
app.run(debug=True)     

