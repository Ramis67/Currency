import React, { useState, useEffect } from "react";
import useFetch from "./useFetch.js";
import Loader from "./Loader.js";
import Item from "./Item.js";

export default function Currency() {
  const [items, setItems] = useState([]);
const { get, loader, /*getXML*/ } = useFetch();

  useEffect(() => {
    get("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((data) => {
        if (data) {
          setItems(data);
          //   let currency = Object.entries(data);
          //   console.log(currency);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  /*useEffect(() => {
    getXML("https://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=02/03/2022&date_req2=22/03/2022&VAL_NM_RQ=R01235")
      .then((data) => {
        if (data) {
          console.log(data)
          let convert = require('xml-js');
          let xml = data;
          let result1 = convert.xml2json(xml, {compact: true, spaces: 4});
          let result2 = convert.xml2json(xml, {compact: false, spaces: 4});
          console.log(result1, result2);
        }
      })
      .catch((error) => console.error(error));
  }, []);*/

  if (items) {
    return (
      <>
        {loader && <Loader />}
        <div>
          <Item info={items} />
        </div>
      </>
    );
  }
}
