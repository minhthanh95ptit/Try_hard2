
from flask import Flask, request, redirect, url_for
app = Flask(__name__)

@app.route('/hello/<name>')
def hello(name):
   return f'Hello {name}'

@app.route('/')
def homePage():
   user = request.args.get('user', 'world')
   return redirect(url_for('hello', name=user))

if __name__ == '__main__':
  app.run()