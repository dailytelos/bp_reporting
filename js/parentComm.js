// Heart Farms
//  2021 Copyright & Development by:
//      TLCC Consultants Pte. Ltd.
//      email: studio@tlccc.sg
//
//  parentComm.js - file ver: 0.91
// file to handle Parent / Child window communications


const MSG_TYPE_TEST = 'TEST';
const MSG_TYPE_ISSUE_BID = "ISSUE_BID";
const MSG_TYPE_NOTIFY_LOGIN = "LOGIN_NOTICE";
const MSG_TYPE_NOTIFY_LOGOUT = "LOGOUT_NOTICE";
const MSG_TYPE_SIGNIN = "signin";
const MSG_TYPE_REFRESH_MAP = "MAP_REFRESH";
const MSG_TYPE_PUBLISH_ACTION = "PUBLISH_ACTION";
const MSG_TYPE_REQUEST_SIGNIN = "req_signin";
const MSG_TYPE_PRIV_KEY_SUBMIT = "PRIVATE_KEY_SUBMIT";


//Important, user logged in variable setting
var user_logged_in = false;
var user_name = "";

//*DEBUG USER NAME SETTINGS*//
var play_user_logged_in = true;
var play_user_name_debug = "tlccprojects";

var play_PubKey = "";
var play_PrvKey = "";


// function loginUser(user)
//   function to call when user logs in
//
// user - string of Telos user name
//
// returns - nothing
function loginUser(user) {
    if(user.length > 0) {
        user_logged_in = true;
        user_name = user;
    }
}

// function logoutUser(user)
//   function to call when user logs out
//
// returns - nothing
function logoutUser() {
    user_logged_in = false;
    user_name = "";
}


// function handleMessage(event)
//  function event listener for child canvas
//
// event - passed by parent window down
//
// returns nothing
function handleMessage(event) {  
  
  //console.log("Event --");
  //console.log(event);
  
  if(typeof event === 'undefined') { return; }
  if(event === null) { return; }
  if(!isObject(event)) { return; }
  if(!('data' in event)) { return; }
  if(!IsJsonString(event.data)) { return; }
    
  var data = JSON.parse(event.data);
  
  if (event.origin != location.origin) { console.log('Bad origin: ' + event.origin); return; }
  
  switch(data.message)
  {   
        case MSG_TYPE_TEST:  
            console.log("Msg Type -- MSG_TYPE_TEST 'TEST' Received from Parent window.");
            console.log(data);
        break;
        case MSG_TYPE_NOTIFY_LOGIN:
            console.log("Xeros Canvas CHILD received login notice...");
            console.log("Data received by child...");
            console.log(data);
            loginUser(data.data);
        break;
        case MSG_TYPE_NOTIFY_LOGOUT:
            console.log("Xeros Canvas CHILD received logout notice...");
            logoutUser();
        break;
        case MSG_TYPE_REFRESH_MAP:
            console.log("Xeros Canvas CHILD received map refresh notice...");
            
            tlos_get_contract_tbl_row('heartfarmsio', 'heartlands', loaded_land_id, xeros_load_xgrid_from_table);
            
            mArrowNav.getComp(COMP_BTN_REFRESH).setActive(false);
            setTimeout(function(){ mArrowNav.getComp(COMP_BTN_REFRESH).setActive(true); }, 3000);
        break;
        case MSG_TYPE_PRIV_KEY_SUBMIT:
            console.log("Xeros Canvas CHILD received private key submit notice...");
            console.log("Data received by child...");
            console.log(data);
            
            play_PubKey = data.pub_key;
            play_PrvKey = data.prv_key;
            
        break;
        default:
        break;
  }
}

function sendBid(sReceiver, sAmount, sMemo) {
    
    window.parent.postMessage(JSON.stringify({
        message: MSG_TYPE_ISSUE_BID,
        data: JSON.stringify({
            receiver: sReceiver,
            amount: sAmount,
            memo: sMemo
        })
    }), location.origin);
}

function publishActions(aActions) {
    
    window.parent.postMessage(JSON.stringify({
        message: MSG_TYPE_PUBLISH_ACTION,
        data: JSON.stringify({ aActions })
    }), location.origin);
}

function parentRefresh() {
    
    window.parent.postMessage(JSON.stringify({
        message: MSG_TYPE_REFRESH_MAP,
        data: "Child to parent data..."
    }), location.origin);
}

function requestSigninNotice() {
    
    window.parent.postMessage(JSON.stringify({
        message: MSG_TYPE_REQUEST_SIGNIN,
        data: "Child to parent data..."
    }), location.origin);
    
}


// DEBUG
setTimeout(function() {
    
    window.parent.postMessage(JSON.stringify({
        message: MSG_TYPE_TEST,
        data: 'child to parent data here...'
    }), location.origin);
    
}, 8000);