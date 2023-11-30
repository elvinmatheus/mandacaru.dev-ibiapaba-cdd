import re

from nltk.stem import PorterStemmer
from sklearn.feature_extraction.text import CountVectorizer


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


def vectorize(text: str):
    count_vec = CountVectorizer(binary=True)
    count_vec.fit([text])
    return count_vec.transform([text])


def process(text: str):
    text = lowercase(text)
    text = remove_punkt(text)
    text = remove_numbers(text)
    text = remove_whitespace(text)
    text = stem_words(text)
    vector = vectorize(text)
    return vector
