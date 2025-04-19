// document.getElementById('form-examen').addEventListener('submit', function(e) {
//     e.preventDefault();
  
//     const examen = {
//       nom: document.getElementById('nom').value,
//       duree: parseInt(document.getElementById('duree').value),
//       description: document.getElementById('description').value,
//       proprietaire: document.getElementById('proprietaire').value,
//       questions: []
//     };
  
//     const examsKey = 'examens_' + examen.proprietaire;
//     const exams = JSON.parse(localStorage.getItem(examsKey)) || [];
//     exams.push(examen);
//     localStorage.setItem(examsKey, JSON.stringify(exams));
  
//     alert('Examen ajouté avec succès !');
//     this.reset();
//   });
  
document.getElementById("form-examen").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Récupération des valeurs du formulaire
    const nom = document.getElementById("nom").value;
    const duree = document.getElementById("duree").value;
    const description = document.getElementById("description").value;
    const proprietaireNom = document.getElementById("proprietaire").value;
  
    // Charger les examens existants
    let examens = JSON.parse(localStorage.getItem("examens")) || [];
  
    // Gestion des utilisateurs avec ID unique (simulé ici par un hash)
    let utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];
  
    // Cherche si le propriétaire existe déjà
    let proprietaire = utilisateurs.find(u => u.nom === proprietaireNom);
  
    if (!proprietaire) {
      // Nouveau propriétaire => on génère un ID unique
      proprietaire = {
        id: "user-" + Date.now(),  // ou crypto.randomUUID() si dispo
        nom: proprietaireNom
      };
      utilisateurs.push(proprietaire);
      localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
    }
  
    // Création de l'examen
    const nouvelExamen = {
      id: "exam-" + Date.now(),
      nom,
      duree,
      description,
      proprietaireId: proprietaire.id
    };
  
    // Ajout de l'examen
    examens.push(nouvelExamen);
    localStorage.setItem("examens", JSON.stringify(examens));
  
    alert("Examen ajouté !");
    this.reset();
  });
  