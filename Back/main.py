from fastapi import FastAPI
from dotenv import load_dotenv
import requests
from requests.auth import HTTPBasicAuth
import json
import os

load_dotenv()

app = FastAPI()

#Communiqué avec l'API Hiboutik
api_url = os.environ.get("HIBOU_HOST")
api_mail = os.environ.get("HIBOU_MAIL")
api_token = os.environ.get("HIBOU_TOKEN")
credential = HTTPBasicAuth(api_mail, api_token)

# Challenge 1
@app.get("/")
async def root():
    return {"message": "hello, world"}

# Challenge 2
@app.get("/list/client/{name}")
async def getClientListByLastname(name : str):
    resp = requests.get(str(api_url)+"customers/search/?last_name="+name, auth=credential)
    # print(str(api_url)+"customers/search/?last_name="+name)
    # print(resp.status_code)
    data = resp.content.decode()
    print(data)
    
    return{data}

# Challenge 3
@app.get("/client/{id}/sales")
async def getClientSellList(id : int):
    resp = requests.get(str(api_url)+"customer/"+str(id)+"/sales/", auth=credential)
    # print(str(api_url)+"customers/search/?last_name="+name)
    data = resp.content.decode()
    print(data)
    return {data}