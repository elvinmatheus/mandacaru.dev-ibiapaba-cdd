import os

import hydra
import kaggle
from hydra.core.config_store import ConfigStore

from src.config import MainConfig
from src.logger import logger


class DataSetDownloader:
    def __init__(self):
        """Inicializa o downloader de datasets do kaggle"""
        self.api = kaggle.KaggleApi()
        self.api.authenticate()

    def download(self, dataset: str, path: str):
        """Baixa todos os datasets do kaggle na pasta data"""
        if not os.path.exists(path):
            os.makedirs(path)

        self.api.dataset_download_files(
            dataset, path=f"{path}", quiet=False, unzip=True
        )


cs = ConfigStore.instance()
cs.store(name="config", node=MainConfig)


@hydra.main(version_base=None, config_path="../config", config_name="main")
def main(cfg: MainConfig) -> None:
    logger.info("Loading data")

    downloader = DataSetDownloader()
    downloader.download(cfg.dataset.name, cfg.dataset.path)


if __name__ == "__main__":
    main()
