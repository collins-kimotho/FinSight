// src/components/FAQ.jsx

import React from 'react';
import Faq from 'react-faq-component';
import './FAQ.css'

const data = {
  // title: "Frequently Asked Questions",
  rows: [
    {
      title: "What is Finsight?",
      content: "Finsight is a personal finance and investment dashboard web application that helps users track expenses, set budgets, and monitor investments."
    },
    {
      title: "How do I sign up?",
      content: "You can sign up by clicking on the 'Get Started Now' button on the homepage and filling in your details."
    },
    {
      title: "Is Finsight free to use?",
      content: "Yes, Finsight offers a free version with basic features, but you can upgrade to a premium plan for additional tools."
    }
  ]
};

const styles = {
  bgColor: 'white',
  titleTextColor: 'black',
  rowTitleColor: 'black',
  rowTitleTextSize: '2rem',
  rowContentTextSize: '1.5rem',
  rowTitleSize: 'large',
  rowContentColor: 'grey',
  arrowColor: 'green',
};

const config = {
  animate: true,
  expandIcon: "+",
  collapseIcon: "-",
  tabFocus: true

};

const FAQ = () => {
  return (
    <div className="faq">
      <div className="container">
        <div className="col-1">
          <h2>FAQ</h2>
          <p>Frequently asked questions</p>
        </div>
        <div className="col-2">
          <div>
            <Faq
            data={data}
            styles={styles}
            config={config}
            />
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default FAQ;
