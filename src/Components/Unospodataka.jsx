import React, { useState } from 'react';

const Unospodataka = () => {
    const [ime, setIme] = useState("");
    const [prezime, setPrezime] = useState("");
    const [godine, setGodine] = useState("");


    function handleImeChange(e) {
        setIme(e.target.value);
    }
     function handlePrezimeChange(e) {
        setPrezime(e.target.value);
    }
     function handleGodineChange(e) {
        setGodine(e.target.value);
    }
    
    return ( 
        <div>
            
            <div>
                <label>Ime:</label>
                <input value={ime} onChange={handleImeChange} />
            </div>
            <div>
                <label>Prezime:</label>
                <input value={prezime} onChange={handlePrezimeChange} />
            </div>
            <div>
                <label>Godine:</label>
                <input value={godine} onChange={handleGodineChange} />
            </div>

            {/* Sva polja moraju bit upisana da bi se ispisao rezultat.*/}
             {ime && prezime && godine && (
        <div>
          <p>Bok, tvoje ime je {ime} {prezime} i imaš {godine} godina.</p>
        </div>
      )}

        </div>
    );
}

export default Unospodataka;
