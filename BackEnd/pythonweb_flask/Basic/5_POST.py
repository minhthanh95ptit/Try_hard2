from flask import Flask, request
app = Flask(__name__)

@app.route('/hello/<name>)', methods = ['POST', 'GET'])
def hello_world():
   if request.method == 'POST':
       if 'name' in request.form:
           name = request.form['name']
           return f'Hello {name} from POST method (form-data)'
                        
       elif 'name' in request.json:
           name = request.json['name']
           return f'Hello {name} from POST method (JSON)'       
                        
       else:
           return 'Hello from POST method'
   else:
       name = request.args.get('name', '')
       return f'Hello {name} from GET method'

if __name__ == '__main__':
   app.run()
