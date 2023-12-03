from fastapi import FastAPI
from hydra import compose, initialize
from joblib import load
from pydantic import BaseModel

from src.process import map_to_sentiment, process, sentiment_analysis

with initialize(version_base=None, config_path="../config/"):
    cfg = compose(config_name="main")


app = FastAPI()
modelo = load(f"{cfg.models.dt}")
vetorizador = load(f"{cfg.models.cv}")


class Request(BaseModel):
    text: str


class Response(BaseModel):
    sentiment: str


@app.post("/send_text")
def send_text(req: Request) -> Response:
    _processed_text = process(req.text)

    texto_vetorizado = vetorizador.transform([_processed_text])
    resultado = modelo.predict(texto_vetorizado)

    return Response(sentiment=map_to_sentiment(resultado))

@app.post("/ia_send_text")
def ia_send_text(req: Request) -> Response:

    resultado = sentiment_analysis(req.text)
    print(resultado)
    return Response(sentiment=resultado)