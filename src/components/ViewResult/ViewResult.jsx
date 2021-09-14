import React from 'react';



const ViewResult = (props) => {
    const style =  {
        padding: "15px",
        color: "#ffffff",
        fontSize: "30px",
        width: "95%",
        height: "90px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontWeight: 900,
        fontFamily: 'Roboto Condensed'
      }


    return (
        <>
            <div style={style}className='valor'>{props.resultView}</div>
        </>
    );
}

export default ViewResult;
