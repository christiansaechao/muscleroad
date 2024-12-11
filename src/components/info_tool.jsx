import React, { useEffect, useState } from 'react';
import * as cheerio from 'cheerio';
import './info_tools.scss';

const InfoTool = () => {
    const [sku, setSku] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("OER");
    const [applications, setApplications] = useState("OER");
    const [address, setAddress] = useState("OER");

    const FilterInformation = (e) => {
        const $ = cheerio.load(e.target.value);
        setTitle($('title').text());
        setSku($('.single-info-list').find('li').first().text());
        setDescription($('.product-description-content').find('p').text());
        setApplications($('.product-description-content').find('li').text());
    }

    return (
        <div className="tool-container">
            <h2>Insert HTML here</h2>
            <textarea rows="4" cols="50" onChange={(e) => FilterInformation(e)}></textarea>
            <div className="info-sections">
                <div className="section sku" onClick={() => navigator.clipboard.writeText(sku)}><b>SKU:</b> {sku}</div>
                <div className="section title" onClick={() => navigator.clipboard.writeText(title)}><b>Title:</b> {title}</div>
                <div className="section description" onClick={() => navigator.clipboard.writeText(description)}><b>Description:</b> {description}</div>
                <div className="section brand" onClick={() => navigator.clipboard.writeText(brand)}><b>Brand:</b> {brand}</div>
                <div className="section applications" onClick={() => navigator.clipboard.writeText(applications)}><b>Model Applications:</b> {applications}</div>
            </div>
        </div>
  )
}

export default InfoTool;