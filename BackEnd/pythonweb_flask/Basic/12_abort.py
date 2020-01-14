from flask import Flask, request, redirect, url_for
app = Flask(__name__)

@app.route('/hello')
def hello():
   if 'name' not in request.args:
       abort(404)
       
   name = request.args['name']
   return f'Hello {name}'   

if __name__ == '__main__':
  app.run()

