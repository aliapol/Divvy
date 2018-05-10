"use strict"

$(document).ready(() => {
  // put all of the variables here
    let total_budget ;  
    let expense_name ;
    let expense_amount;
    
  
      $(document).on("click", ".card", (e) => {
        //  when the cards get clicked this stuff happens
        $(e.target).addClass(".card_expand");
        expense_amount = $("#expense_amount").val();
        expense_name = $("#expense_name").val();
        
          
          // when the button is clicked the clicked element adds the reserved class and removes the available class
          // then 
          button.click(() => {
              $(e.target).removeClass(".card_expand");
          });
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