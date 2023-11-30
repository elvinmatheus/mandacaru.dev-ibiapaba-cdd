from dataclasses import dataclass


@dataclass
class DataSet:
    name: str
    path: str


@dataclass
class Data:
    raw: str


@dataclass
class Models:
    dt: str


@dataclass
class MainConfig:
    dataset: DataSet
    data: Data
    models: Models
    log_level: str = "INFO"
