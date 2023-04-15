import requests
from bs4 import BeautifulSoup




URL = "https://www.amazon.com/Whole-Foods-Market-Beef-Lasagna/dp/B09C6FTNN8/ref=sr_1_4_f3_0o_wf?crid=3R7JY5ALB2IFY&keywords=lasagna&qid=1681577975&sprefix=lasagn%2Caps%2C351&sr=8-4"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
soup.find(id="")
print(soup)
results = soup.find(id="dp")
# results = soup.find(id="productTitle")
print(results.prettify())

# URL = "https://realpython.github.io/fake-jobs/"
# page = requests.get(URL)
# soup = BeautifulSoup(page.content, "html.parser")

# results = soup.find(id="ResultsContainer")
# results.find_all()
# print(results.prettify())


# print(page.text)