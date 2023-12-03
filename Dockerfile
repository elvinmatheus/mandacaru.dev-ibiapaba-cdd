FROM python:3.11.6-slim-bullseye AS base

FROM base AS builder
WORKDIR /app

RUN pip install poetry==1.4.2

ENV POETRY_NO_INTERACTION=1 \
    POETRY_VIRTUALENVS_IN_PROJECT=1 \
    POETRY_VIRTUALENVS_CREATE=1 \
    POETRY_CACHE_DIR=/tmp/poetry_cache

COPY poetry.lock pyproject.toml ./
RUN touch README.md
RUN poetry install --without dev --no-root && rm -rf $POETRY_CACHE_DIR

FROM base AS runtime
WORKDIR /app

COPY --from=builder /app ./
COPY ./src ./src
COPY ./models ./models
COPY ./config ./config
#
LABEL "author.name"="Said Rodrigues" \
"author.email"="coderflemis@gmail.com" \
version="1.0.0" desc="Mandacaru API"

EXPOSE 8000
CMD ["/app/.venv/bin/uvicorn", "--reload", "--host=0.0.0.0", "--port=8000", "src.api:app"]
