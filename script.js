"use strict"

$(document).ready(() => {
  // put all of the variables here
    let total_budget ;  
    let expense_name ;
    let expense_amount;
    let defaultClass ="";
    let bgc = "";
    let wbi = "";
    let clickedDude = "";
  
      $("main").on("click", ".card_header", function(e) {
        //  when the cards get default this stuff happens
        //grab the parent element of the header clicked, which will be the card we are selecting
        clickedDude = $(this).parent()[0];
        console.log(clickedDude);
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
         expense_amount = $("#expense_amount").val();
         expense_name = $("#expense_name").val();
        
          
          // when the button is clicked the clicked element adds the reserved class and removes the available class
          // then 
          // button.click(() => {
          //     $(e.target).removeClass(".card_expand");
          // });
      })

      // when the aarow on the card is clicked the card will take up the whole screen to view.
      .on("click", ".card_header", function(e) {
        clickedDude = $(this).parent()[0];
        $(clickedDude).addClass(defaultClass).removeClass("card_expand");
          
          
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
          $("#budgetInfo").empty();
          $("#budgetInfo").prepend(`<p class="weeklyBudget">Your weekly budget is: ${wbi}</p>`);
          $("#budgetInfo").prepend(`<p class="remainingBalance">Your remaining balance is: ${wbi}</p>`);
      });




      
});