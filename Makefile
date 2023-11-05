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
	pdoc src -o docs --force
	@echo "View API documentation... "
	pdoc src --http localhost:7777

tests:
	@echo "Running tests..."
	pytest

clean:
	@echo cleaning...
	find . -type d -name "__pycache__" -exec rm -rf {} ';'

.PHONY: shell install data clean docs tests
