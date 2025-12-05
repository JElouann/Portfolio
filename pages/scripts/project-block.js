class ProjectBlock2 extends HTMLElement 
{
    connectedCallback() 
    { 
        const projectName = this.getAttribute('projectName') || 'Unknown Project';
        const projectYear = this.getAttribute('projectYear') || 'Unknown Year';
        const role = this.getAttribute('role') || 'Unknown Role';
        const teamSize = this.getAttribute('teamSize') || 'Unknown Team Size';
        const projectDuration = this.getAttribute('projectDuration') || 'Unknown Duration';
        const technologies = this.getAttribute('technologies') || 'No technologies listed.';
        const description = this.getAttribute('description') || 'No description provided.';
        const projectPageLink = this.getAttribute('projectPageLink') || '#';
        const videoPreviewLink = this.getAttribute('videoPreviewLink') || '#';
        const videoLink = this.getAttribute('videoLink') || '#';

        this.innerHTML = `
        <a href=${projectPageLink} class="project-block left">
            <div class="video">
                <img src=${videoPreviewLink} class="previewImage">
            </div>
            <div class="project-details">
                <div class="bloc-detail">
                    <img src="images/logos/logoPerson.png" class="logo">
                    <span class="info"> ${teamSize} </span>
                </div>
                <div class="bloc-detail">
                    <img src="images/logos/logoTime.png" class="logo">
                    <span class="info"> ${projectDuration} </span>
                </div>
                <div class="bloc-detail">
                    <img src="images/logos/logoGear.png" class="logo">
                    <span class="info"> ${technologies} </span>
                </div>
            </div>
            <div class="project-description">
                <div class="project-title"> ${projectName} (${projectYear})</div>
                <div class="project-post"> ${role} </div>
                <div class="project-text"> ${description} </div>
            </div>
        </a>
                `;
        
    }
}

customElements.define('project-block2', ProjectBlock2);