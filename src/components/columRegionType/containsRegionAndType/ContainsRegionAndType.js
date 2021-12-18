import React from "react";
import Region from "../region/Region";
import SelectType from "../selectType/SelectType";

function ContainsRegionAndType(){

    return(
        <div className="colum">
            <Region />
            <SelectType />
        </div>
    );
}

export default ContainsRegionAndType;