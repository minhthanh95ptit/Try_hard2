#Non with
'''
f = open('filenguon.txt','r',encoding='utf-8')

lines = f.readlines()

f.close()
f = open('filenguon.txt','r',encoding='utf-8')
data = f.read()

print(data)

for line in lines:
    print(line)
print(lines)
'''
#With

with open('filenguon.txt','r', encoding='utf-8') as f :
    lines = f.readlines()
    print(lines)

with open('filenguon.txt','r',encoding='utf-8') as f :
    data = f.read()
    print(data)