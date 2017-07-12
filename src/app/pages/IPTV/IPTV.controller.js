/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides.IPTV')
      .controller('IPTVCtrl', IPTVCtrl);
  function IPTVCtrl($scope, $state, $window,$document, $timeout,User) {
    console.log("hi");
    $scope.state=$state;
    console.log($scope.state);
    $scope.standardItem = {};
    $scope.TagDep = [
      {label: 'BD Department', value: 'BD Department'},
      {label: 'Customer Support', value:'Customer Support'},
      {label: 'Tech Support', value:'Tech Support'}
    ];

    $scope.commisionSelectItems = [
      {label: 'Persentage', value: 'Persentage'},
      {label: 'Fixed', value:'Fixed'}
    ];
    $scope.IPTVmodels = [
      {label: 'Clearance $129.99', value: 'BD Department'},
      {label: 'Z1', value:'Z1'},
      {label: 'Z2', value:'Z2'},
      {label: 'Z3', value:'Z3'},
      {label: 'Z4 Freedom', value:'Z4 Freedom'}
    ];
    $scope.IPTVsubscriptions=[
      {label: 'No Subscription', value: 'No Subscription'},
      {label: '1 Month', value:'1 Month'},
      {label: '3 Month', value:'3 Month'},
      {label: '6 Month', value:'6 Month'},
      {label: '1 Year', value:'1 Year'}
    ];
    $scope.subscriptions=$scope.IPTVsubscriptions[0];

    $scope.IPTVserver=[
      {label: 'Canadian GTA Price', value: 'Canadian GTA Price'},
      {label: 'HD', value:'HD'},
      {label: 'HD * Premium', value:'HD * Premium'},
      {label: 'HD * Premium ANNUAL', value:'HD * Premium ANNUAL'},
      {label: 'HD & PPV * Premium', value:'HD & PPV * Premium'},
      {label: 'HD & PPV * Premium ANNUAL', value:'HD & PPV * Premium ANNUAL'},
      {label: 'HD ANNUAL', value:'HD ANNUAL'}
    ];

    $scope.IPTVcurrency=[
      {label: 'USD', value:'USD'},
      {label: 'AUD', value: 'AUD'},
      {label: 'CAD', value:'CAD'},
      {label: 'EUR', value:'EUR'},
      {label: 'GBP', value:'GBP'},
      {label: 'GHS', value:'GHS'}
    ];
    $scope.currency=  $scope.IPTVcurrency[0];

    $scope.IPTVShippingMethod=[
      {label: 'Standard', value: 'Standard'},
      {label: 'Express', value:'Express'}
    ];

      $scope.shippingMethod=  $scope.IPTVShippingMethod[0]

      $scope.IPTVpaymentMethod=[
        {label: 'Credit Card', value: 'Credit Card'},
        {label: 'Debit Card', value:'Debit Card'},
        {label: 'Paypal', value:'Paypal'}
      ];

      $scope.IPTVautoRenew=[
        {label: 'No', value: 'No'},
        {label: 'Yes', value:'Yes'}
      ];
      $scope.autoRenew=$scope.IPTVautoRenew[0];


    // $scope.PickTagDep=$scope.commisionSelectItems[0];
    $scope.smartTablePageSize = 10;

    function datepickerCtrl($scope) {

        $scope.dt = new Date();
        $scope.options = {
            showWeeks: false
        };

    }


    //Starting sales Sunmary module

    $scope.tConvert=function (time) {
        // Check correct time format and split into components
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { // If time format correct
            time = time.slice (1);  // Remove full string match value
            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join (''); // return adjusted time or original string

    }
    $scope.month = new Array();
    $scope.month[0] = "Jan";
    $scope.month[1] = "Feb";
    $scope.month[2] = "Mar";
    $scope.month[3] = "Apr";
    $scope.month[4] = "May";
    $scope.month[5] = "Jun";
    $scope.month[6] = "Jul";
    $scope.month[7] = "Aug";
    $scope.month[8] = "Sep";
    $scope.month[9] = "Oct";
    $scope.month[10] = "Nov";
    $scope.month[11] = "Dec";



        var  i=0;
        $scope.SalesSummary= function() {


            $scope.ResselrsArray=[]
            $scope.packages1=[]
            // $scope.smartTableData=[] ;
            User.SalesSummary()
                .success(function(data) {
                   console.log(data)
                   var dataReq=data.sales
                   $scope.dataReq=data.sales
                  //  $scope.myData=$scope.myData.concat(dataReq);
                   dataReq.forEach(function(dataReq){
                     $scope.date= new Date(dataReq.date);
                     $scope.expdate=new Date(dataReq.expiry);
                     //console.log($scope.date);
                     var date = $scope.month[$scope.date.getMonth()]+' '+ $scope.date.getDate()+' '+ $scope.date.getFullYear() ;
                      var exp = $scope.month[$scope.expdate.getMonth()]+' '+ $scope.expdate.getDate()+' '+ $scope.expdate.getFullYear() ;
                    //  dataReq.dateCreated=date;

                     $scope.time0= $scope.date.getHours()+":"+($scope.date.getMinutes()<10?'0':'')+ $scope.date.getMinutes();
                     $scope.time1=$scope.tConvert($scope.time0)

                     dataReq.date= date +' '+$scope.time1;
                     dataReq.expiry= exp ;
                       dataReq.User_V = i;
                       i++;
                      //  $scope.smartTableData.push($scope.myData,dataReq);

                        // $scope.smartTableData=
        })
        $scope.smartTableData=data.sales;
        // angular.copy(data.sales,$scope.smartTableData)
        console.log($scope.smartTableData);

                })
                .error(function(data) {
                    console.log(data)
                })
        }


      //End sales Sunmary module

    // Countries
$scope.country_arr = new Array("Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla", "Antartica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Ashmore and Cartier Island", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Clipperton Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czeck Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island", "Falkland Islands (Islas Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern and Antarctic Lands", "Gabon", "Gambia, The", "Gaza Strip", "Georgia", "Germany", "Ghana", "Gibraltar", "Glorioso Islands", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City)", "Honduras", "Hong Kong", "Howland Island", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Ireland, Northern", "Israel", "Italy", "Jamaica", "Jan Mayen", "Japan", "Jarvis Island", "Jersey", "Johnston Atoll", "Jordan", "Juan de Nova Island", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Man, Isle of", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Midway Islands", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcaim Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romainia", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Scotland", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and South Sandwich Islands", "Spain", "Spratly Islands", "Sri Lanka", "Sudan", "Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tobago", "Toga", "Tokelau", "Tonga", "Trinidad", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "USA", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wales", "Wallis and Futuna", "West Bank", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe");
$scope.country = {   "type": "select",
    "name": "Country",
    "value": "USA",
    "values": $scope.country_arr
};

var bool=0;

$scope.populatestate= function populateStates(countryElementId, stateElementId) {
    bool++;
    // var country= document.getElementById("country-select")
    var selectedCountryIndex = document.getElementById("country-select").selectedIndex;

    if(bool==1){
        selectedCountryIndex=selectedCountryIndex
    }
    else{
        selectedCountryIndex=selectedCountryIndex+1
    }

    var stateElement = document.getElementById("select-state");

    stateElement.length = 0;
    stateElement.options[0] = new Option('Select State', '');
    stateElement.selectedIndex = 0;

    var state_arr = s_a[selectedCountryIndex].split("|");

    for (var i = 0; i < state_arr.length; i++) {
        stateElement.options[stateElement.length] = new Option(state_arr[i], state_arr[i]);
    }

}
$document.ready(function(){

  $scope.getStates=function(){
  var countryElement = document.getElementById("country-select");
  // countryElement.length = 0;
  countryElement.options[0] = new Option('Select Country', '-1');
  countryElement.selectedIndex = 0;
  for (var i = 0; i < country_arr.length; i++) {
    var z=countryElement.options[countryElement.length] = new Option(country_arr[i], country_arr[i]);
      countryElement.options[countryElement.length]=z
      z.setAttribute("id",country_arr[i]);
      z.setAttribute("ng-value",country_arr[i]);
      //z.setAttribute("ng-option",country_arr[i]);
  }
  document.getElementById("USA").setAttribute("selected","selected");
  // Assigned all countries. Now assign event listener for the states.
$scope.populatestate(countryElement, "select-state");
  if (countryElement) {
      countryElement.onchange = function () {
          $scope.populatestate(countryElement, "select-state");
      };
  }

}

$scope.populatestate();

})


    }
  /** @ngInject */


})();
