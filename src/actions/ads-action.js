import { INCREMENT_ADS_COUNTER } from '../types';
//import { AdMobInterstitial } from 'react-native-admob';

export const showAds = (counter) => {
    if(counter === 0){
        //displayAd();
    }
    return {
        type: INCREMENT_ADS_COUNTER
    };
}

const displayAd = () => {
    // Display an interstitial
    AdMobInterstitial.setAdUnitID(
        'ca-app-pub-6174585484194945/1170909428',
    );
    //AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.requestAd().then(() => {
        AdMobInterstitial.showAd();
        //dispatch({type: INCREMENT_ADS_COUNTER});
    });
    
}