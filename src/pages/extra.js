import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import FadeIn from 'react-fade-in';

const customStyles = {
  content: {
    top: '30%',
    left: '50%',
    right: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    width : '90%',
    transform: 'translate(-50%, -50%)',
    height : '50%',
    opacity: '90%'
  },
};

//Modal.setAppElement('#yourAppElement');

function ase(i) 
  {
    if(i == 1)
    return (
      <div>
        hello
      </div>
    );
  }

const Extra = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(true);
  const [showResults, setShowResults] = React.useState(false);
  
 const oonClick = () => setShowResults(false);

 const Results = () => (
  <div>
    <input type="text"></input><br/>
    <input type="text"></input><br/>
    <input type="text"></input><br/>
    <input type="text"></input><br/>
    <input type="text"></input><br/>
  </div> 
  )

  function openModal() 
  {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = 'DodgerBlue';
  }

  function closeModal() {
    setIsOpen(false);
  }

 

  return (
    
    <div>
      
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       
      </Modal>

      </div>
      
  );
}

/*const Extra = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <h1>Extra</h1>
    </div>
  );
};*/

export default Extra;
