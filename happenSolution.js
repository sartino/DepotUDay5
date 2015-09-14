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
			Minute: function(){},
			DblDigit: function(){}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {},
			TwelveHour: function() {},
			AMPM: (function() {
				return {
					UpperCase: function(){},
					LowerCase: function(){}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){},
			AbrDayOfWeek: function(){},
			FirstTwoOfWeek: function(){},
			WeekOfYear: function(){}
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
						//return String(day);
						} 
					}
				}
			})(),
			YearFull: function(){},
			YearAbr: function(){}
		}
	})(),
	Defaults: function(){}
  }
})();