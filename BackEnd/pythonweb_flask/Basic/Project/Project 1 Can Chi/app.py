from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])



def index():
    if request.method == 'GET':
        return render_template('index.html')
    else:
        nam = request.form.get('nam',0)
        if nam == '' :
            return "Lỗi rồi"
        else:
            nam = int(nam)
            result = tinhCan(nam) + " " + tinhChi(nam) 

            return render_template('index.html',nam = nam,result = result)


def tinhCan(nam):
    du = nam % 10 

    switcher={
        0: 'Canh',
        1: 'Tân',
        2: 'Nhâm',
        3: 'Quý',
        4: 'Giáp',
        5: 'Ất',
        6: 'Bính',
        7: 'Đinh',
        8: 'Mậu',
        9: 'Kỷ'
    }

    return switcher.get(du,"")

def tinhChi(nam):
    du = nam % 12 

    switcher={
        0: 'Thân',
        1: 'Dậu',
        2: 'Tuất',
        3: 'Hợi',
        4: 'Tý',
        5: 'Sửu',
        6: 'Dần',
        7: 'Mão',
        8: 'Thìn',
        9: 'Tỵ',
        10: 'Ngọ',
        11: 'Mùi'
    }

    return switcher.get(du,"")


app.run(debug = True)

