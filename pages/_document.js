import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
      return (
        <Html lang='en' data-theme='light'>
          <Head />
          <body>
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(){try{var stored=localStorage.getItem('theme');var theme=stored||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',theme);}catch(e){}})();`,
              }}
            />
            <div id='overlays' />
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;