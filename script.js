"use strict"

$(document).ready(() => {
  // put all of the variables here
    let total_budget ;  
    let expense_name ;
    let expense_amount;
    let defaultClass ="";
    let bgc = "";
    let wbi = 0;
    let clickedDude ="";
    let spentBills = 0;
    let spentFood = 0;
    let spentClothes = 0;
    let spentEntertain = 0;
    let totalSpent = 0;
    let windowWidth; 
  
  

    //expand card function
      $("main").on("click", ".card_header", function(e) {
        //  when the cards get default this stuff happens
        //grab the parent element of the header clicked, which will be the card we are selecting
        // wrapping click function to only work when window is in phone view
        if(windowWidth < 768) {
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
      
        // initally set the values for the expense name and amount
         expense_amount = $("#expense_amount").val();
         expense_name = $("#expense_name").val();
      } 
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
       $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your total spent this week is: $${totalSpent}</p>`);
       $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your remain balance is: $${wbi}</p>`);
      })

    

      .on("click", ".expenseAddEntertain", function(){
        // grab variable values from entertain account
        let name = $(".expense_Name_entertain").val();
        let amount = Number($(".expense_Amount_entertain").val());
        // append values to expense log
        $(".expenseLog_entertain").prepend(`<div class="logWrapper animated bounceInDown"><p>${name}</p><p>${amount}</p></div>`);
        
        // clear variable values
        $(".expense_Name_entertain").val("");
        $(".expense_Amount_entertain").val("");
        
        
        // deduct the amount from the total
        wbi -= amount;
        // total amount spent in category
        spentEntertain += amount;
        // total amount spent overall
        totalSpent += amount;
        
        if (wbi <= 0){
          alert("Ya broke");
        };

  
        // update DOM to show how much they have spent
        $("#totalSpent_entertain").text(spentEntertain);
        //Empty out budget info container and prepend the total spent and remaining balance info
        $("#budgetInfo").empty();
        $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your total spent this week is: $${totalSpent}</p>`);
        $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your remaining balance is: $${wbi}</p>`);
      })


      .on("click", ".expenseAddBills", function(){
        // grab variable values from bills account
        let name = $(".expense_Name_bills").val();
        let amount = Number($(".expense_Amount_bills").val());
        
        // append values to expense log
        $(".expenseLog_bills").prepend(`<div class="logWrapper animated bounceInDown"><p>${name}</p><p>${amount}</p></div>`);
        
        // clear variable values
        $(".expense_Name_bills").val("");
        $(".expense_Amount_bills").val("");
        
        
        // deduct the amount from the total
        wbi -= amount;
        //total amount spent in category
        spentBills += amount;
        // total amount spent overall
        totalSpent += amount;
        
        if (wbi <= 0){
          alert("Ya broke");
        };
  
        // update DOM to show how much they have spent
        $("#totalSpent_bills").text(spentBills);
        $(".weeklyBudgetDisplay").text(`Your remaining budget: ${wbi}`);
        //Empty out budget info container and prepend the total spent and remaining balance info
        $("#budgetInfo").empty();
        $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your total spent this week is: $${totalSpent}</p>`);
        $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your remaining balance is: $${wbi}</p>`);

      })

      .on("click", ".expenseAddFood", function(){
        // grab variable values from bills account
        let name = $(".expense_Name_food").val();
        let amount = Number($(".expense_Amount_food").val());
        
        // append values to expense log
        $(".expenseLog_food").prepend(`<div class="logWrapper animated bounceInDown"><p>${name}</p><p>${amount}</p></div>`);
        
        // clear variable values
        $(".expense_Name_food").val("");
        $(".expense_Amount_food").val("");
        
        
        // deduct the amount from the total
        wbi -= amount;
        //total amount spent in category
        spentFood += amount;
        // total amount spent overall
        totalSpent += amount;
        
        if (wbi <= 0){
          alert("Ya broke");
        };
  
        // update DOM to show how much they have spent
        $("#totalSpent_food").text(spentFood);
        $(".weeklyBudgetDisplay").text(`Your remaining budget: ${wbi}`);
        //Empty out budget info container and prepend the total spent and remaining balance info
        $("#budgetInfo").empty();
        $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your total spent this week is: $${totalSpent}</p>`);
        $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your remaining balance is: $${wbi}</p>`);
      })

      .on("click", ".expenseAddClothes", function(){
        // grab variable values from bills account
        let name = $(".expense_Name_clothes").val();
        let amount = Number($(".expense_Amount_clothes").val());
        
        // append values to expense log
        $(".expenseLog_clothes").prepend(`<div class="logWrapper animated bounceInDown"><p>${name}</p><p>${amount}</p></div>`);
        
        // clear variable values
        $(".expense_Name_clothes").val("");
        $(".expense_Amount_clothes").val("");
        
        
        // deduct the amount from the total
        wbi -= amount;
        //total amount spent in category
        spentClothes += amount;
        // total amount spent overall
        totalSpent += amount;
      
        if (wbi <= 0){
          alert("Ya broke");
        };

  
        // update DOM to show how much they have spent
        $("#totalSpent_clothes").text(spentClothes);
        $(".weeklyBudgetDisplay").text(`Your remaining budget: ${wbi}`);
        //Empty out budget info container and prepend the total spent and remaining balance info
        $("#budgetInfo").empty();
        $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your total spent this week is: $${totalSpent}</p>`);
        $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your remaining balance is: $${wbi}</p>`);
      });
        
        // finding an setting the window width size
        $(window).resize(function() {
          windowWidth = $(window).width();
          console.log(windowWidth);
        })
      
      
});