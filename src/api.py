from fastapi import FastAPI
from pydantic import BaseModel
from src.process import process, map_to_sentiment

from joblib import load
from hydra import initialize, compose

app = FastAPI()


class Request(BaseModel):
    text: str


class Response(BaseModel):
    label: str


@app.post("/")
def send_text(req: Request) -> Response:
    _processed_text = process(req.text)
    
    
    with initialize(version_base=None, config_path="../config/"):
        cfg = compose(config_name='main')
    
    
    modelo = load(f'{cfg.models.dt}')
    vetorizador = load(f'{cfg.models.cv}')
    
    texto_vetorizado = vetorizador.transform([_processed_text])
    resultado = modelo.predict(texto_vetorizado)


    print('Sentimento Previsto:', map_to_sentiment(resultado))
    
    return Response(label="teste")
