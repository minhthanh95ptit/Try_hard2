'''
Đọc vào một file văn bản, tạo ra một file văn bản mới chứa các dòng của file nguồn, bỏ đi các dòng trống.

File input.txt:

Một năm có 365 hoặc 366 ngày

Năm thường có 365 ngày

 
Năm nhuận có 366 ngày

File output.txt:

Một năm có 365 hoặc 366 ngày

Năm thường có 365 ngày

Năm nhuận có 366 ngày

'''
with open('output.txt', 'w', encoding='utf-8') as fout:
    with open('input.txt', 'r', encoding='utf-8') as fin:
        for line in fin:
            if line.strip() != '':
                fout.write(line)
                    

        