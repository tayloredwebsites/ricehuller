/* *************************************************************************************
(global) constants
*/

const MY_CONSTANT = "some-value";

/* *************************************************************************************
helper methods
*/

function getById(tagId) {
  return document.getElementById(tagId);
}

function getByName(tagName) {
  return document.getElementsByTagName(tagName);
}

function setErrorMsg(errMsg) {
  errElem = getById("errorMessage");
  if (errElem === null) {
    errElem.textContent=errMsg;
    console.log(errMsg);
  } else {
    console.log("ERROR: Unable to access element with ID: 'errorMessage'");
    console.log("ERROR: Unable to display error message: " + errMsg);
  }
}


/* *************************************************************************************
onclick detections
*/

// getById("smaller-font").onclick = function() {setFontSize(-2)};


/* *************************************************************************************
called functions
*/

function setFontSize(fontSize) {
  htmlElems = getByName("html");
  if (htmlElems.length == 1) {
    htmlElems[0].style.fontSize = fontSize; 
  } else {
    setErrorMsg("ERROR: unable to find the 'html' element!");
  }
}

function isMobileDevice() {
  /android|iphone|kindle|ipad/i.test(navigator.userAgent)
}

