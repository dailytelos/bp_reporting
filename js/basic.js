//  basic.js - this file is under MIT License
//  2021 Development by:
//      TLCC Consultants Pte. Ltd.
//      email: studio@tlccc.sg
//      website: https://defi.tlccc.sg/
//      Company of Singapore
//
//  basic.js - file ver: 1.01
//  1.01 - added IsJsonString(str)

BigInt.prototype.toJSON = function() { return this.toString();  }


function isObject(val) {
    if (val === null) { return false;}
    return ( (typeof val === 'function') || (typeof val === 'object') );
}

function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}


function isString(s) {
    if (typeof s === 'string' || s instanceof String)
    { return true; }
    
    return false;
}

function isArray(ar) {
    if(ar instanceof Array) { return true; }
    return false;
}

// function isImage(i)
function isImage(i) {
    return i instanceof HTMLImageElement;
}

// function IsJsonString(str)
//   tests if string is valid JSON string
// str - string to test
//
// returns - true if valid JSON, false if not
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? null : sParameterName[1];
		}
	}
};

function isAlphaNumericOrSpace(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
	code = str.charCodeAt(i);

	if(code == 32)
	{}
	else if (!(code > 47 && code < 58) && // numeric (0-9)
		!(code > 64 && code < 91) && // upper alpha (A-Z)
		!(code > 96 && code < 123)) { // lower alpha (a-z)
	  return false;
	}
  }
  return true;
};
	
//May need future updates to code
function isMobile()
{
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))
	{ return true; }
	
	return false;
}

// function distance(x1, y1, x2, y2)
//   returns distance between two points
function distance(x1, y1, x2, y2) {
return Math.hypot(x2-x1, y2-y1)
}

//Preload Images
function preloadImage(url) {
    var img = new Image();
    img.src = url;
    
    return img;
}


// function dateSecCountdown(nSeconds, bShort = true)
//   turns nSeconds into string such as "1y 4m 15d 5hr 2min 15sec"
//
// eosioDateTime - string in format of "2021-01-01T00:00:00"
//                 should be UTC / GMT blockchain time passed
// bShort - set to false to have "year" instead of "y"
//
// returns - new Date() created from eosioDateTime
function dateSecCountdown(nSeconds, bShort = true) {
    
    var nYearSec = 86400 * 365;
    var nMonthSec = 86400 * 30;
    var nDaySec = 86400;
    var nHourSec = 60 * 60;
    var nMinSec = 60;
    
    var nYears = Math.floor(nSeconds / nYearSec);
    var nRem = nSeconds % nYearSec;
    var nMonths = Math.floor(nRem / nMonthSec);
    nRem = nRem % nMonthSec;
    var nDays = Math.floor(nRem / nDaySec);
    nRem = nRem % nDaySec;
    var nHours = Math.floor(nRem / nHourSec);
    nRem = nRem % nHourSec;
    var nMin = Math.floor(nRem / nMinSec);
    nRem = nRem % nMinSec;
    nRem = Math.floor(nRem);
    
    //build string
    var sOut = "";
    
    if(nYears > 0)
    { sOut = sOut + nYears + (bShort ? "yr " : "years "); }
    if(nMonths > 0)
    { sOut = sOut + nMonths + (bShort ? "mo " : "months "); }
    if(nDays > 0)
    { sOut = sOut + nDays + (bShort ? "d " : "days "); }
    if(nHours > 0)
    { sOut = sOut + nHours + (bShort ? "hr " : "hours "); }
    if(nMin > 0)
    { sOut = sOut + nMin + (bShort ? "min " : "minutes "); }
    
    sOut = sOut + nRem + (bShort ? "sec " : "seconds "); 
    
    return sOut;
}

// function secDateDiff(dDate1, dDate2)
//  calculates integer of number of seconds between dates
//
// dDate1 - date object made with new Date()
// dDate2 - date object made with new Date(), use later date
//
// returns - integer, representing number of seconds between dates
function secDateDiff(dDate1, dDate2) {
    var secondBetweenTwoDate = Math.abs((dDate2.getTime() - dDate1.getTime()) / 1000);

    return secondBetweenTwoDate;
}

// function buildUTCDateString(Date d)
//  build formatted date string
//
// d - date object made with Date()
//
// returns - string in format YYYY-MM-DDTHH:mm:ss
function buildUTCDateString(d) {
    
    var sDate = d.toISOString().substr(0, 19);
    
    return sDate;
}

// function seconds_since_epoch()
//  generates seconds since epoch
//
// date - Date javascript,  pass: Date.now() as an exmaple
//
// returns - integer of seconds since epoch
function seconds_since_epoch(date = Date.now()){ return Math.floor( date / 1000 ); }

// function getCVal(n)
//   Converts n (integer) to character code (string)
//
// n - integer, 0-36
//
// returns string - single character 0-9,a-z inclusive
function getCVal(n) {
    
    if(isInt(n)) {
        if((n >= 0) && (n <= 9)) {
            return "" + n;
        }
        else if((n <= 36) && (n > 9)) {
            return String.fromCharCode(87 + n);
        }
    }
    
    return "";
}

// function getNVal(c)
//   Converts c (character) to integer
//
// c - string, single digit
//
// returns integer value, -1 on error
function getNVal(c) {
    
    if(isString(c)){
        if(c.length === 1) {
            return (c.codePointAt(0) - 87);
        }
    }
    
    return -1;
}

