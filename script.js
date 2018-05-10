"use strict"

$(document).ready(() => {
  // put all of the variables here
    let total_budget ;  
    let expense_name ;
    let expense_amount;
    let defaultClass ="";
    let bgc = "";
    let wbi = "";
    let clickedDude ="";

    //expand card function
      $("main").on("click", ".card_header", function(e) {
        //  when the cards get default this stuff happens
        //grab the parent element of the header clicked, which will be the card we are selecting
        clickedDude = $(this).parent()[0];
        if($(clickedDude).hasClass("card_bills")){
         defaultClass= "card_bills"; 
         bgc = "#EA5200";
        } else if ($(clickedDude).hasClass("card_food")){
          defaultClass = "card_food";
          bgc = "#EA175D";
        } else if ($(clickedDude).hasClass("card_clothes")){
            defaultClass = "card_clothes";
            bgc = "#071738"
        } else if ($(clickedDude).hasClass("card_entertain")){
          defaultClass = "card_entertain";
          bgc = "#EA5200";
        } else if ($(clickedDude).hasClass("card_summary")){
          defaultClass = "card_summary"
          bgc = "white";
        }

        $(clickedDude).addClass("card_expand").removeClass(defaultClass);
        $(clickedDude).css("background-color", `${bgc}`)
        //adding a class to header so that we can target it for clicking to collapse without the event firing when you click anywhere on the card
        $(this).addClass("card_header_expanded");
      
        //TODO: prob move this into the expense logging function
         expense_amount = $("#expense_amount").val();
         expense_name = $("#expense_name").val();
        
      })

    //collapse card function
      .on("click", ".card_header_expanded", function(e) {
          //remove the card_expand class, which will collapse card
        $(clickedDude).addClass(defaultClass).removeClass("card_expand");
        //remove the header class -which had no styles but was used to target the click
        $(this).removeClass("card_header_expanded");
            
      })


     //this closes the "total budget" input 
      .on("click", "#weeklyBudgetSubmit", (e) => {
        wbi = $("#weeklyBudgetInput").val();
      $("#budgetInfo").empty();
       $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your weekly budget is: ${wbi}</p>`);
       $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your remain balance is: ${wbi}</p>`)
      });

      
});