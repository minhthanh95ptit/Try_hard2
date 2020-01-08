
import xml.etree.cElementTree as ET

students = [
   { 'name' : 'Nguyễn Văn An', 'address' : 'Hà Nội'},
   { 'name' : 'Nguyễn Thị Bình', 'address' : 'TP.HCM'},
]


root = ET.Element("students")

for student in students:
   tag = ET.SubElement(root, "student")
   ET.SubElement(tag, "name").text = student['name']
   ET.SubElement(tag, "address").text = student['address']

tree = ET.ElementTree(root)
tree.write("output.xml", encoding="UTF-8")