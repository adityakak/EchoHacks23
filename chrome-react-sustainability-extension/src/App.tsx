import './App.css';
import Separator from './components/seperator';
import ScoreDial from './components/scoredial';
import Table from './components/table';
import React, { useState, useEffect } from 'react'

function App() {
  const [currentUrl, setCurrentUrl] = useState("");
  const [image, setCurrentImage] = useState("");
  const [price, setCurrentPrice] = useState("");
  const [score, setCurrentScore] = useState("");
  const [name, setCurrentName] = useState("");
  const [url, setCurrentLink] = useState("");
  const [image_alt, setCurrentImage_alt] = useState("");
  const [price_alt, setCurrentPrice_alt] = useState("");
  const [score_alt, setCurrentScore_alt] = useState("");
  const [name_alt, setCurrentName_alt] = useState("");
  const [url_alt, setCurrentLink_alt] = useState("");

  useEffect(() => {
    // Get the current tab's URL
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0].url;
      if (url) {
        setCurrentUrl(url);
      }
      else {
        return;
      }
    });
  })
  async function getData() {
    await fetch('http://172.26.89.164:5000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: currentUrl
      })
    }).then(response => response.json())
      .then(data => {
        setCurrentImage(data['image']);
        setCurrentPrice(data['price']);
        setCurrentLink(data['url']);
        setCurrentScore(data['sustainability']);
        setCurrentName(data['name']);

        setCurrentImage_alt(data['image_alt']);
        setCurrentPrice_alt(data['price_alt']);
        setCurrentLink_alt(data['url_alt']);
        setCurrentScore_alt(data['sustainability_alt']);
        setCurrentName_alt(data['name_alt']);
      }
    )
  }
  return (
    <div className="App">
      <div>
        <h1> Sustainability Calculator</h1>
        <ScoreDial value={"50"} size={100} strokeColor="black" textColor="white" circleSize={50} />
        <Separator />
        <Table data={[
          {
            original_item: [
              {
                item: name,
                link: url,
                score: score,
                image: image,
                price: price
              }
            ],
            alt_one: [
              {
                item: name_alt,
                link: url_alt,
                score: score_alt,
                image: image_alt,
                price: price_alt
              }
            ],
          }
        ]} />
      </div>
    </div>
  );
}
export default App;
