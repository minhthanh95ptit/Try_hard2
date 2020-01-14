from flask import Flask, request, render_template
app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def uploadFile():
   file = request.files.get('file')
   if file and file.filename != '':
       file.save(file.filename)
   return 'File uploaded'   

@app.route('/')
def homePage():
   return render_template('index.html')
   
if __name__ == '__main__':
  app.run()