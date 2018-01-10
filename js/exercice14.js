

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
            
            console.log("change");            

            const value = $("#codepostal").val();

            console.log(value);            
            console.log(value.length)

            if (value.length<5){
                $("#alertCodePostal").text("Trop court");
                $("#alertTooLong").removeClass("cache");


            } else if (value.length>5) {
                $("#alertCodePostal").text("Trop long");
                $("#alertTooLong").removeClass("cache");
            } else {
                $("#alertCodePostal").text("");
                $("#alertTooLong").addClass("cache");
            }

            
        })
        


    });