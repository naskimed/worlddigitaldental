import React from 'react';

function MessageComponent() {
  return (
    <>
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
    <div className="rounded-t bg-white mb-0 px-6 py-6">
    <div className="message-component">
        <p style={{  fontSize: "16px", fontWeight: "bold" }}>INSTRUCTIONS:</p>
        <br></br>
        <p style={{  fontSize: "17px" }} >Pour optimiser le processus de commande via notre plateforme, il vous suffit de remplir le formulaire fourni et de telecharger vos fichiers STL et DICOM via WeTransfer. Pour une efficacite optimale, if est recommande d'utiliser une connexion internet robuste, telle qu'un reseau 4G fiable ou une connexion par fibre optique. Cela garantit un transfert
          rapide et sans heurts de vos fichiers, ameliorant ainsi l'experience utilisateur globale et facilitant une execution de commande plus efficace.
        </p>
        <br></br>
    </div>
    </div>
    </div>
    </>
  );
}

export default MessageComponent;
