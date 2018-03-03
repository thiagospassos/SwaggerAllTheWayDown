import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { SampleDataService, WeatherForecast } from '../../core/services/api.client.generated';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[] | null = [];

    constructor(sampleDataService: SampleDataService) {
        sampleDataService.weatherForecasts().subscribe(fc => {
            this.forecasts = fc;
        });
    }
}