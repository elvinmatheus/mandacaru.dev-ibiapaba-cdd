from dataclasses import dataclass


@dataclass
class DataSet:
    name: str
    path: str


@dataclass
class Data:
    raw: str


@dataclass
class MainConfig:
    dataset: DataSet
    data: Data
    log_level: str = "INFO"
