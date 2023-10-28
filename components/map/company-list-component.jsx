/* eslint-disable @next/next/no-img-element */
"use client";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { CompanyClass } from "@/types/company";
import { ModuleRegistry } from "@ag-grid-community/core";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoPlaceholder from "@/public/images/logo-placeholder-30.png";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const logoRenderer = (params, slug) => {
  if (params.value === null || params.value === "") {
    return (
      <>
        <div
          className="mt-2"
          style={{
            width: "30px",
            height: "30px",
            display: "flex",
            position: "relative",
            alignItems: "center",
          }}
        >
          <Link href={`/map/company/${slug}`}>
            <Image
              src={logoPlaceholder}
              alt={`missing logo for ${slug}`}
              style={{ objectFit: "scale-down" }}
            />
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <div
        className="mt-2"
        style={{
          width: "30px",
          height: "30px",
          display: "flex",
          position: "relative",
          alignItems: "center",
        }}
      >
        <Link href={`/map/company/${slug}`}>
          <img
            src={params.value}
            alt={`logo for ${slug}`}
            style={{ objectFit: "scale-down" }}
          />
        </Link>
      </div>
    </>
  );
};

const textLinkRenderer = (params, slug) => {
  return (
    <>
      <Link href={`/map/company/${slug}`}>{params.value}</Link>
    </>
  );
};

export function CompanyListComponent({ companies: data }) {
  // data is a stringified JSON array of company objects
  let companies = data.map((company) => {
    return new CompanyClass(JSON.parse(company));
  });

  const [rowData] = useState(companies);
  const [columnDefs] = useState([
    {
      field: "Logo",
      headerName: "",
      sortable: false,
      filter: false,
      resizable: false,
      width: 75,
      cellRenderer: (params) => logoRenderer(params, params.data.Slug),
    },
    {
      field: "Name",
      sortable: true,
      filter: true,
      width: 150,
      cellRenderer: (params) => textLinkRenderer(params, params.data.Slug),
    },
    { field: "CloudType", sortable: true, filter: true, width: 125 },
    { field: "TagLine", filter: false, width: 350 },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 800, width: 750 }}>
      <AgGridReact
        pagination // This prop enables pagination for the table
        paginationPageSize={16} // This prop specifies how many items to show per page
        animateRows="true"
        rowData={rowData}
        columnDefs={columnDefs}
        domLayout="autoHeight"
      ></AgGridReact>
    </div>
  );
}
