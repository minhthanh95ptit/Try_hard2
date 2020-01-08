#json.loads() -> chuyển json string thành object
#json.dumps() -> chuyển object thành json string

import json

students = [
    {'name' : 'Phạm Minh Thành','address' : 'Quảng Ninh'},
    {'name' : 'Nguyễn Thị Trà Giang', 'address' : 'Hà Tĩnh'},
]

print(json.dumps(students))

jsonstring = '{"name" : "Nguyễn Văn An", "address" : "Hà Nội"}'
student = json.loads(jsonstring)
print(student['name'], student['address'])
print(students)

