import base64


def get_alternatives(product):
    # each item: (picture, price, carbon footprint)
    alternative_data = dict()
    with open("alternative.jpg", "rb") as img_file:
        alternative_data['alt_image'] = base64.b64encode(img_file.read())

    alternative_data['alt_price'] = 27.74

    multiplier = 1.0 # TODO: update multiplier

    alternative_data['alt_score'] = alternative_data['alt_price'] * multiplier
    return alternative_data