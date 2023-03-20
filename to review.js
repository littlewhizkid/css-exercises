<style>
/**/


#s4-ribbonrow, .ms-cui-topBar2, .s4-notdlg, .s4-pr s4-ribbonrowhidetitle, .s4-notdlg noindex, #ms-cui-ribbonTopBars, #s4-titlerow, #s4-pr s4-notdlg s4-titlerowhidetitle, #s4-leftpanel-content
{DISPLAY: none} 

#sideNavBox {DISPLAY: none}

#contentBox {
margin-left: 20px;

}

.ms-webpart-titleText.ms-webpart-titleText, .ms-webpart-titleText > a {
    background: linear-gradient(white,#f2f2f2);
    color: black !important;
    padding: 5px;
    font-weight: normal;
    border-bottom-style: solid;
    border-bottom-color: #666666;
    border-bottom-width: 1px;
    text-decoration: none;
}
.newevent  {
	position: absolute;
    background-color: #f3f3f3;
    padding: 15px;
    width: 400px;
    border: silver solid 1px;
    z-index:999;
}

span.ms-RadioText {
    padding: 10px;
}

table#onetIDListForm {
  
}
table.ms-formtable td {
    border-bottom-style: solid;
    border-bottom-color: rgba(198, 199, 200, 0.47);
    border-bottom-width: 1px;
    min-width: 480px;
}
td.EventShell {
    font-size: 1.2em;
    font-weight: bold;
    padding-top: 20px;
}
span.EventShell {
    font-size: 1.2em;
    font-weight: bold;
    padding-top: 10px;
    line-height:2em;
}

td#SPFieldBoolean {
    padding-left: 10px;
}
.tblTitle {
    width: 100%;
    position: fixed;
    left: 0px;
    top: 85px;
    z-index: 2;
}

td#evtitle {
    background:#cbdbfc;;
    padding: 10px;
    color: #444;
    font-size: 16px;
    font-weight: bold;
    ont-family: "Segoe UI"; 
    border-bottom: 1px black solid;
}

span#eventIDtd {
    margin-left: 20px;
    margin-right: 20px;
    color:black;
    font-weight: normal;
    font-size: 12px;
    float: right;
}


nobr {
    white-space: normal;
}

.ms-dialog .ms-core-overlay {
   
    overflow-x:hidden !important;
    
}

 

#onetidinfoblock1,#onetidinfoblock2,.ms-descriptiontext{
	display:none;
}
a[onclick*="clickDatePicker"]{
	display:none;
}


.ms-ButtonHeightWidth{
	

-webkit-appearance: none;
}
.ms-headerSortArrowLink
{
display:inline;
}

input[type=text]:focus,
input[type=checkbox]:focus
 {
	border-color: #2a8dd4;
	box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
	
}
input[type=text] {
	height:30px !important;
	inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6)
}

.navbar-fixed-top {
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    margin-left: 0px;
    background: #e6f2fa;
    z-index: 999;
    border-bottom: 1px black solid;
    height:38px;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1000;
}
.navbar-fixed-top a  {
    float: left;
    font-size: 1.1em;
    color: black;
    text-align: center;
    padding: 4px 10px;
    text-decoration: none;
    line-height: 30px;
   
}

.navbar-fixed-top a img {
    margin-right: 2px;
}

.navbar-fixed-top a:hover {
    background-color: rgba( 156,206,240,0.5 );
}
.ms-formbody {
    padding: 0;
    padding-left: 4px;
}

.ms-standardheader, .ms-formbody {
    font-size: 1em;
    }
    
 

 .xdetails {
    display: block;
    position: relative;
    left: -480px;
    max-width: 965px;
    min-width: 930px;
    padding-left: 41px !important;
    top:23px;
}

.xdetails:before {
    font-family: FontAwesome;
    content: "\f05a";
    margin-left: 6px;
    color: red;
    font-size: 20px;
    position: absolute;
    top: 1px;
    left: 0px;
    padding: 10px;
}    
.bulb {
    background-color: #f6b718;
    border: none;
    color: black;
    cursor: pointer;
    margin: 2px;
    padding: 0;
    min-width: 24px;
    min-height: 24px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
     display:none !important;

    

  }
  select#MdocType, select#MdocOrig,select#PdocType,select#PdocOrig {
    width: 190px;
}
  .table>thead>tr>th {
    vertical-align: top;
    border-bottom: 1px solid #ddd;
}
 .comp {
    background-color: #337ab7;
    border: none;
    color: white;
    cursor: pointer;
    margin: 0px;
    padding: 0;
    min-width: 20px;
    min-height: 20px;
}
 
  

.bulb:hover, .bulb:active {
  background-color: #f9cf6a;
  color: white;
}


.bulb:focus {
    outline: none;
}
.ms-webpart-chrome-title {
  
    display: none;
    }
    
    label {
  
    font-weight: normal !important;
    padding: 10px 5px 0px 5px !important;

}
table.ms-formtable {margin-top: 85px !important;    }
.ms-formtoolbar td {background: #e6f2fa;height: 34px;}
input[value="Cancel"] {position:absolute;left:870px;}
input[value="Save"] {position:absolute;left:20px} 
  span.alert.alert-danger {
    padding: 5px;
}

.validateError {
  background: #f2dede !important; 
  }


.ms-formtoolbar {;
 
    margin-top: 20px;
    margin-bottom:10px;
}
 

table#docMissing , table#docPoor{
    table-layout: fixed;
}
.table {
    width: inherit;
    margin-bottom: 0px;
    
} 

.table>thead>tr>th {
    vertical-align: top !important;
    border-bottom: 1px solid #ddd;
}
.table th {
  font-weight: normal!important;

}

::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
    height: 7px;
    -webkit-overflow-scrolling: auto;
}
::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0,0,0,.5);
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
}
#tblMissing, #tblPoor {
	background:rgb(242, 242, 242);
}

#ui-datepicker-div {
z-index: 9999 !important;
}


.fixedTop {
    background-color: rgb(255, 255, 204);
    position: fixed;
    top: 38px;
    width: 99.3%;
    z-index: 10000;
    text-align: center;

    margin-bottom: 20px;
    padding-bottom: 2px;
    left: 0px;
   
}
.fixedBottom {
    background-color: #eefd0e;
    width: 1015px;
    z-index: 10000;
    text-align: center;

}
.fixedTop label {
   
    color: red;
    font-weight: bold !important;
}
.fixedBottom label {
   
    color: red;
    font-weight: bold !important;
}

    
 #select_1,#select_2 {
width:	285px;
}


input[id*="IOSaveItem"] {
  position:absolute;
  left:20px;
    
}  



</style>
 <link href="/sites/AmgenANZ_Portal/ComplianceAU/SiteAssets/Styles/bootstrap.css" rel="stylesheet">
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<link type="text/css" href="/sites/AmgenANZ_Portal/_catalogs/masterpage/ANZPortal/HONC/CSS/jquery-ui.css" rel="stylesheet">
<script src="/sites/AmgenANZ_Portal/_catalogs/masterpage/ANZPortal/JS/jquery.js"></script>
<script src="/sites/AmgenANZ_Portal/_catalogs/masterpage/ANZPortal/JS/jquery-ui.min.js"></script>




<script> 
function topFunction() {
debugger;
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 

  var date1C;
  var title1C;
  var date2C;
  var title2C;

  var Nocando;

	var tableType = "";
	var nextId = 1;
	var nextId2 = 1;
    
    var activeId = 0;
    var activeId2 = 0;
    var nextState;
    var currentState;
    var DateFieldToStamp;
    var DateField1;
    var DayFieldToUpdate;
    var canSummary1 =false;
    var canSummary2 = false;

    

    
    function validate(vtableID) {
    tableType = vtableID;
    
    
    
    if (vtableID == "docMissing") {
    
    if ( $("#Mdocumentname").val() == "" || $("#MdocType").val() == "Select ..." || $("#MdocOrig").val() =="Select ..." )
 	{alert("Please complete each field for the missing Document"); 
 	$("#Mdocumentname").focus();

 	return false;
    }else
    {
    return true;
    }    
    }else {
     if ( $("#Pdocumentname").val() == "" || $("#PdocType").val() == "Select ..." || $("#PdocOrig").val() =="Select ..." )
 	{alert("Please complete each field for Poor Quality Document"); 
 	$("#Pdocumentname").focus();

 	return false;
    }else
    {
    return true;
    }
    
    }
    }
    
    

    function MDisplay(ctl)  {
    
    //alert(ctl.name);
    if (ctl.name === "UpM") {
    
    tableType = "docMissing"
    
    }
    
      var row = $(ctl).parents("tr");
      var cols = row.children("td");
      
      if (tableType == "docMissing") {

      activeId = $($(cols[0]).children("button")[0]).data("id");
      $("#Mdocumentname").val($(cols[1]).text());
      $("#MdocType").val($(cols[2]).text());
      $("#MdocOrig").val($(cols[3]).text());
      $("#MdocumentComments").val($(cols[4]).text());

      // Change Update Button Text
      $("#updateButton").text("Update");
      
      }else {
      
      activeId2 = $($(cols[0]).children("button")[0]).data("id");
      $("#Pdocumentname").val($(cols[1]).text());
      $("#PdocType").val($(cols[2]).text());
      $("#PdocOrig").val($(cols[3]).text());
      $("#PdocumentComments").val($(cols[4]).text());

      // Change Update Button Text
      $("#updateButtonP").text("Update");

      
      
      }
      
    }

    function productUpdate() {
    debugger;
    
    if (tableType == "docMissing") {

    
      if ($("#updateButton").text() == "Update") {
        UpdateInTable(activeId);
      }
      else {
        AddToTable();
      }

      // Clear form fields
      formClear();

      // Focus to product name field
      $("#Mdocumentname").focus();
    }
    else {
    
    if ($("#updateButtonP").text() == "Update") {
        UpdateInTable(activeId2);
      }
      else {
        AddToTable();
      }

      // Clear form fields
      formClear();

      // Focus to product name field
      $("#Pdocumentname").focus();

    
    
    }
    
    }

    // Add to <table>
    function AddToTable() {
    
    if (tableType == "docMissing") {
    
      // First check if a <tbody> tag exists, add one if not
      if ($("#docMissing tbody").length == 0) {
        $("#docMissing").append("<tbody></tbody>");
      }

      // Append to table
      $("#docMissing tbody").append(
        BuildTableRow(nextId));

      // Increment next ID to use
      nextId += 1;
      
      }else {
      // First check if a <tbody> tag exists, add one if not
      if ($("#docPoor tbody").length == 0) {
        $("#docPoor").append("<tbody></tbody>");
      }

      // Append to table
      $("#docPoor tbody").append(
        BuildTableRow(nextId2));

      // Increment next ID to use
      nextId2 += 1;

      
      
     } 
    }

    // Update entry in <table>
    function UpdateInTable(id) {
    
     if (tableType == "docMissing") {
      // Find entry in <table>
      var row = $("#docMissing button[data-id='" + id + "']")
                .parents("tr")[0];
			}else {
	 var row = $("#docPoor button[data-id='" + id + "']")
                .parents("tr")[0];
			
			}
      // Add changed entry to table
      $(row).after(BuildTableRow(id));
      // Remove original product
      $(row).remove();

      // Clear form fields
      formClear();

      // Change Update Button Text
       if (tableType == "docMissing") {
      $("#updateButton").text("Add");
      
      }else 
      
      {
      $("#updateButtonP").text("Add");

      }
    }

    // Build a <table> row of Product data
  function BuildTableRow(id) {
      
        
        if (tableType == "docMissing") {
        var ret =
     	 "<tr>" +
        "<td>" +
         "<button type='button' class='comp' name='UpM' title='Click to Update Entry'" +
                  "onclick='MDisplay(this);' " +
                  
                  "data-id='" + id + "'>" +
                  "<span class='glyphicon glyphicon-edit' />" +
          "</button>" +
        "</td>" 
        
        
        
        ret = ret + 
        "<td>" + $("#Mdocumentname").val() + "</td>" +
        "<td>" + $("#MdocType").val() + "</td>" +
        "<td>" + $("#MdocOrig").val() + "</td>" +
        "<td>" + $("#MdocumentComments").val() + "</td>" 
         }else {
         
         var ret =
      "<tr>" +
        "<td>" +
         "<button type='button' class='comp' name='UpP' title='Click to Update Entry'" +
                  "onclick='MDisplay(this);' " +
                  
                  "data-id='" + id + "'>" +
                  "<span class='glyphicon glyphicon-edit' />" +
          "</button>" +
        "</td>" 
         ret = ret + 
        "<td>" + $("#Pdocumentname").val() + "</td>" +
        "<td>" + $("#PdocType").val() + "</td>" +
        "<td>" + $("#PdocOrig").val() + "</td>" +
        "<td>" + $("#PdocumentComments").val() + "</td>" 


		}  
        ret = ret +
        "<td>" +
          "<button type='button' class='comp'" +
                  "onclick='MDelete(this);' " +
                  
                  "data-id='" + id + "'>" +
                  "<span class='glyphicon glyphicon-remove' />" +
          "</button>" +
        "</td>" +
      "</tr>"

      return ret;
    }


    // Delete entry from <table>
    function MDelete(ctl) {
    
      $(ctl).closest("tr").remove();
    }

    // Clear form fields
    function formClear() {
    if (tableType == "docMissing") {
      $("#Mdocumentname").val("");
      $("#MdocType").val("Select ...");
      $("#MdocOrig").val("Select ...");
      $("#MdocumentComments").val("");
      }else {
      $("#Pdocumentname").val("");
      $("#PdocType").val("Select ...");
      $("#PdocOrig").val("Select ...");
      $("#PdocumentComments").val("");

      
      }
      
    }




 function toggledetails(ref) {
    debugger;
 // var x = document.getElementById(DIVid);
  var x = $(ref).closest('span')
  var y = x.context.nextElementSibling
  if ((y.style.display === "none")  || (y.style.display === "")){
    y.style.display = "block";
    //ref.innerHTML="less"
  } else {
    y.style.display = "none";
    //ref.innerHTML="more"

  }
}

 function expandallentries() {

		jQuery('.xdetails').slideDown();
        jQuery('.expandall-icon').hide();
		jQuery('.collapseall-icon').show();
		


}

function collapseallentries() {

		jQuery('.xdetails').slideUp();
		jQuery('.collapseall-icon').hide();
		jQuery('.expandall-icon').show();
		


}


function getParameterByName(name) {
//alert(window.location)
    var match = RegExp('[?&]' + name + '=([^&]*)')
                    .exec(window.location.search);

    return match ?
        decodeURIComponent(match[1].replace(/\+/g, ' '))
        : null;

}
function confirmExit() {
  var txt;
  var r = confirm("Press OK to Exit without Saving\n\nClick Cancel to return to Form.");
  if (r == true) {
  
  
    location.href=getParameterByName("Source")
  } else {
    txt = "You pressed Cancel!";
  }
 
}

function toggleAndChangeText(divToToggle) {
debugger;

     $(divToToggle).toggle();
     if ($('#divToToggle').css('display') == 'none') {
          //$('#aTag_1').html('<i class="fa fa-caret-square-o-right" style="margin-left:5px;font-size:24px"></i> Add Document ...');
     }
     else {
         // $('#aTag_1').html('<i class="fa fa-caret-square-o-down" style="margin-left:5px;font-size:24px"></i> Add Document');

           
     }
}
function doBreadCrumbs(rootStr,libraryLinkv,PageURL,libraryName){
debugger;

	var seperator = '<span style="height:16px;width:16px;position:relative;display:inline-block;overflow:hidden;"><img src="/_layouts/15/images/spcommon.png?rev=45#ThemeKey=spcommon" alt=":" style="position:absolute;left:-109px !important;top:-232px !important;"></span>'
 
	if (rootStr != '') {
	
		
		var libraryLink = decodeURIComponent(libraryLinkv)

			
			if(rootStr.indexOf(libraryLink) != -1){
				var path = rootStr.replace(libraryLink, ''); // Folder path, relative to Doc Lib
				var basepath = rootStr.replace(path, ''); // Doc Lib path
				
				var breadcrumb = '<span class="xbreadcrumb">';
				
				breadcrumb += '<span class = "wpcrumb"><a href="' + PageURL + '">' + libraryName + '</a></span>';
		
				
				// Create link for each sub-folder
				var folders = path.split('/');
				debugger;
				for(var i = 1; i < folders.length; i++){
				
					var currentfolder = folders[i];
					basepath += "/" + currentfolder;
				
					
					
	var folderlink = PageURL+'?RootFolder=' + encodeURIComponent(basepath)
					
					
					
					breadcrumb += seperator +' <span><a href="' + folderlink +  '"><i style ="padding:5px;" class="fa fa-folder-open colouricon"></i>' + currentfolder  + '</span></a>';
				}
				breadcrumb += '</span>';
				
				
				
				$('#bread').html(breadcrumb) 

				

			}
		
	}
}


var eventID;
var eventName;
var hcpname;
var sponsorID;
var ID;
var UpdateChecklist;
var Chk;
var isCVent;
var d2;
var EventDocChkListWP;
var iOS;


function createListItem(siteUrl,itemtitle,listtitle) {
debugger;
   x = document.getElementById('hcpname_2').value;
   
   if (x.length < 1){
   return alert("No Event Title entered!\nPlease add event title");
   }
   
   hcpname = x;
   
    var clientContext = new SP.ClientContext(siteUrl);
    var oList = clientContext.get_web().get_lists().getByTitle(listtitle);
        
    var itemCreateInfo = new SP.ListItemCreationInformation();
    this.oListItem = oList.addItem(itemCreateInfo);
    oListItem.set_item('Title', x);
    oListItem.set_item('EventID',eventID);
   
    oListItem.update();

    clientContext.load(oListItem);
    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded), 
        Function.createDelegate(this, this.onQueryFailed)
    );
}

function onQuerySucceeded() {
    //alert('Item created: ' + oListItem.get_id());
    sponsorID = oListItem.get_id();
    createFolder(sponsorID);

    
    
}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + 
        '\n' + args.get_stackTrace());
}


function createFolder(folderName) {
rootStr='%2Fsites%2FAmgenANZ_Portal%2FC3Prep%2FSponsorships'
debugger;
var siteUrl = _spPageContextInfo.webAbsoluteUrl;
var fullUrl = siteUrl + "/_api/web/folders";

$.ajax({
url: fullUrl,
type: "POST",
data: JSON.stringify({
'__metadata': { 'type': 'SP.Folder' },
'ServerRelativeUrl': rootStr + '/' + folderName

}),

headers: {

"accept": "application/json;odata=verbose",

"content-type": "application/json;odata=verbose",

"X-RequestDigest": $("#__REQUESTDIGEST").val()

},

success: onQuerySucceededFolder,

error: onQueryFailedFolder

});

}

function onQuerySucceededFolder() {
toggleAndChangeText('#AddFile_2')


createFolderSupport('Supporting Documents')

}

function onQueryFailedFolder() {

alert('Error! - Event already exists.');

}


function createFolderSupport(folderName) {
rootStr='/sites/AmgenANZ_Portal/C3Prep/Sponsorships/'+sponsorID; 
debugger;
var siteUrl = _spPageContextInfo.webAbsoluteUrl;
var fullUrl = siteUrl + "/_api/web/folders";



$.ajax({
url: fullUrl,
type: "POST",
data: JSON.stringify({
'__metadata': { 'type': 'SP.Folder' },
'ServerRelativeUrl': rootStr + '/' + folderName

}),

headers: {

"accept": "application/json;odata=verbose",

"content-type": "application/json;odata=verbose",

"X-RequestDigest": $("#__REQUESTDIGEST").val()

},

success: onQuerySucceededFolderSupport(),

error: onQueryFailedFolderSupport()

});

}

function onQuerySucceededFolderSupport() {

jQuery('#ManualRefresh').click();

}

function onQueryFailedFolderSupport() {

debugger;

jQuery('#ManualRefresh').click();

//alert('Error! - already exists.');

}



	ID =  getParameterByName("ID");
    
    eventID =ID;
    
    
    UpdateChecklist = getParameterByName("UpdateChecklist");
    Chk = getParameterByName("Chk");


    
    
    
  function _spBodyOnLoadWrapper() {  
  $('SPAN.ms-RadioText').unwrap().unwrap();
  $('SPAN.ms-RadioText:first-child').unwrap().unwrap();
}
  
 var section;
 var updateSection;
 var updateSectionMsg; 
 var canRAEUpdateStatus = false;
 
 var IsOffice = false
    var userEmail= _spPageContextInfo.userEmail
    var isSiteAdmin = _spPageContextInfo.isSiteAdmin
    
    
    var OfficeUsers = "krith@amgen.com|emorley@amgen.com|ymatsu01@amgen.comchandrew@amgen.com|ajones03@amgen.com|icolmer@amgen.com";
  
    if ((OfficeUsers.indexOf(userEmail) > -1) || (isSiteAdmin === true)) {
    
    IsOffice  = true;
    
    }

 if (_spPageContextInfo.userEmail == "pholla01@amgen.com") {

 //  IsOffice  = false;

 }


	var collListItemToBeUpdated = "";
    var listItemToBeUpdated = "";
    function getItemsToBeUpdated() 
    {
    debugger;
         var clientContext = new SP.ClientContext.get_current();
         var oList = clientContext.get_web().get_lists().getByTitle('ahmFeeForService');
         var camlQuery = new SP.CamlQuery();
         camlQuery.set_viewXml(
                          "<View><Query>" +
                          "<Where>" +
                                  "<Eq><FieldRef Name=\"EventID\"/><Value Type=\"Text\">" + eventID + "</Value></Eq>" +
                          "</Where>" +
                          "</Query></View>");
         collListItemToBeUpdated = oList.getItems(camlQuery);
         clientContext.load(collListItemToBeUpdated);
         clientContext.executeQueryAsync(getItemsToBeUpdatedSuccess, getItemsToBeUpdatedFailed);
    }
    function getItemsToBeUpdatedSuccess()
    {
         ListItemToBeUpdated= collListItemToBeUpdated.getEnumerator();
         debugger;
         updateMultipleListItems();
    }
    function getItemsToBeUpdatedFailed(sender, args)
    {
        alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
    }

    function updateMultipleListItems() 
    {   
        var itemArray = [];
        var clientContext = SP.ClientContext.get_current();
        var oList = clientContext.get_web().get_lists().getByTitle('ahmFeeForService');

         while(ListItemToBeUpdated.moveNext())
         {
            var oItem = ListItemToBeUpdated.get_current();
            var oListItem = oList.getItemById(oItem.get_id());
            oListItem.set_item('EventName', title2C);
			oListItem.set_item('DateOfEvent', d2.toISOString());			
            oListItem.update();
            itemArray.push(oListItem);
            clientContext.load(itemArray[itemArray.length-1]);
         }  
        clientContext.executeQueryAsync(updateMultipleListItemsSuccess, updateMultipleListItemsFailed);
    }
    function updateMultipleListItemsSuccess() 
    {    
        alert('Items Updated');
    }

    function updateMultipleListItemsFailed(sender, args) 
    {    
        alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
    } 
    

var collListItemToBeUpdated2 = "";
    var listItemToBeUpdated2 = "";
    function getItemsToBeUpdated2() 
    {
    debugger;
         var clientContext = new SP.ClientContext.get_current();
         var oList = clientContext.get_web().get_lists().getByTitle('ahmSponsorship');
         var camlQuery = new SP.CamlQuery();
         camlQuery.set_viewXml(
                          "<View><Query>" +
                          "<Where>" +
                                  "<Eq><FieldRef Name=\"EventID\"/><Value Type=\"Text\">" + eventID + "</Value></Eq>" +
                          "</Where>" +
                          "</Query></View>");
         collListItemToBeUpdated2 = oList.getItems(camlQuery);
         clientContext.load(collListItemToBeUpdated2);
         clientContext.executeQueryAsync(getItemsToBeUpdatedSuccess2, getItemsToBeUpdatedFailed2);
    }
    function getItemsToBeUpdatedSuccess2()
    {
         ListItemToBeUpdated2= collListItemToBeUpdated2.getEnumerator();
         debugger;
         updateMultipleListItems2();
    }
    function getItemsToBeUpdatedFailed2(sender, args)
    {
        alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
    }

    function updateMultipleListItems2() 
    {   
        var itemArray = [];
        var clientContext = SP.ClientContext.get_current();
        var oList = clientContext.get_web().get_lists().getByTitle('ahmSponsorship');

         while(ListItemToBeUpdated2.moveNext())
         {
            var oItem = ListItemToBeUpdated2.get_current();
            var oListItem = oList.getItemById(oItem.get_id());
            oListItem.set_item('EventName', title2C);
			oListItem.set_item('DateOfEvent', d2.toISOString());			
            oListItem.update();
            itemArray.push(oListItem);
            clientContext.load(itemArray[itemArray.length-1]);
         }  
        clientContext.executeQueryAsync(updateMultipleListItemsSuccess2, updateMultipleListItemsFailed2);
    }
    function updateMultipleListItemsSuccess2() 
    {    
        //alert('Items Updated');
    }

    function updateMultipleListItemsFailed2(sender, args) 
    {    
        alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
    } 
    
jQuery(document).ready(function() { 
 iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;  
debugger;
try {
 
 EventDocChkListWP = jQuery("span[title^='Event Information']").attr('id').split('WPQ')[1];
 
 
}
catch(err) {

 alert("Problem formatting page - Unexpected Web Part Layout")
  
}

outcome =$("option:selected", $("select[title='Event Status']")).text();
switch(outcome) {
  case "Submission info Pending":
    var newOptionsAdd = {"Submission info Pending": "Submission info Pending","Submission info Ready": "Submission info Ready"};
    
    currentState = "Submission info Pending";
    nextState = "Submission info Ready";
    DateFieldToStamp = "__DateSubInfoReady";
    DateField1 = "__DateSubInfoPending";
    DayFieldToUpdate = "__DaysSubInfoPending";
    updateSection = "Info";
    updateSectionMsg = "Please update the status field in the Event Information section (green)"
	canRAEUpdateStatus = true;
	$('#WebPartWPQ'+ EventDocChkListWP).before('<div class ="fixedTop"><div><i class="fa fa-info-circle" style="font-size:24px;color:red;padding:8px"></i>You can Save details at any time.. When ready to Submit details to C3 Hub Team, change the status to <b>' + nextState + '</b> and click <b>Submit<b><br>An automated system email notification will be sent to C3 Hub Team advising of status change<div><label>Status</label><select id="select_1"><option value="Select">Select</option></select></div>')
	$('.ms-formtable').after('<div class ="fixedBottom"><div><i class="fa fa-info-circle" style="font-size:24px;color:red;padding:8px"></i>You can Save details at any time.. When ready to Submit details to C3 Hub Team, change the status to <b>' + nextState + '</b> and click <b>Submit<b><br>An automated system email notification will be sent to C3 Hub Team advising of status change<div><label>Status</label><select id="select_2"><option value="Select">Select</option></select></div>')

	canSummary1 = true;


    
    break;
  case "Submission info Ready":
    var newOptionsAdd = {"Submission info Ready": "Submission info Ready","Info in C3 and Close Out pending":"Info in C3 and Close Out pending"};
  
 	currentState = "Submission info Ready";
    nextState = "Info in C3 and Close Out pending";
    DateFieldToStamp = "__DateCloseInfoReady";
    DateField1 = "__DateSubInfoReady";
	DayFieldToUpdate ="__DaysSubInfoReady";
	updateSection = "Summary";
	updateSectionMsg = "Please update the status field in the Event Summary Information section"
	canRAEUpdateStatus = false;


 break;
  
  case "Info in C3 and Close Out pending":
    var newOptionsAdd = {"Info in C3 and Close Out pending":"Info in C3 and Close Out pending","Close Out info Ready":"Close Out info Ready"};
    
    currentState = "Info in C3 and Close Out pending";
    nextState = "Close Out info Ready";
    DateFieldToStamp = "__DateSubInfoInC3"
	DateField1 = "__DateSubInfoInC3";	
	DayFieldToUpdate ="__DaysSubInfoInC3";
	updateSection = "Closeout";
	updateSectionMsg = "Please update the status field in the Event Closeout section (purple)"
	canRAEUpdateStatus = true;
	$('#WebPartWPQ'+ EventDocChkListWP).before('<div class ="fixedTop"><div><i class="fa fa-info-circle" style="font-size:24px;color:red;padding:8px"></i>You can Save details at any time.. When ready to Submit details to C3 Hub Team, change the status to <b>' + nextState + '</b> and click <b>Submit<b><br>An automated system email notification will be sent to C3 Hub Team advising of status change<div><label>Status</label><select id="select_1"><option value="Select">Select</option></select></div>')
	$('.ms-formtable').after('<div class ="fixedBottom"><div><i class="fa fa-info-circle" style="font-size:24px;color:red;padding:8px"></i>You can Save details at any time.. When ready to Submit details to C3 Hub Team, change the status to <b>' + nextState + '</b> and click <b>Submit<b><br>An automated system email notification will be sent to C3 Hub Team advising of status change<div><label>Status</label><select id="select_2"><option value="Select">Select</option></select></div>')

	canSummary2 = true;

    break;
    
    
  case "Close Out info Ready":
    var newOptionsAdd = {"Close Out info Ready":"Close Out info Ready","Completed in C3":"Completed in C3"};
    currentState = "Close Out info Ready";
    nextState = "Completed in C3";
    DateFieldToStamp = "__DateCompletedinC3";
	DateField1 = "__DateCloseInfoReady";
	DayFieldToUpdate = "__DaysCloseInfoReady";
	updateSection = "Summary";
	updateSectionMsg = "Please update the status field in the Event Summary Information section"
	canRAEUpdateStatus =false;

    
    
    break;
  case "Completed in C3":
    var newOptionsAdd = {"Completed in C3":"Completed in C3"};
    updateSection = "Summary";
    updateSectionMsg = "Please update the status field in the Event Summary Information section"
	canRAEUpdateStatus =false;
    
    break;
  default:
    
}


var $el = $("select[title='Event Status']");
var $el1 = $('#select_1');
var $el2 = $('#select_2');

$el.empty();$el1.empty();$el2.empty(); // remove old options
 $.each(newOptionsAdd, function(key,value) {
  $el.append($("<option></option>")
     .attr("value", value).text(key));
     
     $el1.append($("<option></option>")
     .attr("value", value).text(key));

     
     $el2.append($("<option></option>")
     .attr("value", value).text(key));

}); 
 
 var $selects=$('#select_1,#select_2').change(function(){
    $selects.not(this).val( $(this).val() );
    if ($(this).val().includes("Ready")){
    
    $("input[value='Save']").attr('value', 'Submit');
	} else {
	
	$("input[value='Submit']").attr('value', 'Save');

	}
    
})
 
 
 

evtitle = jQuery("input[title='Event Title Required Field']").val();
evtitleheading = '<a name="top" class="anchorlink"></a><table class="tblTitle"><tr><td id="evtitle" class="evtitletd" colspan="2">'+ evtitle + '<span id= "eventIDtd">Event ID: <span>' + eventID + '</span></span></td></tr></table>';
title1C = evtitle;
date1C = $("input[title='Date Of Event']").val();


ID =  getParameterByName("ID");
Nocando = getParameterByName("Nocando");

/*
if (Nocando == "1") {
 
$("input[title='Event Title Required Field']").prop("disabled", true);
$("input[title='Date Of Event']").prop("disabled", true);


}

*/

    
eventID =ID;
    

jQuery('.ms-formlabel:contains("__")').closest('tr').hide();

jQuery("input[title^='Event Type']").closest('tr').hide();
jQuery("input[title*='Count']").closest('tr').hide();
jQuery("input[title*='Confirm your sign-in sheet clearly show this']").closest('tr').hide();

jQuery('td.ms-formlabel:contains("yes_")').closest('tr').prev().children('td').css({"border": "none"})
jQuery('.ms-formlabel:contains("yes_")').css({"text-align": "right","font-style": "italic"});
jQuery('.ms-formlabel:contains("yes_")').text('Justification if Yes: ')

jQuery('td.ms-formlabel:contains("no_")').closest('tr').prev().children('td').css({"border": "none"});
jQuery('.ms-formlabel:contains("no_")').css({"text-align": "right","font-style": "italic"})
jQuery('.ms-formlabel:contains("no_")').text('Justification if No: ');

// use jquery date picker - sharepoint date picker too slow
$(function() {
    $("input[title='Date Of Event']").datepicker({dateFormat: 'dd/mm/yy'});
     $('a[onclick*="clickDatePicker"]').css('display','none');
});


_spBodyOnLoadWrapper(); 





var EventShell_1 = '<tr><td class="EventShell" colspan="2">Required Documents at submission</td></tr>';

$( "#shellChk_1" ).closest( "tr" ).before(EventShell_1);


var EventShell_2 = '<tr><td class="EventShell" colspan="2">Required Documents at closeout</td></tr>';


$("#shellChk_4").closest( "tr" ).before(EventShell_2);




var EventShell_3 = '<tr><td class="EventShell" colspan="2">Pre-submission questions</td></tr>';

$( "#shellChk_11" ).closest( "tr" ).before(EventShell_3);



var EventInfoTitle = '<tr><td colspan="2"><div class="ms-webpart-chrome-title" id="WebPartWPQ4_ChromeTitle"><span title="Event Information" id="WebPartTitleWPQ4" class="js-webpart-titleCell"><h2 style="text-align:justify;" class="ms-webpart-titleText"><nobr><span>Event Information</span><span id="WebPartCaptionWPQ4"></span></nobr></h2></span></div></td></tr>'


$("#ActualTotalAmount").closest( "tr" ).before('<tr><td colspan="2" style="border-bottom:none"><div class="ms-webpart-chrome-title"><span title="Event Closeout" class="js-webpart-titleCell"><h2 style="text-align:justify;" class="ms-webpart-titleText"><nobr><span>Event Closeout</span><span id="WebPartCaptionWPQ4"></span></nobr></h2></span></div></td></tr>' + '<tr><td class="EventShell" colspan="2">Close-out financial information</td></tr>')

$("#ActualNoOfIndividualSponsorships").closest( "tr" ).before('<tr><td class="EventShell" colspan="2" title="Close-out individual information">Close-out individual information</td></tr>');

$("#CtrlQ_1").closest( "tr" ).before('<tr><td class="EventShell" colspan="2" title="Event close-out questions">Event close-out questions</td></tr>');




debugger;
function scrollto() {



//var scroll = "Title"
var scroll = getParameterByName("ScrollTo");



debugger;
if (scroll) {

var x= $("[title*='" +scroll+"']");
$('#s4-workspace').animate({scrollTop: x.offset().top -180},200)

jQuery(x).next(".ms-wpContentDivSpace ").slideToggle(500)
    
}   
}

var isDlg = getParameterByName("IsDlg");
if (isDlg == "1") {
//setTimeout(scrollto, 300);
var tipz= '<a style=" padding:4px;float:right;" href="javascript:expandallentries()" class="expandall-icon" title="Display all tips" ><i class="fa fa-plus-circle" ></i> Display All Tips</a><a style="display:none; padding:5px;float:right;" href="javascript:collapseallentries()" class="collapseall-icon" title="Hide All Tips"><i class="fa fa-minus-circle"></i> Hide All Tips</a>'
var displayMessage="";


debugger;
section = getParameterByName("Section")

//if (_spPageContextInfo.userEmail != "pholla01@amgen.com") { // start 

if (section == "Info") {

isCVent= getParameterByName("CVent");
if (jQuery("input[title='__LockedInfoSection']").val() =="1") {
$("#s4-workspace").before('<div id="ContactC3HUB" style="min-width:1200px;background-color: #d9edf7; padding: 10px;display: -ms-flexbox; width: max-content;"><i class="fa fa-info-circle" style="font-size:24px;color:#31708f;padding-right:5px;vertical-align:middle;"></i>This section of the document is now locked<br>Please contact the C3 Hub Team if you have any queries<br><br>You can view the information by first closing this popup and then expanding the section -<br> <i>After closing this popup, Click section title bar or click the <b>[Expand Sections]</b> link at the top of the page</i></div>');
jQuery("#s4-workspace").css({"visibility":"hidden"});


} else if (isCVent =="1") {

$('#part1 > table.ms-formtable > tbody > tr').slice(1).hide();
var SubDocxStart = $('#part1 > table.ms-formtable  td:contains("Venue proposal")').closest("tr").index();
var SubDocxEnd  = $('#part1 > table.ms-formtable td:contains("Estimate for accommodation, transport, venue, hospitality, webinars and AV requirements")').closest("tr").index();

$('#part1 > table.ms-formtable > tbody > tr').slice(SubDocxStart, SubDocxEnd+1).each(function(e) {
  
   $(this).show();



});
jQuery('.ms-formlabel:contains("__Related to CVent")').closest('tr').show();
jQuery('.ms-formlabel:contains("Cvent Request Code")').closest('tr').show();
var EventShell_1 = '<tr><td class="EventShell" colspan="2">Required Documents at submission</td></tr>';

$( "#shellChk_1" ).closest( "tr" ).before(EventShell_1);


}
 else {

$('#part1 > table.ms-formtable > tbody > tr').slice(0, 18).hide(); // hide summary
$('#part1 > table.ms-formtable > tbody > tr').slice(66).hide(); // hide closeout
var SubDocx = $('.EventShell:contains("Required Documents at submission")').closest("tr").index(); 
var CloseDocx = $('.EventShell:contains("Required Documents at closeout")').closest("tr").index();

$('#part1 > table.ms-formtable > tbody > tr').slice(SubDocx, CloseDocx).each(function(e) {
  
  $(this).show(); // submission documents checklist display as vakidated on save

});


outcome =$("option:selected", $("select[title='Event Status']")).text();
if (outcome == 'Submission info Pending'){

displayMessage= '<span style="margin-left: 50px;background: yellow;padding: 10px;" class="infoX"><i class="fa fa-info-circle" style="font-size:24px;color:red;padding:8px"></i>You can Save at any time.. When ready, after completing all details, change the status to <b>Submission info Ready</b> and click Save</span>';
}
}
}else if (section == "Summary"){

//** **


debugger;
if (_spPageContextInfo.userEmail == "pholla01@amgen.com"){
//IsOffice = false;
}

if ((canSummary1 == false) && (canSummary2 == false)&& (IsOffice == false)) {

$('input[title="Event Title Required Field"]').prop("disabled", true);
//$('input[title="Event RAE"]').prop('disabled',true);
//$('div[title="Event RAE"]').css('background','#f8f8f8');

//value = jQuery("input[title='Event RAE']").attr('aria-label');
//$("#part1 > table.ms-formtable > tbody > tr:nth-child(6) > td.ms-formbody").text(value).css("color","silver");

$('.ms-formlabel:contains("Event RAE")').closest("tr").hide();
$('select[title="Functional Area of RAE"]').prop('disabled',true);
$('input[title="C3 Event ID"]').prop('disabled',true);
$('input[title="Date Of Event"]').prop('disabled',true);

$('input[id *="shellChk_1_"]').prop('disabled',true);
$('input[id *="shellChk_2_"]').prop('disabled',true);
$('input[id *="shellChk_3_"]').prop('disabled',true);

$('input[id *="shellChk_4_"]').prop('disabled',true);
$('input[id *="shellChk_5_"]').prop('disabled',true);
$('input[id *="shellChk_6_"]').prop('disabled',true);
$('input[id *="shellChk_7_"]').prop('disabled',true);
$('input[id *="shellChk_8_"]').prop('disabled',true);
$('input[id *="shellChk_9_"]').prop('disabled',true);


$('.sp-peoplepicker-delImage').hide();
}

else if ((canSummary1 == false) && (IsOffice == false)) {

$('input[title="Event Title Required Field"]').prop("disabled", true);
$('input[title="Event RAE"]').prop('disabled',true);
$('div[title="Event RAE"]').css('background','#f8f8f8');
$('.ms-formlabel:contains("Event RAE")').closest("tr").hide();
$('select[title="Functional Area of RAE"]').prop('disabled',true);
$('input[title="C3 Event ID"]').prop('disabled',true);
$('input[title="Date Of Event"]').prop('disabled',true);

$('input[id *="shellChk_1_"]').prop('disabled',true);
$('input[id *="shellChk_2_"]').prop('disabled',true);
$('input[id *="shellChk_3_"]').prop('disabled',true);
$('.sp-peoplepicker-delImage').hide();
}






$('#part1 > table.ms-formtable > tbody > tr').slice(18).hide();
tipz= "";
//***
$(".fixedTop").hide();$(".fixedBottom").hide();
}
else if (section == "Closeout")
{
if (jQuery("input[title='__LockedCloseOutSection']").val() =="1") {
$("#s4-workspace").before('<div id="ContactC3HUB" style="min-width:1200px;background-color: #d9edf7; padding: 10px;display: -ms-flexbox; width: max-content;"><i class="fa fa-info-circle" style="font-size:24px;color:#31708f;padding-right:5px;vertical-align:middle;"></i>This section of the document is now locked<br>Please contact the C3 Hub Team if you have any queries<br><br>You can view the information by first closing this popup and then expanding the section -<br> <i>After closing this popup, Click section title bar or click the <b>[Expand Sections]</b> link at the top of the page</i></div>');
jQuery("#s4-workspace").css({"visibility":"hidden"});


} 
else 
{


$('#part1 > table.ms-formtable > tbody > tr').slice(0,65).hide();
var EventCommentsIDX = $('.ms-formlabel:contains("Event Comments")').closest("tr").index();
$('#part1 > table.ms-formtable > tbody > tr').slice(EventCommentsIDX).hide();


var ClsDocx = $('.EventShell:contains("Required Documents at closeout")').closest("tr").index();
var ClsDocxEnd = $('.ms-formlabel:contains("Evidence of deliverable of service (photo of the event, sign in sheet)")').closest("tr").index();

$('#part1 > table.ms-formtable > tbody > tr').slice(ClsDocx, ClsDocxEnd+1).each(function(e) {
  
 $(this).show();


});






}

} 
else if (section == "Compliance"){
$(".fixedTop").hide();$(".fixedBottom").hide();
jQuery('.ms-formlabel:contains("Cvent Request Code")').closest('tr').hide();

$(".ms-formtoolbar").css({"margin-bottom":"600px"});

var IsEventMissingDocuments = $("input[ID *= '__EventMissingDocuments_']:checked").val();
if (IsEventMissingDocuments == "Yes") {

var MissingDocuments = '<tr  id="tblMissing"><td colspan="2"><div><div style="padding: 10px;"><b>Complete fields for each Missing Document and click Add </b></div><div><table id="docMissing" documents="" type="" class="table table-condensed table-striped">' + jQuery("textarea[title='__Event Missing Documents Details']").val() + '</table></div><div><button type="button" id="updateButton" class="btn btn-primary" onclick="if (validate(\'docMissing\')){productUpdate();}">Add</button></div></div></td></tr>'



}else {jQuery("textarea[title='__Event Missing Documents Details']").val("")

var MissingDocuments = '<tr  id="tblMissing"><td colspan="2"><div><div style="padding: 10px;"><b>Complete fields for each Missing Document and click Add </b></div><div><table id="docMissing" documents="" type="" class="table table-condensed table-striped"><thead><tr><th style="width:4%;"></th><th>Document Name<br><input type="text" value="" id="Mdocumentname" /></th><th>Document Type<br><select id="MdocType" name="MdocType"><option value="Select ...">Select ...</option><option value="Submission Document">Submission Document</option><option value="CloseOut Document">CloseOut Document</option></select> </th><th>Document Origin<br><select id="MdocOrig" name="MdocOrig"><option value="Select ...">Select ...</option><option value="Event">Event</option><option value="Individual Sponsorship">Individual Sponsorship</option><option value="Symposia">Symposia</option><option value="FFS">FFS</option></select> </th><th>Comments<br><input type="text" value="" id="MdocumentComments" /> </th><th style="width: 4%;"></th></tr></thead></table></div><div><button type="button" id="updateButton" class="btn btn-primary" onclick="if (validate(\'docMissing\')){productUpdate();}">Add</button></div></div></td></tr>'

}


var IsPoorDocuments = $("input[ID *= '__EventPoorQualityEntries_']:checked").val();
if (IsPoorDocuments == "Yes") {

var PoorDocuments = '<tr  id="tblPoor"><td colspan="2"><div><div style="padding: 10px;"><b>Complete fields for each Poor Quality Document and click Add </b></div><div><table id="docPoor" documents="" type="" class="table table-condensed table-striped">' + jQuery("textarea[title='__Event Poor Quality Entries Details']").val() + '</table></div><div><button type="button" id="updateButtonP" class="btn btn-primary" onclick="if (validate(\'docPoor\')){productUpdate();}">Add</button></div></div></td></tr>'




}else {jQuery("textarea[title='__Event Missing Documents Details']").val("")

var PoorDocuments = '<tr  id="tblPoor"><td colspan="2"><div><div style="padding: 10px;"><b>Complete fields for each Poor Document and click Add </b></div><div><table id="docPoor" documents="" type="" class="table table-condensed table-striped"><thead><tr><th style="width:4%;"></th><th>Document Name<br><input type="text" value="" id="Pdocumentname" /></th><th>Document Type<br><select id="PdocType" name="PdocType"><option value="Select ...">Select ...</option><option value="Submission Document">Submission Document</option><option value="CloseOut Document">CloseOut Document</option></select> </th><th>Document Origin<br><select id="PdocOrig" name="PdocOrig"><option value="Select ...">Select ...</option><option value="Event">Event</option><option value="Individual Sponsorship">Individual Sponsorship</option><option value="Symposia">Symposia</option><option value="FFS">FFS</option></select> </th><th>Comments<br><input type="text" value="" id="PdocumentComments" /> </th><th style="width: 4%;"></th></tr></thead></table></div><div><button type="button" id="updateButtonP" class="btn btn-primary" onclick="if (validate(\'docPoor\')){productUpdate();}">Add</button></div></div></td></tr>'

}






$( "#__EventMissingDocumentsType" ).closest( "tr" ).before(MissingDocuments);
$( "#__EventPoorQualityEntries" ).closest( "tr" ).after(PoorDocuments);




var EventCommentsIDX = $('.ms-formlabel:contains("Event Comments")').closest("tr").index();

$('#part1 > table.ms-formtable > tbody > tr').slice(0,EventCommentsIDX).hide();


var IsEventMissingDocuments = $("input[ID *= '__EventMissingDocuments_']:checked").val();
if (IsEventMissingDocuments != "Yes") {$('#tblMissing').hide();}

$("input[ID *= '__EventMissingDocuments_']").change(function(e){

    if(($(this)[0].value == 'Yes')) {
   

       $('#tblMissing').show();
       
    } else {
        $('#tblMissing').hide()    }

});

var IsEventPoorDocuments = $("input[ID *= '__EventPoorQualityEntries_']:checked").val();
if (IsEventPoorDocuments != "Yes") {$('#tblPoor').hide();}

$("input[ID *= '__EventPoorQualityEntries_']").change(function(e){
 

    if(($(this)[0].value == 'Yes')) {
   

       $('#tblPoor').show();
       
    } else {
        $('#tblPoor').hide()    }

});


	missingcount = $("#tblMissing tbody tr").length;
	poorcount = $("#tblPoor tbody tr").length;

	var nextId = missingcount+1
	var nextId2 = missingcount+1

}// end sexction


var eventStatus= $("#part1 > table.ms-formtable > tbody > tr:nth-child(1)").html();

$("#part1 > table.ms-formtable > tbody > tr:nth-child(1)").show();


//}//end

var dummystatus = '<select id="EventStatusDummy" title="EventStatus2" class="ms-RadioText"><option value="Submission info Pending" selected="selected">Submission info Pending</option><option value="Submission info Ready">Submission info Ready</option><option value="Info in C3 and Close Out pending">Info in C3 and Close Out pending</option><option value="Close Out info Ready">Close Out info Ready</option><option value="Completed in C3">Completed in C3</option></select>'


debugger;

var savehtml = $('[value=Save]')[0];
buttonhtml = savehtml.outerHTML

linkx ='<table id="cBar" class="navbar-fixed-top">'
linkx += '<tr><td>' + buttonhtml.replace('type="button"', 'type="button" style="position:relative;"')
//linkx += tipz;
linkx += '</td></tr></table>'

$("#s4-bodyContainer").before(linkx);
$("#cBar").appendTo ($("#part1 > table.ms-formtable > tbody > tr:nth-child(1)"));
debugger;



$("[title='Event Information'] > h2").css({"background":"#ccffcc"});
$("[title='Pre-submission questions'] > h2").css({"background":"#ffcc66"});
$("[title='Event Support Documents'] > h2").css({"background":"#ffffcc"});
$("[title='Event Document Checklist'] > h2").css({"background":"#ffffcc"});
$("[title='Event Closeout'] > h2").css({"background":"#ccccff"});


$('span.ms-metadata').each(function() {
    $(this).html('<div><button type="button" class="bulb" onclick="toggledetails(this)"><i class="fa fa-lightbulb-o"></i></button><div class="xdetails alert alert-info" > '+ $(this).text() + '</div>')
});


}

if (section != updateSection){
$('select[title="Event Status"]').prop("disabled", true);
$('select[title="Event Status"]').after("<div style='color:red'>" +  updateSectionMsg + "</div>" )

}else {

if ((canRAEUpdateStatus == false) && (IsOffice == false)) {

$('select[title="Event Status"]').prop("disabled", true);
$('select[title="Event Status"]').after("<div style='color:red'>" +  "C3 HUB Team to update Status" + "</div>" )

}

}
if (iOS == false) {$('.ms-formtoolbar:nth-child(2)').hide();$('.fixedBottom').hide();}
}); //jquery ready end


function extract(s,prefix, suffix) {
	
	var i = s.indexOf(prefix);
	if (i >= 0) {
		s = s.substring(i + prefix.length);
	}
	else {
		return '';
	}
	if (suffix) {
		i = s.indexOf(suffix);
		if (i >= 0) {
			s = s.substring(0, i).replace(/"/g, '');
		}
		else {
		  return '';
		}
	}
	return s;
};

  
 function WriteErrorMessage(inputElement, message){
   
    var errorMessageMarkup = "";
    errorMessageMarkup = '<span class="errorMessage ms-formvalidation ms-csrformvalidation"><span role="alert">' + message + '<br></span>';
    //$(inputElement).parent().empty();
    //$(inputElement).parent().append(errorMessageMarkup);
    $(inputElement).parent().addClass("alert-danger");

       return false;
}
 //******************************************* Save ***************************  
function PreSaveAction() {
debugger;

if (section != "Compliance"){

var dataStr3Plus ="";
var dataStr3 ="";
var dataStrDocx="";
var isValid = true;
if ((section == "Closeout") || (section == "Info")) {
//$("option:selected", $("select[title='Event Status']")).text($("option:selected", $('#select_1')).text());

$("select[title='Event Status']").val($('#select_1').val()).attr("selected", "selected");
}
outcome =$("option:selected", $("select[title='Event Status']")).text();


var exceptionFields = ["Additional Amgen contact (1&2)", "Alternate approver"];
var conditionalExceptionFields = ["Is the venue associated with sporting, leisure, gambling or recreation?","Is the venue room fully enclosed and away from public viewing?"];

var ComplianceAudit = jQuery("input[title='__ComplianceAudit']").val();




//remove any previous error messages
$("span.ms-formvalidation").remove();
$("span[role='alert']").remove();
$("table.ms-formtable td").removeClass("alert-danger"); 


if (outcome == "Submission info Ready") {

if (section == "Summary"){
value = jQuery("input[title='Event RAE']").attr('aria-label');

		if (typeof value === 'undefined'){
		//alert(fieldname[1])
		isValid = false;
		WriteErrorMessage("#EventRAE", "You cannot leave this blank.");
		alert("Please complete highlighted mandatory fields");
		return false;
		
		}else if (value.length == 0) {
		
		isValid = false;
		WriteErrorMessage("#EventRAE", "You cannot leave this blank.");
		alert("Please complete highlighted mandatory fields");
		return false;
		
		}


}
if (isCVent =="1") {

if (($('input:radio[name^="__CVent_"]:checked').val() == "Yes" ) && (jQuery("input[title='Cvent Request Code']").val().trim() == "")){
alert("Please enter the C3Number")
return false;
}
if ($('input:radio[name^="__CVent_"]:checked').val() == "No" ) {
alert("You are required to complete the Event Information section (green) as this is not related to a CVent");
jQuery("input[title='Cvent Request Code']").val("");
$("select[title='Event Status']").val("Submission info Pending");
return true;


}

var SubDocxStart = $('#part1 > table.ms-formtable  td:contains("Venue proposal")').closest("tr").index();
var SubDocxEnd  = $('#part1 > table.ms-formtable td:contains("Estimate for accommodation, transport, venue, hospitality, webinars and AV requirements")').closest("tr").index();

$('#part1 > table.ms-formtable > tbody > tr').slice(SubDocxStart, SubDocxEnd+1).each(function(e) {
  
   dataStr3 +=  extract($(this).html(),"<!--","-->");



});




}else {


var SubDocx = $('.EventShell:contains("Required Documents at submission")').closest("tr").index();
var CloseDocx = $('.EventShell:contains("Required Documents at closeout")').closest("tr").index();

$('#part1 > table.ms-formtable > tbody > tr').slice(SubDocx+1, CloseDocx).each(function(e) {
  
  dataStrDocx +=  extract($(this).html(),"<!--","-->");


});




$('#part1 > table.ms-formtable > tbody > tr').slice(20, 66).each(function(e) {
  
  dataStr3 +=  extract($(this).html(),"<!--","-->");

});

$('#part1 > table.ms-formtable > tbody > tr').slice(5, 6).each(function(e) {
  
  dataStr3Plus +=  extract($(this).html(),"<!--","-->");

});


}// end isCVent



debugger;
var Xarray =[];
var Xarray1 =[];
var Xarray2 =[];
var Xarray3 =[];
Xarray3 =  dataStrDocx.split(/\r?\n/);
Xarray2 =  dataStr3.split(/\r?\n/);
Xarray1 = dataStr3Plus.split(/\r?\n/);
Xarray1.pop();
Xarray3.pop();

Xarray = Xarray3.concat(Xarray2);





var i, l =  Xarray.length;
var fieldname;
var fieldtype;
var fieldInternalName;
var CondExceptions = false;
for (i = 0; i < l-1; i++) {

fieldname = Xarray[i].split("FieldName=");
fieldInternalName = Xarray[i+1].split("FieldInternalName=");
fieldtype = Xarray[i+2].split("FieldType=");

fieldname[1]=fieldname[1].replace(/&amp;/g, '&').replace(/&#39;/g, "'");
CondExceptions = false;

var n = exceptionFields.includes(fieldname[1]);

if (n) {
fieldtype[1]= "Exceptions";
}
var n2 =conditionalExceptionFields.includes(fieldname[1]);

if (n2) {

CondExceptions = true;
};

switch (fieldtype[1]) {

	
  case 'Exceptions':
	break;
case 'SPFieldLookup':
debugger;
	if ($("option:selected", $("select[title='"+fieldname[1] +"']")).text() == "(None)") {
	isValid = false;
		WriteErrorMessage("#" + fieldInternalName[1], "You cannot leave this blank.");

	
	}
	break;
		

  case 'SPFieldUserMulti':
  case 'SPFieldUser':
  value = jQuery("input[title='"+fieldname[1] + "']").attr('aria-label');

    if (typeof value === 'undefined'){
		//alert(fieldname[1])
		isValid = false;
		WriteErrorMessage("#" + fieldInternalName[1], "You cannot leave this blank.");

		
		}else if (value.length == 0) {
		
		isValid = false;
		WriteErrorMessage("#" + fieldInternalName[1], "You cannot leave this blank.");

		
		}

    break;
  case 'SPFieldText':
  case 'SPFieldDateTime':

  value = jQuery("input[title='"+fieldname[1] + "']").val();

    if ((typeof value === 'undefined') || (value.length == 0)){
    isValid = false;

		WriteErrorMessage("#" + fieldInternalName[1], "You cannot leave this blank.");

		
		}

    break;

  
  
  case 'SPFieldChoice':
 if(fieldname[1].indexOf('?') > 0 ){
  //radio or checkbox
  if(typeof($('input:radio[name^="'+fieldInternalName [1]+'_"]:checked').val()) === "undefined"){
    isValid = false;
    WriteErrorMessage("#" + fieldInternalName[1], "You cannot leave this blank.");
  } else {
    if (CondExceptions) {
      if($('input:radio[name^="'+fieldInternalName [1]+'"]:checked').val() === "No"){
        if (fieldname[1] == "Is the venue associated with sporting, leisure, gambling or recreation?"){
          exceptionFields.push ("yes_1");
        } else if (fieldname[1] == "Are we providing Accommodation ?"){
          exceptionFields.push ("Number of nights", "Estimated Accommodation Amount (please request a quote from CWT to justify)", "Does this amount include GST?")
        } else if (fieldname[1] == "Are we providing Air Transport ?"){
          exceptionFields.push ("Air Transport Class", "Estimated air transport amount (please request a quote from CWT to justify)", "Does this amount include GST ?", "List Departure & Destination Cities", "Is it a One Way/Round Trip?", "Travel Comments")
        } else if (fieldname[1] == "Are we providing ground transport ?"){
          exceptionFields.push ("Estimated ground transport amount", "Does this amount include GST.?", "List Departure and Destination Cities", "Is it a One Way/Round Trip ?", "Travel Comments.")
        } else {
          if ($('input:radio[name^="' + fieldInternalName[1] + '"]:checked').val() === "Yes"){
            if (fieldname[1] == "Is the venue room fully enclosed and away from public viewing?"){
              exceptionFields.push ("no_1");
            } 
          }
        }
      }
    }
  }
} else {
  if ($("select[title='"+fieldname[1] + "']").val() === "") {
    isValid = false;
    WriteErrorMessage("#" + fieldInternalName[1], "You cannot leave this blank.");
  }
} 
           
 
    break;
  case 'SPFieldBoolean':
  
  $('input:checkbox[name^="'+fieldInternalName [1]+'"]').is(function(){

    var checked = $(this).is(":checked"); //is checkbox checked (true/false)?
    str += checked
    
});

  
   if(typeof($('input:checkbox[title^="'+fieldname[1] +'"]:checked').val()) === "undefined"){
   isValid = false;

            WriteErrorMessage("#" + fieldInternalName[1], "You cannot leave this blank.");

   }

    
    break
    
case 'SPFieldNote':

if ($("textarea[title='"+fieldname[1] + "']").val() === "") {
  
  isValid = false;

  WriteErrorMessage("#" + fieldInternalName[1], "You cannot leave this blank.");

    }



break    
    
  default:
    console.log('Sorry, we are out of ' + fieldtype[1] + '.');
}



i++;
i++;

} // end for 




if ((isValid == false) && (section == "Info"))  {
alert("Please complete highlighted mandatory fields");
return false;
}else if (isValid == false) {

alert("You must first complete the Event Information section (green) before you can change the status to \nSubmission info Ready")
return false;
}
else
{
jQuery("input[title='__LockedInfoSection']").val('1');

}

} else if (outcome == "Close Out info Ready") // end check for status change to ready

{
debugger;
var ClsDocx = $('.EventShell:contains("Required Documents at closeout")').closest("tr").index();
var ClsDocxEnd = $('.ms-formlabel:contains("Evidence of deliverable of service (photo of the event, sign in sheet)")').closest("tr").index();

$('#part1 > table.ms-formtable > tbody > tr').slice(ClsDocx+1, ClsDocxEnd+1).each(function(e) {
  
  dataStrDocx +=  extract($(this).html(),"<!--","-->");


});





var CloseOutIDX_1 = $('.ms-formlabel:contains("Actual Total Amount")').closest("tr").index();
var CloseOutIDX_2 = $('.ms-formlabel:contains("Close-out Comments")').closest("tr").index();

$('#part1 > table.ms-formtable > tbody > tr').slice(CloseOutIDX_1, CloseOutIDX_2+1).each(function(e) {
  
  dataStr3 +=  extract($(this).html(),"<!--","-->");

});

var Xarray =[];
var Xarray1 =[];
var Xarray2 =[];

Xarray1 =  dataStr3.split(/\r?\n/);
Xarray2 =  dataStrDocx.split(/\r?\n/);
Xarray1.pop();
Xarray2.pop();


Xarray = Xarray2.concat(Xarray1);


debugger;

exceptionFields = [];
conditionalExceptionFields = [];
conditionalExceptionFields2 =[];







var i, l =  Xarray.length;
var fieldname;
var fieldtype;
var fieldInternalName;
var CondExceptions = false;
var CondExceptions2 = false;

for (i = 0; i < l-1; i++) {

fieldname = Xarray[i].split("FieldName=");
fieldInternalName = Xarray[i+1].split("FieldInternalName=");
fieldtype = Xarray[i+2].split("FieldType=");

fieldname[1]=fieldname[1].replace(/&amp;/g, '&').replace(/&#39;/g, "'");
CondExceptions = false;
CondExceptions2 = false;


var n = exceptionFields.includes(fieldname[1]);

if (n) {
fieldtype[1]= "Exceptions";
}
var n2 =conditionalExceptionFields.includes(fieldname[1]);

if (n2) {

CondExceptions = true;
};

var n3 =conditionalExceptionFields2.includes(fieldname[1]);

if (n3) {
CondExceptions = true;
CondExceptions2 = true;
};




switch (fieldtype[1]) {

	
  case 'Exceptions':
	break;
	
case 'SPFieldLookup':
debugger;
	if ($("option:selected", $("select[title='"+fieldname[1] +"']")).text() == "(None)") {
	isValid = false;
		WriteErrorMessage("#" + fieldInternalName[1], "You cannot leave this blank.");

	
	}
	break;
		
  case 'SPFieldUserMulti':
  case 'SPFieldUser':
  value = jQuery("input[title='"+fieldname[1] + "']").attr('aria-label');

    if (typeof value === 'undefined'){
		//alert(fieldname[1])
		isValid = false;
		WriteErrorMessage("#" + fieldInternalName[1], "You cannot leave this blank.");

		
		}else if (value.length == 0) {
		
		isValid = false;
		WriteErrorMessage("#" + fieldInternalName[1], "You cannot leave this blank.");

		
		}

    break;
  case 'SPFieldText':
  case 'SPFieldDateTime':


  value = jQuery("input[title='"+fieldname[1] + "']").val();

    if ((typeof value === 'undefined') || (value.length == 0) || (value == "(None)")){
    isValid = false;

		WriteErrorMessage("#" + fieldInternalName[1], "You cannot leave this blank.");

		
		}

    break;

  
  
  case 'SPFieldChoice':
  
  if(fieldname[1].indexOf('?') > 0 ){
  //radio or checkbox
  
   			if(typeof($('input:radio[name^="'+fieldInternalName [1]+'_"]:checked').val()) === "undefined"){
   			isValid = false;

            WriteErrorMessage("#" + fieldInternalName[1], "You cannot leave this blank.");

   			}else {
   			
   			if (CondExceptions) {
   			
   			if (CondExceptions2) {
   			
   			   if($('input:radio[name^="'+fieldInternalName [1]+'"]:checked').val() === "Yes"){
   				if (fieldname[1] == "Is the venue room fully enclosed and away from public viewing?"){
					exceptionFields.push("no_1")
					}
					else if (fieldname[1] == "Is the amount of funding Amgen will provide consistent with the tangible benefit(s) Amgen will receive ?"){
   					exceptionFields.push ("text_1");
   					}
   					else if (fieldname[1] == "Confirm sponsorship / partnership meets a legitimate business / scientific need for Amgen?"){
					exceptionFields.push ("text_2");
					}
					else if (fieldname[1] == "Is the venue compliant with local code as well as meet compliance by having a private room with audio / visual facilities?"){
					exceptionFields.push ("text_3")
					}
					else if (fieldname[1] == "Is the request in accordance with the Country Requirements Overview?"){
					exceptionFields.push ("text_4")
					}
					else if (fieldname[1] == "Is the requested amount within budgeted amount?"){
					exceptionFields.push ("text_5")
					
					}
					else if (fieldname[1] == "Confirm proposed venue is in accordance with Country Requirements of the country where the event, project or partnership will take place?"){
					exceptionFields.push ("text_6")
					}
					else if (fieldname[1] == "Does the audience consist of Members of the Healthcare Community only?"){
					exceptionFields.push ("text_7")
					}
					 



					
					
					

   			
   			
   			}}
   			
   			else {
   			
   				if (fieldname[1] == "Education relates to ?"){
   				
   				if($('input:radio[name^="'+fieldInternalName [1]+'"]:checked').val() != "Other"){

					exceptionFields.push ("Other - please specify")

					}
					
					}else {
   			
   			
   			    if($('input:radio[name^="'+fieldInternalName [1]+'"]:checked').val() === "No"){
   				if (fieldname[1] == "Is the event co-funded with another organisation?"){
   					exceptionFields.push ("If yes, co-funded details")
   					}else if (fieldname[1] == "Education relates to"){
					exceptionFields.push ("Air Transport Class", "Estimated air transport amount (please request a quote from CWT to justify)","Does this amount include GST ?","List Departure & Destination Cities","Is it a One Way/Round Trip?","Travel Comments")

					
					
					}else if (fieldname[1] == "Are we providing ground transport ?"){
					
					exceptionFields.push ("Estimated ground transport amount", "Does this amount include GST.?","List Departure and Destination Cities","Is it a One Way/Round Trip ?","Travel Comments.")


					
					}
					}
					
					}
   			
   			
   			}}
   			
   			}
 
  }/*else {
  
  
  if (($("select[title='"+fieldname[1] + "']").val() === "") || ($("select[title='"+fieldname[1] + "']").val() === "(None)")) {
  
  isValid = false;

  WriteErrorMessage("#" + fieldInternalName[1], "You cannot leave this blank.");

    }
   }  
   */
           
 
    break;
  case 'SPFieldBoolean':
  
  $('input:checkbox[name^="'+fieldInternalName [1]+'"]').is(function(){

    var checked = $(this).is(":checked"); //is checkbox checked (true/false)?
    str += checked
    
});

  
   if(typeof($('input:checkbox[title^="'+fieldname[1] +'"]:checked').val()) === "undefined"){
   isValid = false;

            WriteErrorMessage("#" + fieldInternalName[1], "You cannot leave this blank.");

   }

    
    break
    
case 'SPFieldNote':

if ($("textarea[title='"+fieldname[1] + "']").val() === "") {
  
  isValid = false;

  WriteErrorMessage("#" + fieldInternalName[1], "You cannot leave this blank.");

    }



break    
    
  default:
    console.log('Sorry, we are out of ' + fieldtype[1] + '.');
}



i++;
i++;

} // end for 

if (isValid == false) {

alert("Please complete highlighted mandatory fields");

return false;
}
else
{

jQuery("input[title='__LockedCloseOutSection']").val('1');

}


}// end status block


var rae = jQuery("input[title='Event RAE']").attr('aria-label');


if (typeof rae !== typeof undefined && rae !== false) {
    jQuery("input[title='__rae']").val(rae);
}
jQuery("input[title='__type']").val('Amgen Hosted Event');
jQuery("input[title='__status']").val(outcome);
var C3ID = jQuery("input[title='C3 Event ID']").val().trim();

jQuery("input[title='__C3ID']").val(C3ID);


if (outcome == 'Info in C3 and Close Out pending') {


if (C3ID .length < 1){
var errorHtml = '</br><span class="ms-formvalidation"><span role="alert">Please enter C3 ID<br></span></span>';
        $("span[id ^= 'C3EventID']").after(errorHtml);
        
         alert("Please enter ID")
return false;
}
}else if ((outcome == 'Submission info Ready') && (jQuery("input[title='__SendOnReady']").val() !="2")){

jQuery("input[title='__SendOnReady']").val('1');
jQuery("input[title='__LockedInfoSection']").val('1');


}else if ((outcome == 'Close Out info Ready') && (jQuery("input[title='__SendOnReady']").val() !="4")){


jQuery("input[title='__SendOnReady']").val('3');

}

}
if (section == "Compliance"){
jQuery("textarea[title='Event Missing Documents Count']").val();
jQuery("textarea[title='Event Poor Entries Count']").val();





var IsEventMissingDocuments = $("input[ID *= '__EventMissingDocuments_']:checked").val();
if (IsEventMissingDocuments == "Yes") {

jQuery("textarea[title='__Event Missing Documents Details']").val($("#docMissing").html()) 





missingcount = $("#tblMissing tbody tr").length;
if (missingcount < 1) {
alert("Please complete details for all missing documents")
return false;

}

jQuery("input[title='Event Missing Documents Count']").val(missingcount); 

var dataMissing = [];
jQuery.each(jQuery('#docMissing tr:gt(0)'), function(i,e ) {
   dataMissing.push(jQuery('td', e).map(function(i,e) {
                                     return e.innerHTML; 
                                  }).get()
             );
});

var docdetails = "";
debugger;

for (i = 0; i < dataMissing.length; i++) {

docdetails += dataMissing[i][1] + " - " + dataMissing[i][2]  + " - " + dataMissing[i][3] + " - " + dataMissing[i][4] + "\r\n"

}

jQuery("textarea[title='__EventMissingDocumentName']").val(docdetails) 





	



}else {jQuery("textarea[title='__Event Missing Documents Details']").val("");
jQuery("input[title='Event Missing Documents Count']").val(0); 
jQuery("textarea[title='__EventMissingDocumentName']").val("") 



}

var IsPoorQualityEntries = $("input[ID *= '__EventPoorQualityEntries_']:checked").val();
if (IsPoorQualityEntries == "Yes") {

debugger;

jQuery("textarea[title='__Event Poor Quality Entries Details']").val($("#docPoor").html()) 

poorcount = $("#tblPoor tbody tr").length;
if (poorcount < 1) {
alert("Please complete details for all Poor Quality Entries")
return false;

}



jQuery("input[title='Event Poor Entries Count']").val(poorcount); 


var dataPoor = [];
jQuery.each(jQuery('#docPoor tr:gt(0)'), function(i,e ) {
   dataPoor.push(jQuery('td', e).map(function(i,e) {
                                     return e.innerHTML; 
                                  }).get()
             );
});

var docdetails2 = "";
debugger;

for (i = 0; i < dataPoor.length; i++) {

docdetails2 += dataPoor[i][1] + " - " + dataPoor[i][2]  + " - " + dataPoor[i][3] + " - " + dataPoor[i][4] + "\r\n"

}

jQuery("textarea[title='__EventPoorQualityEntriesName']").val(docdetails2) 










}else {jQuery("textarea[title='__Event Poor Quality Entries Details']").val("");

jQuery("input[title='Event Poor Entries Count']").val(0); 


}






}


debugger;



IsEventClosed = $("input[title='__EventClosed']").val();


if (IsEventClosed != "1") {


var evDate = $("input[title='Date Of Event']").val().split('/');

var evDateX = new Date(evDate[1] + "/" + evDate[0] + "/" + evDate[2]); 


if (outcome == nextState) { // if new status
//if (currentState != "Completed in C3") {

	var today = new Date();   
    var dd = today.getDate();   
    var mm = today.getMonth() + 1;   
    var yyyy = today.getFullYear();   
    if(dd<10) {
    dd = '0'+dd
    } 

    if(mm<10) {
    mm = '0'+mm
    } 

    today = dd + '/' + mm + '/' + yyyy; 


$("input[title='" + DateFieldToStamp + "']").val(today);

debugger;
if ((($("input[title='" + DateField1 + "']").val()).length ) > 1) {

var x =$("input[title='" + DateField1 + "']").val().split('/');
var date1 = new Date(x[1] + "/" + x[0] + "/" + x[2]); 
var date2 = new Date(mm + "/" + dd + "/" + yyyy);

var Difference_In_Time = date2.getTime() - date1.getTime(); 
var Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24)); 

$("input[title='" + DayFieldToUpdate + "']").val(Difference_In_Days);


daysSep ='<div class="separator">' + Difference_In_Days + ' day(s) </div>'
var metrics = $("textarea[title='__DspStatusMetrics']").val();
metrics += '<div class="dspMetric">' + currentState + daysSep +  outcome + '</div>'
$("textarea[title='__DspStatusMetrics']").val(metrics);



if ((outcome == "Submission info Ready" )  ||  (outcome == "Close Out info Ready") ||  ( outcome == "Completed in C3" ) || ( outcome == "Info in C3 and Close Out pending")  ) {
var todaydate = new Date();

switch(outcome) {
  case "Submission info Ready":
  Difference_In_Time = evDateX.getTime() - date1.getTime();
  Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24)); 

  
  $("input[title='__RAEEventPreparationDays']").val(Difference_In_Days);
   
   var reportLabel = "RAE Event Preparation";
    
    
    
    break;
    
    
  case "Close Out info Ready":
  
  Difference_In_Time = todaydate.getTime() - evDateX.getTime()
  Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24)); 

  
  $("input[title='__RAEEventCloseOutDays']").val(Difference_In_Days);
  
  var reportLabel = "RAE Event Close Out";
  
   
    break;
  case "Info in C3 and Close Out pending":
  
  var x =$("input[title='__DateSubInfoReady']").val().split('/');
  
  var date1 = new Date(x[1] + "/" + x[0] + "/" + x[2]);
  
  
  Difference_In_Time = date2.getTime() - date1.getTime(); 
  Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));  
  
  $("input[title='__C3HubSubmissionDays']").val(Difference_In_Days);
  
  var reportLabel = "C3 Hub Submission" ;
  
 
    break;
    
 case "Completed in C3":
  
  var x =$("input[title='__DateCloseInfoReady']").val().split('/');
  
  var date1 = new Date(x[1] + "/" + x[0] + "/" + x[2]);
  
  
  Difference_In_Time = date2.getTime() - date1.getTime(); 
  Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));  
  
  $("input[title='__C3HubCloseOutDays']").val(Difference_In_Days);
  $("input[title='__EventClosed']").val("1");
  
  
  
  
  var reportLabel = "C3 Hub close Out" ;

  
 
    break;
   
    
  default:
    
    
    }

daysSep ='<div class="separator">' + Difference_In_Days + ' day(s) </div>'
var metricsX = $("textarea[title='__DspComplianceReport']").val();
metricsX += '<div class="dspMetric">' + reportLabel + daysSep + '</div>'
$("textarea[title='__DspComplianceReport']").val(metricsX);

}


//}
}
}
}
if ($('input:radio[name^="__CVent_"]:checked').val() == "No" ) {
jQuery("input[title='Cvent Request Code']").val("");

}
debugger;
//if (_spPageContextInfo.userEmail == "pholla01@amgen.com") {

if (Nocando == "1") {

date2C = $("input[title='Date Of Event']").val();
title2C = jQuery("input[title='Event Title Required Field']").val();
if ((date1C != date2C)|| (title1C !=title2C)) {

var d = date2C.split("/");
	var dd = parseInt(d[0]);
	var mm = d[1];
	var y =  d[2];

	d2 = new Date(y , mm-1, dd);

IDsE = getParameterByName("IDsE");
IDsS  = getParameterByName("IDsS");

if (IDsE != "undefined") {


/*
a1 = IDsE.split(',');
var a2 = [];
var i, l =  a1.length;
for (i = 0; i < l; i++) {
a2[i] = [a1[i],title2C,date2C];


}
*/


	
	

	
getItemsToBeUpdated(); 

if (IDsS != "undefined") {

	
	

	
getItemsToBeUpdated2(); 



}
}
}

}
//}



//if (_spPageContextInfo.userEmail != "pholla01@amgen.com") {

return true;
//}else
//{
//return false;}

} // end PreSaveAction
   
  

    
</script>

