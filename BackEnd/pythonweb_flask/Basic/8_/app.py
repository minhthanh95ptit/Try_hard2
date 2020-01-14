from flask import Flask,render_template, request

app = Flask(__name__)

@app.route('/',methods = ['GET','POST'])

def index():
    if request.method == 'GET':
        return render_template(index.html)
    else:
        fullname = request.form.get('fullname', '')
        address = request.form.get('address', '')

        return f'Name: {fullname}, Adress: {address}'


app.run(debug = True)