import React from "react";
import ReactTooltip from "react-tooltip";
import { v4 } from "uuid";

export default function Item(props) {
  const { info } = props;

  return (
    <>
      {Object.entries(info).map((item) => {
        if (item[0] !== "Valute" && item[0] !== "PreviousURL") {
          return (
            <tr key={v4()}>
              <td>{item[0]}</td>
              <td className="date">{new Date(item[1]).toLocaleDateString() }</td>
            </tr>
          );
        } else if (item[0] !== "PreviousURL") {
          return (
            <>
              <tr key={v4()}>
                <td><div className="wrapper" key={v4()}>Обозначение</div></td>
                <td className="cost"><div className="wrapper" key={v4()}>Стоимость</div></td>
                <td><div className="wrapper" key={v4()}>Изменение, %</div></td>
              </tr>
              {Object.entries(item[1]).map((valute) => {
                return (
                  <>
                    <ul data-tip={`${valute[1]["Name"]}`} key={v4()}>
                      <ReactTooltip type="success" place="bottom" />
                      <li>
                        <div className="wrapper currencyName">{valute[0]}</div>
                      </li>
                      <li className="currency">
                        <div className="wrapper currencyCost">{valute[1]["Value"].toFixed(3)}</div>  
                      </li>
                      <li>
                        <div className="wrapper currencyCost">{(((valute[1]["Value"] - valute[1]["Previous"]) /
                            valute[1]["Value"]) *
                          100
                        ).toFixed(1)}</div>
                      </li>
                    </ul>
                  </>
                );
              })}
            </> 
          );
        }
      })}
    </>
  );
}
