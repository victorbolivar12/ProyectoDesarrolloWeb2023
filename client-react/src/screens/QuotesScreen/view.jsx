import * as React from "react";
import { Box } from "@mui/material";
import "./style.css";



const View = ({}) => {
  return (
    <Box>
      
  <section className="rigth-form">
  <div className="figure-main">
  
          

    </div>
        
    <form action="">
        <h2 className="title-register">Cuidamos de ti y de los tuyos</h2>
            <p>Me estoy registrando por</p>
        <div className="form-register-radio">

            <div className="radio">
                <input type="radio" id="register" value="Mi mismo" checked />
                <label>Mi mismo</label>  
            </div>
            <div className="radio">
                <input type="radio" id="register" value="Mi mismo" />
                <label >Otra persona</label>  
            </div>
        </div>
        <div className="form-register">
           
            <label >Nombre completo del paciente</label>  
            <div className="Name">
                <input type="text" id="registerName" placeholder="Ingrese nombre completo" />
   
            </div>
        
        </div>
        <div className="form-register">
           
            <label >Numero de telefono</label>
            <div className="tlf">
                <input type="numeric" id="registerTlf" placeholder="Ingrese su numero telefonico" />
                <button >Verificar</button>

            </div>  
            
        </div>

        <div className="form-register">
           
            <label >Motivo de consulta</label>
            <div className="id">
                <input type="text"  placeholder="motivo de consulta" />

            </div>  
            
        </div>
        <div className="btnRegister">
           <button>Hacer solicitud</button>
          
        </div>
        
    </form>
 
</section>       

    </Box>
  );
};

export default View;
