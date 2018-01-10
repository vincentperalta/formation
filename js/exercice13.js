
    $(document).ready(function(){

        $.ajax(
            {
                "url" : "http://localhost:8080/formation/index.php",
                "type" : "GET"

            }
        // si ça se passe bien
        ).done(function(donnees){
            console.log(donnees);
        }
        ).fail(function(){
            console.log("Oups");
        }
        ).always(function(){
            console.log("Toujours");
        })
        
    })