from flask import Flask, render_template, redirect, request
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

#Khai bao database

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///pokemons.db'
app.config['UPLOADED_ITEMS_DEST'] = 'static'
db = SQLAlchemy(app)


class Pokemon(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column('name', db.String(50),unique = True)
    typeP = db.Column('typeP', db.String(20))
    categ = db.Column('categ', db.String(20)) 
    typeP = db.Column('typeP', db.String(20))
    weaknesses = db.Column('weaknesses', db.String(20))
    abilities = db.Column('abilities', db.String(20))


db.create_all()


def savePokemon(name, categ, typeP, weaknesses, abilities):
    p = Pokemon()
    p.name = name
    p.categ = categ 
    p.typeP = typeP
    p.weaknesses = weaknesses
    p.abilities = abilities
    db.session.add(p)
    db.session.commit()
    
    return p


def updatePokemon(id,name, categ, typeP, weaknesses, abilities):
    pokemon = Pokemon.query.get(id)
    if pokemon:
        pokemon.name = name 
        pokemon.categ = categ
        pokemon.typeP = typeP
        pokemon.weaknesses = weaknesses
        pokemon.abilities = abilities
        db.session.commit()

@app.route('/')

def index():
    pokemons = Pokemon.query.all()
    return render_template('index.html', pokemons = pokemons)



@app.route('/create_pokemon', methods = ['GET','POST'])
def createPokemon():
    if request.method == 'POST':
        name = request.form['name']
        categ = request.form['categ'] 
        typeP = request.form['typeP']
        weaknesses = request.form['weaknesses'] 
        abilities = request.form['abilities']


        poke = savePokemon(name, categ, typeP, weaknesses, abilities)

        img = request.files.get('img')
        if img and img.filename :
            img.save(f'static/{poke.id}.jpg')
        return redirect('/')

    p = Pokemon()
    p.name =  p.typeP = p.categ = p.weaknesses = p.abilities = ''
    return render_template('pokemon.html', p = p)


@app.route('/update_pokemon/<int:id>', methods = ['GET','POST'])
def updatePokemon1(id): #Phai dat ten khac voi ham updatePokemon ben tren nhe 
    if request.method == 'POST':
        name = request.form['name']
        categ = request.form['categ'] 
        typeP = request.form['typeP']
        weaknesses = request.form['weaknesses'] 
        abilities = request.form['abilities']


        updatePokemon(id, name, categ, typeP, weaknesses, abilities)

        img = request.files.get('img')
        if img and img.filename :
            img.save(f'static/{id}.jpg')
        return redirect('/')

    p = Pokemon.query.get(id) 

    return render_template('pokemon.html', p = p)

@app.route('/del_pokemon/<int:id>')
def deletePokemon(id):
    p = Pokemon.query.get(id)
    if p:
        db.session.delete(p)
        db.session.commit()

        #Câu lệnh xóa ảnh trong thư mục static
        os.remove(f'static/{id}.jpg')

    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)