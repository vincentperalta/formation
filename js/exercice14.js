
    $(document).ready(function(){

        $("#SexeChoice1").click(function(){    
            //console.log("change");
            $("#name_jf").prop("disabled", true);
        })

        $("#SexeChoice2").click(function(){    
            //console.log("change");
            $("#name_jf").prop("disabled", false);
        })

        $("#age").change(function(){    
            //console.log("change");
            //console.log($("#age").val());

            $("#ageText").text($("#age").val());
        })

        $("#codepostal").keyup(function(){    
            
            //console.log("change");            

            const value = $("#codepostal").val();

            //console.log(value);            
            //console.log(value.length)

            if (value.length<5){
                $("#alertCodePostal").text("Trop court");
                $("#alertTooLong").removeClass("cache");

            } else if (value.length>5) {
                $("#alertCodePostal").text("Trop long");
                $("#alertTooLong").removeClass("cache");
            } else {
                $("#alertCodePostal").text("");
                $("#alertTooLong").addClass("cache");


                $.ajax(
                    {
                        "url" : "http://localhost:8080/formation/ville.php",
                        "type" : "GET",
                        "data" : { 
                            "codepostal": value
                        }
        
                    }
                    // si ça se passe bien
                ).done(function(donnees){
                    //console.log(donnees);
                    const ville = donnees.nom;
                    //console.log(ville);                    
                    $("#ville").val(ville);
                }
                ).fail(function(){
                    //console.log("Oups");
                    
                }
                ).always(function(){
                    //console.log("Toujours");
                    
                })
            }            
        })

        $("#addButton").click(function(){    
            console.log("click button");

            $("#page1").addClass("cache");
            $("#page2").removeClass("cache");
        })
        
        $("#nbBateau").change(function(){    

            const nb = $("#nbBateau").val();
            const nbBak = $("#nbbak").val();
            let infoBateauBak = [];

            for(i=0; i<nbBak; i++){
                infoBateauBak[i] = $("#bateau"+i).val();
            }

            $("#detailBateau").empty();

            for(i=0; i<nb; i++ ){                
                $("#detailBateau").append('<div class="form-group row"><label for="bateau'+i+'" class="col-sm-2">bateau '+i+'</label><div class="col-sm-10"><input type="text" name="bateau'+i+'" id="bateau'+i+'"></div></div>');
                $("#bateau"+i).val(infoBateauBak[i])
            }

            $("#nbbak").val(nb);
        })        

        $("#addButton2").click(function(){    
          
            if ($("#nbBateau").val() > 0){

                const nb = $("#nbBateau").val();
                let bateau = [];

                for(i=0; i<nb; i++){
                    bateau[i] = $("#bateau"+i).val();
                }          

                let data = {"sexe" : $('input[name=sexe]:checked').val(), "name" : $("#name").val(), "name_jf" : $("#name_jf").val(), "firstname" : $("#firstname").val(), 
                            "age" : $("#age").val(), "codepostal" : $("#codepostal").val() , "ville" : $("#ville").val(), "nbbateau" : nb, "TailleBateau" : bateau };

                
                //data.interet = ($("#interet").val());

                data.interets = [];
                $("#interet").val().forEach( interet => {                    
                    data.interets.push(interet.toUpperCase());                
                });

                console.log(data);
            }
        })
    });