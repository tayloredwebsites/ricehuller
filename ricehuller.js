/* *************************************************************************************
window onload event handler function
*/
function riceHullerOnLoad() {
  // set the onclick event on the elements with a class of expand-collapse
  elementsByQuery(".expand-collapse").addEventListener("click", (event) => expanderCollapser(event));
}

/* *************************************************************************************
(global) constants
*/

// const MY_CONSTANT = "some-value";

/* *************************************************************************************
helper methods
*/

function elementById(tagId) {
  return document.getElementById(tagId);
}

function elementsByName(tagName) {
  return document.getElementsByTagName(tagName);
}

function elementsByClass(tagClass) {
  return document.getElementsByClassName(tagClass);
}

function elementsByQuery(selector) {
  return document.querySelector(selector)
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
unobtrusive onclick detections, which must be called in the window.onload event (must be called only once)
see riceHullerOnLoad function called in html script tag, and at the top of this document
*/

function expanderCollapser(event) {
  console.log("Clicked an element with the expand-collapse class")
  const elem = event.currentTarget;
  console.log("called expanderCollapser on element with with tag: ".concat(elem.tagName));
  const wasExpanded = elem.classList.contains("expanded");
  console.log("was element initially expanded: ".concat(wasExpanded.toString()));

  // var headerElem = null;
  // var sectionElem = null;
  // // get the SECTION and HEADER children of the element clicked on
  // for (let child of elem.children) {
  //   console.log("checking sibing with tag: ".concat(child.tagName));
  //   if (child.tagName === "SECTION") {
  //     console.log("We MATCHED a sibing with SECTION tag");
  //     sectionElem = child;
  //   }  else if (child.tagName === "HEADER") {
  //     console.log("We MATCHED a sibing with HEADER tag");
  //     headerElem = child;
  //   };
  //   if (sectionElem !== null && headerElem !== null) { break };
  // };
  console.log("Initial element classList: ".concat(elem.classList));
  if (wasExpanded === true) {
    elem.classList.remove("expanded");
  } else {
    elem.classList.add("expanded");
  }

};


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

