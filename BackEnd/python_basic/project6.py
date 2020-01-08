'''

Một file csv chứa bảng điểm một môn học của các học sinh một lớp học. Mỗi dòng của file là thông tin điểm của một học sinh bao gồm : họ tên, điểm hệ số 1, điểm hệ số 2, điểm hệ số 3, các giá trị này ngăn cách nhau bởi dấu phảy. Viết chương trình để đọc file csv đầu vào và tạo ra một file csv mới có thêm cột điểm trung bình.
File input.csv
Nguyễn Văn An, 8, 7, 8
Nguyễn Văn Bình, 6, 6, 8
Nguyễn Thị Chi, 8, 8, 9
Lê Văn Cường, 8, 7, 9
Phạm Thu Trang, 7, 8, 8
File output.csv
Nguyễn Văn An, 8, 7, 8,  7.7
Nguyễn Văn Bình, 6, 6, 8,  7.0
Nguyễn Thị Chi, 8, 8, 9,  8.5
Lê Văn Cường, 8, 7, 9,  8.2
Phạm Thu Trang, 7, 8, 8,  7.8

'''

with open('output.csv', 'w' , encoding='utf-8') as fout:
    with open('input.csv', 'r', encoding='utf-8') as fin:
        for line in fin:
            hoten, diem1, diem2, diem3 = line.split(',')

            diem1 = int(diem1)
            diem2 = int(diem2)
            diem3 = int(diem3)
            diemtb = (diem1 + diem2 + diem3) / 3

            string = f'{hoten}, {diem1}, {diem2}, {diem3}, {diemtb} \n'
            fout.write(string) 