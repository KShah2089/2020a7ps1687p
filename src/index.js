// set up the map
// ... on load?
var map=new MapmyIndia.Map("map",{ center:[19.08, 72.88],zoomControl: true,hybrid:true });
L.marker([19.08, 72.88]).addTo(map);
map.invalidateSize();

function handleIt()
{
    var address = $("#ip-address").val();
    alert(address);
    $("#op").text("you've entered: " + address);
}