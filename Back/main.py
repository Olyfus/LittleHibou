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
    print(str(api_url)+"customers/search/?last_name="+name)
    resp = requests.get(str(api_url)+"customers/search/?last_name="+name, auth=credential)
    print(resp.status_code)
    return {resp.content}