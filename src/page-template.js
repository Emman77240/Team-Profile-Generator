// creates the team
const generateTeam = team => {

    // creates the manager html
    const generateManager = manager => {
        const { name, id, email, officeNumber } = manager.manager;

        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item" id="ID">ID: ${id}</li>
                <li class="list-group-item" id="body-email">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item" id="body-info">Office number: ${officeNumber}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // creates the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item" id="ID">ID: ${engineer.id}</li>
            <li class="list-group-item" id="body-email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item" id="body-info">GitHub: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // creates the html for interns
    const generateIntern = intern => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item" id="ID">ID: ${intern.id}</li>
            <li class="list-group-item" id="body-email">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item" id="body-info">School: ${intern.school}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(generateManager(team));
    html.push(team.engineer.map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team.intern.map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// exports function to generate entire page
export default (team) => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};