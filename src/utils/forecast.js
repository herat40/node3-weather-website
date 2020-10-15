
const request=require('request')
const forecast=(latitude,longitude,callback)=>{

    const url='http://api.weatherstack.com/current?access_key=5975bdabc5312905cef2e9ebd3adbc18&query='+latitude+','+longitude+'&units=f'
    request({url:url,json:true},(error,response)=>{

        if (error){

            callback('Unable to connect to weather service',undefined)
        }
        // else if(response.body.error){
        //     callback('Unable to find location',undefined)
        // }
        else{
            callback(undefined,response.body.current.weather_descriptions[0]+' It is currenlty '+response.body.current.temperature+' and it feels like '+response.body.current.feelslike)
        }

    })


}







module.exports=forecast


