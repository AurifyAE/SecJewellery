import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
const clockConfig = [
  {
    key: "hongkong",
    label: "HONG KONG",
    timeZone: "Asia/Hong_Kong",
    flag: "/images/hongkong.png",
  },
  {
    key: "dubai",
    label: "DUBAI",
    timeZone: "Asia/Dubai",
    flag: "/images/uae.png",
  },
  {
    key: "london",
    label: "LONDON",
    timeZone: "Europe/London",
    flag: "/images/uk.png",
  },
  {
    key: "chicago",
    label: "CHICAGO",
    timeZone: "America/Chicago", // ✅ correct timezone
    flag: "/images/usa.png",
  },
];

const WorldClockHorizontal = () => {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };

      const updatedTimes = {};

      clockConfig.forEach((clock) => {
        updatedTimes[clock.key] = now.toLocaleTimeString("en-US", {
          ...timeOptions,
          timeZone: clock.timeZone,
        });
      });

      setTimes(updatedTimes);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        alignItems: "center",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "1vw",
        padding: "0vw 2vw",
        // backdropFilter: "blur(2px)",
        mb: "1vw",

        width: "100%",
      }}
    >
      {clockConfig.map((clock) => (
        <Box
          key={clock.key}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",

            gap: {
              xs: "10px",
              lg: ".5vw",
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: "30px",
                lg: "3vw",
              },
            }}
          >
            <img
              src={clock.flag}
              alt={clock.label}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  lg: "1vw",
                },
                fontWeight: 500,
                color: "#fff",
              }}
            >
              {clock.label}
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  lg: "1vw",
                },
                color: "#fff",
              }}
            >
              {times[clock.key] || "--:-- AM"}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default WorldClockHorizontal;
