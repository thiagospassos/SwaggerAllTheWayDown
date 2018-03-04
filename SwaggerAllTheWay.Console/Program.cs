using System;

namespace SwaggerAllTheWay.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            var client = new Client.SampleDataClient { BaseUrl = "http://localhost:5000" };
            var forecasts = client.WeatherForecastsAsync().GetAwaiter().GetResult();

            foreach (var forecast in forecasts)
            {
                System.Console.WriteLine($"{forecast.Summary} : {forecast.TemperatureC}c");
            }
        }
    }
}
