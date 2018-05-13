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
  let windowWidth = $(window).width(); 
  $("#totalSpent_entertain").text(spentEntertain);
  $("#totalSpent_clothes").text(spentClothes);
  $("#totalSpent_food").text(spentFood);
  $("#totalSpent_bills").text(spentBills);
  
    //expand card function
      $("main").on("click", ".card_header", function(e) {
        //  when the cards get default this stuff happens
        //grab the parent element of the header clicked, which will be the card we are selecting
        // wrapping click function to only work when window is in phone view
        if(windowWidth < 920) {
          $("#click")[0].play();
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
        $("#click")[0].play();
          //remove the card_expand class, which will collapse card
        $(clickedDude).addClass(defaultClass).removeClass("card_expand");
        //remove the header class -which had no styles but was used to target the click
        $(this).removeClass("card_header_expanded");
            
      })

    

      //setting weekly budget
      .on("click", "#weeklyBudgetSubmit", (e) => {
        $("#swipe")[0].play();
        wbi = $("#weeklyBudgetInput").val();
      $("#budgetInfo").empty();
       $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay animated slideInLeft">Your total spent this week is: $${parseFloat(totalSpent).toFixed(2)}</p>`);
       $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay animated slideInRight">Your remaining balance is: $${parseFloat(wbi).toFixed(2)}</p>`);
      })

    

      .on("click", ".expenseAddEntertain", function(){
        $("#casino")[0].play();
        // grab variable values from entertain account
        let name = $(".expense_Name_entertain").val();
        let amount = Number($(".expense_Amount_entertain").val());
        // append values to expense log
        $(".expenseLog_entertain").prepend(`<div class="logWrapper animated bounceInDown"><p>${name}</p><p>$${parseFloat(amount).toFixed(2)}</p></div>`);
        
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
          $("#gameover")[0].play();
          $("#yaBroke").css("display", "flex");
          $("#yaBrokeFlash").css("display", "flex");
         
          ;
          // $("#gameover").currentTime = 0;//reweind to the start
         $("#gameover")[0].play();
        };

  
        // update DOM to show how much they have spent
        $("#totalSpent_entertain").text(spentEntertain);
        //Empty out budget info container and prepend the total spent and remaining balance info
        
        if (wbi <0) {
          $("#budgetInfo").empty();
          $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay animated slideInLeft">Your total spent this week is: $${parseFloat(totalSpent).toFixed(2)}</p>`);
          $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay animated slideInRight">You're over your budget by: $${parseFloat(Math.abs(wbi)).toFixed(2)}</p>`);
        } else if (wbi >= 0) {
        $("#budgetInfo").empty();
          $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your total spent this week is: $${parseFloat(totalSpent).toFixed(2)}</p>`);
          $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your remaining balance is: $${parseFloat(wbi).toFixed(2)}</p>`);
        }
      })


      .on("click", ".expenseAddBills", function(){
        $("#casino")[0].play();
        // grab variable values from bills account
        let name = $(".expense_Name_bills").val();
        let amount = Number($(".expense_Amount_bills").val());
        
        // append values to expense log
        $(".expenseLog_bills").prepend(`<div class="logWrapper animated bounceInDown"><p>${name}</p><p>$${parseFloat(amount).toFixed(2)}</p></div>`);
        
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
          $("#gameover")[0].play();
          $("#yaBroke").show();
          $("#yaBrokeFlash").css("display", "flex");
        };
  
        // update DOM to show how much they have spent
        $("#totalSpent_bills").text(spentBills);
        $(".weeklyBudgetDisplay").text(`Your remaining budget: ${parseFloat(wbi).toFixed(2)}`);
        //Empty out budget info container and prepend the total spent and remaining balance info
        if (wbi <0) {
          $("#budgetInfo").empty();
          $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay animated slideInLeft">Your total spent this week is: $${parseFloat(totalSpent).toFixed(2)}</p>`);
          $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay animated slideInRight">You're over your budget by: $${parseFloat(Math.abs(wbi)).toFixed(2)}</p>`);
        } else if (wbi >= 0) {
        $("#budgetInfo").empty();
          $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your total spent this week is: $${parseFloat(totalSpent).toFixed(2)}</p>`);
          $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your remaining balance is: $${parseFloat(wbi).toFixed(2)}</p>`);
        }

      })

      .on("click", ".expenseAddFood", function(){
        $("#casino")[0].play();
        // grab variable values from bills account
        let name = $(".expense_Name_food").val();
        let amount = Number($(".expense_Amount_food").val());
        
        // append values to expense log
        $(".expenseLog_food").prepend(`<div class="logWrapper animated bounceInDown"><p>${name}</p><p>$${parseFloat(amount).toFixed(2)}</p></div>`);
        
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
          $("#gameover")[0].play();
          $("#yaBroke").show();
          $("#yaBrokeFlash").css("display", "flex");
        };
  
        // update DOM to show how much they have spent
        $("#totalSpent_food").text(spentFood);
        $(".weeklyBudgetDisplay").text(`Your remaining budget: ${parseFloat(wbi).toFixed(2)}`);
        //Empty out budget info container and prepend the total spent and remaining balance info
        if (wbi <0) {
          $("#budgetInfo").empty();
          $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay animated slideInLeft">Your total spent this week is: $${parseFloat(totalSpent).toFixed(2)}</p>`);
          $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay animated slideInRight">You're over your budget by: $${parseFloat(Math.abs(wbi)).toFixed(2)}</p>`);
        } else if (wbi >= 0) {
        $("#budgetInfo").empty();
          $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your total spent this week is: $${parseFloat(totalSpent).toFixed(2)}</p>`);
          $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your remaining balance is: $${parseFloat(wbi).toFixed(2)}</p>`);
        }
      })

      .on("click", ".expenseAddClothes", function(){
        $("#casino")[0].play();
        // grab variable values from bills account
        let name = $(".expense_Name_clothes").val();
        let amount = Number($(".expense_Amount_clothes").val());
        
        // append values to expense log
        $(".expenseLog_clothes").prepend(`<div class="logWrapper animated bounceInDown"><p>${name}</p><p>$${parseFloat(amount).toFixed(2)}</p></div>`);
        
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
          $("#gameover")[0].play();
          $("#yaBroke").show();
          $("#yaBrokeFlash").css("display", "flex");
        };

  
        // update DOM to show how much they have spent
        $("#totalSpent_clothes").text(spentClothes);
        $(".weeklyBudgetDisplay").text(`Your remaining budget: ${parseFloat(wbi).toFixed(2)}`);
        //Empty out budget info container and prepend the total spent and remaining balance info
        if (wbi <0) {
          $("#budgetInfo").empty();
          $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay animated slideInLeft">Your total spent this week is: $${parseFloat(totalSpent).toFixed(2)}</p>`);
          $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay animated slideInRight">You're over your budget by: $${parseFloat(Math.abs(wbi)).toFixed(2)}</p>`);
        } else if (wbi >= 0) {
        $("#budgetInfo").empty();
          $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your total spent this week is: $${parseFloat(totalSpent).toFixed(2)}</p>`);
          $("#budgetInfo").prepend(`<p class="weeklyBudgetDisplay">Your remaining balance is: $${parseFloat(wbi).toFixed(2)}</p>`);
        }
      })

      .on("click", "#yaBroke_close", function() {
        console.log("button is working");
        
        $("#click")[0].play();
        $("#yaBroke").hide();
        $("#yaBrokeFlash").css("display", "none");
      });
        

     
        // finding an setting the window width size
        $(window).resize(function() {
          windowWidth = $(window).width();
          console.log(windowWidth);
        });

        //force card to collapse if screen is resized past 768px
        $(window).resize(function() {
          windowWidth = $(window).width();
          if(windowWidth >920){
            $(clickedDude).addClass(defaultClass).removeClass("card_expand");
            //remove the header class -which had no styles but was used to target the click
            $(this).removeClass("card_header_expanded");
          }
        });
      
      
     


});