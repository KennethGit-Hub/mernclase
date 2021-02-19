import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto'
import ListadoProyectos from '../proyectos/ListadoProyectos'

const Sidebar = () => {
    return (  
        <aside>
            <h1>MERN<span>Tasks</span></h1>

            <NuevoProyecto/>

            <div className="proyectos">
                <h3>Tus Proyectos</h3>

                <ListadoProyectos/>
            </div>

        </aside>);
}
 
export default Sidebar;