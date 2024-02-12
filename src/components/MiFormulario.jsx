import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

    
// const validationSchema = Yup.object().shape({
//     nombre : Yup.string()
//             .min(2,"El nombre es muy corto")
//             .max(40, "El nombre es muy largo")
//             .required("Campo obligatorio"),
//     email: Yup.string().email("Email invalido")
//                       .required("Campo obligatorio")
// });

export const MiFormulario = () => {

    const formik = useFormik({
        initialValues:{ 
            nombre: "",
            email: ""
        },
        validationSchema: Yup.object({
            nombre : Yup.string()
            .min(2,"El nombre es muy corto")
            .max(40, "El nombre es muy largo")
            .required("Campo obligatorio"),
    email: Yup.string().email("Email invalido")
                      .required("Campo obligatorio")
        }),
        onSubmit: values => {
            console.log(values)
        }
    });

  return (
    <div>
        <h1>Mi formulario con formik</h1>

        <form onSubmit={formik.handleSubmit}>
            <div className='form-group'>
                <label htmlFor="nombre">Nombre</label>
                <input 
                    type="text" id='nombre' name='nombre' 
                    value={formik.values.nombre}
                    onChange={formik.handleChange}
                />
                <div className='error'>
                    {/* {formik.errors.nombre && formik.touched.nombre ? formik.errors.name : ""}  */}
                    {formik.touched.nombre && formik.errors.nombre ? (
                        <div>{formik.errors.nombre}</div>
                    ) : null}
                </div>
            </div>

            <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input 
                    type="text" id='email' name='email' 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
            </div>

            <input type="submit" value={'Enviar'}/>
        </form>
    </div>
  )
}
