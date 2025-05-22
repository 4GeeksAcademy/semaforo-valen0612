import { useState } from "react"


export const Semaforo = () => {
    const [selectColor, setSelectColor] = useState("red")



    return (



        <div className="container text-center ">
            <div className=" palo"></div>
            <div className="traffic-light">

                <div
                    onClick={() => setSelectColor("red")}
                    className={
                        " light red " + (selectColor === "red" ? "glow-red" : "")
                    }></div>

                <div

                    onClick={() => setSelectColor("yellow")}
                    className={
                        " light yellow " + (selectColor === "yellow" ? "glow-yellow" : "")
                    }></div>


                <div
                    onClick={() => setSelectColor("green")}
                    className={
                        " light green " + (selectColor === "green" ? "glow-green" : "")
                    }></div>




            </div >
        </div>

    )
}