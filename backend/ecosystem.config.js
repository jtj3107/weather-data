require('dotenv').config(); 

module.exports = {
    apps: [
        {
            name: "weather_backend",
            script: "./dist/src/main.js",
            env: {
                NODE_ENV: "production",
                DBPORT: process.env.DBPORT,
                DATABASE: process.env.DATABASE,
                DBPASSWORD: process.env.DBPASSWORD,
                DBUSER: process.env.DBUSER,
                REACT_APP_KAKAO_MAP_APP_KEY: process.env.REACT_APP_KAKAO_MAP_APP_KEY
            }
        }
    ]
};