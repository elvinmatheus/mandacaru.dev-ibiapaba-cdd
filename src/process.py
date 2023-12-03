import re
from bardapi import BardCookies
from nltk.stem import PorterStemmer
from hydra import initialize, compose
import os


def lowercase(text: str) -> str:
    return text.lower()


def remove_punkt(text: str) -> str:
    return re.sub(r"[^\w\s]", "", text)


def remove_numbers(text: str) -> str:
    return re.sub(r"\d+", "", text)


def remove_whitespace(text: str) -> str:
    return text.replace("\n", "").replace("\r", "")


def stem_words(text: str) -> str:
    ps = PorterStemmer()
    stemmed_words = []
    for word in text.split():
        stemmed_words.append(ps.stem(word))

    return " ".join(stemmed_words)


def process(text: str):
    text = lowercase(text)
    text = remove_punkt(text)
    text = remove_numbers(text)
    text = remove_whitespace(text)
    text = stem_words(text)
    return text


def map_to_sentiment(value):
    return "Positivo" if value == 1 else "Negativo"


def sentiment_analysis(text: str):
    with initialize(version_base=None, config_path="../config/"):
        cfg = compose(config_name="dev_config")

    cookie_dict = {
        "__Secure-1PSID": cfg.cookie.__Secure_1PSID,
        "__Secure-1PSIDTS": cfg.cookie.__Secure_1PSIDTS,
        "__Secure-1PSIDCC": cfg.cookie.__Secure_1PSIDCC,
    }

    prompt = f"Defina o texto como positivo ou negativo: {text}. Não faça nada além de definir o sentimento do texto."

    bard = BardCookies(cookie_dict=cookie_dict)

    return bard.get_answer(prompt)["content"]
