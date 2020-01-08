import csv

with open('input.csv', encoding='utf-8') as fi:
   reader = csv.reader(fi,delimiter=',')
   rows = [row for row in reader]
   
for row in rows:
   print(row)


with open('output.csv', 'w', newline='',  encoding='utf-8') as fo:
   writer = csv.writer(fo, delimiter=',')
   for row in rows:
       writer.writerow(row)