let utilisateurs = [];

function editUser(num){
    console.log("Edition de la ligne" + num );

    $("#name").val(utilisateurs[num].nom);
    $("#firstname").val(utilisateurs[num].prenom);
    $("#age").val(utilisateurs[num].age);

    $("#index").val(num);

    //$("#addButton").

}


    $(document).ready(function(){

    //Code à executer quand la page a été totalement dessinée

    let Vincent = {"nom" : "Peralta", "prenom" : "Vincent", "age" : 38};
    let Olivia = {"nom" : "Peralta", "prenom" : "Olivia", "age" : 6};
    
    utilisateurs.push(Vincent);
    utilisateurs.push(Olivia);


    function dessinTableau(utilisateurs){
        let tbody = $("tbody");    
        tbody.empty();
    
        for( let i=0; i<utilisateurs.length; i++){
        tbody.append("<tr><td>"+utilisateurs[i].nom+"</td><td>"+utilisateurs[i].prenom+"</td><td>"+utilisateurs[i].age+"</td><td><button type='button'><i class='material-icons' Onclick='editUser("+i+");'>border_color</i></button></td></tr>");    
        }
    }    

    dessinTableau(utilisateurs);

    // let tbody = document.queryselector("tbody");
    let tbody = $("tbody");
    console.log(tbody.val());

    let name = $("#name");
    console.log(name.val());

    //name.val("oko");

    //$("table").hide();
    //$(".impair").addClass("rouge");

    //$("tbody tr:nth-child(2n)").addClass("rouge");                  // ligne paire
    //$("tbody tr:nth-child(2n+1)").addClass("sousligne");            // ligne impair

    //$("thead").addClass("cache");
    //$("thead").removeClass("cache");

    $("#purgeHeader").click(function(){
        //Si thead est visible le cacher sinon l'afficher

        if ($("thead").hasClass("cache")){
            $("thead").removeClass("cache");
        } else {
            $("thead").addClass("cache");
        }
    })

    $("#purgeFirst").click(function(){
        $("tbody tr:first-child").remove();
    })

    $("#purgetbody").click(function(){
        //$("tbody").remove();
        $("tbody").empty();
    })    

    //$("tbody").append("<tr><td>aa</td><td>aa</td><td>aa</td></tr>")           // Ajout à la fin
    //$("tbody").prepend("<tr><td>aa</td><td>aa</td><td>aa</td></tr>")            // Ajout au début

    $("#addButton").click(function(){

        newUser = {};
        newUser.nom = $("#name").val();
        newUser.prenom = $("#firstname").val();
        newUser.age = $("#age").val();
        
        //newUser.name = $("#name").val();

        if ($("#index").val() == -1) {
            console.log("ajout");
            utilisateurs.push(newUser);

            resetForm();            

        } else {

            const index = $("#index").val();

            utilisateurs[index].nom = $("#name").val();
            utilisateurs[index].prenom = $("#firstname").val();
            utilisateurs[index].age = $("#age").val();

            console.log("edition");

            resetForm();
        }

        dessinTableau(utilisateurs);

        //$("tbody").append("<tr><td>"+$("#name").val()+"</td><td>"+$("#firstname").val()+"</td><td>"+$("#age").val()+"</td></tr>")
    })        

    function resetForm(){
        $("#name").val("");
        $("#firstname").val("");
        $("#age").val("");

        $("#index").val("-1");
    }

    $("#ModifyButton").click(function(){

        const index = $("#index").val();

        utilisateurs[index].nom = $("#name").val();
        utilisateurs[index].prenom = $("#firstname").val();
        utilisateurs[index].age = $("#age").val();

        

        dessinTableau(utilisateurs);

    })        

});



    
    

