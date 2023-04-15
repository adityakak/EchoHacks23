from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import pandas as pd

# df = pd.DataFrame(columns=['Player','Salary','Year']) # creates master dataframe 


def get_attributes(url): # returns a dictionary where keys are name, image, price, and methods
    results = dict()
    driver = webdriver.Chrome('/Users/akashpamal/Downloads/chromedriver_mac64/chromedriver')


if __name__ == '__main__':
    pass


for yr in range(1990,2019):
    print("Finding year: ", yr)
    page_num = str(yr) + '-' + str(yr+1) +'/'
    url = 'https://www.amazon.com/Gain-Laundry-Detergent-Compatible-Original/dp/B0BJMFJTS9/ref=sxin_16_pa_sp_search_thematic_sspa?content-id=amzn1.sym.ea7393e3-de5f-4d19-84a5-8c5fb5c68d5f%3Aamzn1.sym.ea7393e3-de5f-4d19-84a5-8c5fb5c68d5f&crid=E35WHVMGJOEH&cv_ct_cx=laundry%2Bdetergent&keywords=laundry%2Bdetergent&pd_rd_i=B0BJMFJTS9&pd_rd_r=15302666-183f-4c7c-9330-f45af0c03103&pd_rd_w=is5Gb&pd_rd_wg=s4PLB&pf_rd_p=ea7393e3-de5f-4d19-84a5-8c5fb5c68d5f&pf_rd_r=A4HZSQW6D1957JH588KK&qid=1681582084&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=%2Caps%2C57&sr=1-3-2b34d040-5c83-4b7f-ba01-15975dfb8828-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExOFhGVVFGSUQ1WDRMJmVuY3J5cHRlZElkPUEwOTYwODgwVko4S1ozQjJNTlRWJmVuY3J5cHRlZEFkSWQ9QTAwNzI1NTMyM0RDREVXNDZUWjJaJndpZGdldE5hbWU9c3Bfc2VhcmNoX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1'
    driver.get(url)
    
    result = driver.find_element(By.ID, "productTitle")
    # players = driver.find_elements_by_xpath('//td[@class="grocery"]')
    # players = driver.find_elements_by_xpath()

    # driver.find_element("find_element", '//td[@class="grocery"]')
    driver.find_elements_by_xpath('//div[@class="name"]')
    salaries = driver.find_elements_by_xpath('//td[@class="hh-salaries-sorted"]') 
    
    
    players_list = []
    for p in range(len(players)):
        players_list.append(players[p].text)
    
    salaries_list = []
    for s in range(len(salaries)):
        salaries_list.append(salaries[s].text)
    
    data_tuples = list(zip(players_list[1:],salaries_list[1:])) # list of each players name and salary paired together
    temp_df = pd.DataFrame(data_tuples, columns=['Player','Salary']) # creates dataframe of each tuple in list
    temp_df['Year'] = yr # adds season beginning year to each dataframe
    df = df.append(temp_df) # appends to master dataframe
    
driver.close()
print(df)