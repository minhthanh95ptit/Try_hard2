from flask import Flask
app = Flask(__name__)

@app.route('/')
def homePage():
   return 'Home page'
   
@app.route('/hello')
def hello_world():
   return 'Hello World'

@app.route('/goodbye')
def goodbye():
   return 'Goodbye, see you later.'
   
if __name__ == '__main__':
   app.run()
