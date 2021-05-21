# Primera version de tateti

Primera version de una aplicacion React de tateti comunicandosé con una api-rest. Link del server django-rest: https://github.com/martinteppa/TATETIserver. al correr los npm commands, hay que registrar dos usuarios distintos, y uno tiene que loguearse en pestaña incognito. Luego uno tiene que crear partida. El segundo debe ver el listado de partidas disponibles y meterse. Toda la resolucion del tateti está en el backend

## Dudas que me fueron surgiendo:

Mas alla de que si lo llego a encarar nuevamente haría otras cosas distintas, me surgieron varias dudas que no he tenido tiempo de respondermelas:

### * Sistema de autenticacion del lado del cliente:

Lo he resuelto basicamente almacenando el token del usuario en localStorage. Pero obviamente es muy insegura dicha estrategia. Que estrategias son las mas optimas en React?

### * Sockets:

La actualización en vivo del tablero del tateti la hice con UseEffect y setTimeOut, cada dos segundos metiendo request GET al tablero. Queria saber si no era mejor encararlo con sockets y como. Estuve investigando pero ya era meterme en otra cosa que me iba a demorar otra tarde. 
