import requests

html = requests.get('https://truyenqq.com/index.html').text

with open('index.html','w',encoding='utf-8') as fin:
    fin.write(html)
