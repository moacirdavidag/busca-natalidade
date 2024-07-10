import { Box, Stack, Typography } from "@mui/material";
import EChartsReact from "echarts-for-react";
import React, { useEffect, useState } from "react";
import { apiDadosNatalidade } from "../../services/api";
import { useTheme } from "../../context/ThemeContext";

const Charts = ({ selectedCounty }) => {
  const [urbanPopulation, setUrbanPopulation] = useState(0);
  const [ruralPopulation, setRuralPopulation] = useState(0);
  const [maritalStatusData, setMaritalStatusData] = useState([]);
  const [data, setData] = useState([]);

  const { theme } = useTheme();

  const handleGetAPIData = async () => {
    try {
      if (selectedCounty) {
        await apiDadosNatalidade
          .get(
            `?localidades=N6[${selectedCounty.id}]&classificacao=1[1,2]|1598[99812,99813,99814,99815]|12232[0]
              `
          )
          .then((response) => {
            if (response.status === 200) {
              setData(response.data);
            }
          });
      }
    } catch (error) {
      console.log(`Erro ao obter os dados da API: ${error.message}`);
    }
  };



  useEffect(() => {
    handleGetAPIData();
    const fetchData = async () => {
      if (data && data.length > 0) {
        let urbanCount = 0;
        let ruralCount = 0;
        let maritalStatusCounts = {};

        data.forEach((item) => {
          item.resultados.forEach((result) => {
            const population = parseInt(result.series[0].serie["2010"]);
            const maritalStatus = Object.values(
              result.classificacoes.find(
                (cl) => cl.nome === "Natureza da união conjugal"
              ).categoria
            )[0];

            if (
              result.classificacoes.some((cl) => cl.categoria["1"] === "Urbana")
            ) {
              urbanCount += population;
            } else if (
              result.classificacoes.some((cl) => cl.categoria["2"] === "Rural")
            ) {
              ruralCount += population;
            }

            if (!maritalStatusCounts[maritalStatus]) {
              maritalStatusCounts[maritalStatus] = 0;
            }
            maritalStatusCounts[maritalStatus] += population;
          });
        });

        setUrbanPopulation(urbanCount);
        setRuralPopulation(ruralCount);

        const maritalStatusData = Object.entries(maritalStatusCounts).map(
          ([status, count]) => ({
            name: status,
            value: count,
          })
        );
        setMaritalStatusData(maritalStatusData);
      }
    };

    fetchData();
  }, [selectedCounty, data]);

  const pieOption = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["Zona Urbana", "Zona Rural"],
      textStyle: {
        color: theme.colors.text,
      },
    },
    series: [
      {
        name: "Distribuição",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: urbanPopulation, name: "Zona Urbana", itemStyle: { color: theme.colors.darkblue } },
          { value: ruralPopulation, name: "Zona Rural", itemStyle: { color: theme.colors.middleblue } }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        label: {
          show: true,
          formatter: "{b}: {d}%",
          color: theme.colors.text,
        },
      },
    ],
  };

  const barOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["Número de Pessoas"],
      textStyle: {
        color: theme.colors.text,
      },
    },
    xAxis: {
      type: "category",
      data: maritalStatusData.map((item) => item.name),
      axisLabel: {
        color: theme.colors.text,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: theme.colors.text,
      },
    },
    series: [
      {
        name: "Número de Pessoas",
        type: "bar",
        data: maritalStatusData.map((item) => item.value),
        itemStyle: {
          color: theme.colors.darkblue,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "100%",
        p: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction={"column"} gap={2}>
        <Typography
          fontWeight={"bold"}
          color={theme.colors.text}
          sx={{ my: 1 }}
        >
          Nascidos por tipo de domicílio
        </Typography>
        <EChartsReact option={pieOption} />
        <Typography
          fontWeight={"bold"}
          color={theme.colors.text}
          sx={{ my: 1 }}
        >
          Nascidos por tipo de união conjugal
        </Typography>
        <EChartsReact option={barOption} />
      </Stack>
    </Box>
  );
};

export default Charts;
