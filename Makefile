env:
	@echo "Activating virtual environment..."
	poetry shell

install:
	@echo "Installing dependencies..."
	poetry install

load:
	@echo "Downloading data..."
	poetry run python -m src.data_loader

docs:
	@echo "Save documentation to docs... "
	poetry run pdoc src -o docs --force
	@echo "View API documentation... "
	poetry run pdoc src --http localhost:7777

api:
	@echo "Running API locally..."
	poetry run uvicorn src.api:app --reload

tests:
	@echo "Running tests..."
	pytest

clean:
	@echo cleaning...
	find . -type d -name "__pycache__" -exec rm -rf {} ';'

.PHONY: shell install data clean docs tests api
