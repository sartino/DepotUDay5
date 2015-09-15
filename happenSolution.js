var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){},
		UnixMillisecond: function(){}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){},
	   	    WithOutSeconds: function() {}
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){},
			Name: function(){}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){},
			DblDigit: function(){}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
				var d =new Date();
				var n = d.getMinutes();
				return String(n);
			},
			DblDigit: function(){
				var d =new Date();
				var n = d.getMinutes();
				return String(n);
			
			}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
				var hours = new Date().getHours();
				return String(hours);
			},
			TwelveHour: function() {
				var hours = new Date().getHours() % 12 || 12;
				return String(hours);
			},
			AMPM: (function() {
				return {
					UpperCase: function(){
						var hours = new Date().getHours();
						var ampm = (hours >= 12) ? "PM" : "AM";
						return String(ampm);
					},
					LowerCase: function(){
						var hours = new Date().getHours();
						var ampm = (hours >= 12) ? "pm" : "am";
						return String(ampm);
					}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
				var d = new Date();
				var weekday = new Array(7);
					weekday[0] = "Sunday";
					weekday[1] = "Monday";
					weekday[2] = "Tueday";
					weekday[3] = "Wednesday";
					weekday[4] = "Thursday";
					weekday[5] = "Friday";
					weekday[6] = "Saturday";
				
				var n = weekday[d.getDay()];
				return String(n);
			},
			AbrDayOfWeek: function(){
				var d = new Date();
				var weekday = new Array(7);
					weekday[0] = "Sun";
					weekday[1] = "Mon";
					weekday[2] = "Tue";
					weekday[3] = "Wed";
					weekday[4] = "Thu";
					weekday[5] = "Fri";
					weekday[6] = "Sat";
				
				var n = weekday[d.getDay()];
				return String(n);
			},
			FirstTwoOfWeek: function(){
				var d = new Date();
				var weekday = new Array(7);
					weekday[0] = "Su";
					weekday[1] = "Mo";
					weekday[2] = "Tu";
					weekday[3] = "We";
					weekday[4] = "Th";
					weekday[5] = "Fr";
					weekday[6] = "Sa";
				var n = weekday[d.getDay()];
				return String(n);
			},
			
			WeekOfYear: function(){
				var d = new Date();
    			d.setHours(0,0,0);
    			d.setDate(d.getDate() + 4 - (d.getDay()||7));
    			var yearStart = new Date(d.getFullYear(),0,1);
    			var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    		return String (weekNo);
			}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
						var date = new Date();
						var monthNum = date.getDate();
						return String(monthNum);
					},
					Ordinal: function(){
						var date = new Date();
						var monthNum = date.getDate().toString();
						switch (monthNum[monthNum.length-1]){
							case "1" : return monthNum + "st";
							case "2": return monthNum + "nd";
							case "3": return monthNum + "rd";
							default: return monthNum + "th";
							
						}
					},
					DateDblDigit: function(){
						var date = new Date();
						var monthNum = date.getDate();
						return String(monthNum);
					}
				}
			})(),
			MonthNumber: function(){
				var date = new Date();
				var monthNum = date.getMonth() + 1;
				return String(monthNum);
			},
			MonthNumberDblDigit: function(){
				var currentDate = new Date();
				var currentMonth = currentDate.getMonth() + 1;
				if (currentMonth < 12) {
					currentMonth = '0' + currentMonth;
				}
				return String(currentMonth);
			},
			AbrOfCurrentMonth: function(){
				var currentDate = new Date();
				var currentMonth = currentDate.getMonth() + 1;
				switch (currentMonth) {
					case 1: return "Jan";
					case 2: return "Feb";
					case 3: return "Mar";
					case 4: return "Apr";
					case 5: return "May";
					case 6: return "Jun";
					case 7: return "Jul";
					case 8: return "Aug";
					case 9: return "Sep";
					case 10: return "Oct";
					case 11: return "Nov";
					case 12: return "Dec";
				}
				
			},
			CurrentMonth: function(){
				var currentDate = new Date();
				var currentMonth = currentDate.getMonth() + 1;
				switch (currentMonth) {
					case 1: return "January";
					case 2: return "February";
					case 3: return "March";
					case 4: return "April";
					case 5: return "May";
					case 6: return "June";
					case 7: return "July";
					case 8: return "August";
					case 9: return "September";
					case 10: return "October";
					case 11: return "November";
					case 12: return "December";
				}
				
			}
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
						var now = new Date();
						var start = new Date(now.getFullYear(), 0, 0);
						var diff = now - start;
						var oneDay = 1000 * 60 * 60 *24;
						var day = Math.floor(diff / oneDay);
						return String(day);
					},
					Ordinal: function(){
						var now = new Date();
						var start = new Date(now.getFullYear(), 0, 0);
						var diff = now - start;
						var oneDay = 1000 * 60 * 60 *24;
						var day = (Math.floor(diff / oneDay)).toString();
						console.log(day);
						switch (day[day.length-1]){
							case "1" : return day + "st";
							case "2": return day + "nd";
							case "3": return day + "rd";
							default: return day + "th";
							
						} 
					}
				}
			})(),
			YearFull: function(){
				var d = new Date();
				var n = d.getFullYear();
				return String(n);
			},
			YearAbr: function(){
				var d = new Date();
				var n = d.getFullYear();
				var final = n.toString().substring(2);
				return String(final);
			}
		}
	})(),
	Defaults: function(){}
  }
})();