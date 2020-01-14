from flask import Flask, request
app = Flask(__name__)

@app.route('/hello', methods=['POST'])
def hello_world():
   name = request.json.get('name', '')
   return f'Hello {name}'
   
if __name__ == '__main__':
   app.run()
