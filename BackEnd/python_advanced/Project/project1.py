"""
Hôm nay chúng ta đã học về JSON & Base64
Các bạn dành thời gian làm BTVN sau:

Danh sách học sinh của một lớp học được lấy về từ 1 web service 
có dạng json như trong file students.json đính kèm, thông tin về mỗi học sinh gồm:
studentId : số hiệu học sinh
name : họ tên
address : đia chỉ
image: ảnh chân dung, mã hóa dạng base64
Viết chương trình đọc dữ liệu từ file students.json và xuất dữ liệu 
ra dưới dạng csv với các cột : studentId, name, address. 
Riêng trường image, tách lấy dữ liệu, giải mã và lưu thành file theo format {studentId}.jpg
"""

import json ,csv, base64 



lst_img = []
lst_name = []

with open('students.csv' , 'w' , encoding='utf-8') as fout:
    with open('students.json' , 'r', encoding='utf-8') as fin:
        students = json.load(fin)
        
        for student in students:
            studentId = student['studentId']
            name = student['name']
            address = student['address']
            img = student['image']

            lst_name.append(studentId)
            lst_img.append(img)
            result = f'{studentId},{name},{address}\n'
            
            fout.write(result)


i = 0
for img in lst_img :
    anh = base64.b64decode(img)
    
    fileName = f'{lst_name[i]}.jpg'

    with open(fileName,'wb') as f:
        f.write(anh)
        i += 1
