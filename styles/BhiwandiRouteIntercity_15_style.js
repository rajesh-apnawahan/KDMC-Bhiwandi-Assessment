var size = 0;
var placement = 'point';
function categories_BhiwandiRouteIntercity_15(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Bhiwandi Railway Station to Mira Road Station (E)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(104,126,217,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7.068}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bhiwandi Stn to Bombay Central':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(81,214,221,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7.068}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bhiwandi to Kalyan':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(232,93,190,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7.068}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bhiwandi To Thane':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(70,210,110,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7.068}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Shivaji Chowk to Padgha':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(221,46,36,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7.068}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Shivaji Chowk to Sanpada':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(177,109,232,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7.068}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Shivaji Chowk to Virar':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(152,222,95,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7.068}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(211,178,46,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7.068}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_BhiwandiRouteIntercity_15 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Name");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("Name") !== null) {
        labelText = String(feature.get("Name"));
    }
    
var style = categories_BhiwandiRouteIntercity_15(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
