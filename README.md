# PetManager - Gestión de Promociones y Ofertas

Este proyecto es un módulo del sistema **PetManager**, orientado a la **Gestión de Promociones y Ofertas** en tiendas de mascotas. Ha sido desarrollado con [Next.js](https://nextjs.org) y permite **crear, editar y visualizar promociones activas** de forma eficiente, segura y escalable.

Está completamente integrado con el backend mediante **GraphQL** y **Apollo Client**, y se encuentra **desplegado en Vercel**.

---

## 🐾 Descripción del módulo

El módulo permite crear, administrar y monitorear promociones comerciales con el objetivo de:

- 📈 **Incrementar las ventas** mediante descuentos estratégicos.
- 🎯 **Optimizar campañas promocionales**.
- 🧩 **Personalizar la experiencia del cliente**.

---

## ✅ Funcionalidades implementadas

- 🔒 **Autenticación y Autorización**  
  Control de acceso para garantizar que solo usuarios autorizados puedan gestionar promociones.

- 📝 **Creación de Promociones (CRUD)**  
  Permite definir promociones para productos o categorías, con fechas de inicio y fin.

- ✏️ **Edición de Promociones (CRUD)**  
  Posibilidad de modificar promociones existentes: productos, porcentajes y vigencia.

- 📊 **Dashboard de Promociones**  
  Visualización de promociones activas.  
  > ⚠️ **Nota:** Aún no se refleja el impacto en ventas ni en inventario.

---

## 🚧 Funcionalidades no implementadas aún

- 📦 **Gestión de Inventario**  
  No hay integración con el inventario de productos.Entonces los del back, crearon un enpoint de productos. 

- 📢 **Notificaciones automáticas**  
  No se han implementado notificaciones por correo o mensaje de texto.

---

## 🛠️ Tecnologías

- **Frontend:** [Next.js](https://nextjs.org)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Autenticación:** Middleware de Next.js
- **Consumo de datos:** [Apollo Client](https://www.apollographql.com/docs/react/) + GraphQL
- **Backend:** Integrado con API GraphQL personalizada
- **Despliegue:** [Vercel](https://vercel.com)

---


## 🌐 Despliegue

Esta aplicación está desplegada en Vercel, la plataforma oficial de Next.js.


```
https://p5-f5-pet-store-web.vercel.app
```


## 👥 Equipo de Desarrollo

| Nombre completo                      | Rol(es)                                |
|-------------------------------------|----------------------------------------|
| CASTAÑEDA JIMÉNEZ JOHN DAVID        | AyD 1                                  |
| RENDÓN RIVERA SANTIAGO              | AyD 1                                  |
| LÓPEZ RESTREPO DANIEL               | AyD 2                                  |
| MOLINA MESA MICHAEL                 | AyD 2                                  |
| SOTO ARIAS LUISA MARÍA              | AyD 2                                  |
| BLANDÓN RINCÓN ROBERT ALEXANDER     | Bases de Datos, Arquitectura           |
| CORREA ROLDÁN ESTEBAN               | Bases de Datos, Arquitectura           |
| MUÑETÓN HERRERA JUAN DIEGO          | Bases de Datos, Arquitectura           |
| BALLESTERO ORTIZ VALERIA            | Calidad de Software                    |
| RUIZ PALACIO SEBASTIÁN              | Calidad de Software                    |
| PULGARÍN JIMÉNEZ DIEGO FERNEY       | Gestión de Proyectos                   |
| TABAREZ CÁRDENAS MARITZA            | Gestión de Proyectos, Ingeniería Web   |
