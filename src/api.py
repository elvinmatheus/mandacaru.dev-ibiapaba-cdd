from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from hydra import compose, initialize
from joblib import load
from pydantic import BaseModel

from src.process import map_to_sentiment, process

with initialize(version_base=None, config_path="../config/"):
    cfg = compose(config_name="main")


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
modelo = load(f"{cfg.models.dt}")
vetorizador = load(f"{cfg.models.cv}")


class Request(BaseModel):
    text: str


class Response(BaseModel):
    sentiment: str


@app.post("/")
def send_text(req: Request) -> Response:
    _processed_text = process(req.text)

    texto_vetorizado = vetorizador.transform([_processed_text])
    resultado = modelo.predict(texto_vetorizado)

    return Response(sentiment=map_to_sentiment(resultado))
