import React from 'react';
import Head from '../components/Head';
import Footer from '../components/Footer';
export default class Main extends React.Component {
  render() {
    return (
      <html>
        <Head title='React and CSS Modules' />
        <body>
          {/* This is where our content for various pages will go */}
          <Footer content='bottom footer....'/>
        </body>
        
      </html>
    )
  }
}