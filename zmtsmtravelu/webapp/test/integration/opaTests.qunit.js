sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zmtsmtravelu/test/integration/FirstJourney',
		'zmtsmtravelu/test/integration/pages/TravelList',
		'zmtsmtravelu/test/integration/pages/TravelObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zmtsmtravelu') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage
                }
            },
            opaJourney.run
        );
    }
);