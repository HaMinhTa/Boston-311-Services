import requests
import json

response = requests.get("https://api.twitter.com/1.1/search/tweets.json?@BOS311&result_type=popular")

data = json.loads(response.text)
print(data)
