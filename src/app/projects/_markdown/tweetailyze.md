## What is TweetAIlyze?

Summarizes a Twitter account's tweets through embedding/clustering of tweets, w/ sentiment analysis and topic modeling.

![image](https://user-images.githubusercontent.com/66019710/230147921-8bdad341-b86b-44f8-a1e3-5ab388808f7c.png)

### How it works

1. The app takes a POST request of a Twitter account's username and gets the most recent X tweets using the tweepy package.

2. The text of each tweet is preprocessed using the nltk package.
3. The preprocessed text is transformed into embeddings using OpenAI model 'text-embedding-ada-002'

4. The embeddings are clustered using agglomerative clustering with cosine metric and average linkage.

5. The tweets are separated into clusters based on their cluster labels.

6. Sentiment analysis is performed using the VADER sentiment analyzer.

7. Topic modeling is performed using non-negative matrix factorization (NMF) from the scikit-learn package.

8. The top words for each topic are classified using the OpenAI model 'text-curie-001'.

9. Results are stored to Postgres and returned.

### API Endpoint

/tweets

### HTTP Method

POST

### Request Body
The request body should contain a JSON object with a single key-value pair where the key is "username" and the value is the users username. For example:

```json
{"username":"elonmusk"}
```

### Response Body

The response body is a JSON object with a single key-value pair where the key is Tweets and the value is another JSON object. The inner JSON object contains a key-value pair for each topic identified in the tweets. The key of each topic is a concatenated string of the most relevant Twitter handles and keywords associated with that topic. The value of each topic is another JSON object with two keys:

- **key_words:** an array of strings representing the keywords associated with the topic
- **tweets:** an array of JSON objects representing the most relevant tweets associated with the topic. Each JSON object in the tweets array contains the following keys:
  - **tweet_id:** the ID of the tweet
  - **sentiment:** a JSON object representing the sentiment analysis of the tweet. The sentiment analysis contains the following keys:
    - **neg:** a float representing the negativity score of the tweet
    - **neu**: a float representing the neutrality score of the tweet
    - **pos:** a float representing the positivity score of the tweet
    - **compound:** a float representing the overall sentiment score of the tweet (ranges from -1 to 1)
  - **topic_weight:** a float representing the relevance of the tweet to the given topic  

Here's an example of what the response JSON object might look like:
```json
{
  "user": {
    "id": "44196397",
    "name": "Elon Musk",
    "username": "elonmusk"
  },
  "clusters": [
    {
      "topic": "Web",
      "key_words": [
        "https",
        "verified",
        "sign",
        "web",
        "get",
        "via",
        "blue",
        "day",
        "prescient",
        "old"
      ],
      "tweets": [
        {
          "sentiment": {
            "neg": 0,
            "neu": 1,
            "pos": 0,
            "compound": 0
          },
          "topic_weight": 0.01208955708907979
        },
        {
          "sentiment": {
            "neg": 0,
            "neu": 1,
            "pos": 0,
            "compound": 0
          },
          "topic_weight": 0.5877986129941202
        },
        {
          "sentiment": {
            "neg": 0,
            "neu": 1,
            "pos": 0,
            "compound": 0
          },
          "topic_weight": 0.288476329726015
        },
        {
          "sentiment": {
            "neg": 0,
            "neu": 0.82,
            "pos": 0.18,
            "compound": 0.296
          },
          "topic_weight": 0.0822121373001949
        },
        {
          "sentiment": {
            "neg": 0.281,
            "neu": 0.651,
            "pos": 0.068,
            "compound": -0.7351
          },
          "topic_weight": 0.05755325187354697
        },
        {
          "sentiment": {
            "neg": 0,
            "neu": 0.508,
            "pos": 0.492,
            "compound": 0.4404
          },
          "topic_weight": 0.288476329465526
        },
        {
          "sentiment": {
            "neg": 0,
            "neu": 1,
            "pos": 0,
            "compound": 0
          },
          "topic_weight": 0.51244631582272
        },
        {
          "sentiment": {
            "neg": 0.034,
            "neu": 0.826,
            "pos": 0.141,
            "compound": 0.5423
          },
          "topic_weight": 0.09447132011376012
        },
        {
          "sentiment": {
            "neg": 0,
            "neu": 1,
            "pos": 0,
            "compound": 0
          },
          "topic_weight": 0.347118694971934
        },
        {
          "sentiment": {
            "neg": 0,
            "neu": 0.513,
            "pos": 0.487,
            "compound": 0.5859
          },
          "topic_weight": 0.19641641358159842
        },
        {
          "sentiment": {
            "neg": 0,
            "neu": 1,
            "pos": 0,
            "compound": 0
          },
          "topic_weight": 0.19641641948078017
        },
        {
          "sentiment": {
            "neg": 0,
            "neu": 1,
            "pos": 0,
            "compound": 0
          },
          "topic_weight": 0.3471186966182624
        },
        {
          "sentiment": {
            "neg": 0,
            "neu": 0.196,
            "pos": 0.804,
            "compound": 0.4767
          },
          "topic_weight": 0.26578122981760216
        },
        {
          "sentiment": {
            "neg": 0,
            "neu": 1,
            "pos": 0,
            "compound": 0
          },
          "topic_weight": 0.51244631582272
        },
        {
          "sentiment": {
            "neg": 0,
            "neu": 1,
            "pos": 0,
            "compound": 0
          },
          "topic_weight": 0.24832703746875484
        }
      ]
    },
    {
      "topic": "paperclip",
      "key_words": [
        "real",
        "problem",
        "paperclip",
        "clippy"
      ],
      "tweets": [
        {
          "sentiment": {
            "neg": 0.474,
            "neu": 0.526,
            "pos": 0,
            "compound": -0.4019
          },
          "topic_weight": 1
        }
      ]
    },
    {
      "topic": "Working",
      "key_words": [
        "working",
        "service",
        "need",
        "money",
        "good",
        "customer",
        "course"
      ],
      "tweets": [
        {
          "sentiment": {
            "neg": 0,
            "neu": 0.674,
            "pos": 0.326,
            "compound": 0.4404
          },
          "topic_weight": 1.0000000000000007
        }
      ]
    },
    {
      "topic": " Celebrities",
      "key_words": [
        "treating",
        "standard",
        "imo",
        "https",
        "everyone",
        "equally",
        "different",
        "celebrities"
      ],
      "tweets": [
        {
          "sentiment": {
            "neg": 0,
            "neu": 1,
            "pos": 0,
            "compound": 0
          },
          "topic_weight": 1
        }
      ]
    }
  ]
}
```

### Docker, FastAPI, FastAPI_SQLalchemy, PG ADMIN, Celery, Flower, Redis

### Msc
Api calls to OpenAI 'text-curie-001' to classify the topic of a cluster based on key words & 'text-embedding-ada-002' for embedding. Clustering, Topic modelling and sentiment analysis still all run locally- very lightweight and low compute. New docker images ~10gb smaller.

### Environment Variables (Examples)

```env
DATABASE_URL=postgresql+psycopg2:// postgres:password@db:5432/ example_db
DB_USER=postgres
DB_PASSWORD=password
DB_NAME=example_db

PGADMIN_EMAIL=pgadmin@example.com
PGADMIN_PASSWORD=password

CELERY_BROKER_URL=redis://redis:6379/0
CELERY_RESULT_BACKEND=redis://redis:6379/0

OPENAI_API_KEY=

TWEEPY_BEARER_TOKEN=
```
