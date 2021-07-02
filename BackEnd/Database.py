from sqlalchemy import Column, Integer, String
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

engine = create_engine('sqlite:///college.db')

Session = sessionmaker(bind=engine)
session = Session()
Base = declarative_base()

class Listings(Base):
   __tablename__ = 'listings'

   id = Column(Integer, primary_key=True)
   first_name = Column(String)
   last_name = Column(String)
   gender = Column(String)
   email = Column(String)
   course = Column(Integer)
   degree = Column(String)
   dob = Column(String)
   
class Listingsdet(Listings):
   def __init__(self,first_name=None,last_name=None,gender=None,email=None, course=None, degree=None, dob=None):
      self.first_name=first_name
      self.last_name=last_name
      self.gender=gender
      self.email=email
      self.course=course
      self.degree=degree
      self.dob=dob
   
   def insert(self):
      try:
         Base.metadata.create_all(engine)
         result = session.query(Listings).filter(Listings.email == self.email)
         for i in result:
            if i.email==self.email:
               return "Email already exits"
         a = Listings(first_name=self.first_name,last_name=self.last_name,gender=self.gender,email=self.email,course=self.course,degree=self.degree,dob=self.dob)
         session.add(a)
         session.commit()
         return "Saved successfully"
      except Exception as e:
         print(e)
         return 0
   
   def edit(self):
    try:
        Base.metadata.create_all(engine)
        result = session.query(Listings).filter(Listings.email == self.email)
        email=''
        id=0
        for i in result:
            if i.email==self.email:
                print("email exits",type(self.first_name),"self "+self.first_name,i.first_name)
                id=i.id
                if self.first_name=='':
                    self.first_name = i.first_name
                if self.last_name=='':
                    self.last_name = i.last_name
                if self.gender=='':
                    self.gender = i.gender
                if self.course=='':
                    self.course = i.course
                if self.degree==', ,':
                    self.degree = i.degree
                if self.dob=='':
                    self.dob = i.dob
            else:
                return "Email doesn't exits"
        result = session.query(Listings).filter(Listings.id == id).update({Listings.first_name: self.first_name,Listings.last_name: self.last_name,Listings.gender: self.gender,Listings.course: self.course,Listings.degree: self.first_name,Listings.degree: self.degree,Listings.dob: self.dob }, synchronize_session = False)
        session.commit()
        return 'Edited'
    except Exception as e:
        print(e)
        return 0

   def delete(self):
    try:
        result = session.query(Listings).filter(Listings.email == self.email)
        id=0
        for i in result:
            if i.email==self.email:
                id=i.id
        delete = session.query(Listings).get(id)
        session.delete(delete)
        session.commit()
        return 'deleted'
    except Exception as e:
         print(e)
         return "Email doesn't exits"

   def display(self):
      try:
         dis=session.query(Listings).all()
         l=[]
         for i in dis:
            l.append({"id": i.id, "first_name": i.first_name, "last_name": i.last_name, "gender": i.gender, "email": i.email, 'course':i.course, "degree": i.degree, "dob":i.dob})
         print(l)
         return l
      except Exception as e:
         print(e)
         return 0

   def search(self):
      try:
         dis=session.query(Listings).all()
         l=[]
         for i in dis:
             if (i.first_name).lower() == (self.first_name).lower() and (i.last_name).lower() == (self.last_name).lower():
                l.append({"id": i.id, "first_name": i.first_name, "last_name": i.last_name, "gender": i.gender, "email": i.email, 'course':i.course, "degree": i.degree, "dob":i.dob})
         print(l)
         return l
      except Exception as e:
         print(e)
         return 0


# from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String
# engine = create_engine('sqlite:///college.db', echo = True)
# meta = MetaData()

# students = Table(
#    'listings', meta, 
#    Column('id', Integer, primary_key = True), 
#    Column('first_name', String), 
#    Column('last_name', String),
#    Column('gender', String),
#    Column('email', String),
#    Column('course', String),
#    Column('degree', String),
#    Column('dob', String),
# )
# meta.create_all(engine)