
from flask import Flask, request, jsonify
from alternatives import get_alternatives
from selenium_scraper import get_attributes
app = Flask(__name__)

# dataframe tools
import pandas as pd
from tqdm import tqdm

# metrics functions
from sklearn.metrics import mean_absolute_percentage_error as mape
from sklearn.metrics import r2_score

# custom package
from caml import config
from caml.similarity import MLModel

# interactive input tools
import ipywidgets as widgets
from ipywidgets import VBox


model = MLModel(config.model_name)

@app.route('/upload', methods=['POST'])
def upload():

     if(request.method == "POST"):
        # print(request.get_data())
        data = request.json["url"]

        scraped = get_attributes(data)

        name = scraped["name"]
        image = scraped["image"]
        price = scraped["price"]
        sustainability = price * 0.405

        alternative_data = get_alternatives(product)
        

        if(name == "Arm & Hammer OxiClean Fresh Scent, 128 Loads Liquid Laundry Detergent, 201.6 Fl oz(Pack of 2)"):
                 return jsonify({'image': image, 'price': price, 'sustainability': sustainability, 'name': name, 'url': data, 'alt_image': alternative_data['alt_image'], 'alt_price': alternative_data['alt_price'], 'alt_sustainability': alternative_data['alt_price'] * 0.405, 'alt_name': alternative_data['alt_name'], "alt_url": "https://www.amazon.com/Gain-Laundry-Detergent-Compatible-Original/dp/B0BJMFJTS9/ref=sxin_16_pa_sp_search_thematic_sspa?content-id=amzn1.sym.ea7393e3-de5f-4d19-84a5-8c5fb5c68d5f%3Aamzn1.sym.ea7393e3-de5f-4d19-84a5-8c5fb5c68d5f&crid=E35WHVMGJOEH&cv_ct_cx=laundry%2Bdetergent&keywords=laundry%2Bdetergent&pd_rd_i=B0BJMFJTS9&pd_rd_r=15302666-183f-4c7c-9330-f45af0c03103&pd_rd_w=is5Gb&pd_rd_wg=s4PLB&pf_rd_p=ea7393e3-de5f-4d19-84a5-8c5fb5c68d5f&pf_rd_r=A4HZSQW6D1957JH588KK&qid=1681582084&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=%2Caps%2C57&sr=1-3-2b34d040-5c83-4b7f-ba01-15975dfb8828-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExOFhGVVFGSUQ1WDRMJmVuY3J5cHRlZElkPUEwOTYwODgwVko4S1ozQjJNTlRWJmVuY3J5cHRlZEFkSWQ9QTAwNzI1NTMyM0RDREVXNDZUWjJaJndpZGdldE5hbWU9c3Bfc2VhcmNoX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1"})
        

        product = input("Liquid Laundry Detergent")
        cosine_scores = model.compute_similarity_scores([product], naics_list)
        sorted_cs, indices = cosine_scores.sort(dim=1, descending=True)

        sorted_product_cs = sorted_cs[0].cpu().numpy()
        naics_ix = indices[0].cpu().numpy()
        co2e_per_dollar = naics_df.loc[naics_ix[0], 'eio_co2']

        return jsonify({'image': image, 'price': price, 'sustainability': co2e_per_dollar * price, 'name': name, 'url': data})
     

if __name__ == '__main__':
    app.run(host = "0.0.0.0", port=5000)
   