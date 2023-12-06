# Analise de Sentimentos no mundo financeiro

Neste projeto, buscamos avaliar o sentimento associado a frases em inglês relacionadas a finanças, classificando cada sentença em uma das categorias: positivo ou negativo. Essa análise de sentimentos é crucial na mineração de textos, especialmente no contexto financeiro, onde compreender as emoções expressas nas informações textuais pode oferecer insights valiosos para investidores, analistas e empresas.

## Desenvolvedores

- [Amarildo Filho](https://github.com/amarildorfilho)
- [Carlos Gutiérrez](https://github.com/Ingenieco)
- [Elvin Silva](hhttps://github.com/elvinmatheus)
- [Luann Alves](https://github.com/Lonalt)
- [Said Rodrigues](https://github.com/talDoFlemis)

## Arquitetura do projeto

![Arquitetura do projeto](https://github.com/elvinmatheus/mandacaru.dev-ibiapaba-cdd/blob/main/images/arquitetura-projeto.png)

### Jupyter Notebook

O desenvolvimento do pipeline foi realizado no ambiente Jupyter Notebook, proporcionando uma interface interativa e facilitando a análise exploratória de dados, além de permitir a execução passo a passo do código.

### Pandas

A biblioteca Pandas foi utilizada para análise e tratamento eficiente dos dados. Ela permitiu a manipulação e limpeza dos dados de forma intuitiva, facilitando o processo de preparação para o modelo.

### NLTK e Scikit-Learn

O NLTK (Natural Language Toolkit) e o Scikit-Learn foram empregados no pré-processamento dos dados. O NLTK ofereceu ferramentas poderosas para tokenização, remoção de stopwords, stemming e lematização, enquanto o Scikit-Learn foi utilizado para vetorização de texto e seleção de modelo.

### Seleção e Otimização do Modelo

Diversos modelos foram explorados e comparados para a tarefa de classificação de sentimentos. O Scikit-Learn facilitou esse processo, permitindo a avaliação de modelos como Regressão Logística, Support Vector Machines, Naive Bayes, Decision Tree, entre outros. A otimização de hiperparâmetros foi realizada utilizando GridSearchCV para encontrar o modelo mais adequado.

### Modelo Final: Decision Tree

Após uma análise abrangente, a Decision Tree foi selecionada como o modelo final devido ao seu desempenho consistente nos dados de teste. A escolha foi baseada em métricas de avaliação como acurácia, precisão, recall e F1-score.

### Deploy

Com o modelo Decision Tree escolhido, realizamos o deploy do modelo treinado para uso em produção. Este processo envolveu a criação de uma API ou serviço que aceita inputs de texto e fornece predições de sentimentos utilizando o modelo treinado.

## Etapas do projeto

### 1. Análise Exploratória dos Dados

No notebook "[1.0-scr-eda](https://github.com/elvinmatheus/mandacaru.dev-ibiapaba-cdd/blob/main/notebooks/1.0-scr-eda.ipynb)" apresenta uma análise exploratória inicial do conjunto de dados de sentenças em inglês, utilizando o dataset "Financial Sentiment Analysis". Após carregar os dados, foi identificado o tamanho da menor e da maior sentença, exibindo seus respectivos comprimentos e conteúdos. Em seguida, a biblioteca WordCloud foi empregada para visualizar as palavras mais frequentes no conjunto de dados, sem a aplicação de pré-processamento. O gráfico gerado destaca a frequência das palavras, proporcionando uma visão inicial sobre os termos mais comuns nas sentenças, o que pode ser útil para compreender padrões linguísticos e temas recorrentes no contexto financeiro. Essa análise exploratória inicial serve como base para o desenvolvimento subsequente de técnicas de processamento de linguagem natural e modelos de análise de sentimentos.

### 2. Tratamento de Dados

No notebook "[2.0-lapl-tratamento-dados](https://github.com/elvinmatheus/mandacaru.dev-ibiapaba-cdd/blob/main/notebooks/2.0-lapl-tratamento-dados.ipynb)" é realizado o tratamento inicial do conjunto de dados "Financial Sentiment Analysis". Após a leitura do arquivo CSV conforme a configuração definida no Hydra, são realizadas duas etapas principais de limpeza. Primeiramente, são removidos dados duplicados, garantindo a consistência e unicidade das observações no conjunto. Em seguida, são eliminadas as linhas que contenham valores nulos, contribuindo para a integridade e qualidade do conjunto de dados.

O dataframe resultante, denominado ‘df_tratado’, é salvo em um novo arquivo CSV no diretório especificado pela configuração do Hydra, marcando a conclusão do processo de tratamento. Essas etapas são cruciais para garantir a confiabilidade dos dados utilizados no desenvolvimento de modelos de análise de sentimentos, assegurando que não haja redundâncias ou lacunas que possam impactar negativamente nas análises subsequentes.

### 3. Pré-Processamento

No notebook "[3.0-emss+cegu-pre-procesamento](https://github.com/elvinmatheus/mandacaru.dev-ibiapaba-cdd/blob/main/notebooks/3.0-emss%2Bcegu-pre-procesamento.ipynb)" ocorre as etapas essenciais de pré-processamento no conjunto de dados "Financial Sentiment Analysis". Inicialmente, o texto das sentenças é convertido para minúsculas, visando uniformizar a capitalização. Em seguida, são removidas pontuações, números e espaços em branco para limpar o texto e concentrar-se nas palavras relevantes.

A criação de uma nuvem de palavras proporciona uma visualização das palavras mais frequentes após o pré-processamento, oferecendo insights sobre os termos predominantes no conjunto de dados.

Além disso, o código realiza a codificação da coluna 'Sentiment' para valores numéricos, associando "positive" a 1, "negative" a 0 e "neutral" a 2. As instâncias rotuladas como "neutral" são removidas, resultando em uma abordagem de classificação binária para sentimentos.

O processo de stemming é aplicado para reduzir palavras à sua forma radical, enquanto a lematização é empregada para reduzir palavras à sua forma base. Ambas as técnicas visam simplificar o vocabulário e melhorar a eficácia dos modelos de análise de sentimentos.

O dataframe resultante, contendo as colunas 'cleaned_text', 'stematized_text', 'lemmatized_text' e 'encoded_sentiment', é salvo em um novo arquivo CSV conforme especificado na configuração do Hydra. Este arquivo representa a etapa final do pré-processamento e está pronto para ser utilizado no treinamento e avaliação de modelos de análise de sentimentos.

### 4. Escolha do Modelo Final

No notebook "[4.0-emss+lapl-classificadores](https://github.com/elvinmatheus/mandacaru.dev-ibiapaba-cdd/blob/main/notebooks/4.0-emss%2Blapl-classificadores.ipynb)" é realizada a escolha do modelo final para o projeto de análise de sentimentos com base no conjunto de dados "Financial Sentiment Analysis". Diversos modelos de classificação, incluindo Logistic Regression, Support Vector Machines (SVM), Multinomial Naive Bayes, KNeighbors Classifier, Decision Tree e Random Forest, foram avaliados utilizando a técnica de GridSearchCV para encontrar os melhores hiperparâmetros.

A avaliação dos modelos considerou métricas de desempenho, como acurácia, precisão, recall e F1-score, proporcionando uma visão abrangente do seu comportamento. O processo de escolha do modelo final envolveu a comparação dessas métricas para diferentes modelos.

O Decision Tree foi selecionado como o modelo final, utilizando a representação binária, unigramas e inclusão de stopwords durante a vetorização do texto. Esse modelo será aplicado após o processo de stemização no texto das sentenças. A decisão de escolher o Decision Tree como modelo final foi baseada na análise comparativa de desempenho em relação aos demais modelos avaliados.

O modelo final escolhido será crucial para a implementação prática da análise de sentimentos no contexto financeiro, fornecendo insights valiosos sobre as emoções associadas às sentenças do conjunto de dados.

### 5. Resultados Finais e Importância de Variáveis

No notebook "[5.0-lapl-importância-de-variáveis](https://github.com/elvinmatheus/mandacaru.dev-ibiapaba-cdd/blob/main/notebooks/5.0-lapl-import%C3%A2ncia-de-vari%C3%A1veis.ipynb)" concluimos a análise de sentimentos utilizando o modelo Decision Tree, implementado no conjunto de dados "Financial Sentiment Analysis". Os resultados finais do modelo são apresentados por meio de métricas de desempenho, incluindo acurácia, precisão, recall e F1-score, para avaliar sua eficácia na classificação de sentimentos.

Além disso, a importância das variáveis é explorada por meio da visualização das 10 principais características que contribuem para as decisões do modelo. A função ‘plot_feature_importance’ oferece insights sobre as palavras mais relevantes para a classificação de sentimentos, contribuindo para uma interpretação mais intuitiva do modelo.

A matriz de confusão é gerada para fornecer uma visão detalhada do desempenho do modelo em diferentes classes sentimentais. A curva ROC (Receiver Operating Characteristic) é plotada, juntamente com o cálculo da Área Sob a Curva (AUC), proporcionando uma avaliação da capacidade do modelo de distinguir entre classes positivas e negativas.

Além disso, é apresentado o relatório de classificação, detalhando métricas como precisão, recall e F1-score para cada classe. O uso de cross-validation com o método ‘cross_val_score’ é exemplificado para avaliar a estabilidade do

## Como utilizar este repositório

Para executar este projeto, siga os passos abaixo. É necessário uma máquina linux:

### Poetry

**Para instalar o Poetry na máquina, siga as etapas abaixo:**

1. Certifique-se de que o Python esteja instalado em seu sistema. Você pode verificar isso executando o seguinte comando no terminal:

```bash
python --version
```

2. Instale o Poetry usando o seguinte comando:

```bash
pip install poetry
```

3. Verifique se o Poetry foi instalado corretamente executando o seguinte comando:

```bash
poetry --version
```

### Docker

Siga o passo a passo de instalação do [site oficial do Docker](https://docs.docker.com/engine/install/ubuntu/)

### Clonando este repositório

1. Acima da lista de arquivos, clique no botão **code**.
2. Copie a URL `git@github.com:elvinmatheus/mandacaru.dev-ibiapaba-cdd.git`
3. Abra o ubuntu
4. Altere o diretório de trabalho atual para o local que deseja ter o diretório clonado.
5. Digite `git clone` e cole a URL copiada

```bash
git clone git@github.com:elvinmatheus/mandacaru.dev-ibiapaba-cdd.git
```

6. Pressione enter para criar seu clone local.

Com o repositório clonado, você precisa navegar até a pasta local, usando o comando :

```bash
cd mandacaru.dev-ibiapaba-cdd
```

Estando na pasta do repositório, basta instalar as dependências do projeto utilizando o comando:

```bash
poetry install
```

Ele irá instalar todas as dependências contidas no arquivo `pyproject.toml`. Depois disso basta ativar o ambiente virtual criado pelo Poetry utilizando o comando:

```bash
poetry shell
```

### Rodar em `produção`

Baixe o docker e rode o comando que ele ja vai funcionar

```bash
sudo docker compose up
```