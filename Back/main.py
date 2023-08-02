from fastapi import FastAPI
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()
api_url = os.environ.get("HIBOU_HOST")
api_mail = os.environ.get("HIBOU_MAIL")
api_token = os.environ.get("HIBOU_TOKEN")

print(api_url)
print(api_mail)
print(api_token)

@app.get("/")
async def root():
    return {"message": "hello, world"}