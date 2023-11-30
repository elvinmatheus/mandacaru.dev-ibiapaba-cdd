from fastapi import FastAPI
from pydantic import BaseModel

from src.process import process

app = FastAPI()


class Request(BaseModel):
    text: str


class Response(BaseModel):
    label: str


@app.post("/")
def send_text(req: Request) -> Response:
    _processed_text = process(req.text)
    return Response(label="teste")
