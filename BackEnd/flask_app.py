from flask import *
from Database import Listingsdet

app = Flask(__name__)
@app.route('/hello')
def sample():
        return {'value': "Hi giri"}

@app.route('/values',methods=['POST'])
def values():
    if request.method=="POST":
        res=request.json
        print(res)
        res=res['details']
        val = Listingsdet(first_name=res['first_name'],last_name=res['last_name'],gender=res['gender'],email=res['gmail'], degree=res['be']+', '+res['me']+', '+res['phd'], course=res['course'], dob=str(res['dob'])).insert()
        return {'value': val}

@app.route('/edit',methods=['POST'])
def edit():
    if request.method=="POST":
        res=request.json
        print(res)
        res=res['details']
        val = Listingsdet(first_name=res['first_name'],last_name=res['last_name'],gender=res['gender'],email=res['gmail'], degree=res['be']+', '+res['me']+', '+res['phd'], course=res['course'], dob=str(res['dob'])).edit()
        return {'value': val}

@app.route('/search',methods=['POST'])
def search():
    if request.method=="POST":
        res=request.json
        print(res)
        res=res['details']
        val = Listingsdet(first_name=res['first_name'],last_name=res['last_name']).search()
        print(val)
        return {'value': val}

@app.route('/display',methods=['POST'])
def display():
    if request.method=="POST":
        res=request.json
        print(res)
        res=res['details']
        val = Listingsdet(email=res['gmail']).display()
        print(val)
        return {'value': val}

@app.route('/delete',methods=['POST'])
def delete():
    if request.method=="POST":
        res=request.json
        print(res)
        val = Listingsdet(email=res['details']).delete()
        return {'value': val}
    
if __name__ == "__main__":
    app.run(host="192.168.43.117",debug=True)