export interface WebData{

    icon:string;
    tipo:number;
    secciones:{

        home:{
            navbar:string;
            logo:string;
            imagen:string;
            titulo:string;
        }

        about:{
            navbar:string;
            titulo:string;
            descripcion:string;
            imagen:string;
            Sdescripcion:string;
            caracteristicas:Array<{imagen:string,titulo:string,descripcion:string}>;
            nosotros:Array<{imagen:string,titulo:string,descripcion:string}>;
        }

        servicios:{
            navbar:string;
            titulo:string;
            descripcion:string;
            servicio:Array<{imagen:string,titulo:string,descripcion:string}>;
        }

        banner:{
            titulo:string;
            descripcion:string;
            cuadroInfo:Array<{imagen:string,titulo:string,descripcion:string}>;
        }

        portafolio:{
            navbar:string;
            titulo:string;
            imagenes:Array<{imagen:string,titulo:string,descripcion:string}>;
        }

        contacto:{
            navbar:string;
            titulo:string;
            telefono:string;
            email:string;
            lugar:string;
        }
    }
}