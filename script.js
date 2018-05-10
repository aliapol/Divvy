"use strict"

$(document).ready(() => {
  // put all of the variables here
    let total_budget ;  
    let expense_name ;
    let expense_amount;
    let defaultClass ="";
    let bgc = "";
    let wbi = "";
  
      $("main").on("click", ".card_header", function(e) {
        //  when the cards get default this stuff happens
        
        if($(this).hasClass("card_bills")){
         defaultClass= "card_bills"; 
         bgc = "#EA5200";
        } else if ($(this).hasClass("card_food")){
          defaultClass = "card_food";
          bgc = "#EA175D";
        } else if ($(this).hasClass("card_clothes")){
            defaultClass = "card_clothes";
            bgc = "#071738"
        } else if ($(this).hasClass("card_entertain")){
          defaultClass = "card_entertain";
          bgc = "#EA5200";
        }    

        $(this).addClass("card_expand").removeClass(defaultClass);
        $(this).css("background-color", `${bgc}`)
         expense_amount = $("#expense_amount").val();
         expense_name = $("#expense_name").val();
        
          
          // when the button is clicked the clicked element adds the reserved class and removes the available class
          // then 
          // button.click(() => {
          //     $(e.target).removeClass(".card_expand");
          // });
      })

      // when the aarow on the card is clicked the card will take up the whole screen to view.
      .on("click", ".card_expand", function(e) {
          $(this).addClass(defaultClass).removeClass("card_expand");
          
          
        // when the button is clicked the clicked element adds the reserved class and removes the available class
          // then   
          // button.click(() => {
          //   $(e.target).removeClass(".card_expand");
        // });
      })
      // when the card on the summary page is clicked another div will appear that has an input for entering total budget
      .on("click", "#total_view", (e) => {
        $("#total_input").show(); 
        
      })
     //this closes the "total budget" input 
      .on("click", "#weeklyBudgetSubmit", (e) => {
        wbi = $("#weeklyBudgetInput").val();
       $(".weeklyBudgetDisplay").append(`<p>Your total budget is: ${wbi}</p>`);
      });




});