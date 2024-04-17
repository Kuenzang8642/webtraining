// Load the Map and MapView modules
require([
    "esri/WebMap",
    "esri/views/MapView",
    "esri/config",
    "esri/widgets/Legend",
    "esri/widgets/ScaleBar",
    "esri/widgets/Home",
    "esri/widgets/Expand",
    "esri/widgets/BasemapGallery",
    "esri/widgets/LayerList"
],
    function (WebMap, MapView, esriConfig, Legend, ScaleBar, Home, Expand, BasemapGallery, LayerList) {
        esriConfig.portalUrl = "https://cgi.nlcs.gov.bt/portal";

        // Create a Map instance
        const myMap = new WebMap({
            portalItem: { // autocasts as new PortalItem()
                id: "c8ec5ca09fb14979a57741c33d6ccb62"
            }
        });
        // Create a MapView instance (for 2D viewing) and reference the map instance
        const view = new MapView({
            map: myMap,
            container: "viewDiv",
        });

        const legend = new Legend({
            view: view,
            container: "legend-container"
        });

        const layer = new LayerList({
            view: view,
            container: "layer-list",
        });


        let scaleBar = new ScaleBar({
            view: view,
            unit: "metric"
        });
        view.ui.add(scaleBar, {
            position: "bottom-right"


        });

        let homeWidget = new Home({
            view: view
        });

        // adds the home widget to the top left corner of the MapView
        view.ui.add(homeWidget, "top-left");

        // MODALS //
        const appDetailModalBtn = document.getElementById("app-details-action");
        const appDetailModalEl = document.getElementById("app-details-modal");
        appDetailModalBtn.addEventListener("click", () => { appDetailModalEl.open = !appDetailModalEl.open });

    });
