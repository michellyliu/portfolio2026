import { useEffect, useState } from 'react'

type Weather = {
  temp: number
  icon: string
}

export default function NYCWeather() {
  const [weather, setWeather] = useState<Weather | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true'
        )
        const data = await res.json()

        const tempC = data.current_weather.temperature
        const tempF = Math.round((tempC * 9) / 5 + 32)

        const code = data.current_weather.weathercode

        const icon =
          code < 3 ? '☀︎' :
          code < 50 ? '☁︎' :
          code < 70 ? '☂︎' :
          '❄︎'

        setWeather({ temp: tempF, icon })
      } catch (err) {
        console.error('Weather fetch failed', err)
      }
    }

    fetchWeather()
  }, [])

  if (!weather) return null

  return (
    <span>
    {weather.icon} {weather.temp}°F
    </span>
  )
}
