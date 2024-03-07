function Team() {
    return (
      <>
        <h1>Teams</h1>
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*5qy1gp-cMOevK65T6XLQtA.jpeg"
          alt="Team 1"
          style={{ maxWidth: '500px', maxHeight: '2300px' }}
        />
        <h2>    The Developer of Bitcoin together  </h2>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Bust_of_Satoshi_Nakamoto_in_Budapest.jpg"
            alt="Team 2"
            style={{ maxWidth: '200px', maxHeight: '200px' }}
          />
          <h2>Satoshi Nakamoto</h2>
          <p>Satoshi Nakamoto is the name used by the presumed pseudonymous person or pe
            rsons who developed Bitcoin, authored the bitcoin white paper, and created 
            and deployed bitcoin's original reference implementation. As part of the im
            plementation, Nakamoto also devised the first blockchain database.</p>
         
        </div>
        <div>
          <img
            src="https://bitcoinnews.com/wp-content/uploads/2024/02/Martti-Malmi.jpg"
            alt="Team 3"
            style={{ maxWidth: '200px', maxHeight: '200px' }}
          />
           <h2>Martti Malmi</h2>

           <p>Martti Malmi, a Finnish programmer, played a crucial role in the early days of Bitcoi
            n. He worked closely with Satoshi Nakamoto, the mysterious creator of Bitcoin, helping to 
            improve its code and build its infrastructure. Malmi even set up one of the
             first places where people could trade Bitcoin, called Bitcoin Market.
While Malmi eventually moved on to other pro
jects (currently developing a NOSTR client called iris.to), his early c
ontributions were vital in shaping Bitcoin into what it is today. His story hig
hlights the collaborative effort behind Bitcoin’s success and its journey from an experi
mental idea to a global phenomenon.</p>

        </div>
      </>
    );
  }
  
  export default Team;
  