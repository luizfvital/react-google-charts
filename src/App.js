import React from 'react';

import Chart from "react-google-charts";

function App() {
  return (
    <div style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
      
      <div style={{width: '410px', height: '335px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px'}}>
        <h2>Performance de Pagamento</h2>
        <Chart
          width={'100%'}
          height={300}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Pagamentos', 'Quantidade'],
            ['Pago em dia', 0.5],
            ['Atraso até 5 dias', 0.2],
            ['Atraso de 5 a 30 dias', 0.2],
            ['Atraso acima de 30 dias', 0.1],
          ]}
          options={{
            seriesType:"bars",
            legend: {position: 'none'},
            vAxis: {
              viewWindow: {
                min: 0,
                max: 0.6
              },
              format: 'percent'
            },
          }} 
        />

      </div>

      <div style={{width: '410px', height: '335px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px'}}>
      <h2>Receitas</h2>
        <Chart
          width={'100%'}
          height={300}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Receita', 'Tipo'],
            ['Aluguel', 0.7],
            ['Multas', 0.1],
            ['Juros', 0.2],
          ]}
          options={{
            legend: {position: 'bottom'},
           
          }} 
        />

      </div>

      <div style={{width: '410px', height: '335px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2>Status do Contrato</h2>
        <Chart
          chartLanguage="pt_BR"
          width={'100%'}
          height={300}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Status', 'Quitado', 'A vencer'],
            ['Status', 20000, 60000],
          ]}
          options={{
            isStacked: true,
            legend: {position: 'none'},
            vAxis: {
              format: 'currency'
            }
          }} 
        />

      </div>
      
    </div>
  );
}

export default App;
