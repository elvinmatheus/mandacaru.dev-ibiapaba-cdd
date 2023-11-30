from fastapi import FastAPI
from joblib import load
from pydantic import BaseModel

from src.process import process

app = FastAPI()

decision_tree = load("models/dt.joblib")


class Request(BaseModel):
    text: str


class Response(BaseModel):
    label: str


@app.post("/")
def send_text(req: Request) -> Response:
    processed_text = process(req.text)
    predictions = decision_tree.predict(processed_text)
    print(predictions)
    return Response(label=predictions[0])
