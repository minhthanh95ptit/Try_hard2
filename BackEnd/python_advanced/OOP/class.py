class Person:
    def __init__(self, name, address):
        self.name = name 
        self.address = address

    def sayHello(self):
        print(f'Xin chào tôi là {self.name}')

    


person1 = Person('Phạm Minh Thành','KTX Pháp Vân')

person1.sayHello()
print(person1.name)