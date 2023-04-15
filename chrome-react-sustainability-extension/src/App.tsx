import React from 'react';
import './App.css';

function App() {
  const pageContent = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Sustainability Calculator</title>
      <style>
        .header {
          font-size: 36px;
          text-align: center;
          margin-top: 50px;
        }
        .separator {
          border-bottom: 1px solid #ccc;
          margin: 50px 0;
        }
      </style>
    </head>
    <body>
      <h1 class="header">Sustainability Calculator</h1>
      <div class="separator"></div>
      <!-- The rest of your webpage content goes here -->
    </body>
  </html>
`;

// Return the page content as a dangerously set innerHTML
return <div dangerouslySetInnerHTML={{ __html: pageContent }} />;
}

export default App;
