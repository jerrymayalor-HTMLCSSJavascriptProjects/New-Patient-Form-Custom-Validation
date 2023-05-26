// var x = 0;
     jQuery(function() { 
               
          //============================================================================================
     
          jQuery('#input_40_926').change(function()  {
               // Get the entered date of birth as a Date object
               var dob = new Date(jQuery(this).val());
               
               // Get the current date as a Date object
               var today = new Date();
               
               // Calculate the age difference in milliseconds
               var diff = today.getTime() - dob.getTime();
               
               // Convert the age difference from milliseconds to years
               var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
               
               // Update the age input field with the calculated age
               console.log(age);
     
               jQuery('#input_40_925').val(age);
               
               if( age >= 16 ){
                    jQuery('#field_40_52').css("display", "block");
                    jQuery('#field_40_273').css("display", "none");
                    jQuery('input[name="input_52').removeAttr('disabled');
     
                    jQuery('#gform_save_40_footer_link').show();
     
               }
               else{
     
                    jQuery('#field_40_273').css("display", "block");
                    jQuery('#field_40_52').css("display", "none");
     
                    jQuery('#gform_save_40_footer_link').hide();
               }
          });
     
     
          //============================================================================================
          // Testings
          jQuery('.resume_form_link').text('OK');
          
          //============================================================================================
          // Family Psychiatric History
          // 1
          jQuery('#input_40_728').change(function() {
               // 1
               var relationship_1 = jQuery('#input_40_728');
               // 2
               var relationship_2 = jQuery('#input_40_735');
               // 3
               var relationship_3 = jQuery('#input_40_936');
               // 4
               var relationship_4 = jQuery('#input_40_949');
               // 5
               var relationship_5 =jQuery('#input_40_955');
               // 6
               var relationship_6 =jQuery('#input_40_961');
               // 7
               var relationship_7 =jQuery('#input_40_1051');
               // 8
               var relationship_8 =jQuery('#input_40_1057');
               // 9
               var relationship_9 =jQuery('#input_40_1063');
               // 10
               var relationship_10 =jQuery('#input_40_1072');
          
               var selectedValue1 = relationship_1.val();
          
               console.log("Your have choosen : " + selectedValue1);
               
               //jQuery(this).attr('disabled', 'disabled');
               switch(selectedValue1) {
          
                    case 'Father':
          
                         var removed_relationship_2 = relationship_2.find('option[value="Father"]');
                         removed_relationship_2.remove();
                         
                         var removed_relationship_3 = relationship_3.find('option[value="Father"]');
                         removed_relationship_3.remove();
                         
                         var removed_relationship_4 = relationship_4.find('option[value="Father"]');
                         removed_relationship_4.remove();
                         
                         var removed_relationship_5 = relationship_5.find('option[value="Father"]');
                         removed_relationship_5.remove();
                         
                         var removed_relationship_6 = relationship_6.find('option[value="Father"]');
                         removed_relationship_6.remove();
                         
                         var removed_relationship_7 = relationship_7.find('option[value="Father"]');
                         removed_relationship_7.remove();
                         
                         var removed_relationship_8 = relationship_8.find('option[value="Father"]');
                         removed_relationship_8.remove();
                         
                         var removed_relationship_9 = relationship_9.find('option[value="Father"]');
                         removed_relationship_9.remove();
                         
                         var removed_relationship_10 = relationship_10.find('option[value="Father"]');
                         removed_relationship_10.remove();
                         
                         break;
          
                    case 'Mother':
          
                         var removed_relationship_2 = relationship_2.find('option[value="Mother"]');
                         removed_relationship_2.remove();
                         
                         var removed_relationship_3 = relationship_3.find('option[value="Mother"]');
                         removed_relationship_3.remove();
                         
                         var removed_relationship_4 = relationship_4.find('option[value="Mother"]');
                         removed_relationship_4.remove();
                         
                         var removed_relationship_5 = relationship_5.find('option[value="Mother"]');
                         removed_relationship_5.remove();
                         
                         var removed_relationship_6 = relationship_6.find('option[value="Mother"]');
                         removed_relationship_6.remove();
                         
                         var removed_relationship_7 = relationship_7.find('option[value="Mother"]');
                         removed_relationship_7.remove();
                         
                         var removed_relationship_8 = relationship_8.find('option[value="Mother"]');
                         removed_relationship_8.remove();
                         
                         var removed_relationship_9 = relationship_9.find('option[value="Mother"]');
                         removed_relationship_9.remove();
                         
                         var removed_relationship_10 = relationship_10.find('option[value="Mother"]');
                         removed_relationship_10.remove();
                         
                         break;
          
                    default:
                         break;
               }        
          });
          
          
          // 2
          jQuery('#input_40_735').change(function() {
               // 2
               var relationship_2 = jQuery('#input_40_735');
               // 3
               var relationship_3 = jQuery('#input_40_936');
               // 4
               var relationship_4 = jQuery('#input_40_949');
               // 5
               var relationship_5 =jQuery('#input_40_955');
               // 6
               var relationship_6 =jQuery('#input_40_961');
               // 7
               var relationship_7 =jQuery('#input_40_1051');
               // 8
               var relationship_8 =jQuery('#input_40_1057');
               // 9
               var relationship_9 =jQuery('#input_40_1063');
               // 10
               var relationship_10 =jQuery('#input_40_1072');
          
               var selectedValue2 = relationship_2.val();
               //jQuery(this).attr('disabled', 'disabled');
               switch(selectedValue2) {
          
                    case 'Father':
                         
                         var removed_relationship_3 = relationship_3.find('option[value="Father"]');
                         removed_relationship_3.remove();
                         
                         var removed_relationship_4 = relationship_4.find('option[value="Father"]');
                         removed_relationship_4.remove();
                         
                         var removed_relationship_5 = relationship_5.find('option[value="Father"]');
                         removed_relationship_5.remove();
                         
                         var removed_relationship_6 = relationship_6.find('option[value="Father"]');
                         removed_relationship_6.remove();
                         
                         var removed_relationship_7 = relationship_7.find('option[value="Father"]');
                         removed_relationship_7.remove();
                         
                         var removed_relationship_8 = relationship_8.find('option[value="Father"]');
                         removed_relationship_8.remove();
                         
                         var removed_relationship_9 = relationship_9.find('option[value="Father"]');
                         removed_relationship_9.remove();
                         
                         var removed_relationship_10 = relationship_10.find('option[value="Father"]');
                         removed_relationship_10.remove();
                         
                         break;
          
                    case 'Mother':
          
                         var removed_relationship_3 = relationship_3.find('option[value="Mother"]');
                         removed_relationship_3.remove();
                         
                         var removed_relationship_4 = relationship_4.find('option[value="Mother"]');
                         removed_relationship_4.remove();
                         
                         var removed_relationship_5 = relationship_5.find('option[value="Mother"]');
                         removed_relationship_5.remove();
                         
                         var removed_relationship_6 = relationship_6.find('option[value="Mother"]');
                         removed_relationship_6.remove();
                         
                         var removed_relationship_7 = relationship_7.find('option[value="Mother"]');
                         removed_relationship_7.remove();
                         
                         var removed_relationship_8 = relationship_8.find('option[value="Mother"]');
                         removed_relationship_8.remove();
                         
                         var removed_relationship_9 = relationship_9.find('option[value="Mother"]');
                         removed_relationship_9.remove();
                         
                         var removed_relationship_10 = relationship_10.find('option[value="Mother"]');
                         removed_relationship_10.remove();
                    
                         break;
          
                    default:
                         break;
               
               }  
          
          });
          
          // 3
          jQuery('#input_40_936').change(function() {
          
               // 3
               var relationship_3 = jQuery('#input_40_936');
               // 4
               var relationship_4 = jQuery('#input_40_949');
               // 5
               var relationship_5 =jQuery('#input_40_955');
               // 6
               var relationship_6 =jQuery('#input_40_961');
               // 7
               var relationship_7 =jQuery('#input_40_1051');
               // 8
               var relationship_8 =jQuery('#input_40_1057');
               // 9
               var relationship_9 =jQuery('#input_40_1063');
               // 10
               var relationship_10 =jQuery('#input_40_1072');
          
               var selectedValue3 = relationship_3.val();
               //jQuery(this).attr('disabled', 'disabled');
               switch(selectedValue3) {
          
                    case 'Father':
                         
                         var removed_relationship_4 = relationship_4.find('option[value="Father"]');
                         removed_relationship_4.remove();
                         
                         var removed_relationship_5 = relationship_5.find('option[value="Father"]');
                         removed_relationship_5.remove();
                         
                         var removed_relationship_6 = relationship_6.find('option[value="Father"]');
                         removed_relationship_6.remove();
                         
                         var removed_relationship_7 = relationship_7.find('option[value="Father"]');
                         removed_relationship_7.remove();
                         
                         var removed_relationship_8 = relationship_8.find('option[value="Father"]');
                         removed_relationship_8.remove();
                         
                         var removed_relationship_9 = relationship_9.find('option[value="Father"]');
                         removed_relationship_9.remove();
                         
                         var removed_relationship_10 = relationship_10.find('option[value="Father"]');
                         removed_relationship_10.remove();
                         
                         break;
          
                    case 'Mother':
                         
                         var removed_relationship_4 = relationship_4.find('option[value="Mother"]');
                         removed_relationship_4.remove();
                         
                         var removed_relationship_5 = relationship_5.find('option[value="Mother"]');
                         removed_relationship_5.remove();
                         
                         var removed_relationship_6 = relationship_6.find('option[value="Mother"]');
                         removed_relationship_6.remove();
                         
                         var removed_relationship_7 = relationship_7.find('option[value="Mother"]');
                         removed_relationship_7.remove();
                         
                         var removed_relationship_8 = relationship_8.find('option[value="Mother"]');
                         removed_relationship_8.remove();
                         
                         var removed_relationship_9 = relationship_9.find('option[value="Mother"]');
                         removed_relationship_9.remove();
                         
                         var removed_relationship_10 = relationship_10.find('option[value="Mother"]');
                         removed_relationship_10.remove();
                    
                         break;
          
                    default:
                         break;
               
               }  
          
          });
          
          // 4
          jQuery('#input_40_949').change(function() {
          
               // 4
               var relationship_4 = jQuery('#input_40_949');
               // 5
               var relationship_5 =jQuery('#input_40_955');
               // 6
               var relationship_6 =jQuery('#input_40_961');
               // 7
               var relationship_7 =jQuery('#input_40_1051');
               // 8
               var relationship_8 =jQuery('#input_40_1057');
               // 9
               var relationship_9 =jQuery('#input_40_1063');
               // 10
               var relationship_10 =jQuery('#input_40_1072');
          
               var selectedValue4 = relationship_4.val();
               //jQuery(this).attr('disabled', 'disabled');
               switch(selectedValue4) {
          
                    case 'Father':
                         
                         var removed_relationship_5 = relationship_5.find('option[value="Father"]');
                         removed_relationship_5.remove();
                         
                         var removed_relationship_6 = relationship_6.find('option[value="Father"]');
                         removed_relationship_6.remove();
                         
                         var removed_relationship_7 = relationship_7.find('option[value="Father"]');
                         removed_relationship_7.remove();
                         
                         var removed_relationship_8 = relationship_8.find('option[value="Father"]');
                         removed_relationship_8.remove();
                         
                         var removed_relationship_9 = relationship_9.find('option[value="Father"]');
                         removed_relationship_9.remove();
                         
                         var removed_relationship_10 = relationship_10.find('option[value="Father"]');
                         removed_relationship_10.remove();
                         
                         break;
          
                    case 'Mother':
                         
                         var removed_relationship_5 = relationship_5.find('option[value="Mother"]');
                         removed_relationship_5.remove();
                         
                         var removed_relationship_6 = relationship_6.find('option[value="Mother"]');
                         removed_relationship_6.remove();
                         
                         var removed_relationship_7 = relationship_7.find('option[value="Mother"]');
                         removed_relationship_7.remove();
                         
                         var removed_relationship_8 = relationship_8.find('option[value="Mother"]');
                         removed_relationship_8.remove();
                         
                         var removed_relationship_9 = relationship_9.find('option[value="Mother"]');
                         removed_relationship_9.remove();
                         
                         var removed_relationship_10 = relationship_10.find('option[value="Mother"]');
                         removed_relationship_10.remove();
                    
                         break;
          
                    default:
                         break;
          
               }  
          });
          
          // 5
          jQuery('#input_40_955').change(function() {
          
               // 5
               var relationship_5 =jQuery('#input_40_955');
               // 6
               var relationship_6 =jQuery('#input_40_961');
               // 7
               var relationship_7 =jQuery('#input_40_1051');
               // 8
               var relationship_8 =jQuery('#input_40_1057');
               // 9
               var relationship_9 =jQuery('#input_40_1063');
               // 10
               var relationship_10 =jQuery('#input_40_1072');
          
               var selectedValue5 = relationship_5.val();
               //jQuery(this).attr('disabled', 'disabled');
               switch(selectedValue5) {
          
                    case 'Father':
                         
                         var removed_relationship_6 = relationship_6.find('option[value="Father"]');
                         removed_relationship_6.remove();
                         
                         var removed_relationship_7 = relationship_7.find('option[value="Father"]');
                         removed_relationship_7.remove();
                         
                         var removed_relationship_8 = relationship_8.find('option[value="Father"]');
                         removed_relationship_8.remove();
                         
                         var removed_relationship_9 = relationship_9.find('option[value="Father"]');
                         removed_relationship_9.remove();
                         
                         var removed_relationship_10 = relationship_10.find('option[value="Father"]');
                         removed_relationship_10.remove();
                         
                         break;
          
                    case 'Mother':
               
                         var removed_relationship_6 = relationship_6.find('option[value="Mother"]');
                         removed_relationship_6.remove();
                         
                         var removed_relationship_7 = relationship_7.find('option[value="Mother"]');
                         removed_relationship_7.remove();
                         
                         var removed_relationship_8 = relationship_8.find('option[value="Mother"]');
                         removed_relationship_8.remove();
                         
                         var removed_relationship_9 = relationship_9.find('option[value="Mother"]');
                         removed_relationship_9.remove();
                         
                         var removed_relationship_10 = relationship_10.find('option[value="Mother"]');
                         removed_relationship_10.remove();
                    
                         break;
          
                    default:
                         break;
               }  
          });
          
          // 6
          jQuery('#input_40_961').change(function() {
          
               // 6
               var relationship_6 =jQuery('#input_40_961');
               // 7
               var relationship_7 =jQuery('#input_40_1051');
               // 8
               var relationship_8 =jQuery('#input_40_1057');
               // 9
               var relationship_9 =jQuery('#input_40_1063');
               // 10
               var relationship_10 =jQuery('#input_40_1072');
          
               var selectedValue6 = relationship_6.val();
               //jQuery(this).attr('disabled', 'disabled');
               switch(selectedValue6) {
          
                    case 'Father':
                         
                         var removed_relationship_7 = relationship_7.find('option[value="Father"]');
                         removed_relationship_7.remove();
                         
                         var removed_relationship_8 = relationship_8.find('option[value="Father"]');
                         removed_relationship_8.remove();
                         
                         var removed_relationship_9 = relationship_9.find('option[value="Father"]');
                         removed_relationship_9.remove();
                         
                         var removed_relationship_10 = relationship_10.find('option[value="Father"]');
                         removed_relationship_10.remove();
                         
                         break;
          
                    case 'Mother':
                         
                         var removed_relationship_7 = relationship_7.find('option[value="Mother"]');
                         removed_relationship_7.remove();
                         
                         var removed_relationship_8 = relationship_8.find('option[value="Mother"]');
                         removed_relationship_8.remove();
                         
                         var removed_relationship_9 = relationship_9.find('option[value="Mother"]');
                         removed_relationship_9.remove();
                         
                         var removed_relationship_10 = relationship_10.find('option[value="Mother"]');
                         removed_relationship_10.remove();
                    
                         break;
          
                    default:
                         break;
               }  
          });
          
          // 7
          jQuery('#input_40_961').change(function() {
          
               // 7
               var relationship_7 =jQuery('#input_40_1051');
               // 8
               var relationship_8 =jQuery('#input_40_1057');
               // 9
               var relationship_9 =jQuery('#input_40_1063');
               // 10
               var relationship_10 =jQuery('#input_40_1072');
          
               var selectedValue7 = relationship_7.val();
               //jQuery(this).attr('disabled', 'disabled');
               switch(selectedValue7) {
          
                    case 'Father':
                         
                         var removed_relationship_8 = relationship_8.find('option[value="Father"]');
                         removed_relationship_8.remove();
                         
                         var removed_relationship_9 = relationship_9.find('option[value="Father"]');
                         removed_relationship_9.remove();
                         
                         var removed_relationship_10 = relationship_10.find('option[value="Father"]');
                         removed_relationship_10.remove();
                         
                         break;
          
                    case 'Mother':
                         
                         var removed_relationship_8 = relationship_8.find('option[value="Mother"]');
                         removed_relationship_8.remove();
                         
                         var removed_relationship_9 = relationship_9.find('option[value="Mother"]');
                         removed_relationship_9.remove();
                         
                         var removed_relationship_10 = relationship_10.find('option[value="Mother"]');
                         removed_relationship_10.remove();
                    
                         break;
          
                    default:
                         break;
               }  
          });
          
          // 8
          jQuery('#input_40_1057').change(function() {
          
               // 8
               var relationship_8 =jQuery('#input_40_1057');     
               // 9
               var relationship_9 =jQuery('#input_40_1063');
               // 10
               var relationship_10 =jQuery('#input_40_1072');
          
               var selectedValue8 = relationship_8.val();
               //jQuery(this).attr('disabled', 'disabled');
               switch(selectedValue8) {
          
                    case 'Father':
                         
                         var removed_relationship_9 = relationship_9.find('option[value="Father"]');
                         removed_relationship_9.remove();
                         
                         var removed_relationship_10 = relationship_10.find('option[value="Father"]');
                         removed_relationship_10.remove();
                         
                         break;
          
                    case 'Mother':
                         
                         var removed_relationship_9 = relationship_9.find('option[value="Mother"]');
                         removed_relationship_9.remove();
                         
                         var removed_relationship_10 = relationship_10.find('option[value="Mother"]');
                         removed_relationship_10.remove();
                    
                         break;
          
                    default:
                         break;
               }  
          });
          
          // 9
          jQuery('#input_40_1063').change(function() {
          
               // 9
               var relationship_9 =jQuery('#input_40_1063');
               // 10
               var relationship_10 =jQuery('#input_40_1072');
          
               var selectedValue9 = relationship_9.val();
               //jQuery(this).attr('disabled', 'disabled');
               switch(selectedValue9) {
          
                    case 'Father':
                         
                         var removed_relationship_10 = relationship_10.find('option[value="Father"]');
                         removed_relationship_10.remove();
                         
                         break;
          
                    case 'Mother':
          
                         var removed_relationship_10 = relationship_10.find('option[value="Mother"]');
                         removed_relationship_10.remove();
                    
                         break;
          
                    default:
                         break;
               }  
          });
          
         
          //============================================================================================
          /*   Input field text only
          All Name Fields
          */
          // Patient's Last Name
          jQuery('#input_40_519').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // How Did You Hear About Us / Referred by a provider
          // Name
          jQuery('#input_40_267').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Specialty
          jQuery('#input_40_268').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          //Do you have a Psychotherapist?
          //Name
          jQuery('#input_40_305').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Do you have a Psychologist?
          //Name
          jQuery('#input_40_309').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Appointment Reason Description
          jQuery('#input_40_527').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Other Reason
          jQuery('#input_40_157').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          
          // Quality of Life Enjoyment and Satisfaction Questionnaire – Short Form (Q-LES-Q-SF)
          // In what aspect of your Sexual drive, interest and/or performance?
          jQuery('#input_40_538').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // In what aspect of your Living/housing situation?
          jQuery('#input_40_539').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // In what aspect of your vision in terms of ability to get around physically without feeling dizzy or unsteady or falling?
          jQuery('#input_40_540').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // In what aspect of your vision in terms of ability to do work or hobbies?
          jQuery('#input_40_541').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          
          // Previous Psychiatric Diagnosis
          // Treating Provider 1
          jQuery('#input_40_546').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Other Reason 1
          jQuery('#input_40_1075').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          
          // Treating Provider 2
          jQuery('#input_40_552').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Other Reason 2
          jQuery('#input_40_1077').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Treating Provider 3
          jQuery('#input_40_560').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Other Reason 3
          jQuery('#input_40_1079').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Treating Provider 4
          jQuery('#input_40_566').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Other Reason 4
          jQuery('#input_40_1081').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Treating Provider 5
          jQuery('#input_40_572').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Other Reason 5
          jQuery('#input_40_1083').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Previous Psychiatric Hospitalizations/Rehab
          // Hospital/Rehab Name 1
          jQuery('#input_40_409').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Hospital/Rehab Name 2
          jQuery('#input_40_577').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Hospital/Rehab Name 3
          jQuery('#input_40_583').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Hospital/Rehab Name 4
          jQuery('#input_40_588').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Hospital/Rehab Name 5
          jQuery('#input_40_594').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          
          // Previous Psychiatric/Sleep Medications
          // Medications Name 1
          jQuery('#input_40_412').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Side Effects 1
          jQuery('#input_40_597').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Medications Name 2
          jQuery('#input_40_602').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Side Effects 2
          jQuery('#input_40_614').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Medications Name 3
          jQuery('#input_40_610').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Side Effects 3
          jQuery('#input_40_606').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Medications Name 4
          jQuery('#input_40_618').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Side Effects 4
          jQuery('#input_40_622').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Medications Name 5
          jQuery('#input_40_626').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Side Effects 5
          jQuery('#input_40_630').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Medications Name 6
          jQuery('#input_40_634').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Side Effects 6
          jQuery('#input_40_638').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Medications Name 7
          jQuery('#input_40_642').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Side Effects 7
          jQuery('#input_40_646').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Medication Allergies
          // Name 1
          jQuery('#input_40_655').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Reaction 1
          jQuery('#input_40_659').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Name 2
          jQuery('#input_40_658').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Reaction 2
          jQuery('#input_40_656').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
              
          // Pharmacy
          // Name 1
          jQuery('#input_40_479').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Name 2
          jQuery('#input_40_668').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Medical History - (seizures disorders, diabetes, heart problems etc.)
          // Diagnosis 1
          jQuery('#input_40_672').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Treating Provider 1
          jQuery('#input_40_675').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Diagnosis 2
          jQuery('#input_40_679').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Treating Provider 2
          jQuery('#input_40_681').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Diagnosis 3
          jQuery('#input_40_685').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Treating Provider 3
          jQuery('#input_40_687').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Diagnosis 4
          jQuery('#input_40_691').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Treating Provider 4
          jQuery('#input_40_693').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Diagnosis 5
          jQuery('#input_40_697').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Treating Provider 5
          jQuery('#input_40_699').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Diagnosis 6
          jQuery('#input_40_705').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          // Treating Provider 6
          jQuery('#input_40_707').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Past Surgical History
          // Procedure 1
          jQuery('#input_40_709').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          //Provider Name 1
          jQuery('#input_40_711').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Procedure 2
          jQuery('#input_40_715').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          //Provider Name 2
          jQuery('#input_40_717').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Procedure 3
          jQuery('#input_40_721').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          //Provider Name 3
          jQuery('#input_40_723').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Procedure 4
          jQuery('#input_40_729').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          //Provider Name 4
          jQuery('#input_40_731').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Family Psychiatric History
          // Psychiatric History 1
          jQuery('#input_40_732').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Psychiatric History 2
          jQuery('#input_40_738').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Psychiatric History 3
          jQuery('#input_40_753').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Psychiatric History 4
          jQuery('#input_40_952').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Psychiatric History 5
          jQuery('#input_40_965').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Psychiatric History 6
          jQuery('#input_40_958').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Psychiatric History 7
          jQuery('#input_40_1054').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Psychiatric History 8
          jQuery('#input_40_1060').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Psychiatric History 9
          jQuery('#input_40_1066').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          // Psychiatric History 10
          jQuery('#input_40_1069').keypress(function(event) {
               var inputValue = event.which;
               // allow letters and white space only
               if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
                    event.preventDefault();
               }
          });
          
          
          //============================================================================================
          // DATE OF BIRTH
          
          var maxDate = new Date();
          jQuery('#input_40_926').datepicker({
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
               maxDate: maxDate,
          });
          
          
                    
          //============================================================================================
          // Email Validations
          
          // My Contact Information (Email)
          var email_error_msg = "Please enter a valid email address. For example, name@example.com.";
          // Regular expression to validate email address format
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          
          
          jQuery('#input_40_6').change(function() {     
               var emailInput1 =  jQuery('#input_40_6');
               var emailValue1 = emailInput1.val();     
               if (emailRegex.test(emailValue1)) {
                    jQuery('.email_error_msg').remove();
               } 
               else {
                    if ( jQuery('.email_error_msg').length ) {
                         jQuery('.email_error_msg').remove();
                         jQuery('#input_40_6').after('<p class="email_error_msg">' + email_error_msg + '</p>');
                         emailInput1.val("");
                    }
                    else{
                         jQuery('#input_40_6').after('<p class="email_error_msg">' + email_error_msg + '</p>');
                         emailInput1.val("");
                    }aaaa
                    
               }     
          }); 
          
          
          // Do you have a Psychotherapist? (Email)
          jQuery('#input_40_291').change(function() {     
               var emailInput2 =  jQuery('#input_40_291');
               var emailValue2 = emailInput2.val();   
               
               if (emailRegex.test(emailValue2)) {
                    jQuery('.email_error_msg').remove();
               } else {
          
                    if ( jQuery('.email_error_msg').length ) {
                         jQuery('.email_error_msg').remove();
                         jQuery('#input_40_291').after('<p class="email_error_msg">' + email_error_msg + '</p>');
                         emailInput2.val("");
                    }
                    else{
                         jQuery('#input_40_291').after('<p class="email_error_msg">' + email_error_msg + '</p>');
                         emailInput2.val("");
                    }
               }
          });
          
          // Do you have a Psychologist? *(Email)
          jQuery('#input_40_299').change(function() {
               var emailInput3 =  jQuery('#input_40_299');
               var emailValue3 = emailInput3.val();
               if (emailRegex.test(emailValue3)) {
                    jQuery('.email_error_msg').remove();
               } else {
                    if ( jQuery('.email_error_msg').length ) {
                         jQuery('.email_error_msg').remove();
                         jQuery('#input_40_299').after('<p class="email_error_msg">' + email_error_msg + '</p>');
                         emailInput3.val("");
                    }
                    else{
                         jQuery('#input_40_299').after('<p class="email_error_msg">' + email_error_msg + '</p>');
                         emailInput3.val("");
                    }
               }
          });
          
          //============================================================================================
          // My Insurance
          var insurance_error_msg = "Please upload a PDF file only.";
          
          // Validate Driver's License "Self Pay"
          // FRONT IMAGE
          jQuery('#input_40_191').change(function(){
               var front_license = jQuery('#input_40_191');
               var file_drivers_front = this.files[0];
               var file_drivers_front_type = file_drivers_front.type;
               if (file_drivers_front_type !== 'application/pdf') {
                    // alert('Please upload a PDF file only.');
                    if ( jQuery('.insurance_error_msg').length ) {
                         jQuery('.insurance_error_msg').remove();
                         jQuery('#input_40_191').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
                         front_license.val('');
                    }
                    else{
                         jQuery('#input_40_191').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
                         front_license.val('');
                    }
          
               } else {
                    jQuery('.insurance_error_msg').remove();
                    console.log(front_license.val());
               }
               
          });
          
          // BACK IMAGE
          jQuery('#input_40_896').change(function(){
               var back_license = jQuery('#input_40_896');
               var file_drivers_back = this.files[0];
               var file_drivers_back_type = file_drivers_back.type;
               if (file_drivers_back_type !== 'application/pdf') {
                    // alert('Please upload a PDF file only.');
                    if ( jQuery('.insurance_error_msg').length ) {
                         jQuery('.insurance_error_msg').remove();
                         jQuery('#input_40_896').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
                         back_license.val('');
                    }
                    else{
                         jQuery('#input_40_896').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
                         back_license.val('');
                    }
               } else {
                    jQuery('.insurance_error_msg').remove();
                    console.log(back_license.val());
               }
          });
          
          // Validate Driver's License "Primary Insurance"
          // FRONT IMAGE
          jQuery('#input_40_895').change(function(){
               var front_license_2 = jQuery('#input_40_895');
               var file_drivers_front_2 = this.files[0];
               var file_drivers_front_type_2 = file_drivers_front_2.type;
               if (file_drivers_front_type_2 !== 'application/pdf') {
                    // alert('Please upload a PDF file only.');
                    if ( jQuery('.insurance_error_msg').length ) {
                         jQuery('.insurance_error_msg').remove();
                         jQuery('#input_40_895').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
                         front_license_2.val('');
                    }
                    else{
                         jQuery('#input_40_895').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
                         front_license_2.val('');
                    }
          
               } else {
                    jQuery('.insurance_error_msg').remove();
                    console.log(front_license_2.val());
               }
               
          });
          
          // BACK IMAGE
          jQuery('#input_40_524').change(function(){
               var back_license_2 = jQuery('#input_40_524');
               var file_drivers_back_2 = this.files[0];
               var file_drivers_back_type_2 = file_drivers_back_2.type;
               if (file_drivers_back_type_2 !== 'application/pdf') {
                    // alert('Please upload a PDF file only.');
                    if ( jQuery('.insurance_error_msg').length ) {
                         jQuery('.insurance_error_msg').remove();
                         jQuery('#input_40_524').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
                         back_license_2.val('');
                    }
                    else{
                         jQuery('#input_40_524').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
                         back_license_2.val('');
                    }
               } else {
                    jQuery('.insurance_error_msg').remove();
                    console.log(back_license_2.val());
               }
          });
          
          // Validate Insurance Card
          // FRONT IMAGE
          jQuery('#input_40_189').change(function(){
               var front_insurance = jQuery('#input_40_189');
               var file_insurance_front = this.files[0];
               var file_insurance_front_type = file_insurance_front.type;
               if (file_insurance_front_type !== 'application/pdf') {
                    // alert('Please upload a PDF file only.');
                    if ( jQuery('.insurance_error_msg').length ) {
                         jQuery('.insurance_error_msg').remove();
                         jQuery('#input_40_189').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
                         front_insurance.val('');
                    }
                    else{
                         jQuery('#input_40_189').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
                         front_insurance.val('');
                    }
          
               } else {
                    jQuery('.insurance_error_msg').remove();
                    console.log(front_insurance.val());
               }
               
          });
          
          // BACK IMAGE
          jQuery('#input_40_190').change(function(){
               var back_insurance = jQuery('#input_40_190');
               var file_insurance_back = this.files[0];
               var file_insurance_back_type = file_insurance_back.type;
               if (file_insurance_back_type !== 'application/pdf') {
                    // alert('Please upload a PDF file only.');
                    if ( jQuery('.insurance_error_msg').length ) {
                         jQuery('.insurance_error_msg').remove();
                         jQuery('#input_40_190').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
                         back_insurance.val('');
                    }
                    else{
                         jQuery('#input_40_190').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
                         back_insurance.val('');
                    }
               } else {
                    jQuery('.insurance_error_msg').remove();
                    console.log(back_insurance.val());
               }
          });
          
          //============================================================================================
          // Global Values for year
          var startYear = 1910; // Innitialized 
          var endYear = new Date().getFullYear(); // get the current year
          
          // Year Diagnosed 1
          var yearDropdown2 = jQuery('#input_40_968');
          var yearToRemove1 = yearDropdown2.find('option[value="1910"]');
          yearToRemove1.remove();
          // loop through the years and add them to the dropdown
          for (var year_1 = endYear; year_1 >= startYear; year_1--) {
               jQuery('#input_40_968').append( jQuery('<option>', {
                    value: year_1,
                    text: year_1
               }
               ));
          }
          
          // Year Diagnosed 2
          var yearDropdown2 = jQuery('#input_40_969');
          var yearToRemove2 = yearDropdown2.find('option[value="1910"]');
          yearToRemove2.remove();
          // loop through the years and add them to the dropdown
          for (var year_2 = endYear; year_2 >= startYear; year_2--) {
               jQuery('#input_40_969').append( jQuery('<option>', {
                    value: year_2,
                    text: year_2
               }
               ));
          }
          
          // Year Diagnosed 3
          var yearDropdown3 = jQuery('#input_40_970');
          var yearToRemove3 = yearDropdown3.find('option[value="1910"]');
          yearToRemove3.remove();
          // loop through the years and add them to the dropdown
          for (var year_3 = endYear; year_3 >= startYear; year_3--) {
               jQuery('#input_40_970').append( jQuery('<option>', {
                    value: year_3,
                    text: year_3
               }
               ));
          }
          
          // Year Diagnosed 4
          var yearDropdown4 = jQuery('#input_40_971');
          var yearToRemove4 = yearDropdown4.find('option[value="1910"]');
          yearToRemove4.remove();
          // loop through the years and add them to the dropdown
          for (var year_4 = endYear; year_4 >= startYear; year_4--) {
               jQuery('#input_40_971').append( jQuery('<option>', {
                    value: year_4,
                    text: year_4
               }
               ));
          }
          
          // Year Diagnosed 5
          var yearDropdown5 = jQuery('#input_40_972');
          var yearToRemove5 = yearDropdown5.find('option[value="1910"]');
          yearToRemove5.remove();
          // loop through the years and add them to the dropdown
          for (var year_5 = endYear; year_5 >= startYear; year_5--) {
               jQuery('#input_40_972').append( jQuery('<option>', {
                    value: year_5,
                    text: year_5
               }
               ));
          }
                    
          //============================================================================================
          // Previous Psychiatric Hospitalizations/Rehab
          // Rehab Year 1
          var yearRehabDropdown1 = jQuery('#input_40_973');
          var yearRehabToRemove1 = yearRehabDropdown1.find('option[value="1910"]');
          yearRehabToRemove1.remove();
          // loop through the years and add them to the dropdown
          for (var year_rehab_1 = endYear; year_rehab_1 >= startYear; year_rehab_1--) {
               jQuery('#input_40_973').append( jQuery('<option>', {
                    value: year_rehab_1,
                    text: year_rehab_1
               }
               ));
          }
          
          // Rehab Year 2
          var yearRehabDropdown2 = jQuery('#input_40_974');
          var yearRehabToRemove2 = yearRehabDropdown2.find('option[value="1910"]');
          yearRehabToRemove2.remove();
          // loop through the years and add them to the dropdown
          for (var year_rehab_2 = endYear; year_rehab_2 >= startYear; year_rehab_2--) {
               jQuery('#input_40_974').append( jQuery('<option>', {
                    value: year_rehab_2,
                    text: year_rehab_2
               }
               ));
          }
          
          // Rehab Year 3
          var yearRehabDropdown3 = jQuery('#input_40_975');
          var yearRehabToRemove3 = yearRehabDropdown3.find('option[value="1910"]');
          yearRehabToRemove3.remove();
          // loop through the years and add them to the dropdown
          for (var year_rehab_3 = endYear; year_rehab_3 >= startYear; year_rehab_3--) {
               jQuery('#input_40_975').append( jQuery('<option>', {
                    value: year_rehab_3,
                    text: year_rehab_3
               }
               ));
          }
          // Rehab Year 4
          var yearRehabDropdown4 = jQuery('#input_40_976');
          var yearRehabToRemove4 = yearRehabDropdown4.find('option[value="1910"]');
          yearRehabToRemove4.remove();
          // loop through the years and add them to the dropdown
          for (var year_rehab_4 = endYear; year_rehab_4 >= startYear; year_rehab_4--) {
               jQuery('#input_40_976').append( jQuery('<option>', {
                    value: year_rehab_4,
                    text: year_rehab_4
               }
               ));
          }
          // Rehab Year 5
          var yearRehabDropdown5 = jQuery('#input_40_977');
          var yearRehabToRemove5 = yearRehabDropdown5.find('option[value="1910"]');
          yearRehabToRemove5.remove();
          // loop through the years and add them to the dropdown
          for (var year_rehab_5 = endYear; year_rehab_5 >= startYear; year_rehab_5--) {
                         jQuery('#input_40_977').append( jQuery('<option>', {
                              value: year_rehab_5,
                              text: year_rehab_5
                         }
                      ));
                    }
          
          //============================================================================================
          // Medical History - (seizures disorders, diabetes, heart problems etc.)
          // MH Year 1
          var yearMedicalHistoryDropdown1 = jQuery('#input_40_978');
          var yearMedicalHistoryToRemove1 = yearMedicalHistoryDropdown1.find('option[value="1910"]');
          yearMedicalHistoryToRemove1.remove();
          // loop through the years and add them to the dropdown
          for (var year_mh_1 = endYear; year_mh_1 >= startYear; year_mh_1--) {
               jQuery('#input_40_978').append( jQuery('<option>', {
                    value: year_mh_1,
                    text: year_mh_1
               }
               ));
          }
          
          // MH Year 2
          var yearMedicalHistoryDropdown2 = jQuery('#input_40_979');
          var yearMedicalHistoryToRemove2 = yearMedicalHistoryDropdown2.find('option[value="1910"]');
          yearMedicalHistoryToRemove2.remove();
          // loop through the years and add them to the dropdown
          for (var year_mh_2 = endYear; year_mh_2 >= startYear; year_mh_2--) {
               jQuery('#input_40_979').append( jQuery('<option>', {
                    value: year_mh_2,
                    text: year_mh_2
               }
               ));
          }
          
          // MH Year 3
          var yearMedicalHistoryDropdown3 = jQuery('#input_40_980');
          var yearMedicalHistoryToRemove3 = yearMedicalHistoryDropdown3.find('option[value="1910"]');
          yearMedicalHistoryToRemove3.remove();
          // loop through the years and add them to the dropdown
          for (var year_mh_3 = endYear; year_mh_3 >= startYear; year_mh_3--) {
               jQuery('#input_40_980').append( jQuery('<option>', {
                    value: year_mh_3,
                    text: year_mh_3
               }
               ));
          }
          
          // MH Year 4
          var yearMedicalHistoryDropdown4 = jQuery('#input_40_981');
          var yearMedicalHistoryToRemove4 = yearMedicalHistoryDropdown4.find('option[value="1910"]');
          yearMedicalHistoryToRemove4.remove();
          // loop through the years and add them to the dropdown
          for (var year_mh_4 = endYear; year_mh_4 >= startYear; year_mh_4--) {
               jQuery('#input_40_981').append( jQuery('<option>', {
                    value: year_mh_4,
                    text: year_mh_4
               }
               ));
          }
          
          // MH Year 5
          var yearMedicalHistoryDropdown5 = jQuery('#input_40_982');
          var yearMedicalHistoryToRemove5 = yearMedicalHistoryDropdown5.find('option[value="1910"]');
          yearMedicalHistoryToRemove5.remove();
          // loop through the years and add them to the dropdown
          for (var year_mh_5 = endYear; year_mh_5 >= startYear; year_mh_5--) {
               jQuery('#input_40_982').append( jQuery('<option>', {
                    value: year_mh_5,
                    text: year_mh_5
               }
               ));
          }
          
          // MH Year 6
          var yearMedicalHistoryDropdown6 = jQuery('#input_40_983');
          var yearMedicalHistoryToRemove6 = yearMedicalHistoryDropdown6.find('option[value="1910"]');
          yearMedicalHistoryToRemove6.remove();
          // loop through the years and add them to the dropdown
          for (var year_mh_6 = endYear; year_mh_6 >= startYear; year_mh_6--) {
               jQuery('#input_40_983').append( jQuery('<option>', {
                    value: year_mh_6,
                    text: year_mh_6
               }
               ));
          }
          
          //============================================================================================
          // Previous Psychiatric/Sleep Medications
          
          // Start Date 1 input_40_414
          jQuery('#input_40_414').datepicker({
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
               onClose: function(date) { 
                    jQuery('#input_40_415').datepicker('option','minDate', date);
               }
          });
          // End Date 1
          jQuery('#input_40_415').datepicker({
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
          });
          
          // Start Date 2 
          jQuery('#input_40_612').datepicker({ 
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
               onClose: function(date) {
                    jQuery('#input_40_605').datepicker('option','minDate', date)
               }
          });
          // End Date 2
          jQuery('#input_40_605').datepicker({
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
          });
          
          // Start Date 3 
          jQuery('#input_40_604').datepicker({ 
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
               onClose: function(date) {
                    jQuery('#input_40_613').datepicker('option','minDate', date)
               }
          });
          // End Date 3
          jQuery('#input_40_613').datepicker({
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
          });
          
          // Start Date 4 
          jQuery('#input_40_628').datepicker({ 
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
               onClose: function(date) {
                    jQuery('#input_40_621').datepicker('option','minDate', date)
               }
          });
          // End Date 4
          jQuery('#input_40_621').datepicker({
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
          });
          
          // Start Date 5 
          jQuery('#input_40_620').datepicker({ 
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
               onClose: function(date) {
                    jQuery('#input_40_629').datepicker('option','minDate', date)
               }
          });
          // End Date 5
          jQuery('#input_40_629').datepicker({
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
          });
          
          // Start Date 6 
          jQuery('#input_40_636').datepicker({ 
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
               onClose: function(date) {
                    jQuery('#input_40_637').datepicker('option','minDate', date)
               }
          });
          // End Date 6
          jQuery('#input_40_637').datepicker({
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
          });
          
          // Start Date 7 
          jQuery('#input_40_644').datepicker({ 
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
               onClose: function(date) {
                    jQuery('#input_40_645').datepicker('option','minDate', date)
               }
          });
          // End Date 7
          jQuery('#input_40_645').datepicker({
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20"
          });
                    
          
          //==========================================================================================
          // Past Surgical History
          // Date Of Procedure 1
          jQuery('#input_40_710').datepicker({
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
               maxDate: maxDate,
          });
          
          // Date Of Procedure 2
          jQuery('#input_40_716').datepicker({
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
               maxDate: maxDate,
          });
          
          // Date Of Procedure 3
          jQuery('#input_40_722').datepicker({
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
               maxDate: maxDate,
          });
          
          // Date Of Procedure 4
          jQuery('#input_40_730').datepicker({
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
               maxDate: maxDate,
          });
          
          
          //============================================================================================
          // Legal History
          // Arrest Date 1
          jQuery('#input_40_757').datepicker({
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
               maxDate: maxDate,
          });
          
          // Arrest Date 2
          jQuery('#input_40_765').datepicker({
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
               maxDate: maxDate,
          });
          
          // Arrest Date 3
          jQuery('#input_40_772').datepicker({
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20",
               maxDate: maxDate,
          });
          
          //============================================================================================
          // Probation
          // Ending Date? 1
          jQuery('#input_40_780').datepicker({
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20"
          });
          
          // Military Service
          // When
          jQuery('#input_40_791').datepicker({
               dateFormat: 'mm/dd/yy',
               changeMonth: true,
               changeYear: true,
               yearRange: "c-100:c+20"
          });
     
          
          //============================================================================================
          // Previous Substance Abuse
          
          var age_start_end_error_msg = "Age Ended must be greater than or equal to Age Started";
          
          // 1
          jQuery('#input_40_1004, #input_40_1011').change(function() {    
               // Retrieve the age started and age ended values
               var ageStarted = parseInt(jQuery('#input_40_1004').val());
               console.log(ageStarted);  
               var ageEnded = parseInt(jQuery('#input_40_1011').val());
               console.log(ageEnded);  
          
               if (ageEnded < ageStarted) {
                    //alert("Error: Age Ended must be greater than or equal to Age Started");
          
                    // Display an error message or take other appropriate action
                    if ( jQuery('.age_start_end_error_msg').length ) {
                         jQuery('.age_start_end_error_msg').remove();
          
                         jQuery('#input_40_1011').after('<p class="age_start_end_error_msg">' + age_start_end_error_msg + '</p>');
                         jQuery("#input_40_1011").val(""); // Clear Age Ended input
                    }
                    else{
                         jQuery('#input_40_1011').after('<p class="age_start_end_error_msg">' + age_start_end_error_msg + '</p>');
                         jQuery("#input_40_1011").val(""); // Clear Age Ended input
                    }
                         
               }
               else{
                    jQuery('.age_start_end_error_msg').remove();
               }
          
          });
          
          // 2
          jQuery('#input_40_1010, #input_40_1005').change(function() {    
               // Retrieve the age started and age ended values
               var ageStarted = parseInt(jQuery('#input_40_1010').val());
               console.log(ageStarted);  
               var ageEnded = parseInt(jQuery('#input_40_1005').val());
               console.log(ageEnded);  
          
               if (ageEnded < ageStarted) {
                    //alert("Error: Age Ended must be greater than or equal to Age Started");
          
                    // Display an error message or take other appropriate action
                    if ( jQuery('.age_start_end_error_msg').length ) {
                         jQuery('.age_start_end_error_msg').remove();
          
                         jQuery('#input_40_1005').after('<p class="age_start_end_error_msg">' + age_start_end_error_msg + '</p>');
                         jQuery("#input_40_1005").val(""); // Clear Age Ended input
                    }
                    else{
                         jQuery('#input_40_1005').after('<p class="age_start_end_error_msg">' + age_start_end_error_msg + '</p>');
                         jQuery("#input_40_1005").val(""); // Clear Age Ended input
                    }
                         
               }
               else{
                    jQuery('.age_start_end_error_msg').remove();
               }
          
          });
          
          // 3
          jQuery('#input_40_1008, #input_40_1012').change(function() {    
               // Retrieve the age started and age ended values
               var ageStarted = parseInt(jQuery('#input_40_1008').val());
               console.log(ageStarted);  
               var ageEnded = parseInt(jQuery('#input_40_1012').val());
               console.log(ageEnded);  
          
               if (ageEnded < ageStarted) {
                    //alert("Error: Age Ended must be greater than or equal to Age Started");
          
                    // Display an error message or take other appropriate action
                    if ( jQuery('.age_start_end_error_msg').length ) {
                         jQuery('.age_start_end_error_msg').remove();
          
                         jQuery('#input_40_1012').after('<p class="age_start_end_error_msg">' + age_start_end_error_msg + '</p>');
                         jQuery("#input_40_1012").val(""); // Clear Age Ended input
                    }
                    else{
                         jQuery('#input_40_1012').after('<p class="age_start_end_error_msg">' + age_start_end_error_msg + '</p>');
                         jQuery("#input_40_1012").val(""); // Clear Age Ended input
                    }
                         
               }
               else{
                    jQuery('.age_start_end_error_msg').remove();
               }
          
          });
          
          //============================================================================================
           // SUICICAL AND HUMICIADAL
           jQuery('#field_40_865 input[name="input_865"]').change(function() {
               if ( jQuery(this).val() !== '') {


                    if (jQuery(this).is(':checked') ) {
                         if( jQuery(this).val() == 'Yes' || jQuery(this).val() == 'Yes and I am afraid I may act on them' ){
                              jQuery('#ideation_Modal').show();
                         }else{
                              jjQuery('#ideation_Modal').hide();
                         }    
                    }
                    else{
                         jQuery('#ideation_Modal').hide();
                    }

                    // ========================================
                    // if (jQuery(this).is(':checked') && jQuery(this).val() == 'Yes') {
                    //      jQuery('#ideation_Modal').show();
                    // }else{
                    //      jQuery('#ideation_Modal').hide();
                    // }
               }
               else {
                    jQuery('#ideation_Modal').hide();
               }
          
          });
          
          jQuery('#field_40_869 input[name="input_869"]').change(function() {
               if ( jQuery(this).val() !== '') {

                    if (jQuery(this).is(':checked') ) {
                         if( jQuery(this).val() == 'Yes' || jQuery(this).val() == 'Yes and I am afraid I may act on them' ){
                              jQuery('#ideation_Modal').show();
                         }else{
                              jjQuery('#ideation_Modal').hide();
                         }    
                    }
                    else{
                         jQuery('#ideation_Modal').hide();
                    }

                    // ==================================================================
                    // if (jQuery(this).is(':checked') && jQuery(this).val() == 'Yes') {
                    //      jQuery('#ideation_Modal').show();
                    // }else{
                    //      jQuery('#ideation_Modal').hide();
                    // }
               } else {
                    jQuery('#ideation_Modal').hide();
               }
          });
     
          jQuery('#ideation_Modal .close-btn').click(function() {
               jQuery('#ideation_Modal').hide();
          });
                    
          //============================================================================================
               
     });
               