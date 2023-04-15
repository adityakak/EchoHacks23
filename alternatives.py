import base64
from PIL import Image
import io


def image_to_64():
    image = Image.open('alternative.jpg')
    new_size = (200, 200)
    resized_image = image.resize(new_size)

    with io.BytesIO() as buffer:
        image.save(buffer, format='JPEG')
        image_bytes = buffer.getvalue()

    return base64.b64encode(image_bytes).decode('utf-8')


def get_alternatives(product):
    # each item: (picture, price, carbon footprint)
    alternative_data = dict()

    alternative_data['alt_img'] = image_to_64()

    alternative_data['alt_price'] = 27.74

    multiplier = 1.0 # TODO: update multiplier

    alternative_data['alt_score'] = alternative_data['alt_price'] * multiplier
    return alternative_data