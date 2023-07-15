import * as React from "react";
import { Box } from "@mui/material";
import "./style.css";
import "./script.js";

const View = ({}) => {
  return (
    <Box>
<section>     
<div className="calendar">

<a href="#"><table className="principal-calendar">
        <tr>
         <th colSpan={8}><strong >Junio, 2023</strong></th>
        </tr>
       <tr>
         <th>Hora</th>
         <th>lunes</th>
         <th>martes</th>
         <th>miercoles</th>
         <th>jueves</th>
         <th>viernes</th>
         <th>sabado</th>
         <th>domingo</th>
       </tr>
       <tr>
         <td></td>
         <td>1</td>
         <td>2</td>
         <td>3</td>
         <td>4</td>
         <td>5</td>
         <td>6</td>
         <td>7</td>
    
       </tr>
   
       <tr>
         <td></td>
         <td>8</td>
         <td>9</td>
         <td>10</td>
         <td>11</td>
         <td>12</td>
         <td>13</td>
         <td>14</td>
    
       </tr>
       <tr>
         <td></td>
         <td>15</td>
         <td>16</td>
         <td>17</td>
         <td>18</td>
         <td>19</td>
         <td>20</td>
         <td>21</td>
    
       </tr>
       <tr>
         <td></td>
         <td>22</td>
         <td>23</td>
         <td>24</td>
         <td>25</td>
         <td>26</td>
         <td>27</td>
         <td>28</td>
    
       </tr>
       <tr>
         <td></td>
         <td>29</td>
         <td>30</td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         
       </tr>
     

   </table></a>

   <div className="lateral-calendar">
     <div className="title">
       <h1 className="month-title"></h1>
       <h1 className="month-title2"></h1>

       <div className="icon">


        </div>

     </div>

   
        
        <ul className="week">
         
           <li className="day-name">L</li>
           <li className="day-name">M</li>
           <li className="day-name">Mie</li>
           <li className="day-name">J</li>
           <li className="day-name">V</li>
           <li className="day-name">S</li>
           <li className="day-name">D</li>
        </ul>
        <ul className="days"></ul>
        <div className="line"></div>

        <div className="lateral-box">05-Junio
                <div className="line2"></div>
                <div className="little-box"><p>Terapia Dr. Jose Lopez</p></div>
         </div>
        <div className="line"></div>
        <div className="lateral-box">10-Junio
                <div className="line2"></div>
                <div className="little-box"><p>Terapia Dr. Luis Lopez</p></div>
        </div>
        <div className="line"></div>
        <div className="lateral-box">15-Junio
                <div className="line2"></div>
                <div className="little-box"><p>Terapia Dr. Jose Lopez</p></div>
        </div>
        <div className="line"></div>

</div>        
</div>
</section>

    </Box>
  );
};

export default View;
