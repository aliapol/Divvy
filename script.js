"use strict"

$(document).ready(() => {
  // put all of the variables here
    let total_budget ;  
    let expense_name ;
    let expense_amount;
    let defaultClass ="";
  
      $("main").on("click", ".card", function(e) {
        //  when the cards get default this stuff happens
        
        if($(this).hasClass("card_bills")){
         defaultClass= "card_bills"; 
        } else if ($(this).hasClass("card_food")){
          defaultClass = "card_food";
        } else if ($(this).hasClass("card_clothes")){
            defaultClass = "card_clothes";
        } else if ($(this).hasClass("card_spending")){
          defaultClass = "card_clothes";
        }    
        console.log(defaultClass);
        $(this).addClass(".card_expand").removeClass(defaultClass);
        // expense_amount = $("#expense_amount").val();
        // expense_name = $("#expense_name").val();
        
          
          // when the button is clicked the clicked element adds the reserved class and removes the available class
          // then 
          // button.click(() => {
          //     $(e.target).removeClass(".card_expand");
          // });
      })

      // when the aarow on the card is clicked the card will take up the whole screen to view.
      .on("click", ".card_button", (e) => {
          $(e.target).addClass(".card_expand");
          
        // when the button is clicked the clicked element adds the reserved class and removes the available class
          // then   
          button.click(() => {
            $(e.target).removeClass(".card_expand");
        });
      })
      // when the card on the summary page is clicked another div will appear that has an input for entering total budget
      .on("click", "#total_view", (e) => {
        $("#total_input").show(); 
        
      })
     //this closes the "total budget" input 
      .on("click", "#total_submit", (e) => {
        $("#total_input").hide();
        
      })

});