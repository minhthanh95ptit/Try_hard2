from flask import Flask, render_template


app = Flask(__name__)

@app.route('/gets_students')
def getStudents():
    students = [
        {'id' : '100001', 'name' : 'Phạm Minh Thành' , 'address' : 'Hà Nội'},
        {'id' : '100002', 'name' : 'Trần Thị Ngọc Doanh' , 'address' : 'Quá Khứ'},
        {'id' : '100003', 'name' : 'Nguyễn Thị Trà Giang' , 'address' : 'Hà Tĩnh'}
    ]

    return render_template('students.html', students = students)

if __name__ == '__main__' :
    app.run(debug = True)
    