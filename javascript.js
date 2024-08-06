function initializeProjects() {
    const cardGrid = document.querySelector(".cardGrid");
    for (let i = 1; i <= 6; i++) {
        let card = document.createElement("div");
        card.classList.add("card");

        // Adds Taper
        let taper = document.createElement("div");
        taper.classList.add("taper");
        card.appendChild(taper);

        // Add Text
        let cardText = document.createElement("div");
        cardText.classList.add("cardText");
        
        // Adds Project Name to Card
        let projectName = document.createElement("p");
        projectName.textContent = "Project " + i;
        projectName.classList.add("bold");
        cardText.appendChild(projectName);

        // Adds Project Description to Card
        let projectDesc = document.createElement("p");
        projectDesc.textContent = "Basic description for my awesome project!";
        projectDesc.classList.add("projectDesc");
        cardText.appendChild(projectDesc);

        // Adss Icons to Card
        let icons = document.createElement("div");
        icons.classList.add("icons");
        let starIcon = document.createElement("img");
        starIcon.src = "star-plus-outline.svg";
        starIcon.classList.add("svg");
        starIcon.alt = "Star";
        icons.appendChild(starIcon);

        let watchIcon = document.createElement("img");
        watchIcon.src = "eye-plus-outline.svg";
        watchIcon.classList.add("svg");
        watchIcon.alt = "Watch";
        icons.appendChild(watchIcon);

        let shareIcon = document.createElement("img");
        shareIcon.src = "share-variant-outline.svg";
        shareIcon.classList.add("svg");
        shareIcon.alt = "Share";
        icons.appendChild(shareIcon);
        cardText.appendChild(icons);

        card.append(cardText)
        cardGrid.appendChild(card);
    }
}


initializeProjects();