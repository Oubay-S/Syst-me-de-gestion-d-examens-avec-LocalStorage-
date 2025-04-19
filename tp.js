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
