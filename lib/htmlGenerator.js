

function generateMarkdown(script) {
    return `<!doctype html>
    <html lang="en">
    
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
       
    
        <!-- Bootstrap CSS  -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <!-- Font Awesome CSS Icons -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
           
    
    
        <title>Team Profile Generator</title>
    </head>
    
    <body>
    
        <div class="container" id="team">
            <div class="row">
                <div class="col-12 text-center bg-info my-5 py-5 display-4 text-white">My Team Profile </div>
            </div>
            <div class="row" id="cards">
                
    
            </div>
    
    
        </div>
    
        <!-- jQuery JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    
        ${script}
            
   
    </body>
    
    </html>`
}

module.exports = generateMarkdown;