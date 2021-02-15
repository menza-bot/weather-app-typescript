import React from 'react';
import styles from './App.module.scss';
import Content from './Content' 


const App: React.FC = () => {

  
  return (
    
      <div className = {styles.main}>
        <div className = {styles.mainWrapper}>
          <div className = {styles.title}>Weather App</div>
          < Content />
        </div>
      </div>
      
    
  );
}

export default App 
